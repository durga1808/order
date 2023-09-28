import React from "react";
import MetricLayout from "./MetricLayout";
import LineChart from "./charts/LineChart";
// import { Box } from "@mui/material";
import Box from "@mui/material/Box";
import { Card } from "@mui/material";

const Metrics = () => {

  const dataFields = [
    {
      x: new Date(1695875216150),
      y: 30,
    },
    {
      x: new Date("2023-10-11").getTime(),
      y: 40,
    },
    {
      x: new Date("2023-10-12").getTime(),
      y: 50,
    },
    {
      x: new Date("2023-10-13").getTime(),
      y: 35,
    },
  ];

  const dataFields1 = [
    {
      x: new Date("2023-10-10").getTime(),
      y: 30,
    },
    {
      x: new Date("2023-10-11").getTime(),
      y: 40,
    },
    {
      x: new Date("2023-10-12").getTime(),
      y: 50,
    },
    {
      x: new Date(1695875216150),
      y: 55,
    },
  ];


  const mockMetrics = [
    {
      data: dataFields,
      title: "CPU Usage",
      yaxis: "Cpu Usage",
    },
    {
      data: dataFields1,
      title: "Memory Utilization",
      yaxis: "Memory Usage",
    },
  ];

  return (
    // <MetricLayout/>
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "normal" }} >
        <div style={{ maxHeight: "80vh", overflowY: "auto" }}>
        <Card padding="10px">
        {mockMetrics.map((mock, index) => (
        <LineChart key={index} data={mock} />
      ))}
        </Card>
        </div>
    </div>
  );
};

export default Metrics;
