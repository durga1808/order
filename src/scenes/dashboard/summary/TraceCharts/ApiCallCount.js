import React from "react";
import ReactApexChart from "react-apexcharts";
import { tokens } from "../../../../theme";
import { useTheme } from "@emotion/react";

const ApiCallCount = ({ data }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

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
        style: {
          color: theme.palette.mode === "dark" ? "#FFF" : "#000",
          fontFamily: "Red Hat Display, sans-serif",
          fontWeight: 500,
        },
      },
    },
    yaxis: {
      title: {
        text: "API Calls Count",
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
      text: "API Calls Count",
      align: "middle",
      // margin: 5,
      offsetX: 0,
      offsetY: 10,
      style: {
        color: theme.palette.mode === "dark" ? "#FFF" : "#000",
        fontFamily: "Red Hat Display, sans-serif",
        fontWeight: 500,
      },
    },
  };

  const apiCallsSeries = [
    {
      name: "API Calls",
      data: data.map((item) => item.apiCalls),
    },
  ];
  return (
    <div>
      <ReactApexChart
        options={apiCallsOptions}
        series={apiCallsSeries}
        type="bar"
        height={250}
      />
    </div>
  );
};

export default ApiCallCount;
