import React, { useCallback, useEffect, useState } from "react";
import MetricLayout from "./MetricLayout";
import LineChart from "./charts/LineChart";
// import { Box } from "@mui/material";
import Box from "@mui/material/Box";
import { Card, MenuItem, Select, Typography, colors, useTheme } from "@mui/material";
import { GlobalContext } from "../../global/globalContext/GlobalContext";
import Dropdown from "react-dropdown";
import { useContext } from "react";
import "./MetricLayout.css";
import { getMetricDataApi } from "../../api/MetricApiService";
import Loading from "../../global/Loading/Loading";
import { tokens } from "../../theme";

const Metrics = () => {
  const dataFields = [
    {
      x: new Date(1695875216150),
      y: 30,
    },
    {
      x: new Date("2023-10-11").getTime(),
      y: 40,
    },
    {
      x: new Date("2023-10-12").getTime(),
      y: 50,
    },
    {
      x: new Date("2023-10-13").getTime(),
      y: 35,
    },
  ];

  const dataFields1 = [
    {
      x: new Date("2023-10-10").getTime(),
      y: 30,
    },
    {
      x: new Date("2023-10-11").getTime(),
      y: 40,
    },
    {
      x: new Date("2023-10-12").getTime(),
      y: 50,
    },
    {
      x: new Date(1695875216150),
      y: 55,
    },
  ];

  // const services = [
  //   "order-project",
  //   "vendor-project",
  //   "ProviderService",
  //   "DeliveryService",
  // ];

  const { lookBackVal, setTraceRender, setLogRender, setMetricRender, metricRender,setTraceSummaryService,setLogSummaryService } = useContext(GlobalContext);
  const [services, setServices] = useState(JSON.parse(localStorage.getItem("serviceListData")));
  const options = services.map((serve) => serve);
  const [selectedService, setSelectedService] = useState((services && services.length > 0) ? services[0] : null);
  const [cpuUsageData, setCpuUsageData] = useState([]);
  const [memoryUsageData, setMemoryUsageData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [emptyMessage, setEmptyMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleServiceChange = (event) => {
    console.log("Service " + event.target.value);
    setMetricRender(false);
    setSelectedService(event.target.value);
  };

  const handleMetricData = (metricData) => {
    const processedData = metricData.map((metric) => {
      const timestamp = new Date(metric.date).getTime(); // Convert date string to timestamp


      return {
        x: timestamp,
        y_cpuUsage: metric.cpuUsage,
        y_memoryUsage: metric.memoryUsage,
      };
    });

    const cpuData = processedData.map((data) => ({
      x: data.x,
      y: data.y_cpuUsage,
    }));

    const memoryData = processedData.map((data) => ({
      x: data.x,
      y: data.y_memoryUsage,
    }));

    // Set state variables with processed data
    setCpuUsageData(cpuData);
    setMemoryUsageData(memoryData);

    console.log("CPU Usage Data: ", cpuData);
    console.log("Memory Usage Data: ", memoryData);
  };

  const mockMetrics = [
    {
      data: cpuUsageData,
      title: "CPU Usage",
      yaxis: "Cpu Usage",
    },
    {
      data: memoryUsageData,
      title: "Memory Utilization",
      yaxis: "Memory Usage",
    },
  ];

  const getAllMetricsData = useCallback(async (service) => {
    setLoading(true);
    try {
      console.log("Selected service " + service);
      const metricData = await getMetricDataApi(service, lookBackVal.value);
      if (metricData.length !== 0) {
        console.log("metric data " + JSON.stringify(metricData));
        handleMetricData(metricData);
      } else {
        setEmptyMessage("No Metric Data to show!");
      }
    } catch (error) {
      console.log("metric data Error " + error);
      setErrorMessage("An error occurred!");
    } finally {
      setMetricRender(true);
      setLoading(false);
    }
  }, [lookBackVal, setMetricRender]);

  useEffect(() => {
    setErrorMessage("");
    setEmptyMessage("");
    setTraceSummaryService([]);
    setLogSummaryService([]);
    if (!metricRender) {
      getAllMetricsData(selectedService);
    }
    // getAllMetricsData();
    setTraceRender(false);
    setLogRender(false);
  }, [getAllMetricsData, setTraceRender, setLogRender, metricRender,selectedService,setTraceSummaryService,setLogSummaryService]);

  return (
    // <MetricLayout/>
    <>
      <div style={{ height: "calc(93vh - 70px)", overflowY: "auto" }}>
        <div style={{ margin: "5px 10px 5px 10px" }}>
          <div>
            <div style={{ fontSize: '12px', paddingBottom: '5px' }}>ServiceBy</div>
            <Select
              value={selectedService}
              onChange={handleServiceChange}
              displayEmpty
              inputProps={{ "aria-label": "Select Service" }}
            >
              <MenuItem value="" disabled>
                Services
              </MenuItem>
              {options.map((service, index) => (
                <MenuItem key={index} value={service}>
                  {service}
                </MenuItem>
              ))}
            </Select>
          </div>
        </div>
        {loading ? (
          <Loading />
        ) : emptyMessage ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "80vh",
            }}
          >
            <Typography variant="h5" fontWeight={"600"}>
              {emptyMessage}
            </Typography>
          </div>
        ) : errorMessage ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "80vh",
            }}
          >
            <Typography variant="h5" fontWeight={"600"}>
              {errorMessage}
            </Typography>
          </div>
        ) : (
          <div>
            {mockMetrics.map((mock, index) => (
              <Card
                key={index}
                // padding="10px"
                sx={{backgroundColor:colors.primary[500]}}
                style={{ margin: "10px 10px 15px 10px" }}
              >
                <LineChart data={mock} />
              </Card>
            ))}
          </div>
        )}
      </div></>

  );
};

export default Metrics;
