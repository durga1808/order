import React from "react";
import ReactApexChart from "react-apexcharts";
import { useTheme } from "@emotion/react";
import { tokens } from "../../../../theme";
import { useContext } from "react";
import { GlobalContext } from "../../../../global/globalContext/GlobalContext";

const WarnBarChart = ({ data }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { isCollapsed } = useContext(GlobalContext);

  const WarnCountOptions = {
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
          fontSize: 12,
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
        text: "Log Warn Count",
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
      text: "Log Warn Count",
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
  const warncountSeries = [
    {
      name: "Peak Latency",
      data: data.map((item) => item.warnCallCount),
    },
  ];
  return (
    <div data-theme={theme.palette.mode}>
      <ReactApexChart
        options={WarnCountOptions}
        series={warncountSeries}
        type="bar"
        height={250}
        width={isCollapsed?640:550}
      />
    </div>
  );
};

export default WarnBarChart;
