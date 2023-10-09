import React from "react";
import ReactApexChart from "react-apexcharts";
import { tokens } from "../../../../theme";
import { useTheme } from "@emotion/react";

const ApiCallCount = ({ data }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);


  const apiCallsOptions = {
    chart: {
      height: 250,
      type: "bar",
      stacked: false,
    toolbar: {
      show: false,
    },
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
        text: "Call Count",
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
          fontSize: 10,
          fontWeight: 500,
          fontFamily: "Red Hat Display"
        },
      },
    },
    title: {
      text: "API Calls Count",
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
    scrollbar: {
      enabled: true,
      offsetY: -2,
      height: 6,
      trackBorderWidth: 5,
      thumbBorderWidth: 0,
    },
  };

  const apiCallsSeries = [
    {
      name: "API Calls",
      data: data.map((item) => item.apiCallCount),
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
