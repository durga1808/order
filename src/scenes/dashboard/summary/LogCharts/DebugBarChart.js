import React from "react";
import ReactApexChart from "react-apexcharts";
import { useTheme } from "@emotion/react";
import { tokens } from "../../../../theme";
import { useContext } from "react";
import { GlobalContext } from "../../../../global/globalContext/GlobalContext";
import { Box, useMediaQuery } from "@mui/material";

const DebugBarChart = ({ data }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { isCollapsed } = useContext(GlobalContext);


  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isLandscape = useMediaQuery(
    "(max-width: 1000px) and (orientation: landscape)"
  );

  const isiphone = useMediaQuery((theme) => theme.breakpoints.down("iphone"));
  const isipadpro = useMediaQuery((theme) =>
  theme.breakpoints.only("isipadpro")
);
const issurfacepro = useMediaQuery((theme) =>
  theme.breakpoints.only("issurfacepro")
);


  const DebugBarChartOption = {
    chart: {
      height: 250,
      type: "bar",
    },
    plotOptions: {
      bar: {
        columnWidth: "30px",
      },
    },

    xaxis: {
      labels: {
        rotate: -45,
        style: {
          colors: colors.textColor[500],
          fontSize: 12,
          fontWeight: 500,
          fontFamily: "Red Hat Display",
        },
      },
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
    },

    yaxis: {
      title: {
        text: "Log Debug Count",
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
      text: "Log Debug Count",
      align: "middle",
      offsetX: 0,
      offsetY: 10,
      style: {
        color: colors.textColor[500],
        fontSize: 16,
        fontWeight: 500,
        fontFamily: "Red Hat Display",
      },
    },
  };

  const debugcountseries = [
    {
      name: "Debug Count",
      data: data.map((item) => item.debugCallCount),
    },
  ];

  const chartWidth = isCollapsed ? 'calc(100% - 10px)' : "calc(103% - 70px)"

  const chartHeight = isLandscape && isSmallScreen ? "200%" : "90%";

  return (
    <Box data-theme={theme.palette.mode} sx={{
      // height: "calc(40vh - 20px)",
      height:
          isLandscape && isSmallScreen
            ? "calc(45vh - 35px)"
            : "calc(40vh - 20px)",
        ...(isiphone && {
          height: "calc(80vh - 32px)",
        }),
        ...(
          isipadpro && {
            height: "calc(28vh - 32px)",
          }),
          ...(
            issurfacepro && {
              height: "calc(35vh - 32px)",
            }),
      width: chartWidth,}}>
      <ReactApexChart
    
      style={{
        color: "#000",
      }}
        options={DebugBarChartOption}
        series={debugcountseries}
        type="bar"
        height={chartHeight}
        width={"100%"}
      />
    </Box>
  );
};

export default DebugBarChart;

