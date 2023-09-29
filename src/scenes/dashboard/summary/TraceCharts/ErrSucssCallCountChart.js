import React from "react";
import ReactApexChart from "react-apexcharts";

const ErrorSuccessChart = ({ ErrSuccessData, onBarClick }) => {
  const handleBarClick = (event, chartContext, config) => {
    const selectedDataPointIndex = config.dataPointIndex;
    const selectedSeriesName = config.w.globals.seriesNames[config.seriesIndex]; // Get series name
    onBarClick(selectedDataPointIndex, selectedSeriesName); // Pass selected series name to the parent component
  };
  const options = {
    chart: {
      type: "bar",
      events: { dataPointSelection: handleBarClick },
    },
    plotOptions: {
      bar: {
        columnWidth: "30px",
      },
    },
    xaxis: {
      categories: ErrSuccessData.map((item) => item.serviceName),
      title: {
        text: "List of Services",
        style: {
          fontSize: "13px",
          fontWeight: "normal",
        },
      },
    },
    yaxis: {
      title: {
        text: "Call Count",
        style: {
          fontSize: "12px",
          fontWeight: "normal",
        },
      },
    },
    title: {
      text: "Error and Success Calls",
      align: "center",
      margin: 5,
      offsetX: 0,
      offsetY: 5,
      style: {
        fontSize: "18px",
        fontWeight: "bold",

        color: "#263238",
      },
    },
    dataLabels: {
      enabled: true,
      offsetY: -20,
      style: {
        fontSize: "12px",
        colors: ["#000"],
      },
    },
    markers: {
      size: 4,
    },
  };

  const series = [
    {
      name: "Error Calls",
      data: ErrSuccessData.map((item) => item.errorCalls),
    },
    {
      name: "Success Calls",
      data: ErrSuccessData.map((item) => item.successCalls),
    },
  ];

  return (
    <div>
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={250}
      />
    </div>
  );
};

export default ErrorSuccessChart;
