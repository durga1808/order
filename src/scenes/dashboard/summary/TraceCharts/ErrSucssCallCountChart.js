import React from "react";
import ReactApexChart from "react-apexcharts";
import { useTheme } from "@emotion/react";
import { tokens } from "../../../../theme";
import { useContext } from "react";
import { GlobalContext } from "../../../../global/globalContext/GlobalContext";

const ErrorSuccessChart = ({ ErrSuccessData, onBarClick }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { isCollapsed } = useContext(GlobalContext);

  const handleBarClick = (event, chartContext, config) => {
    const selectedDataPointIndex = config.dataPointIndex;
    const selectedSeriesName = config.w.globals.seriesNames[config.seriesIndex]; // Get series name
    onBarClick(selectedDataPointIndex, selectedSeriesName); // Pass selected series name to the parent component
    console.log(
      "ServiceName " + ErrSuccessData[selectedDataPointIndex].serviceName
    );
  };
  const options = {
    chart: {
      type: "bar",
      events: { dataPointSelection: handleBarClick },
    },
    legend: {
      labels: {
        colors: colors.textColor[500], // Change legend text color here
      },
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
          fontSize: 10,
          fontWeight: 500,
          fontFamily: "Red Hat Display",
        },
      },
    },
    yaxis: {
      title: {
        text: "Count",
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
          fontSize: 10,
          fontWeight: 500,
          fontFamily: "Red Hat Display",
        },
      },
    },
    title: {
      text: "Error and Success Counts",
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
      name: "Error Count",
      data: ErrSuccessData.map((item) => item.totalErrorCalls),
      color: "#FF0000",
    },
    {
      name: "Success Count",
      data: ErrSuccessData.map((item) => item.totalSuccessCalls),
    },
  ];

  const chartWidth = isCollapsed ? 'calc(175vh - 10px)' : 'calc(160vh - 70px)'
  

  return (
    <div
      data-theme={theme.palette.mode}
      style={{
        height: "calc(40vh - 20px)",
        width: chartWidth,
        overflowX: "auto",
        overflowY: "hidden",
        scrollbarColor: "blue",
      }}
    >
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={"90%"}
        width={"100%"}
      />
    </div>
  );
};

export default ErrorSuccessChart;
