import React, { useContext } from "react";
import ReactApexChart from "react-apexcharts";
import { useTheme } from "@emotion/react";
import { tokens } from "../../../../theme";
import { Box, Card, useMediaQuery } from "@mui/material";
import { GlobalContext } from "../../../../global/globalContext/GlobalContext";

const DBCallsCount = ({ data, onBarClick }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { isCollapsed } = useContext(GlobalContext);

  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isLandscape = useMediaQuery(
    "(max-width: 1000px) and (orientation: landscape)"
  );

  const isiphone = useMediaQuery((theme) => theme.breakpoints.down("iphone"));


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

  const chartHeight = isLandscape && isSmallScreen ? "200%" : "90%";

  return (
    <Box
      data-theme={theme.palette.mode}
      sx={{ 
        // height: "calc(40vh - 30px)", 
        height:
          isLandscape && isSmallScreen
            ? "calc(45vh - 35px)"
            : "calc(40vh - 30px)",
            ...(isiphone && {
              height: "calc(70vh - 32px)",
    
              // backgroundColor: "grey",
            }),
        width: chartWidth }}
    >
      {" "}
      <ReactApexChart
        style={{
          color: "#000",
        }}
        options={options}
        series={series}
        type="bar"
        height={chartHeight}
        width={"100%"}
      />
    </Box>
  );
};

export default DBCallsCount;
