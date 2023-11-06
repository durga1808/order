import React, { useContext } from "react";
import ReactApexChart from "react-apexcharts";
import { tokens } from "../../../../theme";
import { useTheme } from "@emotion/react";
import { GlobalContext } from "../../../../global/globalContext/GlobalContext";
import { CircularProgress, MenuItem, Select, Typography } from "@mui/material";
import { sortOrderOptionsTwo } from "../../../../global/MockData/MockTraces";
import { useState } from "react";
import { getKafkaPeakLatencyFilterData } from "../../../../api/TraceApiService";
import { useCallback } from "react";
import { useEffect } from "react";

const PeakLatencyKafka = () => {
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
  const [kafkaPeaklatencyData, setKafkaPeakLatencyData] = useState([]);
  const [selectedOption, setSelectedOption] = useState("10");

  const KafkaPeaklatencyFiltered = useCallback(async () => {
    try {
      setLoading(true);
      var response = await getKafkaPeakLatencyFilterData(
        selectedStartDate,
        selectedOption,
        selectedEndDate,
        lookBackVal.value
      );
      console.log("Kafka Peakaltency data " + response);
      if (response.some(
        (item) => item.kafkaPeakLatency !== 0
      )) {
        setKafkaPeakLatencyData(response);
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
    KafkaPeaklatencyFiltered();
  }, [KafkaPeaklatencyFiltered]);

  const handleSortOrderChange = (event) => {
    setErrorMessage("");
    setEmptyMessage("");
    setSelectedOption(event.target.value);
  };

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
      categories: kafkaPeaklatencyData.map((item) => item.serviceName),
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
    //   text: "Peak Latency > 5(ms)",
    //   align: "middle",
    //   offsetX: 0,
    //   offsetY: 10,
    //   style: {
    //     color: colors.textColor[500],
    //     fontSize: 16,
    //     fontWeight: 500,
    //     fontFamily: "Red Hat Display",
    //   },
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
      data: kafkaPeaklatencyData.map((item) => item.kafkaPeakLatency),
    },
  ];

  const chartWidth = isCollapsed ? 'calc(100% - 10px)' : 'calc(103% - 70px)'

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
            {sortOrderOptionsTwo.map((option, index) => (
              <MenuItem key={index} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </div>

      </div>
      <div data-theme={theme.palette.mode} style={{ width: chartWidth, marginTop: "-30px" }} >
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
          options={peakLatencyOptions}
          series={peakLatencySeries}
          type="bar"
          height={210}
        />)}
      </div>
    </>
  );
};

export default PeakLatencyKafka;
