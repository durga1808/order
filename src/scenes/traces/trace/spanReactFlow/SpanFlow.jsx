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
    // type: "input",
    data: { label: "POST /" },
    position: { x: 0, y: 0 },
  },
  {
    id: "span-c77283d02dbe843c",
    // type: "input",
    data: { label: "PersonResource_Subclass.createPerson" },
    position: { x: 50, y: 90 },
  },
  {
    id: "span-36529e406ba99e26",
    // type: "input",
    data: { label: "UPDATE observability-demo-tables.person" },
    position: { x: 100, y: 180 },
  },
  {
    id: "span-be8746b6a9d0a60a",
    // type: "input",
    data: { label: "Session.merge" },
    position: { x: 150, y: 270 },
  },
  {
    id: "span-3510586bca5c146c",
    // type: "input",
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
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

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
  //   let nodeSpacingX = 100; // Adjust this value to control horizontal spacing
  //   let nodeSpacingY = 100; // Adjust this value to control vertical spacing

  //   spanData[0].spans.forEach((span, index) => {
  //     console.log(index);
  //     const nodeId = `span-${span.spanId}`;
  //     const nodeX = index * nodeSpacingX; // Adjust x position based on index
  //     const nodeY = index * nodeSpacingY; // Set a fixed y position

  //     const node = {
  //       id: nodeId,
  //       type: index === 0 ? "input" : index === spanData[0].spans.length - 1 ? "output" : "default",
  //       data: {
  //         label: span.name,
  //       },
  //       position: { x: nodeX, y: nodeY },
  //       className: "nodeStyle"
  //     };

  //     // console.log("node " + JSON.stringify(node) );

  //     newNodes.push(node);
  //     spanIdToNodeId[span.spanId] = nodeId;

  //     // console.log("SpanInfo " + JSON.stringify(spanIdToNodeId))

  //     if (span.parentSpanId) {
  //       const edge = {
  //         id: `edge-${span.spanId}`,
  //         source: spanIdToNodeId[span.parentSpanId],
  //         target: nodeId,
  //       };
  //       // console.log("SPanInfoi " + "  " + span.parentSpanId + spanIdToNodeId[span.parentSpanId]);
  //       // console.log(JSON.stringify(edge));

  //       newEdges.push(edge);
  //     }
  //   });
  //   // const filteredEdges = newEdges.filter((e) => {

  //   // })

  //   // Update the React Flow nodes and edges
  //   setNodes((prevNodes) => [...prevNodes, ...newNodes]);
  //   setEdges((prevEdges) => [...prevEdges, ...newEdges]);
  //   console.log("NEW EDGES " + JSON.stringify(newNodes));
  // }, []);

  // useEffect(() => {
  //   const spanIdToNodeId = {};
  //   const newNodes = [];
  //   const newEdges = [];
  //   const filteredStarterNode = [];

  //   // Calculate the node positions dynamically
  //   let nodeSpacingX = 100; // Adjust this value to control horizontal spacing
  //   let nodeSpacingY = 100; // Adjust this value to control vertical spacing

  //   const nodeAndEdgeCreation = (span, index) => {
  //     let nodeId = `span-${span.spanId}`
  //     const nodeX = index * nodeSpacingX; // Adjust x position based on index
  //     const nodeY = index * nodeSpacingY; // Set a fixed y position

  //     const node = {
  //       id: nodeId,
  //       type: index === 0 ? "input" : index === spanData[0].spans.length - 1 ? "output" : "default",
  //       data: {
  //         label: span.name,
  //       },
  //       position: { x: nodeX, y: nodeY },
  //       className: "nodeStyle"
  //     };
  //     spanIdToNodeId[span.spanId] = nodeId;

  //     const edge = {
  //       id: `edge-${span.spanId}`,
  //       source: spanIdToNodeId[span.parentSpanId],
  //       target: nodeId,
  //     };
  //     filteredStarterNode.push(node);
  //     return { node, edge };
  //   }

  //   spanData[0].spans.forEach((span, index) => {
  //     if (span.parentSpanId === "") {
  //       let starterNode = nodeAndEdgeCreation(span, index);
  //       newNodes.push(starterNode.node);
  //       newEdges.push(starterNode.edge);
  //     }

  //   });

  //   // Update the React Flow nodes and edges
  //   setNodes((prevNodes) => [...prevNodes, ...newNodes]);
  //   setEdges((prevEdges) => [...prevEdges, ...newEdges]);
  //   console.log("NEW EDGES " + JSON.stringify(newNodes));
  // }, []);

  // useEffect(() => {
  //   const spanIdToNodeId = {};
  //   const newNodes = [];
  //   const newEdges = [];
  //   const filteredStarterNode = [];

  //   // Calculate the node positions dynamically
  //   let nodeSpacingX = 100; // Adjust this value to control horizontal spacing
  //   let nodeSpacingY = 100; // Adjust this value to control vertical spacing

  //   const nodeAndEdgeCreation = (span, index) => {
  //     let nodeId = `span-${span.spanId}`
  //     const nodeX = index * nodeSpacingX; // Adjust x position based on index
  //     const nodeY = index * nodeSpacingY; // Set a fixed y position

  //     const node = {
  //       id: nodeId,
  //       type: index === 0 ? "input" : index === spanData[0].spans.length - 1 ? "output" : "default",
  //       data: {
  //         label: span.name,
  //       },
  //       position: { x: nodeX, y: nodeY },
  //       className: "nodeStyle"
  //     };
  //     spanIdToNodeId[span.spanId] = nodeId;

  //     const edge = {
  //       id: `edge-${span.spanId}`,
  //       source: spanIdToNodeId[span.parentSpanId],
  //       target: nodeId,
  //     };

  //     return { node, edge };
  //   }

  //   spanData[0].spans.forEach((span, index) => {
  //     if (span.parentSpanId === "") {
  //       let starterNode = nodeAndEdgeCreation(span, index);
  //       newNodes.push(starterNode.node);
  //       newEdges.push(starterNode.edge);
  //     }
  //   });

  //    // Loop through the newNodes and check if their spanId matches any span's parentSpanId
  // newNodes.forEach((node) => {
  //   const spanId = node.id.substring(5); // Extract spanId from the node's id
  //   console.log("SPANID " + spanId);

  //   const matchedSpan = spanData[0].spans.find((span) => span.parentSpanId === spanId);

  //   if (matchedSpan) {
  //     // Create nodes and edges for the matched span
  //     const newNodeAndEdge = nodeAndEdgeCreation(matchedSpan, 0);
  //     newNodes.push(newNodeAndEdge.node);
  //     newEdges.push(newNodeAndEdge.edge);
  //   }
  // });

  //   // Update the React Flow nodes and edges
  //   setNodes((prevNodes) => [...prevNodes, ...newNodes]);
  //   setEdges((prevEdges) => [...prevEdges, ...newEdges]);
  //   // console.log("NEW EDGES " + JSON.stringify(filteredStarterNode));

  //   // Now you have the filteredStarterNode array with the nodes you want
  //   console.log(" Starter Nodes: " + JSON.stringify(newNodes));
  // }, []);

  // let spanData = [
  //   {
  //     "attributes": [
  //       {
  //         "key": "net.sock.peer.port",
  //         "value": {
  //           "intValue": "42972"
  //         }
  //       },
  //       {
  //         "key": "thread.id",
  //         "value": {
  //           "intValue": "280"
  //         }
  //       },
  //       {
  //         "key": "net.sock.host.port",
  //         "value": {
  //           "intValue": "8080"
  //         }
  //       },
  //       {
  //         "key": "http.route",
  //         "value": {
  //           "stringValue": "/vendor/vendorGetDataFromExternalApi"
  //         }
  //       },
  //       {
  //         "key": "net.sock.host.addr",
  //         "value": {
  //           "stringValue": "10.128.0.101"
  //         }
  //       },
  //       {
  //         "key": "net.protocol.name",
  //         "value": {
  //           "stringValue": "http"
  //         }
  //       },
  //       {
  //         "key": "http.scheme",
  //         "value": {
  //           "stringValue": "http"
  //         }
  //       },
  //       {
  //         "key": "http.status_code",
  //         "value": {
  //           "intValue": "200"
  //         }
  //       },
  //       {
  //         "key": "net.protocol.version",
  //         "value": {
  //           "stringValue": "1.1"
  //         }
  //       },
  //       {
  //         "key": "http.method",
  //         "value": {
  //           "stringValue": "GET"
  //         }
  //       },
  //       {
  //         "key": "user_agent.original",
  //         "value": {
  //           "stringValue": "PostmanRuntime/7.32.3"
  //         }
  //       },
  //       {
  //         "key": "net.host.name",
  //         "value": {
  //           "stringValue": "vendor-project-observability-workspace.apps.zagaopenshift.zagaopensource.com"
  //         }
  //       },
  //       {
  //         "key": "http.target",
  //         "value": {
  //           "stringValue": "/vendor/vendorGetDataFromExternalApi?id=1"
  //         }
  //       },
  //       {
  //         "key": "net.sock.peer.addr",
  //         "value": {
  //           "stringValue": "10.128.0.2"
  //         }
  //       },
  //       {
  //         "key": "http.client_ip",
  //         "value": {
  //           "stringValue": "192.168.1.8"
  //         }
  //       },
  //       {
  //         "key": "thread.name",
  //         "value": {
  //           "stringValue": "http-nio-8080-exec-3"
  //         }
  //       }
  //     ],
  //     "endTimeUnixNano": "1695270879468608323",
  //     "kind": 2,
  //     "name": "GET /vendor/vendorGetDataFromExternalApi",
  //     "parentSpanId": "",
  //     "spanId": "988c6819d4a0188a",
  //     "startTimeUnixNano": "1695270879211594000",
  //     "status": {},
  //     "traceId": "dee3bd2e82665daaead05dce094a0f94"
  //   },
  //   {
  //     "attributes": [
  //       {
  //         "key": "thread.id",
  //         "value": {
  //           "intValue": "280"
  //         }
  //       },
  //       {
  //         "key": "thread.name",
  //         "value": {
  //           "stringValue": "http-nio-8080-exec-3"
  //         }
  //       }
  //     ],
  //     "endTimeUnixNano": "1695270879445918434",
  //     "kind": 1,
  //     "name": "VendorController.getOrderDetailsFromExternalAPI",
  //     "parentSpanId": "988c6819d4a0188a",
  //     "spanId": "edce9a47effe62c0",
  //     "startTimeUnixNano": "1695270879226768184",
  //     "status": {},
  //     "traceId": "dee3bd2e82665daaead05dce094a0f94"
  //   },
  //   {
  //     "attributes": [
  //       {
  //         "key": "db.user",
  //         "value": {
  //           "stringValue": "observability-demo-user"
  //         }
  //       },
  //       {
  //         "key": "thread.id",
  //         "value": {
  //           "intValue": "280"
  //         }
  //       },
  //       {
  //         "key": "db.connection_string",
  //         "value": {
  //           "stringValue": "postgresql://dev-postgres-primary.postgresql-workspace.svc:5432"
  //         }
  //       },
  //       {
  //         "key": "net.peer.name",
  //         "value": {
  //           "stringValue": "dev-postgres-primary.postgresql-workspace.svc"
  //         }
  //       },
  //       {
  //         "key": "db.system",
  //         "value": {
  //           "stringValue": "postgresql"
  //         }
  //       },
  //       {
  //         "key": "db.statement",
  //         "value": {
  //           "stringValue": ""
  //         }
  //       },
  //       {
  //         "key": "net.peer.port",
  //         "value": {
  //           "intValue": "5432"
  //         }
  //       },
  //       {
  //         "key": "db.name",
  //         "value": {
  //           "stringValue": "observability-demo-tables"
  //         }
  //       },
  //       {
  //         "key": "thread.name",
  //         "value": {
  //           "stringValue": "http-nio-8080-exec-3"
  //         }
  //       }
  //     ],
  //     "endTimeUnixNano": "1695270879374004677",
  //     "kind": 3,
  //     "name": "observability-demo-tables",
  //     "parentSpanId": "3f542ae0c93d885a",
  //     "spanId": "322dfd81f37d9118",
  //     "startTimeUnixNano": "1695270879356726219",
  //     "status": {},
  //     "traceId": "dee3bd2e82665daaead05dce094a0f94"
  //   },
  //   {
  //     "attributes": [
  //       {
  //         "key": "db.user",
  //         "value": {
  //           "stringValue": "observability-demo-user"
  //         }
  //       },
  //       {
  //         "key": "thread.id",
  //         "value": {
  //           "intValue": "280"
  //         }
  //       },
  //       {
  //         "key": "db.connection_string",
  //         "value": {
  //           "stringValue": "postgresql://dev-postgres-primary.postgresql-workspace.svc:5432"
  //         }
  //       },
  //       {
  //         "key": "net.peer.name",
  //         "value": {
  //           "stringValue": "dev-postgres-primary.postgresql-workspace.svc"
  //         }
  //       },
  //       {
  //         "key": "db.system",
  //         "value": {
  //           "stringValue": "postgresql"
  //         }
  //       },
  //       {
  //         "key": "db.statement",
  //         "value": {
  //           "stringValue": "select vendorenti0_.id as id1_0_0_, vendorenti0_.customer_id as customer2_0_0_, vendorenti0_.customer_name as customer3_0_0_, vendorenti0_.customer_phone_number as customer4_0_0_, vendorenti0_.model_no as model_no5_0_0_, vendorenti0_.order_id as order_id6_0_0_, vendorenti0_.product_address as product_7_0_0_, vendorenti0_.product_id as product_8_0_0_, vendorenti0_.product_name as product_9_0_0_, vendorenti0_.quantity as quantit10_0_0_ from vendor_order vendorenti0_ where vendorenti0_.id=?"
  //         }
  //       },
  //       {
  //         "key": "net.peer.port",
  //         "value": {
  //           "intValue": "5432"
  //         }
  //       },
  //       {
  //         "key": "db.sql.table",
  //         "value": {
  //           "stringValue": "vendor_order"
  //         }
  //       },
  //       {
  //         "key": "db.operation",
  //         "value": {
  //           "stringValue": "SELECT"
  //         }
  //       },
  //       {
  //         "key": "db.name",
  //         "value": {
  //           "stringValue": "observability-demo-tables"
  //         }
  //       },
  //       {
  //         "key": "thread.name",
  //         "value": {
  //           "stringValue": "http-nio-8080-exec-3"
  //         }
  //       }
  //     ],
  //     "endTimeUnixNano": "1695270879390822970",
  //     "kind": 3,
  //     "name": "SELECT observability-demo-tables.vendor_order",
  //     "parentSpanId": "9586adfee7a0ebd1",
  //     "spanId": "a2214a1d774f8a99",
  //     "startTimeUnixNano": "1695270879380926580",
  //     "status": {},
  //     "traceId": "dee3bd2e82665daaead05dce094a0f94"
  //   },
  //   {
  //     "attributes": [
  //       {
  //         "key": "db.user",
  //         "value": {
  //           "stringValue": "observability-demo-user"
  //         }
  //       },
  //       {
  //         "key": "thread.id",
  //         "value": {
  //           "intValue": "280"
  //         }
  //       },
  //       {
  //         "key": "db.connection_string",
  //         "value": {
  //           "stringValue": "postgresql://dev-postgres-primary.postgresql-workspace.svc:5432"
  //         }
  //       },
  //       {
  //         "key": "net.peer.name",
  //         "value": {
  //           "stringValue": "dev-postgres-primary.postgresql-workspace.svc"
  //         }
  //       },
  //       {
  //         "key": "db.system",
  //         "value": {
  //           "stringValue": "postgresql"
  //         }
  //       },
  //       {
  //         "key": "db.statement",
  //         "value": {
  //           "stringValue": "select nextval (?)"
  //         }
  //       },
  //       {
  //         "key": "net.peer.port",
  //         "value": {
  //           "intValue": "5432"
  //         }
  //       },
  //       {
  //         "key": "db.operation",
  //         "value": {
  //           "stringValue": "SELECT"
  //         }
  //       },
  //       {
  //         "key": "db.name",
  //         "value": {
  //           "stringValue": "observability-demo-tables"
  //         }
  //       },
  //       {
  //         "key": "thread.name",
  //         "value": {
  //           "stringValue": "http-nio-8080-exec-3"
  //         }
  //       }
  //     ],
  //     "endTimeUnixNano": "1695270879402816191",
  //     "kind": 3,
  //     "name": "SELECT observability-demo-tables",
  //     "parentSpanId": "9586adfee7a0ebd1",
  //     "spanId": "5a80310c07f0a005",
  //     "startTimeUnixNano": "1695270879395810699",
  //     "status": {},
  //     "traceId": "dee3bd2e82665daaead05dce094a0f94"
  //   },
  //   {
  //     "attributes": [
  //       {
  //         "key": "db.user",
  //         "value": {
  //           "stringValue": "observability-demo-user"
  //         }
  //       },
  //       {
  //         "key": "thread.id",
  //         "value": {
  //           "intValue": "280"
  //         }
  //       },
  //       {
  //         "key": "db.connection_string",
  //         "value": {
  //           "stringValue": "postgresql://dev-postgres-primary.postgresql-workspace.svc:5432"
  //         }
  //       },
  //       {
  //         "key": "net.peer.name",
  //         "value": {
  //           "stringValue": "dev-postgres-primary.postgresql-workspace.svc"
  //         }
  //       },
  //       {
  //         "key": "db.system",
  //         "value": {
  //           "stringValue": "postgresql"
  //         }
  //       },
  //       {
  //         "key": "db.statement",
  //         "value": {
  //           "stringValue": "insert into vendor_order (customer_id, customer_name, customer_phone_number, model_no, order_id, product_address, product_id, product_name, quantity, id) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"
  //         }
  //       },
  //       {
  //         "key": "net.peer.port",
  //         "value": {
  //           "intValue": "5432"
  //         }
  //       },
  //       {
  //         "key": "db.sql.table",
  //         "value": {
  //           "stringValue": "vendor_order"
  //         }
  //       },
  //       {
  //         "key": "db.operation",
  //         "value": {
  //           "stringValue": "INSERT"
  //         }
  //       },
  //       {
  //         "key": "db.name",
  //         "value": {
  //           "stringValue": "observability-demo-tables"
  //         }
  //       },
  //       {
  //         "key": "thread.name",
  //         "value": {
  //           "stringValue": "http-nio-8080-exec-3"
  //         }
  //       }
  //     ],
  //     "endTimeUnixNano": "1695270879418115206",
  //     "kind": 3,
  //     "name": "INSERT observability-demo-tables.vendor_order",
  //     "parentSpanId": "6bdfa88ddf892390",
  //     "spanId": "0510c6c8d2dbf81b",
  //     "startTimeUnixNano": "1695270879414201585",
  //     "status": {},
  //     "traceId": "dee3bd2e82665daaead05dce094a0f94"
  //   },
  //   {
  //     "attributes": [
  //       {
  //         "key": "thread.id",
  //         "value": {
  //           "intValue": "280"
  //         }
  //       },
  //       {
  //         "key": "net.peer.name",
  //         "value": {
  //           "stringValue": "order-project.observability-workspace.svc.cluster.local"
  //         }
  //       },
  //       {
  //         "key": "net.peer.port",
  //         "value": {
  //           "intValue": "5089"
  //         }
  //       },
  //       {
  //         "key": "net.protocol.name",
  //         "value": {
  //           "stringValue": "http"
  //         }
  //       },
  //       {
  //         "key": "http.url",
  //         "value": {
  //           "stringValue": "http://order-project.observability-workspace.svc.cluster.local:5089/orders/getOrders?id=1"
  //         }
  //       },
  //       {
  //         "key": "http.status_code",
  //         "value": {
  //           "intValue": "200"
  //         }
  //       },
  //       {
  //         "key": "net.protocol.version",
  //         "value": {
  //           "stringValue": "1.1"
  //         }
  //       },
  //       {
  //         "key": "thread.name",
  //         "value": {
  //           "stringValue": "http-nio-8080-exec-3"
  //         }
  //       },
  //       {
  //         "key": "http.method",
  //         "value": {
  //           "stringValue": "GET"
  //         }
  //       }
  //     ],
  //     "endTimeUnixNano": "1695270879339411298",
  //     "kind": 3,
  //     "name": "GET",
  //     "parentSpanId": "edce9a47effe62c0",
  //     "spanId": "4030ce78fb36ee1c",
  //     "startTimeUnixNano": "1695270879241450617",
  //     "status": {},
  //     "traceId": "dee3bd2e82665daaead05dce094a0f94"
  //   },
  //   {
  //     "attributes": [
  //       {
  //         "key": "code.namespace",
  //         "value": {
  //           "stringValue": "com.zaga.VendorProj.VendorRepo"
  //         }
  //       },
  //       {
  //         "key": "thread.id",
  //         "value": {
  //           "intValue": "280"
  //         }
  //       },
  //       {
  //         "key": "code.function",
  //         "value": {
  //           "stringValue": "save"
  //         }
  //       },
  //       {
  //         "key": "thread.name",
  //         "value": {
  //           "stringValue": "http-nio-8080-exec-3"
  //         }
  //       }
  //     ],
  //     "endTimeUnixNano": "1695270879425060103",
  //     "kind": 1,
  //     "name": "VendorRepo.save",
  //     "parentSpanId": "edce9a47effe62c0",
  //     "spanId": "3f542ae0c93d885a",
  //     "startTimeUnixNano": "1695270879348515436",
  //     "status": {},
  //     "traceId": "dee3bd2e82665daaead05dce094a0f94"
  //   },
  //   {
  //     "attributes": [
  //       {
  //         "key": "thread.id",
  //         "value": {
  //           "intValue": "280"
  //         }
  //       },
  //       {
  //         "key": "thread.name",
  //         "value": {
  //           "stringValue": "http-nio-8080-exec-3"
  //         }
  //       }
  //     ],
  //     "endTimeUnixNano": "1695270879405343173",
  //     "kind": 1,
  //     "name": "Session.merge com.zaga.VendorProj.VendorEntity",
  //     "parentSpanId": "3f542ae0c93d885a",
  //     "spanId": "9586adfee7a0ebd1",
  //     "startTimeUnixNano": "1695270879376551786",
  //     "status": {},
  //     "traceId": "dee3bd2e82665daaead05dce094a0f94"
  //   },
  //   {
  //     "attributes": [
  //       {
  //         "key": "thread.id",
  //         "value": {
  //           "intValue": "280"
  //         }
  //       },
  //       {
  //         "key": "thread.name",
  //         "value": {
  //           "stringValue": "http-nio-8080-exec-3"
  //         }
  //       }
  //     ],
  //     "endTimeUnixNano": "1695270879424808445",
  //     "kind": 1,
  //     "name": "Transaction.commit",
  //     "parentSpanId": "3f542ae0c93d885a",
  //     "spanId": "6bdfa88ddf892390",
  //     "startTimeUnixNano": "1695270879406212597",
  //     "status": {},
  //     "traceId": "dee3bd2e82665daaead05dce094a0f94"
  //   }
  // ]

  // useEffect(() => {
  //   // const sortedData = spanData[0].spans.sort((a, b) => {
  //   //   if (a.parentSpanId === b.parentSpanId) {
  //   //     // If parentSpanIds are the same, compare by spanId
  //   //     return a.spanId.localeCompare(b.spanId);
  //   //   } else {
  //   //     // Otherwise, compare by parentSpanId
  //   //     return a.parentSpanId.localeCompare(b.parentSpanId);
  //   //   }
  //   // });
  //   // console.log("Sorted Data " + JSON.stringify(sortedData));

  //   // Separate the data into two arrays: empty parentSpanId and the rest
  //   const emptyParentSpanIdArray = data.filter(item => !item.parentSpanId);
  //   const nonEmptyParentSpanIdArray = data.filter(item => !!item.parentSpanId);

  //   // Sort the nonEmptyParentSpanIdArray based on spanId
  //   nonEmptyParentSpanIdArray.sort((a, b) => a.spanId.localeCompare(b.spanId));

  //   // Initialize an array to store the final sorted order
  //   const finalSortedArray = [...emptyParentSpanIdArray];

  //   // Iterate through emptyParentSpanIdArray to check for parent-child order
  //   emptyParentSpanIdArray.forEach(emptyItem => {
  //     const matchingItemIndex = nonEmptyParentSpanIdArray.findIndex(item => item.parentSpanId === emptyItem.spanId);
  //     if (matchingItemIndex !== -1) {
  //       const matchingItem = nonEmptyParentSpanIdArray.splice(matchingItemIndex, 1)[0];
  //       finalSortedArray.push(matchingItem);
  //     }
  //   });

  //   // Concatenate the two arrays to get the final sorted order
  //   const sortedData = finalSortedArray.concat(nonEmptyParentSpanIdArray);

  //   // Add non-matching items at the end of sortedData
  //   sortedData.push(...nonEmptyParentSpanIdArray);

  //   console.log("SortedData " + JSON.stringify(sortedData));

  //   // Process the span data and generate nodes and edges
  //   const spanIdToNodeId = {};
  //   const newNodes = [];
  //   const newEdges = [];

  //   // Calculate the node positions dynamically
  //   let nodeSpacingX = 100; // Adjust this value to control horizontal spacing
  //   let nodeSpacingY = 100; // Adjust this value to control vertical spacing

  //   spanData[0].spans.forEach((span, index) => {
  //     console.log(index);
  //     const nodeId = `span-${span.spanId}`;
  //     const nodeX = index * nodeSpacingX; // Adjust x position based on index
  //     const nodeY = index * nodeSpacingY; // Set a fixed y position

  //     const node = {
  //       id: nodeId,
  //       type: index === 0 ? "input" : index === spanData[0].spans.length - 1 ? "output" : "default",
  //       data: {
  //         label: span.name,
  //       },
  //       position: { x: nodeX, y: nodeY },
  //       className: "nodeStyle"
  //     };

  //     // console.log("node " + JSON.stringify(node) );

  //     newNodes.push(node);
  //     spanIdToNodeId[span.spanId] = nodeId;

  //     // console.log("SpanInfo " + JSON.stringify(spanIdToNodeId))

  //     if (span.parentSpanId) {
  //       const edge = {
  //         id: `edge-${span.spanId}`,
  //         source: spanIdToNodeId[span.parentSpanId],
  //         target: nodeId,
  //       };
  //       // console.log("SPanInfoi " + "  " + span.parentSpanId + spanIdToNodeId[span.parentSpanId]);
  //       // console.log(JSON.stringify(edge));

  //       newEdges.push(edge);
  //     }
  //   });
  //   // const filteredEdges = newEdges.filter((e) => {

  //   // })

  //   // Update the React Flow nodes and edges
  //   setNodes((prevNodes) => [...prevNodes, ...newNodes]);
  //   setEdges((prevEdges) => [...prevEdges, ...newEdges]);
  //   console.log("NEW EDGES " + JSON.stringify(newNodes));
  // }, []);

  // const [orderedSpans, setOrderedSpans] = useState([]);

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
    // setOrderedSpans(orderedSpanData);
    console.log("orderdata " + JSON.stringify(orderedSpanData));
    return orderedSpanData;
  }

  useEffect(() => {
    const orderedSpans = sortingParentChildOrder(spanData[1].spans);
    // Process the span data and generate nodes and edges
    const spanIdToNodeId = {};
    const newNodes = [];
    const newEdges = [];

    // Calculate the node positions dynamically
    let nodeSpacingX = 100; // Adjust this value to control horizontal spacing
    let nodeSpacingY = 100; // Adjust this value to control vertical spacing

    orderedSpans.forEach((span, index) => {
      console.log(index);
      const nodeId = `span-${span.spanId}`;
      let nodeX = index * nodeSpacingX; // Adjust x position based on index
      let nodeY = index * nodeSpacingY; // Set a fixed y position

      const node = {
        id: nodeId,
        type: index === 0 ? "input" : index === orderedSpans.length - 1 ? "output" : "default",
        data: {
          label: span.name,
        },
        position: { x: nodeX, y: nodeY },
        className: "nodeStyle"
      };

      // console.log("node " + JSON.stringify(node) );

      newNodes.push(node);
      spanIdToNodeId[span.spanId] = nodeId;

      // console.log("SpanInfo " + JSON.stringify(spanIdToNodeId))

      if (span.parentSpanId) {
        const edge = {
          id: `edge-${span.spanId}`,
          source: spanIdToNodeId[span.parentSpanId],
          target: nodeId,
        };
        // console.log("SPanInfoi " + "  " + span.parentSpanId + spanIdToNodeId[span.parentSpanId]);
        // console.log(JSON.stringify(edge));

        newEdges.push(edge);
      }
      nodeX = nodeX - 130;
      nodeY = nodeY + 40;
    });
    // const filteredEdges = newEdges.filter((e) => {

    // })

    // Update the React Flow nodes and edges
    setNodes((prevNodes) => [...prevNodes, ...newNodes]);
    setEdges((prevEdges) => [...prevEdges, ...newEdges]);
    console.log("NEW EDGES " + JSON.stringify(newNodes));
  }, []);

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
