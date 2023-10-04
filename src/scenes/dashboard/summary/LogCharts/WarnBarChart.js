import React from "react";
import ReactApexChart from "react-apexcharts";
import { useTheme } from "@emotion/react";

const WarnBarChart = ({ data }) => {
  const theme = useTheme();

  const WarnCountOptions = {
    chart: {
      height: 250,
      type: "bar",
    },
    plotOptions: {
      bar: {
        columnWidth: "70%",
      },
    },

    xaxis: {
      labels: {
        rotate: -45,
      },
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
        text: "Log Warn Count",
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
      text: "Log Warn Count",
      align: "middle",
      offsetX: 0,
      offsetY: 10,
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
  };
  const warncountSeries = [
    {
      name: "Peak Latency",
      data: data.map((item) => item.warnCallCount),
    },
  ];
  return (
    <div>
      <ReactApexChart
        options={WarnCountOptions}
        series={warncountSeries}
        type="bar"
        height={250}
      />
    </div>
  );
};

export default WarnBarChart;
