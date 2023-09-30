import React from "react";
import ReactApexChart from "react-apexcharts";
import { tokens } from "../../../../theme";
import { useTheme } from "@emotion/react";

const ErrorSuccessChart = ({ ErrSuccessData, onBarClick }) => {
  const theme = useTheme();
  // const colors = tokens(theme.palette.mode);
  const handleBarClick = (event, chartContext, config) => {
    const selectedDataPointIndex = config.dataPointIndex;
    const selectedSeriesName = config.w.globals.seriesNames[config.seriesIndex]; // Get series name
    onBarClick(selectedDataPointIndex, selectedSeriesName); // Pass selected series name to the parent component
  };

  const options = {
    chart: {
      type: "bar",
      events: { dataPointSelection: handleBarClick },
    },
    plotOptions: {
      bar: {
        columnWidth: "30px",
      },
    },
    xaxis: {
      categories: ErrSuccessData.map((item) => item.serviceName),
      zoom: "x",
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
      text: "Error and Success Calls",
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

    dataLabels: {
      enabled: true,
      offsetY: -20,
      style: {
        fontSize: "12px",
        colors: ["#000"],
      },
    },
    markers: {
      size: 4,
    },
  };

  const series = [
    {
      name: "Error Calls",
      data: ErrSuccessData.map((item) => item.errorCalls),
    },
    {
      name: "Success Calls",
      data: ErrSuccessData.map((item) => item.successCalls),
    },
  ];

  // const options = {
  //   annotations: {
  //     points: [
  //       {
  //         x: "Services",
  //         seriesIndex: 0,
  //         label: {
  //           borderColor: "#775DD0",
  //           offsetY: 0,
  //           style: {
  //             color: "#fff",
  //             background: "#775DD0",
  //           },
  //           text: "Services",
  //         },
  //       },
  //     ],
  //   },
  //   chart: {
  //     type: "bar",
  //     events: { dataPointSelection: handleBarClick },
  //     height: 350,
  //   },
  //   plotOptions: {
  //     bar: {
  //       // borderRadius: 10,
  //       columnWidth: "70%",
  //     },
  //   },
  //   dataLabels: {
  //     enabled: false,
  //   },
  //   stroke: {
  //     width: 2,
  //   },

  //   grid: {
  //     row: {
  //       colors: ["#fff", "#f2f2f2"],
  //     },
  //   },
  //   xaxis: {
  //     labels: {
  //       rotate: -45,
  //     },
  //     categories: ErrSuccessData.map((item) => item.serviceName),
  //     title: {
  //       text: "List of Services",
  //       style: {
  //         color: theme.palette.mode === "dark" ? "#FFF" : "#000",
  //         fontFamily: "Red Hat Display, sans-serif",
  //         fontWeight: 500,
  //       },
  //     },
  //     tickPlacement: "on",
  //   },
  //   yaxis: {
  //     title: {
  //       text: "Call Count",
  //       style: {
  //         color: theme.palette.mode === "dark" ? "#FFF" : "#000",
  //         fontFamily: "Red Hat Display, sans-serif",
  //         fontWeight: 500,
  //       },
  //     },
  //   },
  //   labels: {
  //     style: {
  //       colors: theme.palette.mode === "dark" ? "#FFF" : "#000",
  //     },
  //   },
  //   title: {
  //     text: "Error and Success Calls",
  //     align: "center",
  //     margin: 5,
  //     offsetX: 0,
  //     offsetY: 5,
  //     style: {
  //       color: theme.palette.mode === "dark" ? "#FFF" : "#000",
  //       fontFamily: "Red Hat Display, sans-serif",
  //       fontWeight: 500,
  //     },
  //   },
  //   fill: {
  //     type: "gradient",
  //     gradient: {
  //       shade: "light",
  //       type: "horizontal",
  //       shadeIntensity: 0.25,
  //       gradientToColors: undefined,
  //       inverseColors: true,
  //       opacityFrom: 0.85,
  //       opacityTo: 0.85,
  //       stops: [50, 0, 100],
  //     },
  //   },
  // };

  // const series = [
  //   {
  //     name: "Error Calls",
  //     data: ErrSuccessData.map((item) => item.errorCalls),
  //   },
  //   {
  //     name: "Success Calls",
  //     data: ErrSuccessData.map((item) => item.successCalls),
  //   },
  // ];
  return (
    <div
      style={{
        height: "250px",
        overflowX: "auto",
        overflowY: "hidden",
        scrollbarColor: "blue",
      }}
    >
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={250}
      />
    </div>
  );
};

export default ErrorSuccessChart;
