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
import {
  Box,
  Card,
  IconButton,
  Paper,
  Popover,
  Typography,
  useTheme,
} from "@mui/material";
import { tokens } from "../../../../theme";
import { useContext } from "react";
import { GlobalContext } from "../../../../global/globalContext/GlobalContext";
import SpanInfo from "./SpanInfo";
import { useRef } from "react";
import Loading from "../../../../global/Loading/Loading";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";

const SpanFlow = () => {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  const [orderedSpans, setOrderedSpans] = useState([]);
  const [isCardVisible, setIsCardVisible] = useState(false);

  console.log("isCardVisible", isCardVisible);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { selectedTrace, setSelectedSpan, traceLoading } =
    useContext(GlobalContext);
  console.log("stscode", selectedTrace);
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
  };

  const onNodeClick = useCallback(
    (event, node) => {
      // Find the selected span data based on the clicked node
      const spanId = node.id.replace("span-", "");
      const selectedSpanData = orderedSpans.find(
        (span) => span.spanId === spanId
      );

      const startTimeUnixNano = parseInt(
        selectedSpanData.startTimeUnixNano,
        10
      );
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
    },
    [setSelectedSpan, orderedSpans]
  );

  const edgeOptions = {
    // animated: true,
    // backgroundColor:colors.primary[400]
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

  const rightSideButtonStyle = {
    position: "absolute",
    top: "50%",
    right: "-90px", // Adjust the distance from the right edge
    transform: "translate(-50%, -50%)",
    transform: "translateY(-50%)",
    height: "50px",
    border: "none",
    borderRadius: "5px",
    color: "#FFF",
    // backgroundColor:"#24a0ed"
    backgroundColor: colors.primary[400],
  };

  const targetElementRef = useRef(null);

  const [popoverAnchor, setPopoverAnchor] = useState(null);

  const handleButtonClick = (event) => {
    // setPopoverAnchor(event.currentTarget);
    setPopoverAnchor(targetElementRef.current);
  };
  //  const onClose =()=>{
  //   setPopoverAnchor(null);
  //  }

  const handlePopoverClose = () => {
    setPopoverAnchor(null);
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
            //   <div style={{ display: 'flex', alignItems: 'center' }}>
            //   <span>
            //     {span.name} <strong style={{ color: colors.textColor[500] }}>({calculateDurationInMs(span.startTimeUnixNano, span.endTimeUnixNano)}ms)</strong>
            //   </span>
            //   <button style={{marginLeft:"20px",backgroundColor:"blue",width:"80px"}}>Your Button</button>
            // </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                position: "relative",
              }}
            >
              <span style={{ marginBottom: "10px" }}>
                {span.name}{" "}
                <strong style={{ color: colors.textColor[500] }}>
                  (
                  {calculateDurationInMs(
                    span.startTimeUnixNano,
                    span.endTimeUnixNano
                  )}
                  ms)
                </strong>
              </span>
              <button style={rightSideButtonStyle} onClick={handleButtonClick}>
                Click Me
              </button>
            </div>
          ),
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
  };

  useEffect(() => {
    // setLoading(true);
    setNodes([]);
    setEdges([]);
    setSelectedSpan({ attributes: [] });
    if (Object.keys(selectedTrace).length !== 0) {
      // const orderedSpansData = sortingParentChildOrder(selectedTrace.spans);
      setOrderedSpans(selectedTrace.spans);
      dynamicNodeCreation(selectedTrace.spans);
    }
    // setLoading(false);
  }, [selectedTrace, setSelectedSpan]);

  const flowBoxColor = {
    "--primary-color":colors.primary[400],
    "--text-color": "#FFF",
  };

  return (
    <>
      {traceLoading ? (
        <Loading />
      ) : (
        <div
          ref={targetElementRef}
          style={{
            maxHeight: Object.keys(selectedTrace).length
              ? "calc(93vh - 70px)"
              : null,
          }}
        >
          {Object.keys(selectedTrace).length === 0 ? (
            <div>
              <Typography
                variant="h5"
                sx={{ textAlign: "center", marginTop: "60%" }}
              >
                Please Select any one of the Trace from the list to visualize!
              </Typography>
            </div>
          ) : (
            <div>
              <div style={{ padding: "5px" }}>
                {/* <Typography variant="h5" fontWeight="600" >Details for Selected Trace </Typography> */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    textAlign: "center",
                    margin: "0px",
                  }}
                >
                  <Typography variant="h6">
                    ServiceName <br />
                    <Typography variant="h7">
                      {selectedTrace.serviceName}
                    </Typography>
                  </Typography>
                  <Typography variant="h6">
                    SpanCount <br />
                    <Typography variant="h7">
                      {selectedTrace.spanCount}
                    </Typography>
                  </Typography>
                  <Popover
                    open={Boolean(popoverAnchor)}
                    anchorEl={popoverAnchor}
                    onClose={handlePopoverClose}
                    anchorOrigin={{
                      vertical: "center",
                      horizontal: "center",
                    }}
                    transformOrigin={{
                      vertical: "center",
                      horizontal: "center",
                    }}
                    style={{
                      position: "absolute",
                      height: "200px",
                      marginRight: "100px",
                    }}
                  >
                    <Paper sx={{ padding: 2 }}>
                      <Card>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "flex-end",
                          }}
                        >
                          <IconButton
                            color="inherit"
                            onClick={handlePopoverClose}
                          >
                            <ClearRoundedIcon />
                          </IconButton>
                        </div>
                        <Typography>
                          ErrorMessage:"Received request to get data by the
                          product Id"
                        </Typography>
                      </Card>
                      {/* Add more content to the popover card as needed */}
                    </Paper>
                  </Popover>
                </div>
                <Card
                  sx={{
                    overflowX: "auto",
                    width: "100%",
                    color: "#FFF",
                    backgroundColor:
                      selectedTrace.statusCode >= 400 &&
                      selectedTrace.statusCode <= 500
                        ? colors.redAccent[500]
                        : "#808080",
                    display: "flex",
                    justifyContent: "space-between",
                    textAlign: "center",
                    margin: "10px 20px 10px 0px",
                  }}
                >
                  {orderedSpans.map((span) => (
                    <div key={span.spanId}>
                      <div
                        style={{
                          width: "fit-content",
                          margin: "5px",
                          overflowX: "auto",
                        }}
                      >
                        {calculateDurationInMs(
                          span.startTimeUnixNano,
                          span.endTimeUnixNano
                        )}
                        ms
                      </div>
                    </div>
                  ))}
                </Card>
                {/* <Typography variant="h6" >SpanCount <br /><Typography variant="h7" >{selectedTrace.spanCount}</Typography></Typography> */}
              </div>
              <div
                style={{ maxHeight: "calc(70vh - 70px)", overflowY: "auto" }}
              >
                <div
                  style={{
                    height: "450px",
                    width: "100%",
                    border: "solid #000 1px",
                  }}
                >
                  <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    onNodeClick={onNodeClick}
                    defaultEdgeOptions={edgeOptions}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    style={{
                      ...flowBoxColor,
                    }}
                    // style={{backgroundColor:colors.primary[400]}}
                  >
                    <Background
                      style={{ backgroundColor: colors.spanBackground[500] }}
                    />
                    <Controls />
                  </ReactFlow>
                </div>
                <div id="span-info" ref={sectionRef}>
                  <SpanInfo />
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default SpanFlow;
