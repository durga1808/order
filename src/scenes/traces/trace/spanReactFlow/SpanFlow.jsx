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

const initialEdges = [
  {
    id: "edge-1",
    source: "span-7274e2d0a0c75be5",
    target: "span-c77283d02dbe843c",
  },
  {
    id: "edge-2",
    source: "span-c77283d02dbe843c",
    target: "span-36529e406ba99e26",
  },
  {
    id: "edge-3",
    source: "span-c77283d02dbe843c",
    target: "span-be8746b6a9d0a60a",
  },
  {
    id: "edge-4",
    source: "span-be8746b6a9d0a60a",
    target: "span-3510586bca5c146c",
  },
];
const initialNodes = [
  {
    id: "span-7274e2d0a0c75be5",
    type: "input",
    data: { label: "POST /" },
    position: { x: 0, y: 0 },
  },
  {
    id: "span-c77283d02dbe843c",
    type: "input",
    data: { label: "PersonResource_Subclass.createPerson" },
    position: { x: 50, y: 90 },
  },
  {
    id: "span-36529e406ba99e26",
    type: "input",
    data: { label: "UPDATE observability-demo-tables.person" },
    position: { x: 100, y: 180 },
  },
  {
    id: "span-be8746b6a9d0a60a",
    type: "input",
    data: { label: "Session.merge" },
    position: { x: 150, y: 270 },
  },
  {
    id: "span-3510586bca5c146c",
    type: "input",
    data: { label: "SELECT observability-demo-tables.person" },
    position: { x: 200, y: 360 },
  },
];
// const initialNodes = [
//   {
//     id: "A",
//     type: "group",
//     position: { x: 0, y: 0 },
//     style: {
//       width: 170,
//       height: 140,
//     },
//   },
//   {
//     id: "A-1",
//     type: "input",
//     data: { label: "Child Node 1" },
//     position: { x: 10, y: 10 },
//     parentNode: "A",
//     extent: "parent",
//   },
//   {
//     id: "A-2",
//     data: { label: "Child Node 2" },
//     position: { x: 10, y: 90 },
//     parentNode: "A",
//     extent: "parent",
//   },
//   {
//     id: "B",
//     type: "output",
//     position: { x: -100, y: 200 },
//     data: { label: "Node B" },
//   },
//   {
//     id: "C",
//     type: "output",
//     position: { x: 100, y: 200 },
//     data: { label: "Node C" },
//   },
// ];

const SpanFlow = () => {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

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

  // useEffect(() => {
  //   // Process the span data and generate nodes and edges
  //   const spanIdToNodeId = {};
  //   const newNodes = [];
  //   const newEdges = [];

  //   // Calculate the node positions dynamically
  //   const nodeSpacingX = 50; // Adjust this value to control horizontal spacing
  //   const nodeSpacingY = 90; // Adjust this value to control vertical spacing

  //   spanData[0].spans.forEach((span, index) => {
  //     console.log(index);
  //     const nodeId = `span-${span.spanId}`;
  //     const nodeX = index * nodeSpacingX; // Adjust x position based on index
  //     const nodeY = index * nodeSpacingY; // Set a fixed y position

  //     const node = {
  //       id: nodeId,
  //       type: "input",
  //       data: {
  //         label: span.name,
  //       },
  //       position: { x: nodeX, y: nodeY },
  //     };

  //     // console.log("node " + JSON.stringify(node) );

  //     newNodes.push(node);
  //     spanIdToNodeId[span.spanId] = nodeId;

  //     // console.log("SpanInfo " + JSON.stringify(spanIdToNodeId))

  //     // if (span.parentSpanId) {
  //     //   const edge = {
  //     //     id: `edge-${span.spanId}`,
  //     //     source: spanIdToNodeId[span.parentSpanId],
  //     //     target: nodeId,
  //     //   };
  //     //   // console.log("SPanInfoi " + "  " + span.parentSpanId + spanIdToNodeId[span.parentSpanId]);
  //     //   // console.log(JSON.stringify(edge));

  //     //   newEdges.push(edge);
  //     // }
  //   });

  //   // Update the React Flow nodes and edges
  //   setNodes((prevNodes) => [...prevNodes, ...newNodes]);
  //   // setEdges((prevEdges) => [...prevEdges, ...newEdges]);
  //   console.log("NEW EDGES " + JSON.stringify(newNodes));
  // }, []);

  return (
    <div style={{ height: "350px", width: "100%" }}>
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
  );
};

export default SpanFlow;
