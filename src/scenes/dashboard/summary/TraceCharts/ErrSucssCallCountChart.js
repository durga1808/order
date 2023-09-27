import React from "react";
import ReactApexChart from "react-apexcharts";

const ErrSucssCallCountChart = () => {
  const data = [
    { serviceName: "Service A", errorCalls: 20, successCalls: 80 },
    { serviceName: "Service B", errorCalls: 30, successCalls: 120 },
    { serviceName: "Service C", errorCalls: 10, successCalls: 65 },
    // Add more data as needed
  ];
  const errorSuccessOptions = {
    chart: {
      type: "bar",
    },
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
          fontSize: "12px",
          fontWeight: "normal",
          // color:  '#263238'
        },
      },
    },
    yaxis: {
      title: {
        text: "Call Count",
        style: {
          fontSize: "12px",
          fontWeight: "normal",
          // color:  '#263238'
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
        // fontFamily:  undefined,
        color: "#263238",
      },
    },
  };

  const errorSuccessSeries = [
    {
      name: "Error Calls",
      data: data.map((item) => item.errorCalls),
    },
    {
      name: "Success Calls",
      data: data.map((item) => item.successCalls),
    },
  ];

  return (
    <div>
      <ReactApexChart
        options={errorSuccessOptions}
        series={errorSuccessSeries}
        type="bar"
        height={250}
      />
    </div>
  );
};

export default ErrSucssCallCountChart;
