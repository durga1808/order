import React from "react";
import ReactApexChart from "react-apexcharts";
import { tokens } from "../../../../theme";
import { useTheme } from "@emotion/react";
import { useContext } from "react";
import { GlobalContext } from "../../../../global/globalContext/GlobalContext";
import "./PeakLatencyChart.css";

const PeakLatencyChart = ({ data }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { isCollapsed } = useContext(GlobalContext);


  const peakLatencyInput = () => {
    return (
      <h1>
        PeakLatency Value
      </h1>
    )
  }

  const peakLatencyOptions = {
    chart: {
      height: 250,
      type: "bar",
      toolbar: {
        show: true,
        offsetX: -2,
        offsetY: -25
      }
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
          fontSize: 10,
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
        text: "Latency(ms)",
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
    // title: {
      // text: "Peak Latency > 500(ms)",
      // align: "middle",
      // offsetX: 0,
      // offsetY: 10,
      // style: {
      //   color: colors.textColor[500],
      //   fontSize: 16,
      //   fontWeight: 500,
      //   fontFamily: "Red Hat Display",
      // },
      
    // },
    labels: {
      style: {
        colors: theme.palette.mode === "dark" ? "#FFF" : "#000",
      },
    },
  };
  const peakLatencySeries = [
    {
      name: "Peak Latency",
      data: data.map((item) => item.peakLatency),
    },
  ];


  const chartWidth = isCollapsed ? 'calc(100% - 20px)' : 'calc(103% - 30px)'

  return (
    <>
      <div className="chart-title">
        <p>Peak Latency &gt; 500(ms)</p>
      </div>

      <div data-theme={theme.palette.mode} style={{ height: "calc(40vh - 20px)", width: chartWidth,marginTop:"-25px" }} >
        <ReactApexChart
          style={{
            color: "#000",
          }}
          options={peakLatencyOptions}
          series={peakLatencySeries}
          type="bar"
          height={"80%"}
          width={"100%"}
        />
      </div>
    </>
  );
};

export default PeakLatencyChart;
