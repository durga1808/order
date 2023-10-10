import React from "react";
import ReactApexChart from "react-apexcharts";
import { useTheme } from "@emotion/react";
import { tokens } from "../../../../theme";
import "./ErrorBarChart.css";

const ErrorBarChart = ({ data, onBarClick }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleBarClick = (event, chartContext, config) => {
    const selectedDataPointIndex = config.dataPointIndex;
    onBarClick(selectedDataPointIndex);
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
      categories: data.map((item) => item.serviceName),

      title: {
        text: "List of Services",
        style: {
          color: colors.textColor[500],
          fontSize: 12,
          fontWeight: 500,
          fontFamily: "Red Hat Display",
        },
      },
      labels: {
        rotate: -45,
        style: {
          colors: colors.textColor[500],
          fontSize: 12,
          fontWeight: 500,
          fontFamily: "Red Hat Display",
        },
      },
    },
    yaxis: {
      title: {
        text: "Error Count",
        style: {
          color: colors.textColor[500],
          fontSize: 12,
          fontWeight: 500,
          fontFamily: "Red Hat Display",
        },
      },

      labels: {
        style: {
          colors: colors.textColor[500],
          fontSize: 12,
          fontWeight: 500,
          fontFamily: "Red Hat Display",
        },
      },
    },
    title: {
      text: "Log Error Count",
      align: "center",
      margin: 5,
      offsetX: 0,
      offsetY: 5,
      style: {
        color: colors.textColor[500],
        fontSize: 16,
        fontWeight: 500,
        fontFamily: "Red Hat Display",
      },
    },
  };

  const series = [
    {
      name: "Error Calls",
      data: data.map((item) => item.errorCallCount),
      color: "#FF0000",
    },
  ];

  return (
    <div
      data-theme={theme.palette.mode}
      style={{
        height: "250px",
        overflowX: "auto",
        overflowY: "hidden",
        scrollbarColor: "blue",
      }}
    >
      {/* <Card elevation={3} style={{ margin: "25px 15px 10px 25px" }}> */}
      {/* {" "} */}
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={250}
      />
      {/* </Card> */}
    </div>
  );
};

export default ErrorBarChart;
