import React, { useState } from "react";
import Chart from "react-apexcharts";
import { Card, CardContent, Typography } from "@mui/material";

const data = [
  { service: "Service A", errorCount: 10 },
  { service: "Service B", errorCount: 5 },
  { service: "Service C", errorCount: 8 },
  // Add more service data here
];

const ErrorChart = () => {
  const [selectedService, setSelectedService] = useState(null);

  const options = {
    chart: {
      id: "basic-bar",
      events: {
        dataPointSelection: (event, chartContext, config) => {
          const selectedServiceName = data[config.dataPointIndex].service;
          console.log(chartContext, "-----");
          const selectedErrorCount = data[config.dataPointIndex].errorCount;

          setSelectedService({
            service: selectedServiceName,
            errorCount: selectedErrorCount,
          });
        },
      },
    },

    xaxis: {
      categories: data.map((item) => item.service),
    },
  };

  return (
    <div>
      <Chart
        options={options}
        series={[{ data: data.map((item) => item.errorCount) }]}
        type="bar"
        width="300"
        height="300"
      />

      {selectedService && (
        <Card style={{ marginTop: 20 }}>
          <CardContent>
            <Typography variant="h5" component="div">
              Selected Service
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Service Name: {selectedService.service}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Error Count: {selectedService.errorCount}
            </Typography>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ErrorChart;
