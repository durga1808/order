import React from "react";
import ReactApexChart from "react-apexcharts";

const ErrorSuccessChart = ({ ErrSuccessData, onBarClick }) => {
  const handleBarClick = (event, chartContext, config) => {
    const selectedDataPointIndex = config.dataPointIndex; // Get data point index
    onBarClick(selectedDataPointIndex); // Call the callback with the index
  };
  const options = {
    chart: {
      type: "bar",
      events: { dataPointSelection: handleBarClick },
      // events: {
      //   click(event, chartContext, config) {
      //     let ID = config.config.xaxis.categories[config.dataPointIndex];
      //     onBarClick(ID);
      //   },
      // },
      // events: {
      //   dataPointSelection: function (event, chartContext, config) {
      //     console.log("evnts details", event.dataPointIndex);
      //   },
      // },
      // events: {
      //   dataPointSelection: (event, chartContext, config) => {
      //     onBarClick(event, chartContext);
      //   },
      // },
    },
    plotOptions: {
      bar: {
        columnWidth: "30px",
      },
    },
    xaxis: {
      categories: ErrSuccessData.map((item) => item.serviceName),
      title: {
        text: "List of Services",
        style: {
          fontSize: "13px",
          fontWeight: "normal",
        },
      },
    },
    yaxis: {
      title: {
        text: "Call Count",
        style: {
          fontSize: "12px",
          fontWeight: "normal",
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
        fontSize: "18px",
        fontWeight: "bold",

        color: "#263238",
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
  // const handleBarClick = (event, chartContext, config) => {
  //   const selectedDataPointIndex = config.dataPointIndex; // Get data point index
  //   console.log(selectedDataPointIndex, "index");
  //   onBarClick(selectedDataPointIndex); // Call the callback with the index
  // };
  return (
    <div>
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
