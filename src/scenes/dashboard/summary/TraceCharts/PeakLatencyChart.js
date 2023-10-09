import React from "react";
import ReactApexChart from "react-apexcharts";
import { tokens } from "../../../../theme";
import { useTheme } from "@emotion/react";

const PeakLatencyChart = ({ data }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);


  const peakLatencyOptions = {

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
        style: {
          colors: colors.textColor[500],
          fontSize: 10,
          fontWeight: 500,
          fontFamily: "Red Hat Display"
        },
      },
      categories: data.map((item) => item.serviceName),
      title: {
        text: "List of Services",
        style: {
          color: colors.textColor[500],
          fontSize: 12,
          fontWeight: 500,
          fontFamily: "Red Hat Display"
        },
      },

    },
    yaxis: {
      title: {
        text: "Latency(ms)",
        style: {
          color: colors.textColor[500],
          fontSize: 12,
          fontWeight: 500,
          fontFamily: "Red Hat Display"
        },
      },

      labels: {

        style: {
          colors: colors.textColor[500],
          fontSize: 12,
          fontWeight: 500,
          fontFamily: "Red Hat Display"
        },
      },
    },
    title: {
      text: "Peak Latency > 500(ms)",
      align: "middle",
      offsetX: 0,
      offsetY: 10,
      style: {
        color: colors.textColor[500],
        fontSize: 16,
        fontWeight: 500,
        fontFamily: "Red Hat Display"
      },
    },
    labels: {
      style: {
        colors: theme.palette.mode === "dark" ? "#FFF" : "#000",
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
