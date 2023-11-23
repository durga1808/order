import React from "react";
import ReactApexChart from "react-apexcharts";
import { useTheme } from "@emotion/react";
import { tokens } from "../../../../theme";
import { useContext } from "react";
import { GlobalContext } from "../../../../global/globalContext/GlobalContext";
import { Box, useMediaQuery } from "@mui/material";

const ErrorSuccessChart = ({ ErrSuccessData, onBarClick }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { isCollapsed } = useContext(GlobalContext);

  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isLandscape = useMediaQuery("(max-width: 1000px) and (orientation: landscape)");
  
  const isiphone = useMediaQuery((theme) => theme.breakpoints.down("iphone"));
  
  const isipadpro = useMediaQuery((theme) =>
    theme.breakpoints.only("isipadpro")
  );
  const issurfacepro = useMediaQuery((theme) =>
  theme.breakpoints.only("issurfacepro")
);

  
  const isipadmini= useMediaQuery((theme) => theme.breakpoints.up("ipadminiwidth"));
  
  const isipadmax = useMediaQuery((theme) => theme.breakpoints.down("ipadmaxwidth"));

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

     // dataLabels: {
    //   enabled: true,
    //   style: {
    //     colors: data.map((item,index) => (item.apiCallCount === index? "#000" : "#FFF")),
    //   },
    // },

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

  const chartWidth = isCollapsed ? 'calc(100% - 10px)' : 'calc(103% - 70px)'

  const chartHeight = (isLandscape && isSmallScreen) ? "200%" : "90%"

  return (
    <Box
      data-theme={theme.palette.mode}
      sx={{
        height: (isLandscape && isSmallScreen) ? "calc(45vh - 35px)" : "calc(40vh - 35px)",
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
        width: chartWidth,
        scrollbarColor: "blue",
      }}
    >
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

export default ErrorSuccessChart;
