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

const SpanFlow = () => {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { selectedTrace } = useContext(GlobalContext);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );

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
          label: span.name,
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
    setNodes([]);
    setEdges([]);
    if (Object.keys(selectedTrace).length !== 0) {
      const orderedSpans = sortingParentChildOrder(selectedTrace.spans);
      dynamicNodeCreation(orderedSpans);
    }
  }, [selectedTrace]);

  return (
    <div>
      {Object.keys(selectedTrace).length === 0 ? (
        <div>
          <Typography variant="h4" sx={{ textAlign: "center", marginTop: "50%" }} >Please Select any one of the Trace from the list!</Typography>
        </div>
      ) :
        <div>
          <div style={{ padding: "5px" }} >
            <Typography variant="h6" >Details for Selected Trace </Typography>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", textAlign: "center", margin: "10px" }} >
              <Typography variant="h6" >ServiceName <br /><Typography variant="h7" >{selectedTrace.serviceName}</Typography></Typography>
              <Typography variant="h6" >SpanCount <br /><Typography variant="h7" >{selectedTrace.spanCount}</Typography></Typography>
            </div>
          </div>
          <div style={{ height: "450px", width: "100%", border: "solid #000 1px", padding: 10 }}>
            <ReactFlow
              nodes={nodes}
              edges={edges}
              defaultEdgeOptions={edgeOptions}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
            >
              <Background />
              <Controls />
            </ReactFlow>
          </div>
          <div>
            <SpanInfo />
          </div>
        </div>
      }
    </div>
  );
};

export default SpanFlow;
