import React from "react";
import ReactApexChart from "react-apexcharts";

const LineChart = ({ height }) => {
  const series = [
    {
      name: "XYZ MOTORS",
      data: [30, 40, 35, 50, 49, 60, 70, 91, 125, 100],
    },
  ];

  const options = {
    chart: {
      type: "line",
      stacked: false,
      height: 350,
      zoom: {
        type: "x",
        enabled: true,
        autoScaleYaxis: true,
      },
      toolbar: {
        autoSelected: "zoom",
      },
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 0,
    },
    title: {
      text: "CPU Utilization",
      align: "left",
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.5,
        opacityTo: 0,
        stops: [0, 90, 100],
      },
    },
    yaxis: {
      // labels: {
      //     formatter: function (val) {
      //         return (val / 1000000).toFixed(0);
      //     },
      // },
      title: {
        text: "CPU Range",
      },
    },
    xaxis: {
      // type: 'datetime',
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
      ], // Replace with your x-axis labels
    },
    tooltip: {
      shared: false,
      // y: {
      //     formatter: function (val) {
      //         return (val / 1000000).toFixed(0)
      //     }
      // }
    },
  };

  return (
    <div>
      <ReactApexChart
        options={options}
        series={series}
        type="area"
        height={height}
      />
    </div>
  );
};

export default LineChart;
