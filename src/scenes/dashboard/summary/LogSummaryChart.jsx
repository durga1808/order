import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Grid } from "@mui/material";
import DebugBarChart from "./LogCharts/DebugBarChart";
import WarnBarChart from "./LogCharts/WarnBarChart";
import LogServiceDetails from "./LogCharts/LogServiceDetails";
import LogServiceTable from "./LogCharts/LogServiceTable";
import ErrorBarChart from "./LogCharts/ErrorBarChart";

const LogBarChart = () => {
  const [selectedService, setSelectedService] = useState(null);

  const DebugData = [
    {
      serviceName: "Service A",
      logDebugCount: 100,
      traceId: "2384799a01be10b55245e99864bba516",
      methodName: "POST",
      operationName: "POST /orders/createOrders",
      duration: "120ms",
      statusCode: "500",
      createdTime: "a few seconds ago",
    },
    {
      serviceName: "Service B",
      logDebugCount: 150,
      traceId: "1d9349e72cb6279ff97befe54f2e982ty",
      methodName: "POST /",
      operationName: "/personal/details",
      duration: "100ms",
      statusCode: "401",
      createdTime: "a few seconds ago",
    },
    {
      serviceName: "Service C",
      logDebugCount: 75,
      traceId: "1d9349e72cb6279ff97befe54f2e9asdf",
      methodName: "PUT /",
      operationName: "/personal/details",
      duration: "80ms",
      statusCode: "400",
      createdTime: "a few seconds ago",
    },
    {
      serviceName: "Service D",
      logDebugCount: 68,
      traceId: "1d9349e72cb6279ff97befe54f2e9asdf",
      methodName: "GET /",
      operationName: "/personal/details",
      duration: "40ms",
      statusCode: "200",
      createdTime: "a few seconds ago",
    },
    {
      serviceName: "Service E",
      logDebugCount: 120,
      traceId: "1d9349e72cb6279ff97befe54f2e9asdf",
      methodName: "PATCH /",
      operationName: "/personal/details",
      duration: "50ms",
      statusCode: "200",
      createdTime: "a few seconds ago",
    },
    {
      serviceName: "Service F",
      logDebugCount: 65,
      traceId: "1d9349e72cb6279ff97befe54f2e9asdf",
      methodName: "POST /",
      operationName: "/personal/details",
      duration: "90ms",
      statusCode: "401",
      createdTime: "a few seconds ago",
    },
    {
      serviceName: "Service G",
      logDebugCount: 150,
      traceId: "1d9349e72cb6279ff97befe54f2e9asdf",
      methodName: "POST /",
      operationName: "/personal/details",
      duration: "80ms",
      statusCode: "400",
      createdTime: "a few seconds ago",
    },
    {
      serviceName: "Service H",
      logDebugCount: 115,
      traceId: "1d9349e72cb6279ff97befe54f2e9asdf",
      methodName: "GET /",
      operationName: "/personal/details",
      duration: "100ms",
      statusCode: "200",
      createdTime: "a few seconds ago",
    },
    {
      serviceName: "Service I",
      logDebugCount: 95,
      traceId: "1d9349e72cb6279ff97befe54f2e9asdf",
      methodName: "PUT /",
      operationName: "/personal/details",
      duration: "45ms",
      statusCode: "200",
      createdTime: "a few seconds ago",
    },
    {
      serviceName: "Service J",
      logDebugCount: 90,
      traceId: "1d9349e72cb6279ff97befe54f2e9asdf",
      methodName: "PATCH /",
      operationName: "/personal/details",
      duration: "145ms",
      statusCode: "200",
      createdTime: "a few seconds ago",
    },
  ];

  const LogWarnData = [
    { serviceName: "Service A", logWarnCount: 15 },
    { serviceName: "Service B", logWarnCount: 20 },
    { serviceName: "Service C", logWarnCount: 15 },
    { serviceName: "Service D", logWarnCount: 25 },
    { serviceName: "Service E", logWarnCount: 14 },
    { serviceName: "Service F", logWarnCount: 35 },
    { serviceName: "Service G", logWarnCount: 30 },
    { serviceName: "Service H", logWarnCount: 10 },
    { serviceName: "Service I", logWarnCount: 20 },
    { serviceName: "Service J", logWarnCount: 15 },
  ];
  const LogErrorCountData = [
    { serviceName: "service A", logErrorCount: 20 },
    { serviceName: "Service B", logErrorCount: 30 },
    { serviceName: "Service C", logErrorCount: 10 },
    { serviceName: "Service D", logErrorCount: 28 },
    { serviceName: "Service E", logErrorCount: 60 },
    { serviceName: "Service F", logErrorCount: 15 },
    { serviceName: "Service G", logErrorCount: 60 },
    { serviceName: "Service H", logErrorCount: 15 },
    { serviceName: "Service I", logErrorCount: 25 },
    { serviceName: "Service J", logErrorCount: 30 },
    // { serviceName: "Service K", logErrorCount: 60 },
    // { serviceName: "Service L", logErrorCount: 15 },
    // { serviceName: "Service M", logErrorCount: 60 },
    // { serviceName: "Service N", logErrorCount: 15 },
    // { serviceName: "Service O", logErrorCount: 25 },
    // { serviceName: "Service P", logErrorCount: 30 },
  ];
  const handleBarClick = (selectedDataPointIndex) => {
    const serviceName = LogErrorCountData[selectedDataPointIndex].serviceName;
    // const clickedBarData = errorSuccessData[selectedDataPointIndex];
    const LogWarn = LogWarnData.find(
      (item) => item.serviceName === serviceName
    ).logWarnCount;
    const LogErrorCount = LogErrorCountData.find(
      (item) => item.serviceName === serviceName
    ).logErrorCount;
    const LogDebugCount = DebugData.find(
      (item) => item.serviceName === serviceName
    ).logDebugCount;

    setSelectedService(serviceName, LogWarn, LogErrorCount, LogDebugCount);

    // if (selectedSeriesName === "Error Calls") {
    //   setErrorCalls(clickedBarData.errorCalls);
    //   setSuccessCalls(null);
    // } else if (selectedSeriesName === "Success Calls") {
    //   setSuccessCalls(clickedBarData.successCalls);
    //   setErrorCalls(null);
    // }
  };
  return (
    <div
      style={{
        // height: "calc(93vh-70px)",
        maxHeight: "82vh",
        overflowY: "auto",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Card elevation={3} style={{ margin: "25px" }}>
            <CardContent>
              <ErrorBarChart
                data={LogErrorCountData}
                onBarClick={handleBarClick}
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <LogServiceDetails
        selectedService={selectedService}
        DebugCountData={
          selectedService
            ? DebugData.find((item) => item.serviceName === selectedService)
                .logDebugCount
            : null
        }
        WarnCountData={
          selectedService
            ? LogWarnData.find((item) => item.serviceName === selectedService)
                .logWarnCount
            : null
        }
        ErrCountData={
          selectedService
            ? LogErrorCountData.find(
                (item) => item.serviceName === selectedService
              ).logErrorCount
            : null
        }
      />

      <LogServiceTable
        tableData={DebugData}
        selectedService={selectedService} // Pass selected service to ServiceTable
      />
      <Grid container spacing={2}>
        {" "}
        <Grid item xs={12} sm={6}>
          <Card elevation={3} style={{ margin: "25px 15px 10px 25px" }}>
            <CardContent>
              <DebugBarChart data={DebugData} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card elevation={3} style={{ margin: "25px 25px 10px 15px" }}>
            <CardContent>
              <WarnBarChart data={LogWarnData} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};
export default LogBarChart;
