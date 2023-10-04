import React from "react";
import ReactApexChart from "react-apexcharts";
import { useTheme } from "@emotion/react";

const DebugBarChart = ({ data }) => {
  const theme = useTheme();

  const DebugBarChartOption = {
    chart: {
      height: 250,
      type: "bar",
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
        text: "Log Debug Count",
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
      text: "Log Debug Count",
      align: "middle",
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
  };

  const debugcountseries = [
    {
      name: "Debug Count",
      data: data.map((item) => item.debugCallCount),
    },
  ];
  return (
    <div>
      <ReactApexChart
        options={DebugBarChartOption}
        series={debugcountseries}
        type="bar"
        height={250}
      />
    </div>
  );
};

export default DebugBarChart;

// import React from 'react'

// const DebugBarChart = () => {
//   return (
//     <div>DebugBarChart</div>
//   )
// }

// export default DebugBarChart
