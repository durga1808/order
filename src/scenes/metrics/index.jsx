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
    <div>
      <div style={{ height: "calc(93vh - 70px)", overflowY: "auto" }}>
        {mockMetrics.map((mock, index) => (
          <Card
            key={index}
            // padding="10px"
            style={{ margin: "10px 10px 8px 10px" }}
          >
            <LineChart data={mock} />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Metrics;
