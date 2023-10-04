import React from "react";
import ReactApexChart from "react-apexcharts";
import { useTheme } from "@emotion/react";

const ErrorBarChart = ({ data, onBarClick }) => {
  const theme = useTheme();

  const handleBarClick = (event, chartContext, config) => {
    const selectedDataPointIndex = config.dataPointIndex;
    onBarClick(selectedDataPointIndex);
  };
console.log("data",data);
  const options = {
    chart: {
      type: "bar",
      events: { dataPointSelection: handleBarClick },
    },
    plotOptions: {
      bar: {
        columnWidth: "30px",
        colors: {
          ranges: [
            {
              from: 0,
              to: 60,
              color: "#FF0000", // Set the entire bar color to red (#FF0000)
            },
          ],
        },
      },
    },
    xaxis: {
      categories: data.map((item) => item.serviceName),

      title: {
        text: "List of Services",
        style: {
          color: theme.palette.mode === "dark" ? "#FFF" : "#000",
          fontFamily: "Red Hat Display, sans-serif",
          fontWeight: 500,
        },
      },
    },
    yaxis: {
      title: {
        text: "Error Count",
        style: {
          color: theme.palette.mode === "dark" ? "#FFF" : "#000",
          fontFamily: "Red Hat Display, sans-serif",
          fontWeight: 500,
        },
      },

      labels: {
        style: {
          colors: theme.palette.mode === "dark" ? "#FFF" : "#000",
        },
      },
    },
    title: {
      text: "Log Error Count",
      align: "center",
      margin: 5,
      offsetX: 0,
      offsetY: 5,
      style: {
        color: theme.palette.mode === "dark" ? "#FFF" : "#000",
        fontFamily: "Red Hat Display, sans-serif",
        fontWeight: 500,
      },
    },
  };

  const series = [
    {
      name: "Error Calls",
      data: data.map((item) => item.errorCallCount),
    },
  ];

  return (
    <div
      style={{
        height: "250px",
        overflowX: "auto",
        overflowY: "hidden",
        scrollbarColor: "blue",
      }}
    >
      {/* <Card elevation={3} style={{ margin: "25px 15px 10px 25px" }}> */}
      {/* {" "} */}
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={250}
      />
      {/* </Card> */}
    </div>
  );
};

export default ErrorBarChart;
