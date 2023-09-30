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
    annotations: {
      points: [
        {
          x: "Services",
          seriesIndex: 0,
          label: {
            borderColor: "#775DD0",
            offsetY: 0,
            style: {
              color: "#fff",
              background: "#775DD0",
            },
            text: "Services",
          },
        },
      ],
    },
    chart: {
      height: 250,
      type: "bar",
    },
    plotOptions: {
      bar: {
        // borderRadius: 10,
        columnWidth: "70%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 2,
    },

    grid: {
      row: {
        colors: ["#fff", "#f2f2f2"],
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
      tickPlacement: "on",
    },
    yaxis: {
      title: {
        text: "Api Call Count",
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
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "horizontal",
        shadeIntensity: 0.25,
        gradientToColors: undefined,
        inverseColors: true,
        opacityFrom: 0.85,
        opacityTo: 0.85,
        stops: [50, 0, 100],
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
