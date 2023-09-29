import { colors } from "@mui/material";
import React from "react";
import ReactApexChart from "react-apexcharts";
import { tokens } from "../../../../theme";
import { useTheme } from "@emotion/react";

const PeakLatencyChart = ({ data }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const peakLatencyOptions = {
    chart: {
      type: "bar",
      bakground: colors.primary[400],
    },
    // zoom: {
    //   enabled: true,
    //   type: "x",
    //   resetIcon: {
    //     offsetX: -10,
    //     offsetY: 0,
    //     fillColor: "#fff",
    //     strokeColor: "#37474F",
    //   },
    //   selection: {
    //     background: "#90CAF9",
    //     border: "#0D47A1",
    //   },
    // },
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
      labels: {
        style: {
          colors: theme.palette.mode === "dark" ? "#FFF" : "#000",
        },
      },
    },
    yaxis: {
      title: {
        text: "Latency(ms)",
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
      text: "Peak Latency(ms)",
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

  const peakLatencySeries = [
    {
      name: "Peak Latency",
      data: data.map((item) => item.peakLatency),
    },
  ];
  return (
    <div>
      <ReactApexChart
        options={peakLatencyOptions}
        series={peakLatencySeries}
        type="bar"
        height={250}
      />
    </div>
  );
};

export default PeakLatencyChart;
