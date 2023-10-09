import React from "react";
import ReactApexChart from "react-apexcharts";
import { useTheme } from "@emotion/react";
import { tokens } from "../../../../theme";

const DebugBarChart = ({ data }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

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
        style: {
          colors: colors.textColor[500],
          fontSize: 12,
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
        text: "Log Debug Count",
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
            fontSize: 12,
            fontWeight: 500,
            fontFamily: "Red Hat Display"
          },
      },
    },

    title: {
      text: "Log Debug Count",
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
