import React, { useContext } from "react";
import ReactApexChart from "react-apexcharts";
import { tokens } from "../../../../theme";
import { useTheme } from "@emotion/react";
import { GlobalContext } from "../../../../global/globalContext/GlobalContext";

const PeakLatencyKafka = ({ data }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { isCollapsed } = useContext(GlobalContext);

  const kafkaMock = [
    {
      serviceName: "order-project",
      kafkaCallCount: 20,
      kafkaPeakLatency: 4
    },
    {
      serviceName: "vendor-project",
      kafkaCallCount: 30,
      kafkaPeakLatency: 8
    }
  ]

  const peakLatencyOptions = {
    chart: {
      height: 250,
      type: "bar",
    },
    plotOptions: {
      bar: {
        columnWidth: "30px",
      },
    },

    xaxis: {
      labels: {
        rotate: -45,
        style: {
          colors: colors.textColor[500],
          fontSize: 10,
          fontWeight: 500,
          fontFamily: "Red Hat Display",
        },
      },
      categories: data.map((item) => item.serviceName),
      title: {
        text: "List of Services",
        style: {
          color: colors.textColor[500],
          fontSize: 12,
          fontWeight: 500,
          fontFamily: "Red Hat Display",
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
          fontFamily: "Red Hat Display",
        },
      },

      labels: {
        style: {
          colors: colors.textColor[500],
          fontSize: 12,
          fontWeight: 500,
          fontFamily: "Red Hat Display",
        },
      },
    },
    title: {
      text: "Peak Latency > 5(ms)",
      align: "middle",
      offsetX: 0,
      offsetY: 10,
      style: {
        color: colors.textColor[500],
        fontSize: 16,
        fontWeight: 500,
        fontFamily: "Red Hat Display",
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
      data: data.map((item) => item.kafkaCallCount),
    },
  ];

  const chartWidth = isCollapsed ? 'calc(175vh - 10px)' : 'calc(160vh - 70px)'

  return (
    <div data-theme={theme.palette.mode} style={{ width: chartWidth }} >
      <ReactApexChart
        options={peakLatencyOptions}
        series={peakLatencySeries}
        type="bar"
        height={210}
      />
    </div>
  );
};

export default PeakLatencyKafka;
