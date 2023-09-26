// import React, { useState } from "react";
// import Chart from "react-apexcharts";
// import { Card, CardContent, Typography } from "@mui/material";

// const data = [
//   { service: "Service A", errorCount: 10 },
//   { service: "Service B", errorCount: 5 },
//   { service: "Service C", errorCount: 8 },
//   // Add more service data here
// ];

// const ErrorChart = () => {
//   const [selectedService, setSelectedService] = useState(null);

//   const options = {
//     chart: {
//       id: "basic-bar",
//       events: {
//         dataPointSelection: (event, chartContext, config) => {
//           const selectedServiceName = data[config.dataPointIndex].service;
//           console.log(chartContext, "-----");
//           const selectedErrorCount = data[config.dataPointIndex].errorCount;

//           setSelectedService({
//             service: selectedServiceName,
//             errorCount: selectedErrorCount,
//           });
//         },
//       },
//     },

//     xaxis: {
//       categories: data.map((item) => item.service),
//     },
//   };

//   return (
//     <div>
//       <Chart
//         options={options}
//         series={[{ data: data.map((item) => item.errorCount) }]}
//         type="bar"
//         width="300"
//         height="300"
//       />

//       {selectedService && (
//         <Card style={{ marginTop: 20 }}>
//           <CardContent>
//             <Typography variant="h5" component="div">
//               Selected Service
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//               Service Name: {selectedService.service}
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//               Error Count: {selectedService.errorCount}
//             </Typography>
//           </CardContent>
//         </Card>
//       )}
//     </div>
//   );
// };

// export default ErrorChart;
// ===============================================================

// import React, { useEffect, useState } from "react";
// import * as d3 from "d3";
// import { Card, CardContent, Typography } from "@mui/material";

// const data = [
//   { service: "Service A", errorCount: 10 },
//   { service: "Service B", errorCount: 5 },
//   { service: "Service C", errorCount: 8 },
//   { service: "Service D", errorCount: 10 },
//   { service: "Service E", errorCount: 5 },
//   { service: "Service F", errorCount: 8 },
//   { service: "Service G", errorCount: 10 },
//   { service: "Service H", errorCount: 5 },
//   { service: "Service I", errorCount: 8 },

//   // Add more service data here
// ];

// const ErrorChart = () => {
//   const [selectedService, setSelectedService] = useState(null);

//   useEffect(() => {
//     // Create the D3.js bar chart
//     const svg = d3.select("#bar-chart");

//     const width = 600;
//     const height = 300;
//     const margin = { top: 20, right: 30, bottom: 50, left: 50 };

//     const x = d3
//       .scaleBand()
//       .domain(data.map((d) => d.service))
//       .range([margin.left, width - margin.right])
//       .padding(0.1);

//     const y = d3
//       .scaleLinear()
//       .domain([0, d3.max(data, (d) => d.errorCount)])
//       .nice()
//       .range([height - margin.bottom, margin.top]);

//     svg
//       .selectAll("rect")
//       .data(data)
//       .enter()
//       .append("rect")
//       .attr("x", (d) => x(d.service))
//       .attr("y", (d) => y(d.errorCount))
//       .attr("width", x.bandwidth())
//       .attr("height", (d) => height - margin.bottom - y(d.errorCount))
//       .attr("fill", "#8884d8")
//       .on("click", (event, d) => handleBarClick(d));

//     svg
//       .append("g")
//       .attr("transform", `translate(0,${height - margin.bottom})`)
//       .call(d3.axisBottom(x))
//       .selectAll("text")
//       .style("text-anchor", "end")
//       .attr("transform", "rotate(-45)");

//     svg
//       .append("g")
//       .attr("transform", `translate(${margin.left},0)`)
//       .call(d3.axisLeft(y));

//     // Handle bar click event
//     const handleBarClick = (selectedData) => {
//       setSelectedService(selectedData);
//     };
//   }, []);

//   return (
//     <div>
//       <svg id="bar-chart" width={600} height={300} />
//       {selectedService && (
//         <Card>
//           <CardContent>
//             <Typography variant="h5" component="div">
//               Selected Service
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//               Service Name: {selectedService.service}
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//               Error Count: {selectedService.errorCount}
//             </Typography>
//           </CardContent>
//         </Card>
//       )}
//     </div>
//   );
// };

// export default ErrorChart;

// -----------------------------------------------------------------------------------------
// import React, { useState } from "react";
// import { Chart } from "react-google-charts";
// import { Card, CardContent, Typography } from "@mui/material";

// const data = [
//   ["Service", "Error Count"],
//   ["Service A", 10],
//   ["Service B", 5],
//   ["Service C", 8],
//   // Add more service data here
// ];

// const ErrorChart = () => {
//   const [selectedBar, setSelectedBar] = useState(null);

//   const handleBarSelect = (chartWrapper) => {
//     const selection = chartWrapper.getChart().getSelection();
//     if (selection.length === 1) {
//       const [selectedItem] = selection;
//       const service = data[selectedItem.row + 1][0];
//       const errorCount = data[selectedItem.row + 1][1];
//       setSelectedBar({ service, errorCount });
//     } else {
//       setSelectedBar(null);
//     }
//   };

//   return (
//     <div>
//       <Chart
//         width={"600px"}
//         height={"400px"}
//         chartType="BarChart"
//         loader={<div>Loading Chart</div>}
//         data={data}
//         options={{
//           title: "Error Counts by Service",
//           chartArea: { width: "60%" },
//           hAxis: { title: "Service Name" },
//           vAxis: { title: "Error Count" },
//         }}
//         chartEvents={[
//           {
//             eventName: "select",
//             callback: ({ chartWrapper }) => handleBarSelect(chartWrapper),
//           },
//         ]}
//       />

//       {selectedBar && (
//         <Card style={{ marginTop: 20 }}>
//           <CardContent>
//             <Typography variant="h5" component="div">
//               Selected Bar Details
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//               Service Name: {selectedBar.service}
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//               Error Count: {selectedBar.errorCount}
//             </Typography>
//           </CardContent>
//         </Card>
//       )}
//     </div>
//   );
// };

// export default ErrorChart;

// ================================================================================
// import React, { useState } from "react";
// import c3 from "c3";
// import "c3/c3.css";
// import { Card, CardContent, Typography } from "@mui/material";

// const ErrorChart = () => {
//   const [selectedService, setSelectedService] = useState(null);

//   const handleBarClick = (data) => {
//     if (data && data.id) {
//       setSelectedService({ service: data.id, errorCount: data.value });
//     }
//   };
//   const data = {
//     columns: [
//       ["Service A", 10],
//       ["Service B", 5],
//       ["Service C", 8],
//       // Add more service data here
//     ],
//     type: "bar",
//     onclick: handleBarClick,
//   };
//   // Initialize the C3.js chart when the component mounts
//   React.useEffect(() => {
//     const chart = c3.generate({
//       bindto: "#errorChart",
//       data: data,
//       bar: {
//         width: {
//           ratio: 0.6, // Adjust the bar width as needed
//         },
//       },
//       axis: {
//         x: {
//           type: "category",
//           categories: data.columns.map((column) => column[0]),
//         },
//       },
//     });

//     // Add a click event handler to the bars
//     // chart.on("click", handleBarClick);

//     // Cleanup when the component unmounts
//     return () => {
//       chart.destroy();
//     };
//   }, []);

//   return (
//     <div>
//       <div id="errorChart"></div>

//       {selectedService && (
//         <Card style={{ marginTop: 20 }}>
//           <CardContent>
//             <Typography variant="h5" component="div">
//               Selected Service
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//               Service Name: {selectedService.service}
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//               Error Count: {selectedService.errorCount}
//             </Typography>
//           </CardContent>
//         </Card>
//       )}
//     </div>
//   );
// };

// export default ErrorChart;

// import React, { useState } from "react";
// import ReactECharts from "echarts-for-react";
// import { Card, CardContent, Typography } from "@mui/material";

// const data = [
//   { service: "Service A", errorCount: 10 },
//   { service: "Service B", errorCount: 5 },
//   { service: "Service C", errorCount: 8 },
//   { service: "Service D", errorCount: 10 },
//   { service: "Service E", errorCount: 5 },
//   { service: "Service F", errorCount: 8 },
//   { service: "Service G", errorCount: 10 },
//   { service: "Service H", errorCount: 5 },
//   { service: "Service I", errorCount: 8 },
//   // Add more service data here
// ];

// const ErrorChart = () => {
//   const [selectedData, setSelectedData] = useState(null);

//   const handleBarClick = (params) => {
//     const { name, value } = params;
//     setSelectedData({ service: name, errorCount: value });
//   };

//   return (
//     <div>
//       <ReactECharts
//         option={{
//           tooltip: {
//             trigger: "axis",
//             axisPointer: {
//               type: "shadow",
//             },
//           },
//           xAxis: {
//             type: "category",
//             data: data.map((item) => item.service),
//           },
//           yAxis: {
//             type: "value",
//           },
//           series: [
//             {
//               name: "Error Count",
//               type: "bar",
//               data: data.map((item) => item.errorCount),
//               emphasis: {
//                 focus: "series",
//               },
//               itemStyle: {
//                 color: "#8884d8",
//               },
//             },
//           ],
//         }}
//         onEvents={{
//           click: (event) => {
//             if (event.data && event.dataIndex !== undefined) {
//               handleBarClick({
//                 name: data[event.dataIndex].service,
//                 value: data[event.dataIndex].errorCount,
//               });
//             }
//           },
//         }}
//       />

//       {selectedData && (
//         <Card style={{ marginTop: 20 }}>
//           <CardContent>
//             <Typography variant="h5" component="div">
//               Selected Bar Details
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//               Service Name: {selectedData.service}
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//               Error Count: {selectedData.errorCount}
//             </Typography>
//           </CardContent>
//         </Card>
//       )}
//     </div>
//   );
// };

// export default ErrorChart;
// 1)charts---------------------------------------------------------------
// import React, { useState } from "react";
// import ReactECharts from "echarts-for-react";
// import Box from "@mui/material/Box";

// const TraceSummaryMock = [
//   {
//     serviceName: "Service A",
//     totalApiCalls: 70,
//     peakLatency: "3000ms",
//     totalErrorCalls: 40,
//     totalSuccessCalls: 30,
//   },
//   {
//     serviceName: "Service B",
//     totalApiCalls: 50,
//     peakLatency: "5000ms",
//     totalErrorCalls: 20,
//     totalSuccessCalls: 30,
//   },
//   {
//     serviceName: "Service C",
//     totalApiCalls: 30,
//     peakLatency: "2000ms",
//     totalErrorCalls: 10,
//     totalSuccessCalls: 20,
//   },

//   // Add more data points here
// ];

// const BarChartWithClickDetails = () => {
//   const [selectedService, setSelectedService] = useState(null);

//   const option = {
//     title: {
//       text: "Total API Calls",
//     },
//     tooltip: {
//       trigger: "axis",
//       axisPointer: {
//         type: "shadow",
//       },
//       formatter: function (params) {
//         if (params.length > 0) {
//           const service = params[0].name;
//           const apiCalls = params[0].value;
//           setSelectedService({ service, apiCalls });
//         }
//       },
//     },
//     xAxis: {
//       type: "category",
//       data: TraceSummaryMock.map((item) => item.serviceName),
//     },
//     yAxis: {
//       type: "value",
//     },
//     series: [
//       {
//         data: TraceSummaryMock.map((item) => item.totalApiCalls),
//         type: "bar",
//       },
//     ],
//   };

//   return (
//     <div>
//       <ReactECharts option={option} style={{ width: "50%" }} />
//       {selectedService && (
//         <Box m={2} p={2} border={1} borderColor="primary.main">
//           Total API Calls for {selectedService.service}:{" "}
//           {selectedService.apiCalls}
//         </Box>
//       )}
//     </div>
//   );
// };

// export default BarChartWithClickDetails;
// 2)charts-----------------------------------------------------------------------------------
// import React, { useState } from "react";
// import ReactECharts from "echarts-for-react";
// import { Card, CardContent, Typography, Grid } from "@mui/material";

// const errorData = [
//   { service: "Service A", errorCount: 10 },
//   { service: "Service B", errorCount: 5 },
//   { service: "Service C", errorCount: 8 },
//   // Add more service data here
// ];

// const latencyData = [
//   { service: "Service A", peakLatency: 50 },
//   { service: "Service B", peakLatency: 30 },
//   { service: "Service C", peakLatency: 45 },
//   // Add more service data here
// ];

// const ErrorChart = () => {
//   const [selectedErrorData, setSelectedErrorData] = useState(null);
//   const [selectedLatencyData, setSelectedLatencyData] = useState(null);

//   const handleBarClick = (params, isLatencyChart) => {
//     const { name, value } = params;
//     if (isLatencyChart) {
//       setSelectedLatencyData({ service: name, peakLatency: value });
//     } else {
//       setSelectedErrorData({ service: name, errorCount: value });
//     }
//   };

//   return (
//     <div>
//       <Grid container spacing={2}>
//         <Grid item xs={12} sm={6}>
//           <ReactECharts
//             option={{
//               title: {
//                 text: "Error Count",
//               },
//               tooltip: {
//                 trigger: "axis",
//                 axisPointer: {
//                   type: "shadow",
//                 },
//               },
//               xAxis: {
//                 type: "category",
//                 data: errorData.map((item) => item.service),
//               },
//               yAxis: {
//                 type: "value",
//               },
//               series: [
//                 {
//                   name: "Error Count",
//                   type: "bar",
//                   data: errorData.map((item) => item.errorCount),
//                   emphasis: {
//                     focus: "series",
//                   },
//                   itemStyle: {
//                     color: "#8884d8",
//                   },
//                 },
//               ],
//             }}
//             onEvents={{
//               click: (event) => {
//                 if (event.data && event.dataIndex !== undefined) {
//                   handleBarClick(
//                     {
//                       name: errorData[event.dataIndex].service,
//                       value: errorData[event.dataIndex].errorCount,
//                     },
//                     false
//                   );
//                 }
//               },
//             }}
//           />
//           {selectedErrorData && (
//             <Card style={{ marginTop: 20 }}>
//               <CardContent>
//                 <Typography variant="h5" component="div">
//                   Selected Error Data
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   Service Name: {selectedErrorData.service}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   Error Count: {selectedErrorData.errorCount}
//                 </Typography>
//               </CardContent>
//             </Card>
//           )}
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <ReactECharts
//             option={{
//               title: {
//                 text: "Peak Latency",
//               },
//               tooltip: {
//                 trigger: "axis",
//                 axisPointer: {
//                   type: "shadow",
//                 },
//               },
//               xAxis: {
//                 type: "category",
//                 data: latencyData.map((item) => item.service),
//               },
//               yAxis: {
//                 type: "value",
//               },
//               series: [
//                 {
//                   name: "Peak Latency",
//                   type: "bar",
//                   data: latencyData.map((item) => item.peakLatency),
//                   emphasis: {
//                     focus: "series",
//                   },
//                   itemStyle: {
//                     color: "#82ca9d",
//                   },
//                 },
//               ],
//             }}
//             onEvents={{
//               click: (event) => {
//                 if (event.data && event.dataIndex !== undefined) {
//                   handleBarClick(
//                     {
//                       name: latencyData[event.dataIndex].service,
//                       value: latencyData[event.dataIndex].peakLatency,
//                     },
//                     true
//                   );
//                 }
//               },
//             }}
//           />
//           {selectedLatencyData && (
//             <Card style={{ marginTop: 20 }}>
//               <CardContent>
//                 <Typography variant="h5" component="div">
//                   Selected Latency Data
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   Service Name: {selectedLatencyData.service}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   Peak Latency: {selectedLatencyData.peakLatency}
//                 </Typography>
//               </CardContent>
//             </Card>
//           )}
//         </Grid>
//       </Grid>
//     </div>
//   );
// };

// export default ErrorChart;

// import React, { useState } from "react";
// import ReactECharts from "echarts-for-react";
// import { Card, CardContent, Typography, Grid } from "@mui/material";
// import { useTheme } from "@emotion/react";
// import { tokens } from "../../../theme";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
// } from "@mui/material";
// const ChartData = [
//   {
//     service: "Service 1",
//     errorCount: 10,
//     peakLatency: 50,
//     totalErrorCalls: 20,
//     totalSuccessCalls: 80,
//   },
//   {
//     service: "Service 2",
//     errorCount: 5,
//     peakLatency: 30,
//     totalErrorCalls: 10,
//     totalSuccessCalls: 90,
//   },
//   {
//     service: "Service 3",
//     errorCount: 8,
//     peakLatency: 45,
//     totalErrorCalls: 15,
//     totalSuccessCalls: 85,
//   },
//   {
//     service: "Service 4",
//     errorCount: 10,
//     peakLatency: 50,
//     totalErrorCalls: 20,
//     totalSuccessCalls: 80,
//   },
//   {
//     service: "Service 5",
//     errorCount: 5,
//     peakLatency: 30,
//     totalErrorCalls: 10,
//     totalSuccessCalls: 90,
//   },
//   {
//     service: "Service 6",
//     errorCount: 8,
//     peakLatency: 45,
//     totalErrorCalls: 15,
//     totalSuccessCalls: 85,
//   },
//   {
//     service: "Service 7",
//     errorCount: 10,
//     peakLatency: 50,
//     totalErrorCalls: 20,
//     totalSuccessCalls: 80,
//   },
//   {
//     service: "Service 8",
//     errorCount: 5,
//     peakLatency: 30,
//     totalErrorCalls: 10,
//     totalSuccessCalls: 90,
//   },
//   {
//     service: "Service 9",
//     errorCount: 8,
//     peakLatency: 45,
//     totalErrorCalls: 15,
//     totalSuccessCalls: 85,
//   },
//   {
//     service: "Service 10",
//     errorCount: 5,
//     peakLatency: 30,
//     totalErrorCalls: 10,
//     totalSuccessCalls: 90,
//   },
//   {
//     service: "Service 11",
//     errorCount: 8,
//     peakLatency: 45,
//     totalErrorCalls: 15,
//     totalSuccessCalls: 85,
//   },
//   {
//     service: "Service 12",
//     errorCount: 10,
//     peakLatency: 50,
//     totalErrorCalls: 20,
//     totalSuccessCalls: 80,
//   },
//   {
//     service: "Service 13",
//     errorCount: 5,
//     peakLatency: 30,
//     totalErrorCalls: 10,
//     totalSuccessCalls: 90,
//   },
//   {
//     service: "Service 14",
//     errorCount: 8,
//     peakLatency: 45,
//     totalErrorCalls: 15,
//     totalSuccessCalls: 85,
//   },
//   // Add more service data here
// ];
// const errorData = [
//   { service: "Service A", errorCount: 10 },
//   { service: "Service B", errorCount: 5 },
//   { service: "Service C", errorCount: 8 },
//   // Add more service data here
// ];

// const latencyData = [
//   { service: "Service A", peakLatency: 50 },
//   { service: "Service B", peakLatency: 30 },
//   { service: "Service C", peakLatency: 45 },
//   // Add more service data here
// ];

// const callsData = [
//   { service: "Service A", totalErrorCalls: 20, totalSuccessCalls: 80 },
//   { service: "Service B", totalErrorCalls: 10, totalSuccessCalls: 90 },
//   { service: "Service C", totalErrorCalls: 15, totalSuccessCalls: 85 },
//   // Add more service data here
// ];

// const Tabledata = [
//   {
//     Date: "2023-09-21",
//     Service: "Service 1",
//     Operation: "Operation 1",
//     Duration: "1.5s",
//     Method: "GET",
//     StatusCode: 200,
//   },
//   {
//     Date: "2023-09-21",
//     Service: "Service 2",
//     Operation: "Operation 2",
//     Duration: "1.5s",
//     Method: "POST",
//     StatusCode: 200,
//   },

//   {
//     Date: "2023-09-21",
//     Service: "Service 3",
//     Operation: "Operation 3",
//     Duration: "1.5s",
//     Method: "PUT",
//     StatusCode: 200,
//   },

//   {
//     Date: "2023-09-21",
//     Service: "Service 4",
//     Operation: "Operation 4",
//     Duration: "1.5s",
//     Method: "PATCH",
//     StatusCode: 200,
//   },

//   // Add more sample data rows here
// ];
// const ErrorChart = () => {
//   const [selectedErrorData, setSelectedErrorData] = useState(null);
//   const [selectedLatencyData, setSelectedLatencyData] = useState(null);
//   const [selectedCallsData, setSelectedCallsData] = useState(null);

//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);

//   const handleBarClick = (params, isLatencyChart, isCallsChart) => {
//     const { name, value } = params;
//     if (isLatencyChart) {
//       setSelectedLatencyData({ service: name, peakLatency: value });
//     } else if (isCallsChart) {
//       setSelectedCallsData({ service: name, totalErrorCalls: value });
//     } else {
//       setSelectedErrorData({ service: name, errorCount: value });
//     }
//   };

//   return (
//     <div
//       style={{
//         height: "500px",
//         overflowY: "auto",
//         // marginLeft: "50px",
//         // marginRight: "50px",
//       }}
//     >
//       <Grid
//         container
//         spacing={2}
//         // style={{ height: "100%", overflow: "scroll" }}
//         // sw={{ maxHeight: "600px", overflowY: "auto" }}
//       >
//         <Grid item xs={12} sm={6}>
//           <Paper elevation={3} style={{ paddingTop: "5px" }}>
//             <ReactECharts
//               style={{ height: "250px" }}
//               option={{
//                 title: {
//                   text: "API calls Count",
//                 },
//                 grid: {
//                   containLabel: true, // This will make the chart fit inside the container
//                   left: "3%",
//                   right: "4%",
//                   bottom: "3%",
//                   // top: "10%",
//                   width: "auto", // You can set a fixed width or 'auto' to fit the container
//                 },
//                 dataZoom: [
//                   {
//                     // This adds a data zoom feature with a scrollbar
//                     type: "slider",
//                     show: true,
//                     start: 0,
//                     end: 50, // You can adjust the default viewable range as needed
//                     handleSize: "100%",
//                     handleStyle: {
//                       color: "black", // Set the color of the scroll bar handle to black
//                     },
//                     xAxisIndex: [0],
//                   },
//                 ],
//                 tooltip: {
//                   trigger: "axis",
//                   axisPointer: {
//                     type: "shadow",
//                   },
//                 },
//                 xAxis: {
//                   type: "category",
//                   data: ChartData.map((item) => item.service),
//                 },
//                 yAxis: {
//                   type: "value",
//                 },
//                 series: [
//                   {
//                     name: "API Calls Count",
//                     type: "bar",
//                     barWidth: 30,
//                     data: ChartData.map((item) => item.errorCount),
//                     emphasis: {
//                       focus: "series",
//                     },
//                     itemStyle: {
//                       color: "#00CED1",
//                     },
//                   },
//                 ],
//               }}
//               onEvents={{
//                 click: (event) => {
//                   if (event.data && event.dataIndex !== undefined) {
//                     handleBarClick(
//                       {
//                         name: ChartData[event.dataIndex].service,
//                         value: ChartData[event.dataIndex].errorCount,
//                         // value: ChartData[event.dataIndex].totalErrorCalls,
//                       },
//                       false,
//                       false
//                     );
//                   }
//                 },
//               }}
//             />
//           </Paper>
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <Paper elevation={3} style={{ paddingTop: "5px" }}>
//             <ReactECharts
//               style={{ height: "250px" }}
//               option={{
//                 title: {
//                   text: "Peak Latency",
//                 },
//                 grid: {
//                   containLabel: true, // This will make the chart fit inside the container
//                   left: "3%",
//                   right: "4%",
//                   bottom: "3%",
//                   // height: "70%",
//                   // top: "10%",
//                   width: "auto", // You can set a fixed width or 'auto' to fit the container
//                 },
//                 dataZoom: [
//                   {
//                     // This adds a data zoom feature with a scrollbar
//                     type: "slider",
//                     show: true,
//                     start: 0,
//                     end: 50, // You can adjust the default viewable range as needed
//                     handleSize: "100%",
//                     handleStyle: {
//                       color: "black", // Set the color of the scroll bar handle to black
//                     },
//                     xAxisIndex: [0],
//                   },
//                 ],
//                 tooltip: {
//                   trigger: "axis",
//                   axisPointer: {
//                     type: "shadow",
//                   },
//                 },
//                 xAxis: {
//                   type: "category",
//                   data: ChartData.map((item) => item.service),
//                 },
//                 yAxis: {
//                   type: "value",
//                 },
//                 series: [
//                   {
//                     name: "Peak Latency",
//                     type: "bar",
//                     barWidth: 30,
//                     data: ChartData.map((item) => item.peakLatency),
//                     emphasis: {
//                       focus: "series",
//                     },
//                     itemStyle: {
//                       color: "#00FA9A",
//                     },
//                   },
//                 ],
//               }}
//               onEvents={{
//                 click: (event) => {
//                   if (event.data && event.dataIndex !== undefined) {
//                     handleBarClick(
//                       {
//                         name: ChartData[event.dataIndex].service,
//                         value: ChartData[event.dataIndex].peakLatency,
//                       },
//                       true,
//                       false
//                     );
//                   }
//                 },
//               }}
//             />
//           </Paper>
//         </Grid>
//         <Grid item xs={12}>
//           <Paper elevation={3} style={{ paddingTop: "5px" }}>
//             <ReactECharts
//               style={{ height: "250px" }}
//               option={{
//                 title: {
//                   text: "Error Calls Data",
//                 },
//                 grid: {
//                   containLabel: true, // This will make the chart fit inside the container
//                   left: "3%",
//                   right: "4%",
//                   bottom: "3%",
//                   // top: "10%",
//                   width: "auto", // You can set a fixed width or 'auto' to fit the container
//                 },
//                 dataZoom: [
//                   {
//                     // This adds a data zoom feature with a scrollbar
//                     type: "slider",
//                     show: true,
//                     start: 0,
//                     end: 50, // You can adjust the default viewable range as needed
//                     handleSize: "100%",
//                     handleStyle: {
//                       color: "black", // Set the color of the scroll bar handle to black
//                     },
//                     xAxisIndex: [0],
//                   },
//                 ],
//                 tooltip: {
//                   trigger: "axis",
//                   axisPointer: {
//                     type: "shadow",
//                   },
//                 },
//                 xAxis: {
//                   type: "category",
//                   data: ChartData.map((item) => item.service),
//                 },
//                 yAxis: [
//                   {
//                     type: "value",
//                     name: "Total Error Calls",
//                   },
//                   {
//                     type: "value",
//                     name: "Total Success Calls",
//                   },
//                 ],
//                 series: [
//                   {
//                     name: "Total Error Calls",
//                     type: "bar",
//                     barWidth: 30,
//                     yAxisIndex: 0,
//                     data: ChartData.map((item) => item.totalErrorCalls),
//                     emphasis: {
//                       focus: "series",
//                     },
//                     itemStyle: {
//                       color: "#A9A9A9",
//                     },
//                   },
//                   {
//                     name: "Total Success Calls",
//                     type: "bar",
//                     barWidth: 30,
//                     yAxisIndex: 1,
//                     data: ChartData.map((item) => item.totalSuccessCalls),
//                     emphasis: {
//                       focus: "series",
//                     },
//                     itemStyle: {
//                       color: "#DAF7A6",
//                     },
//                   },
//                 ],
//               }}
//               onEvents={{
//                 click: (event) => {
//                   if (event.data && event.dataIndex !== undefined) {
//                     handleBarClick(
//                       {
//                         name: ChartData[event.dataIndex].service,
//                         value: ChartData[event.dataIndex].totalErrorCalls,
//                       },
//                       false,
//                       true
//                     );
//                   }
//                 },
//               }}
//             />
//           </Paper>
//         </Grid>
//       </Grid>
//       <div>
//         <Grid
//           container
//           // sw={{ mr: "30px", ml: "30px" }}
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             // marginRight: "30px",
//             // marginLeft: "30px",
//           }}
//         >
//           <div></div>
//           <Grid>
//             {selectedErrorData && (
//               <Card
//                 style={{
//                   marginRight: 40,

//                   backgroundColor: "gray",
//                 }}
//               >
//                 <CardContent>
//                   <Typography variant="body2" color="white">
//                     Error Count: {selectedErrorData.errorCount}
//                   </Typography>
//                 </CardContent>
//               </Card>
//             )}{" "}
//           </Grid>
//           <Grid>
//             {selectedLatencyData && (
//               <Card
//                 style={{
//                   // marginTop: 10,
//                   backgroundColor: "gray",
//                 }}
//               >
//                 <CardContent>
//                   <Typography variant="body2" color="white">
//                     Peak Latency: {selectedLatencyData.peakLatency}
//                   </Typography>
//                 </CardContent>
//               </Card>
//             )}{" "}
//           </Grid>
//           <Grid>
//             {selectedCallsData && (
//               <Card
//                 style={{
//                   // marginTop: 10,
//                   backgroundColor: "gray",
//                 }}
//               >
//                 <CardContent>
//                   <Typography variant="body2" color="white">
//                     Total Error Calls: {selectedCallsData.totalErrorCalls}
//                   </Typography>
//                 </CardContent>
//               </Card>
//             )}
//           </Grid>
//         </Grid>
//         <div>
//           <TableContainer component={Paper} style={{ marginTop: "20px" }}>
//             <Table>
//               <TableHead style={{ backgroundColor: colors.primary[400] }}>
//                 <TableRow>
//                   <TableCell>Date</TableCell>
//                   <TableCell>Service</TableCell>
//                   <TableCell>Operation</TableCell>
//                   <TableCell>Duration</TableCell>
//                   <TableCell>Method</TableCell>
//                   <TableCell>Status Code</TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {Tabledata.map((row, index) => (
//                   <TableRow key={index}>
//                     <TableCell>{row.Date}</TableCell>
//                     <TableCell>{row.Service}</TableCell>
//                     <TableCell>{row.Operation}</TableCell>
//                     <TableCell>{row.Duration}</TableCell>
//                     <TableCell>{row.Method}</TableCell>
//                     <TableCell>{row.StatusCode}</TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ErrorChart;

// pppppppppppp
// import React from "react";
// import ReactApexChart from "react-apexcharts";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";

// const BarChart = () => {
//   const data = [
//     { serviceName: "Service A", apiCalls: 100, peakLatency: 10 },
//     { serviceName: "Service B", apiCalls: 150, peakLatency: 20 },
//     { serviceName: "Service C", apiCalls: 75, peakLatency: 15 },
//     { serviceName: "Service D", apiCalls: 100, peakLatency: 10 },
//     { serviceName: "Service E", apiCalls: 150, peakLatency: 20 },
//     { serviceName: "Service F", apiCalls: 75, peakLatency: 15 },
//     { serviceName: "Service G", apiCalls: 150, peakLatency: 20 },
//     { serviceName: "Service H", apiCalls: 75, peakLatency: 15 },
//     { serviceName: "Service I", apiCalls: 100, peakLatency: 10 },
//     { serviceName: "Service E", apiCalls: 150, peakLatency: 20 },
//     { serviceName: "Service F", apiCalls: 75, peakLatency: 15 },
//     // Add more data as needed
//   ];

//   const apiCallsOptions = {
//     chart: {
//       type: "bar",
//     },
//     plotOptions: {
//       bar: {
//         // distributed: true,
//         columnWidth: "30px",
//         // width: 10,
//         // barHeight: "20%",
//       },
//     },
//     // yaxis: {
//     //   labels: {
//     //     minWidth: 0,
//     //     maxWidth: 50,
//     //   },
//     // },
//     xaxis: {
//       categories: data.map((item) => item.serviceName),
//       title: {
//         text: "List Of Services",
//         style: {
//           fontSize: "10px",
//         },
//       },
//     },
//     yaxis: {
//       title: {
//         text: "API Call Count",
//         style: {
//           fontSize: "10px",
//         },
//       },
//     },
//     title: {
//       text: "API Calls Count",
//       align: "center",
//       margin: 10,
//       offsetX: 0,
//       offsetY: 10,
//       style: {
//         fontSize: "18px",
//       },
//     },
//   };

//   const apiCallsSeries = [
//     {
//       name: "API Calls",
//       data: data.map((item) => item.apiCalls),
//     },
//   ];

//   const peakLatencyOptions = {
//     chart: {
//       type: "bar",
//     },
//     xaxis: {
//       categories: data.map((item) => item.serviceName),
//       title: {
//         text: "List of Services",
//         style: {
//           fontSize: "10px",
//         },
//       },
//     },
//     yaxis: {
//       title: {
//         text: "Latency(ms)",
//         style: {
//           fontSize: "10px",
//         },
//       },
//     },
//     title: {
//       text: "Peak Latency(ms)",
//       align: "center",
//       margin: 10,
//       offsetX: 0,
//       offsetY: 10,
//       style: {
//         fontSize: "18px",
//       },
//     },
//   };

//   const peakLatencySeries = [
//     {
//       name: "Peak Latency",
//       data: data.map((item) => item.peakLatency),
//     },
//   ];

//   return (
//     <div style={{ display: "flex" }}>
//       <Card elevation={3} style={{ margin: "16px", flex: 1 }}>
//         <CardContent>
//           {/* <h2>API Calls Chart</h2> */}
//           <ReactApexChart
//             options={apiCallsOptions}
//             series={apiCallsSeries}
//             type="bar"
//             height={350}
//           />
//         </CardContent>
//       </Card>
//       <Card elevation={3} style={{ margin: "16px", flex: 1 }}>
//         <CardContent>
//           {/* <h2>Peak Latency Chart</h2> */}
//           <ReactApexChart
//             options={peakLatencyOptions}
//             series={peakLatencySeries}
//             type="bar"
//             height={350}
//           />
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default BarChart;

import React from "react";
import ReactApexChart from "react-apexcharts";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const BarChart = () => {
  const data = [
    { serviceName: "Service A", apiCalls: 100, peakLatency: 10 },
    { serviceName: "Service B", apiCalls: 150, peakLatency: 20 },
    { serviceName: "Service C", apiCalls: 75, peakLatency: 15 },
    // Add more data as needed
  ];

  const apiCallsOptions = {
    chart: {
      type: "bar",
    },
    plotOptions: {
      bar: {
        columnWidth: "30px",
      },
    },
    xaxis: {
      categories: data.map((item) => item.serviceName),
      title: {
        text: "List of Services",
      },
    },
    yaxis: {
      title: {
        text: "API Call Count",
      },
    },
    title: {
      text: "API Calls Count",
      align: "center",
      margin: 5,
      offsetX: 0,
      offsetY: 10,
      style: {
        fontSize: "18px",
      },
    },
  };

  const apiCallsSeries = [
    {
      name: "API Calls",
      data: data.map((item) => item.apiCalls),
    },
  ];

  const peakLatencyOptions = {
    chart: {
      type: "bar",
    },
    zoom: {
      enabled: true,
      type: "x",
      resetIcon: {
        offsetX: -10,
        offsetY: 0,
        fillColor: "#fff",
        strokeColor: "#37474F",
      },
      selection: {
        background: "#90CAF9",
        border: "#0D47A1",
      },
    },
    plotOptions: {
      bar: {
        columnWidth: "30px",
      },
    },
    xaxis: {
      categories: data.map((item) => item.serviceName),
      title: {
        text: "List of Services",
      },
    },
    yaxis: {
      title: {
        text: "Latency(ms)",
      },
    },
    title: {
      text: "Peak Latency Chart",
      align: "center",
      margin: 5,
      offsetX: 0,
      offsetY: 10,
      style: {
        fontSize: "18px",
      },
    },
  };

  const peakLatencySeries = [
    {
      name: "Peak Latency",
      data: data.map((item) => item.peakLatency),
    },
  ];

  return (
    <div style={{ display: "flex" }}>
      <Card
        elevation={3}
        style={{ margin: "16px", flex: 1 }}
      >
        <CardContent>
          <ReactApexChart
            options={apiCallsOptions}
            series={apiCallsSeries}
            type="bar"
            height={300}
          />
        </CardContent>
      </Card>
      <Card elevation={3} style={{ margin: "16px", flex: 1 }}>
        <CardContent>
          <ReactApexChart
            options={peakLatencyOptions}
            series={peakLatencySeries}
            type="bar"
            height={300}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default BarChart;
