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

import React, { useState } from "react";
import ReactECharts from "echarts-for-react";
import { Card, CardContent, Typography } from "@mui/material";

const data = [
  { service: "Service A", errorCount: 10 },
  { service: "Service B", errorCount: 5 },
  { service: "Service C", errorCount: 8 },
  { service: "Service D", errorCount: 10 },
  { service: "Service E", errorCount: 5 },
  { service: "Service F", errorCount: 8 },
  { service: "Service G", errorCount: 10 },
  { service: "Service H", errorCount: 5 },
  { service: "Service I", errorCount: 8 },
  // Add more service data here
];

const ErrorChart = () => {
  const [selectedData, setSelectedData] = useState(null);

  const handleBarClick = (params) => {
    const { name, value } = params;
    setSelectedData({ service: name, errorCount: value });
  };

  return (
    <div>
      <ReactECharts
        option={{
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "shadow",
            },
          },
          xAxis: {
            type: "category",
            data: data.map((item) => item.service),
          },
          yAxis: {
            type: "value",
          },
          series: [
            {
              name: "Error Count",
              type: "bar",
              data: data.map((item) => item.errorCount),
              emphasis: {
                focus: "series",
              },
              itemStyle: {
                color: "#8884d8",
              },
            },
          ],
        }}
        onEvents={{
          click: (event) => {
            if (event.data && event.dataIndex !== undefined) {
              handleBarClick({
                name: data[event.dataIndex].service,
                value: data[event.dataIndex].errorCount,
              });
            }
          },
        }}
      />

      {selectedData && (
        <Card style={{ marginTop: 20 }}>
          <CardContent>
            <Typography variant="h5" component="div">
              Selected Bar Details
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Service Name: {selectedData.service}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Error Count: {selectedData.errorCount}
            </Typography>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ErrorChart;
