import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { useTheme } from "@emotion/react";
import { tokens } from "../../../../theme";
import { useContext } from "react";
import { GlobalContext } from "../../../../global/globalContext/GlobalContext";
import { CircularProgress, MenuItem, Select, Typography } from "@mui/material";
import { sortOrderOptions } from "../../../../global/MockData/MockTraces";
import { useCallback } from "react";
import { getDBPeakLatencyFilterData } from "../../../../api/TraceApiService";
import { useEffect } from "react";

const DBCallsCount = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const {
    isCollapsed,
    lookBackVal,
    selectedStartDate,
    selectedEndDate,
  } = useContext(GlobalContext);

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [emptyMessage, setEmptyMessage] = useState("");
  const [dbPeaklatencyData, setDbPeakLatencyData] = useState([]);
  const [selectedOption, setSelectedOption] = useState("50");

  const DBPeaklatencyFiltered = useCallback(async () => {
    try {
      setLoading(true);
      var response = await getDBPeakLatencyFilterData(
        selectedStartDate,
        selectedOption,
        selectedEndDate,
        lookBackVal.value
      );
      if (response.some(
        (item) => item.dbPeakLatencyCount !== 0
      )) {
        setDbPeakLatencyData(response);
      } else {
        setEmptyMessage("No Data to show");
      }
    } catch (error) {
      console.log("ERROR on peaklatency filter api " + error);
      setErrorMessage("An error Occurred!");
    } finally {
      setLoading(false);
    }
  }, [
    selectedStartDate,
    selectedEndDate,
    lookBackVal,
    selectedOption,
  ]);

  useEffect(() => {
    DBPeaklatencyFiltered();
  }, [DBPeaklatencyFiltered]);


  const handleSortOrderChange = (event) => {
    setErrorMessage("");
    setEmptyMessage("");
    setSelectedOption(event.target.value);
  };

  const options = {
    chart: {
      type: "bar",
      height: 300,
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
      categories: dbPeaklatencyData.map((item) => item.serviceName),
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
    //   text: "Peak Latency > 50(ms)",
    //   align: "center",
    //   margin: 5,
    //   offsetX: 0,
    //   offsetY: 5,
    //   style: {
    //     color: colors.textColor[500],
    //     fontSize: 16,
    //     fontWeight: 500,
    //     fontFamily: "Red Hat Display",
    //   },
    // },
  };

  const series = [
    {
      name: "DB Calls",
      data: dbPeaklatencyData.map((item) => item.dbPeakLatencyCount),
      //   color: "#04700b",
    },
  ];

  const chartWidth = isCollapsed ? "calc(100% - 10px)" : "calc(103% - 70px)";

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
          marginLeft: "250px",
        }}
      >
        <p>Peak Latency &gt; {selectedOption}(ms)</p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            // justifyContent: "center",
            // marginBottom: "10px",
            marginLeft: "130px"
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
        style={{ height: "calc(40vh - 30px)", width: chartWidth, marginTop: "-30px" }}
      >
        {loading ? (<div
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
        </div>) : emptyMessage ? (<div style={{ display: 'flex', justifyContent: 'center', alignItems: "center", height: "calc(30vh - 25px)" }}>
          <Typography variant="h5" fontWeight={"600"}>
            PeakLatency Count Chart - No data
          </Typography>
        </div>) : errorMessage ? (<div style={{ display: 'flex', justifyContent: 'center', alignItems: "center", height: "calc(30vh - 25px)" }}>
          <Typography variant="h5" fontWeight={"600"}>
            Error Occurred
          </Typography>
        </div>) : (<ReactApexChart
          style={{
            color: theme.palette.mode === "light" ? "#000" : "#000",
          }}
          options={options}
          series={series}
          type="bar"
          height={"80%"}
          width={"100%"}
        />)}
      </div>
    </>
  );
};

export default DBCallsCount;
