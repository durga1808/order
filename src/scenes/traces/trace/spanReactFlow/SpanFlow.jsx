import React, { useCallback, useEffect, useState } from "react";
import ReactFlow, {
  Background,
  Controls,
  applyEdgeChanges,
  applyNodeChanges,
} from "reactflow";
import "reactflow/dist/style.css";
import { spanData } from "../../../../global/MockData/SpanData";
import "./SpanFlow.css";
import { Card, Typography, useTheme } from "@mui/material";
import { tokens } from "../../../../theme";
import { useContext } from "react";
import { GlobalContext } from "../../../../global/globalContext/GlobalContext";
import SpanInfo from "./SpanInfo";
import { useRef } from "react";
import Loading from "../../../../global/Loading/Loading";

const SpanFlow = () => {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  const [orderedSpans, setOrderedSpans] = useState([]);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { selectedTrace, setSelectedSpan, traceLoading } = useContext(GlobalContext);
  const [loading, setLoading] = useState(false);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );

  const sectionRef = useRef(null);

  // Function to scroll to the section
  const scrollToSection = () => {
    // Use the ref to access the target element
    if (sectionRef.current) {
      // Scroll to the target element
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // const onNodeClick = useCallback((event, node) => {
  //   // Find the selected span data based on the clicked node
  //   const spanId = node.id.replace("span-", "");
  //   const selectedSpanData = orderedSpans.find((span) => span.spanId === spanId);

  //   // Find child spans count
  //   const childSpansCount = orderedSpans.filter(
  //     (span) => span.parentSpanId === spanId
  //   ).length;

  //   // Append childSpansCount to selected span data
  //   const updatedSelectedSpanData = {
  //     ...selectedSpanData,
  //     childSpansCount,
  //   };

  //   // Update the selected span in state
  //   setSelectedSpan(updatedSelectedSpanData);
  //   scrollToSection();
  // }, [setSelectedSpan, orderedSpans]);

  const calculateDurationInMs = (startTimeUnix, endTimeUnix) => {
    const startTimeUnixNano = parseInt(startTimeUnix, 10);
    const endTimeUnixNano = parseInt(endTimeUnix, 10);

    const startTime = new Date(startTimeUnixNano / 1000000); // Convert nanoseconds to milliseconds
    const endTime = new Date(endTimeUnixNano / 1000000); // Convert nanoseconds to milliseconds

    // Calculate the duration in milliseconds
    const duration = endTime - startTime;

    return duration;
  }

  const onNodeClick = useCallback((event, node) => {
    // Find the selected span data based on the clicked node
    const spanId = node.id.replace("span-", "");
    const selectedSpanData = orderedSpans.find((span) => span.spanId === spanId);

    const startTimeUnixNano = parseInt(selectedSpanData.startTimeUnixNano, 10);
    const endTimeUnixNano = parseInt(selectedSpanData.endTimeUnixNano, 10);

    const startTime = new Date(startTimeUnixNano / 1000000); // Convert nanoseconds to milliseconds
    const endTime = new Date(endTimeUnixNano / 1000000); // Convert nanoseconds to milliseconds

    // Calculate the duration in milliseconds
    const duration = endTime - startTime;

    // Append childSpansCount and duration to selected span data
    const updatedSelectedSpanData = {
      ...selectedSpanData,
      childSpansCount: orderedSpans.filter(
        (span) => span.parentSpanId === spanId
      ).length,
      duration,
    };

    // Update the selected span in state
    setSelectedSpan(updatedSelectedSpanData);
    scrollToSection();
  }, [setSelectedSpan, orderedSpans]);



  const edgeOptions = {
    animated: true,
  };

  const sortingParentChildOrder = (spanData) => {
    // Parse the provided span data
    const spans = spanData;

    // Create a dictionary to map parent spans to their child spans
    const spanTree = {};

    // Create a function to recursively build the parent-child relationship
    const buildSpanTree = (span) => {
      const spanId = span.spanId;
      const parentId = span.parentSpanId;
      if (parentId) {
        if (!spanTree[parentId]) {
          spanTree[parentId] = [];
        }
        spanTree[parentId].push(span);
      } else {
        if (!spanTree[spanId]) {
          spanTree[spanId] = [];
        }
        for (const child of spanTree[spanId]) {
          buildSpanTree(child);
        }
      }
    };

    // Build the parent-child relationship
    for (const span of spans) {
      buildSpanTree(span);
    }

    // Sort the spans based on "spanId" and "parentSpanId"
    const sortedSpans = [];

    const sortSpans = (spanId) => {
      sortedSpans.push(spanId);
      for (const childSpan of spanTree[spanId] || []) {
        sortSpans(childSpan.spanId);
      }
    };

    // Find the root spans (spans without parent)
    const rootSpans = spans.filter((span) => !span.parentSpanId);

    // Sort the spans for each root span
    for (const rootSpan of rootSpans) {
      sortSpans(rootSpan.spanId);
    }

    // Create the ordered span data
    const orderedSpanData = [];

    // Helper function to add spans in parent-child order
    const addSpansInOrder = (spanId) => {
      orderedSpanData.push(spans.find((span) => span.spanId === spanId));
      for (const childSpan of spanTree[spanId] || []) {
        addSpansInOrder(childSpan.spanId);
      }
    };

    // Add spans to the orderedSpanData in parent-child order
    for (const rootSpan of rootSpans) {
      addSpansInOrder(rootSpan.spanId);
    }

    // Set the ordered spans in the state
    return orderedSpanData;
  };

  const dynamicNodeCreation = (orderedSpans) => {
    // Process the span data and generate nodes and edges
    const spanIdToNodeId = {};
    const newNodes = [];
    const newEdges = [];

    // Calculate the node positions dynamically
    let nodeSpacingX = 100; // Adjust this value to control horizontal spacing
    let nodeSpacingY = 100; // Adjust this value to control vertical spacing

    orderedSpans.forEach((span, index) => {
      const nodeId = `span-${span.spanId}`;
      let nodeX = index * nodeSpacingX; // Adjust x position based on index
      let nodeY = index * nodeSpacingY; // Set a fixed y position

      const node = {
        id: nodeId,
        type:
          index === 0
            ? "input"
            : index === orderedSpans.length - 1
              ? "output"
              : "default",
        data: {
          label: (
            <>
              {span.name} <strong style={{color:colors.redAccent[500]}} >({calculateDurationInMs(span.startTimeUnixNano, span.endTimeUnixNano)}ms)</strong>
            </>
          )
        },
        position: { x: nodeX, y: nodeY },
        className: "nodeStyle",
      };

      newNodes.push(node);
      spanIdToNodeId[span.spanId] = nodeId;

      if (span.parentSpanId) {
        const edge = {
          id: `edge-${span.spanId}`,
          source: spanIdToNodeId[span.parentSpanId],
          target: nodeId,
        };

        newEdges.push(edge);
      }
    });

    // Update the React Flow nodes and edges
    setNodes((prevNodes) => [...prevNodes, ...newNodes]);
    setEdges((prevEdges) => [...prevEdges, ...newEdges]);
  }

  useEffect(() => {
    // setLoading(true);
    setNodes([]);
    setEdges([]);
    setSelectedSpan({ "attributes": [] });
    if (Object.keys(selectedTrace).length !== 0) {
      // const orderedSpansData = sortingParentChildOrder(selectedTrace.spans);
      setOrderedSpans(selectedTrace.spans);
      dynamicNodeCreation(selectedTrace.spans);

    }
    // setLoading(false);
  }, [selectedTrace, setSelectedSpan]);

  return (
    <>
      {traceLoading ? (<Loading />) : (
        <div style={{ maxHeight: Object.keys(selectedTrace).length ? "calc(93vh - 70px)" : null }} >
          {Object.keys(selectedTrace).length === 0 ? (
            <div>
              <Typography variant="h5" sx={{ textAlign: "center", marginTop: "60%" }} >Please Select any one of the Trace from the list to visualize!</Typography>
            </div>
          ) :
            <div>
              <div style={{ padding: "5px" }} >
                <Typography variant="h5" fontWeight="600" >Details for Selected Trace </Typography>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", textAlign: "center", margin: "10px" }} >
                  <Typography variant="h6"  >ServiceName <br /><Typography variant="h7" >{selectedTrace.serviceName}</Typography></Typography>
                  <Typography variant="h6" >SpanCount <br /><Typography variant="h7" >{selectedTrace.spanCount}</Typography></Typography>
                </div>
              </div>
              <div style={{ height: "450px", width: "100%", border: "solid #000 1px", padding: 10 }}>
                <ReactFlow
                  nodes={nodes}
                  edges={edges}
                  onNodeClick={onNodeClick}
                  defaultEdgeOptions={edgeOptions}
                  onNodesChange={onNodesChange}
                  onEdgesChange={onEdgesChange}
                >
                  <Background />
                  <Controls />
                </ReactFlow>
              </div>
              <div id="span-info" ref={sectionRef} >
                <SpanInfo />
              </div>
            </div>
          }
        </div>
      )}
    </>
  );
};

export default SpanFlow;
