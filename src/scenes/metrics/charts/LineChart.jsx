import React, { useContext, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import { useTheme, Box } from "@mui/material";
import { tokens } from "../../../theme";
import { GlobalContext } from "../../../global/globalContext/GlobalContext";


const LineChart = ({ data }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { isCollapsed } = useContext(GlobalContext);

  const series = [
    {
      name: data.title,
      data: data.data,
      color:colors.primary[400]
    },
  ];

  const options = {
    chart: {
      type: "area",
      stacked: true,
     
      zoom: {
        type: "x",
        enabled: true,
        autoScaleYaxis: true,
      },
      toolbar: {
        autoSelected: "zoom",
      },
      
      // background: colors.primary[400],
    },
   
    dataLabels: {
      enabled: false,
    },
    // markers: {
    //   size: 5,
    // },
    title: {
      // text: "CPU UTILIZATION",
      text: data.title,
      align: "middle",
      // offsetY: 10,
      style: {
        color: theme.palette.mode === "dark" ? "#FFF" : "#000",
        fontFamily: "Red Hat Display, sans-serif",
        fontWeight: 500,
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        // shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.5,
        opacityTo: 0,
        stops: [0, 90, 100],
      },
    },
    yaxis: {
      title: {
        // text: "USAGE",
        text: data.yaxis,
        style: {
          color: theme.palette.mode === "dark" ? "#FFF" : "#000",
          fontFamily: "Red Hat Display, sans-serif",
          fontWeight: 500,
        },
      },
      // min: minValue,
      // max: maxValue,
      // tickAmount: tickAmount,
      labels: {
        formatter: function (val) {
          return ((val / 1000) * 1000).toFixed(4);
        },
        style: {
          colors: theme.palette.mode === "dark" ? "#FFF" : "#000",
        },
      },
    },
    xaxis: {
      type: "datetime",
      // offsetY: 10,
      title: {
        text: "TIME RANGE",
        style: {
          color: theme.palette.mode === "dark" ? "#FFF" : "#000",
          fontWeight: 500,
          fontFamily: "Red Hat Display, sans-serif",
        },
      },
      labels: {
        style: {
          colors: theme.palette.mode === "dark" ? "#FFF" : "#000",
        },
        datetimeUTC: false,
        datetimeFormatter: {
          year: "yyyy",
          month: "MMM 'yy",
          day: "dd MMM",
          hour: "HH:mm",
        },
      },
    },
    tooltip: {
      enabled: true,
      shared: true,
      // fillSeriesColor: true,
      // theme: false,
      x: {
        format: "dd MMM yyyy HH:mm:ss", // Format the date/time in the tooltip
      },
      y: {
        formatter: function (val) {
          return val;
        },
      },
      style: {
        fontSize: "12px",
      },
    },
    // theme: {
    //   mode: theme.palette.mode,
    //   palette: "palette1",
    //   monochrome: {
    //     enabled: false,
    //     // color: theme.palette.mode === "dark" ? "#FFF" : "#255aee",
    //     // shadeTo: theme.palette.mode === "dark" ? "dark" : "light",
    //     // shadeIntensity: 0.65,
    //   },
    // },
  };

  return (
    <div>
      <div
        style={{
          padding: "10px 10px 10px 10px",
          // border: "1px solid #ddd",
          // backgroundColor: "#f9f9f9",
        }}
      >
        <Box height="50vh" padding="10px" border="1px">
          <ReactApexChart
            options={options}
            series={series}
            type="area"
            height={330}
            width={isCollapsed?1380:1210}
          />
        </Box>
      </div>
    </div>
  );
};

export default LineChart;
