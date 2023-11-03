import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { tokens } from "../../../../theme";
import { useTheme } from "@emotion/react";
import { useContext } from "react";
import { GlobalContext } from "../../../../global/globalContext/GlobalContext";
import "./PeakLatencyChart.css";
import { CircularProgress, MenuItem, Select, Typography } from "@mui/material";
import { useEffect } from "react";
import { getPeakLatencyFilterData } from "../../../../api/TraceApiService";
import { useCallback } from "react";
import Loading from "../../../../global/Loading/Loading";

const PeakLatencyChart = () => {
  const {
    lookBackVal,
    setActiveTab,
    setSelected,
    selectedStartDate,
    selectedEndDate,
    needHistoricalData,
    setNavActiveTab,
  } = useContext(GlobalContext);

  const [errorMessage, setErrorMessage] = useState("");
  const [emptyMessage, setEmptyMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [peaklatencyData, setPeakLatencyData] = useState([]);
  const [selectedOption, setSelectedOption] = useState("500");

  // const [FiteredData,setFiteredData] = useState([]);

  const PeaklatencyFiltered = useCallback(async () => {
    try {
      setLoading(true);
      var response = await getPeakLatencyFilterData(
        selectedStartDate,
        selectedOption,
        selectedEndDate,
        lookBackVal.value
      );
      console.log("Peakaltency data " + response);
      if (response.length !== 0) {
        setPeakLatencyData(response);
      } else {
        setEmptyMessage("No Data to show");
      }
      setLoading(false);
    } catch (error) {
      console.log("ERROR on peaklatency filter api " + error);
      setErrorMessage("An error Occurred!");
      setLoading(false);
    }
  }, [
    selectedStartDate,
    selectedEndDate,
    lookBackVal,
    selectedOption,
    needHistoricalData,
  ]);

  useEffect(() => {
    PeaklatencyFiltered();
  }, [PeaklatencyFiltered]);

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { isCollapsed } = useContext(GlobalContext);

  const handleSortOrderChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const sortOrderOptions = [
    {
      label: "50",
      value: "50",
    },
    {
      label: "100",
      value: "100",
    },
    {
      label: "200",
      value: "200",
    },
    {
      label: "500",
      value: "500",
    },
    {
      label: "700",
      value: "700",
    },
    {
      label: "1000",
      value: "1000",
    },
    {
      label: "> 2000",
      value: "2000",
    },
  ];
  const peakLatencyOptions = {
    chart: {
      height: 250,
      type: "bar",
      toolbar: {
        show: true,
        offsetX: -2,
        offsetY: -25,
      },
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
      categories: peaklatencyData.map((item) => item.serviceName),
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
      data: peaklatencyData.map((item) => item.peakLatency),
    },
  ];

  const chartWidth = isCollapsed ? "calc(100% - 20px)" : "calc(103% - 30px)";

  return (
    <>
      <div
        className="chart-title"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          marginBottom: "10px",
          // marginRight:"-30px"
          marginLeft: "50px",
        }}
      >
        <p>Peak Latency &gt; {selectedOption}(ms)</p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            // marginBottom: "10px",
          }}
        >
          <label
            style={{
              fontSize: "8px",
              fontWeight: "500",
              // marginLeft: "20px",
            }}
          >
            Filter (ms)
          </label>

          <Select
            value={selectedOption}
            onChange={handleSortOrderChange}
            style={{
              width: "95px",
              height: "32px",
              marginLeft: "50px",
              // borderColor:"red"
            }}
          >
            <MenuItem value="" disabled>
              Sort Order
            </MenuItem>
            {sortOrderOptions.map((option, index) => (
              <MenuItem key={index} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </div>
      </div>

      <div
        data-theme={theme.palette.mode}
        style={{
          height: "calc(40vh - 20px)",
          width: chartWidth,
          marginTop: "-30px",
        }}
      >
        {loading ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              // height: "80vh",
            }}
          >
            <CircularProgress
              style={{ color: colors.blueAccent[400], marginTop: "65px" }}
              size={30}
              thickness={7}
            />
            <Typography variant="h5" fontWeight={"500"} mt={2}>
              LOADING.....
            </Typography>
          </div>
        ) : (
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
        )}
      </div>
    </>
  );
};

export default PeakLatencyChart;
