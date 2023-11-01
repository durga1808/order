import React, { useContext } from "react";
import ReactApexChart from "react-apexcharts";
import { useTheme } from "@emotion/react";
import { tokens } from "../../../../theme";
import { Card } from "@mui/material";
import { GlobalContext } from "../../../../global/globalContext/GlobalContext";

const DBCallsCount = ({ data, onBarClick }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { isCollapsed } = useContext(GlobalContext);

  const handleBarClick = (event, chartContext, config) => {
    const selectedDataPointIndex = config.dataPointIndex;
    onBarClick(selectedDataPointIndex);
  };

  //   const data = [
  //     {
  //       serviceName: "order-project",
  //       dbCallCount: 20,
  //       dbName: "postgres",
  //       dbPeakLatencyCount: 4,
  //     },
  //     {
  //       serviceName: "vendor-project",
  //       dbCallCount: 30,
  //       dbName: "mongodb",
  //       dbPeakLatencyCount: 8,
  //     },
  //   ];

  const options = {
    chart: {
      type: "bar",
      //   height: 300,
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
        text: "DB Count",
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
      text: "Database Count",
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
      name: "DB Calls",
      data: data.map((item) => item.dbCallCount),
      color: "#04700b",
    },
  ];

  const chartWidth = isCollapsed ? "calc(100%- 10px)" : "calc(103% - 70px)";

  return (
    <div
      data-theme={theme.palette.mode}
      style={{ height: "calc(40vh - 30px)", width: chartWidth }}
    >
      {" "}
      <ReactApexChart
        style={{
          color: "#000",
        }}
        options={options}
        series={series}
        type="bar"
        height={"90%"}
        width={"100%"}
      />
    </div>
  );
};

export default DBCallsCount;
