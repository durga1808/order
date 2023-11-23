import React from "react";
import ReactApexChart from "react-apexcharts";
import { useTheme } from "@emotion/react";
import { tokens } from "../../../../theme";
import "./ErrorBarChart.css";
import { useContext } from "react";
import { GlobalContext } from "../../../../global/globalContext/GlobalContext";
import { useMediaQuery } from "@mui/material";

const ErrorBarChart = ({ data, onBarClick }) => {
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
      states: {
        hover: {
          color: "#00FF00", // Change this to the desired hover color
        },
      },
    },
  ];

  const chartWidth = isCollapsed ? "calc(100% - 10px)" : "calc(103% - 70px)";

  const chartHeight = isLandscape && isSmallScreen ? "200%" : "90%";

  return (
    <div
    
      data-theme={theme.palette.mode}
      style={{
        // height: "calc(40vh - 35px)",
        height:
          isLandscape && isSmallScreen
            ? "calc(45vh - 35px)"
            : "calc(40vh - 35px)",
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
        // marginLeft:"100px",
        // overflowX: "auto",
        // overflowY: "hidden",
        scrollbarColor: "blue",
        width: chartWidth,
      }}
    >
      {/* <Card elevation={3} style={{ margin: "25px 15px 10px 25px" }}> */}
      {/* {" "} */}
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
      {/* </Card> */}
    </div>
  );
};

export default ErrorBarChart;
