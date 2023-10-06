import React from "react";
import ReactApexChart from "react-apexcharts";
import { tokens } from "../../../../theme";
import { useTheme } from "@emotion/react";

const ApiCallCount = ({ data }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // const apiCallsOptions = {
  //   chart: {
  //     type: "bar",
  //   },
  //   plotOptions: {
  //     bar: {
  //       columnWidth: "30px",
  //     },
  //   },
  //   zoom: {
  //     type: "x",
  //     enabled: true,
  //     autoScaleYaxis: true,
  //   },
  //   xaxis: {
  //     categories: data.map((item) => item.serviceName),
  //     title: {
  //       text: "List of Services",
  //       style: {
  //         color: theme.palette.mode === "dark" ? "#FFF" : "#000",
  //         fontFamily: "Red Hat Display, sans-serif",
  //         fontWeight: 500,
  //       },
  //     },
  //   },
  //   yaxis: {
  //     title: {
  //       text: "API Calls Count",
  //       style: {
  //         color: theme.palette.mode === "dark" ? "#FFF" : "#000",
  //         fontFamily: "Red Hat Display, sans-serif",
  //         fontWeight: 500,
  //       },
  //     },
  //     labels: {
  //       style: {
  //         colors: theme.palette.mode === "dark" ? "#FFF" : "#000",
  //       },
  //     },
  //   },
  //   title: {
  //     text: "API Calls Count",
  //     align: "middle",
  //     // margin: 5,
  //     offsetX: 0,
  //     offsetY: 10,
  //     style: {
  //       color: theme.palette.mode === "dark" ? "#FFF" : "#000",
  //       fontFamily: "Red Hat Display, sans-serif",
  //       fontWeight: 500,
  //     },
  //   },
  // };

  // const apiCallsSeries = [
  //   {
  //     name: "API Calls",
  //     data: data.map((item) => item.apiCalls),
  //   },
  // ];

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
        text: "Call Count",
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
