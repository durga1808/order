import React from "react";
import ReactApexChart from "react-apexcharts";

const ApiCallCount = ({ data }) => {
  // const data = [
  //   { serviceName: "Service A", apiCalls: 100 },
  //   { serviceName: "Service B", apiCalls: 150 },
  //   { serviceName: "Service C", apiCalls: 75 },
  //   // Add more data as needed
  // ];

  const apiCallsOptions = {
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
          fontSize: "13px",
          fontWeight: "normal",
          // color:  '#263238'
        },
      },
    },
    yaxis: {
      title: {
        text: "API Calls Count",
        style: {
          fontSize: "12px",
          fontWeight: "normal",
          // color:  '#263238'
        },
      },
    },
    title: {
      text: "API Calls Count",
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
