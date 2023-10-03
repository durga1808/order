import { Card } from "@mui/material";
import React from "react";
import BarChart from "./BarChart";

const LogChartsData = () => {
  const ApiCallData = [
    {
      x: "Service A",
      y: 100,
    },
    {
      x: "Service B",
      y: 150,
    },
    {
      x: "Service C",
      y: 75,
    },
    {
      x: "Service D",
      y: 68,
    },
    {
      x: "Service E",
      y: 120,
    },
    {
      x: "Service F",
      y: 65,
    },
    {
      x: "Service G",
      y: 150,
    },
    {
      x: "Service H",
      y: 115,
    },
    {
      x: "Service I",
      y: 95,
    },
    {
      x: "Service J",
      y: 90,
    },
  ];

  const PeackLatencyData = [
    {
      x: "Service A",
      y: 10,
    },
    {
      x: "Service B",
      y: 20,
    },
    {
      x: "Service C",
      y: 15,
    },
    {
      x: "Service D",
      y: 25,
    },
    {
      x: "Service E",
      y: 14,
    },
    {
      x: "Service F",
      y: 35,
    },
    {
      x: "Service G",
      y: 30,
    },
    {
      x: "Service H",
      y: 10,
    },
    {
      x: "Service I",
      y: 20,
    },
    {
      x: "Service J",
      y: 15,
    },
  ];

  const mockLog = [
    {
      data: ApiCallData,
      title: "API Calls Count",
      yaxis: "Calls Count",
    },
    {
      data: PeackLatencyData,
      title: "Peak Latency(ms)",
      yaxis: "Latency(ms)",
    },
  ];

  return (
    <div>
      <div
        style={{
          maxHeight: "82vh",
          overflowY: "auto",
          display: "flex",
        }}
      >
        {mockLog.map((mocklogdata, index) => (
          <Card key={index} style={{ margin: "25px 15px 10px 25px", flex: 1 }}>
            <BarChart logggg={mocklogdata} />
            
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LogChartsData;
