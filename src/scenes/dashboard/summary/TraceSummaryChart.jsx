import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Grid } from "@mui/material";
import ApiCallCount from "./TraceCharts/ApiCallCount";
import PeakLatencyChart from "./TraceCharts/PeakLatencyChart";
import ErrSucssCallCountChart from "./TraceCharts/ErrSucssCallCountChart";
import ServiceDetails from "./TraceCharts/ServiceDetails";
import ServiceTable from "./TraceCharts/ServiceTable";
import { getTraceSummaryData } from "../../../api/TraceApiService";
import { GlobalContext } from "../../../global/globalContext/GlobalContext";
import { useEffect } from "react";
import { useContext } from "react";

const TraceBarChart = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [errorCalls, setErrorCalls] = useState(null);
  const [successCalls, setSuccessCalls] = useState(null);
  const {lookBackVal} = useContext(GlobalContext);

  const apiCallsData = [
    {
      serviceName: "order-project",
      apiCalls: 100,
      traceId: "2384799a01be10b55245e99864bba516",
      methodName: "POST",
      operationName: "POST /orders/createOrders",
      duration: "120ms",
      statusCode: "500",
      createdTime: "a few seconds ago",
    },
    {
      serviceName: "Service B",
      apiCalls: 150,
      traceId: "1d9349e72cb6279ff97befe54f2e982ty",
      methodName: "POST /",
      operationName: "/personal/details",
      duration: "100ms",
      statusCode: "401",
      createdTime: "a few seconds ago",
    },
    {
      serviceName: "Service C",
      apiCalls: 75,
      traceId: "1d9349e72cb6279ff97befe54f2e9asdf",
      methodName: "PUT /",
      operationName: "/personal/details",
      duration: "80ms",
      statusCode: "400",
      createdTime: "a few seconds ago",
    },
    {
      serviceName: "Service D",
      apiCalls: 68,
      traceId: "1d9349e72cb6279ff97befe54f2e9asdf",
      methodName: "GET /",
      operationName: "/personal/details",
      duration: "40ms",
      statusCode: "200",
      createdTime: "a few seconds ago",
    },
    {
      serviceName: "Service E",
      apiCalls: 120,
      traceId: "1d9349e72cb6279ff97befe54f2e9asdf",
      methodName: "PATCH /",
      operationName: "/personal/details",
      duration: "50ms",
      statusCode: "200",
      createdTime: "a few seconds ago",
    },
    {
      serviceName: "Service F",
      apiCalls: 65,
      traceId: "1d9349e72cb6279ff97befe54f2e9asdf",
      methodName: "POST /",
      operationName: "/personal/details",
      duration: "90ms",
      statusCode: "401",
      createdTime: "a few seconds ago",
    },
    {
      serviceName: "Service G",
      apiCalls: 150,
      traceId: "1d9349e72cb6279ff97befe54f2e9asdf",
      methodName: "POST /",
      operationName: "/personal/details",
      duration: "80ms",
      statusCode: "400",
      createdTime: "a few seconds ago",
    },
    {
      serviceName: "Service H",
      apiCalls: 115,
      traceId: "1d9349e72cb6279ff97befe54f2e9asdf",
      methodName: "GET /",
      operationName: "/personal/details",
      duration: "100ms",
      statusCode: "200",
      createdTime: "a few seconds ago",
    },
    {
      serviceName: "Service I",
      apiCalls: 95,
      traceId: "1d9349e72cb6279ff97befe54f2e9asdf",
      methodName: "PUT /",
      operationName: "/personal/details",
      duration: "45ms",
      statusCode: "200",
      createdTime: "a few seconds ago",
    },
    {
      serviceName: "Service J",
      apiCalls: 90,
      traceId: "1d9349e72cb6279ff97befe54f2e9asdf",
      methodName: "PATCH /",
      operationName: "/personal/details",
      duration: "145ms",
      statusCode: "200",
      createdTime: "a few seconds ago",
    },
  ];

  const peakLatencyData = [
    { serviceName: "order-project", peakLatency: 10 },
    { serviceName: "Service B", peakLatency: 20 },
    { serviceName: "Service C", peakLatency: 15 },
    { serviceName: "Service D", peakLatency: 25 },
    { serviceName: "Service E", peakLatency: 14 },
    { serviceName: "Service F", peakLatency: 35 },
    { serviceName: "Service G", peakLatency: 30 },
    { serviceName: "Service H", peakLatency: 10 },
    { serviceName: "Service I", peakLatency: 20 },
    { serviceName: "Service J", peakLatency: 15 },
  ];

  const errorSuccessData = [
    { serviceName: "order-project", errorCalls: 20, successCalls: 80 },
    { serviceName: "Service B", errorCalls: 30, successCalls: 120 },
    { serviceName: "Service C", errorCalls: 10, successCalls: 65 },
    { serviceName: "Service D", errorCalls: 28, successCalls: 40 },
    { serviceName: "Service E", errorCalls: 60, successCalls: 60 },
    { serviceName: "Service F", errorCalls: 15, successCalls: 50 },
    { serviceName: "Service G", errorCalls: 60, successCalls: 90 },
    { serviceName: "Service H", errorCalls: 15, successCalls: 100 },
    { serviceName: "Service I", errorCalls: 25, successCalls: 70 },
    { serviceName: "Service J", errorCalls: 30, successCalls: 60 },
  ];

  const traceSummaryApiCall = async () => {
    const traceSummaryData = await getTraceSummaryData(lookBackVal.value);
    console.log("Trace summary data " + JSON.stringify(traceSummaryData));
  }

  useEffect(() => {
    traceSummaryApiCall();
  }, [])

  const handleBarClick = (selectedDataPointIndex, selectedSeriesName) => {
    const serviceName = errorSuccessData[selectedDataPointIndex].serviceName;
    const clickedBarData = errorSuccessData[selectedDataPointIndex];
    const peakLatency = peakLatencyData.find(
      (item) => item.serviceName === serviceName
    ).peakLatency;
    const errorCalls = errorSuccessData.find(
      (item) => item.serviceName === serviceName
    ).errorCalls;
    const successCalls = errorSuccessData.find(
      (item) => item.serviceName === serviceName
    ).successCalls;

    setSelectedService(serviceName, peakLatency, errorCalls, successCalls);

    if (selectedSeriesName === "Error Calls") {
      setErrorCalls(clickedBarData.errorCalls);
      setSuccessCalls(null);
    } else if (selectedSeriesName === "Success Calls") {
      setSuccessCalls(clickedBarData.successCalls);
      setErrorCalls(null);
    }
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
              <ErrSucssCallCountChart
                ErrSuccessData={errorSuccessData}
                onBarClick={handleBarClick}
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <ServiceDetails
        selectedService={selectedService}
        APICallsData={
          selectedService
            ? apiCallsData.find((item) => item.serviceName === selectedService)
                .apiCalls
            : null
        }
        PeakLatencyData={
          selectedService
            ? peakLatencyData.find(
                (item) => item.serviceName === selectedService
              ).peakLatency
            : null
        }
        ErrorData={errorCalls}
        SuccessData={successCalls}
      />

      <ServiceTable
        APICallsData={apiCallsData}
        PeakLatencyData={peakLatencyData}
        ErrSuccessData={errorSuccessData}
        selectedService={selectedService} // Pass selected service to ServiceTable
      />
      <Grid container spacing={2}>
        {" "}
        <Grid item xs={12} sm={6}>
          <Card elevation={3} style={{ margin: "25px 15px 10px 25px" }}>
            <CardContent>
              <ApiCallCount data={apiCallsData} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card elevation={3} style={{ margin: "25px 25px 10px 15px" }}>
            <CardContent>
              <PeakLatencyChart data={peakLatencyData} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};
export default TraceBarChart;
