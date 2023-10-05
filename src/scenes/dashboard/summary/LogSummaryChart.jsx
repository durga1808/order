import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Grid } from "@mui/material";
import DebugBarChart from "./LogCharts/DebugBarChart";
import WarnBarChart from "./LogCharts/WarnBarChart";
import LogServiceDetails from "./LogCharts/LogServiceDetails";
import LogServiceTable from "./LogCharts/LogServiceTable";
import ErrorBarChart from "./LogCharts/ErrorBarChart";
import Loading from "../../../global/Loading/Loading";
import {
  getErroredLogDataForLastTwo,
  getLogSummaryData,
} from "../../../api/LogApiService";
import { useEffect } from "react";
import { GlobalContext } from "../../../global/globalContext/GlobalContext";
import { useContext } from "react";
import { async } from "q";

const LogBarChart = () => {
  const [selectedService, setSelectedService] = useState(null);
  const { lookBackVal } = useContext(GlobalContext);

  // const DebugData = [
  //   {
  //     serviceName: "Service A",
  //     logDebugCount: 100,
  //     traceId: "2384799a01be10b55245e99864bba516",
  //     methodName: "POST",
  //     operationName: "POST /orders/createOrders",
  //     duration: "120ms",
  //     statusCode: "500",
  //     createdTime: "a few seconds ago",
  //   },
  //   {
  //     serviceName: "Service B",
  //     logDebugCount: 150,
  //     traceId: "1d9349e72cb6279ff97befe54f2e982ty",
  //     methodName: "POST /",
  //     operationName: "/personal/details",
  //     duration: "100ms",
  //     statusCode: "401",
  //     createdTime: "a few seconds ago",
  //   },
  //   {
  //     serviceName: "Service C",
  //     logDebugCount: 75,
  //     traceId: "1d9349e72cb6279ff97befe54f2e9asdf",
  //     methodName: "PUT /",
  //     operationName: "/personal/details",
  //     duration: "80ms",
  //     statusCode: "400",
  //     createdTime: "a few seconds ago",
  //   },
  //   {
  //     serviceName: "Service D",
  //     logDebugCount: 68,
  //     traceId: "1d9349e72cb6279ff97befe54f2e9asdf",
  //     methodName: "GET /",
  //     operationName: "/personal/details",
  //     duration: "40ms",
  //     statusCode: "200",
  //     createdTime: "a few seconds ago",
  //   },
  //   {
  //     serviceName: "Service E",
  //     logDebugCount: 120,
  //     traceId: "1d9349e72cb6279ff97befe54f2e9asdf",
  //     methodName: "PATCH /",
  //     operationName: "/personal/details",
  //     duration: "50ms",
  //     statusCode: "200",
  //     createdTime: "a few seconds ago",
  //   },
  //   {
  //     serviceName: "Service F",
  //     logDebugCount: 65,
  //     traceId: "1d9349e72cb6279ff97befe54f2e9asdf",
  //     methodName: "POST /",
  //     operationName: "/personal/details",
  //     duration: "90ms",
  //     statusCode: "401",
  //     createdTime: "a few seconds ago",
  //   },
  //   {
  //     serviceName: "Service G",
  //     logDebugCount: 150,
  //     traceId: "1d9349e72cb6279ff97befe54f2e9asdf",
  //     methodName: "POST /",
  //     operationName: "/personal/details",
  //     duration: "80ms",
  //     statusCode: "400",
  //     createdTime: "a few seconds ago",
  //   },
  //   {
  //     serviceName: "Service H",
  //     logDebugCount: 115,
  //     traceId: "1d9349e72cb6279ff97befe54f2e9asdf",
  //     methodName: "GET /",
  //     operationName: "/personal/details",
  //     duration: "100ms",
  //     statusCode: "200",
  //     createdTime: "a few seconds ago",
  //   },
  //   {
  //     serviceName: "Service I",
  //     logDebugCount: 95,
  //     traceId: "1d9349e72cb6279ff97befe54f2e9asdf",
  //     methodName: "PUT /",
  //     operationName: "/personal/details",
  //     duration: "45ms",
  //     statusCode: "200",
  //     createdTime: "a few seconds ago",
  //   },
  //   {
  //     serviceName: "Service J",
  //     logDebugCount: 90,
  //     traceId: "1d9349e72cb6279ff97befe54f2e9asdf",
  //     methodName: "PATCH /",
  //     operationName: "/personal/details",
  //     duration: "145ms",
  //     statusCode: "200",
  //     createdTime: "a few seconds ago",
  //   },
  // ];

  // const LogWarnData = [
  //   { serviceName: "Service A", logWarnCount: 15 },
  //   { serviceName: "Service B", logWarnCount: 20 },
  //   { serviceName: "Service C", logWarnCount: 15 },
  //   { serviceName: "Service D", logWarnCount: 25 },
  //   { serviceName: "Service E", logWarnCount: 14 },
  //   { serviceName: "Service F", logWarnCount: 35 },
  //   { serviceName: "Service G", logWarnCount: 30 },
  //   { serviceName: "Service H", logWarnCount: 10 },
  //   { serviceName: "Service I", logWarnCount: 20 },
  //   { serviceName: "Service J", logWarnCount: 15 },
  // ];
  // const LogErrorCountData = [
  //   { serviceName: "service A", logErrorCount: 20 },
  //   { serviceName: "Service B", logErrorCount: 30 },
  //   { serviceName: "Service C", logErrorCount: 10 },
  //   { serviceName: "Service D", logErrorCount: 28 },
  //   { serviceName: "Service E", logErrorCount: 60 },
  //   { serviceName: "Service F", logErrorCount: 15 },
  //   { serviceName: "Service G", logErrorCount: 60 },
  //   { serviceName: "Service H", logErrorCount: 15 },
  //   { serviceName: "Service I", logErrorCount: 25 },
  //   { serviceName: "Service J", logErrorCount: 30 },
  //   // { serviceName: "Service K", logErrorCount: 60 },
  //   // { serviceName: "Service L", logErrorCount: 15 },
  //   // { serviceName: "Service M", logErrorCount: 60 },
  //   // { serviceName: "Service N", logErrorCount: 15 },
  //   // { serviceName: "Service O", logErrorCount: 25 },
  //   // { serviceName: "Service P", logErrorCount: 30 },
  // ];

  const [integrationdata, setintegrationdata] = useState([]);
  const [loading, setLoading] = useState(false);

  const logSummaryApiCall = async () => {
    setLoading(true);
    var response = await getLogSummaryData(lookBackVal.value);
    // const traceSummaryData = JSON.parse(JSON.stringify(response));
    setintegrationdata(response);
    // console.log("log summary data " + JSON.parse(JSON.stringify(response)));
    setLoading(false);
  };

  // const errordataforlasttwo =async ()=>{
  //   const response = await getErroredLogDataForLastTwo(page,pageSize,serviceName);
  // }

  useEffect(() => {
    logSummaryApiCall();
    // errordataforlasttwo();
  }, []);

  const handleBarClick = (selectedDataPointIndex) => {
    const serviceName = integrationdata[selectedDataPointIndex].serviceName;
    // const clickedBarData = errorSuccessData[selectedDataPointIndex];
    const LogWarn = integrationdata.find(
      (item) => item.serviceName === serviceName
    ).warnCallCount;
    const LogErrorCount = integrationdata.find(
      (item) => item.serviceName === serviceName
    ).errorCallCount;
    const LogDebugCount = integrationdata.find(
      (item) => item.serviceName === serviceName
    ).debugCallCount;

    setSelectedService(serviceName, LogWarn, LogErrorCount, LogDebugCount);
  };

  const hasErrChartData = integrationdata.some(
    (item) => item.errorCallCount !== 0
  );
  const hasDebugChartData = integrationdata.some(
    (item) => item.debugCallCount !== 0
  );
  const hasWarnChartData = integrationdata.some(
    (item) => item.warnCallCount !== 0
  );

  return (
    <div>
      {loading ? (
        <Loading />
      ) : integrationdata.length !== 0 ? (
        <div
          style={{
            maxHeight: "82vh",
            overflowY: "auto",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Card elevation={3} style={{ margin: "25px" }}>
                <CardContent>
                  {hasErrChartData ? (
                    <ErrorBarChart
                      data={integrationdata}
                      onBarClick={handleBarClick}
                    />
                  ) : (
                    <div>No Data</div>
                  )}
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <LogServiceDetails
            selectedService={selectedService}
            DebugCountData={
              selectedService
                ? integrationdata.find(
                    (item) => item.serviceName === selectedService
                  ).debugCallCount
                : null
            }
            WarnCountData={
              selectedService
                ? integrationdata.find(
                    (item) => item.serviceName === selectedService
                  ).warnCallCount
                : null
            }
            ErrCountData={
              selectedService
                ? integrationdata.find(
                    (item) => item.serviceName === selectedService
                  ).errorCallCount
                : null
            }
          />

          <LogServiceTable
            tableData={integrationdata}
            selectedService={selectedService} // Pass selected service to ServiceTable
          />
          <Grid container spacing={2}>
            {" "}
            <Grid item xs={12} sm={6}>
              <Card elevation={3} style={{ margin: "25px 15px 10px 25px" }}>
                <CardContent>
                  {hasDebugChartData ? (
                    // If any item has debugCallCount !== 0, display the chart
                    <DebugBarChart data={integrationdata} />
                  ) : (
                    // If no item has debugCallCount !== 0, display "No Data" once
                    <div>No Data</div>
                  )}
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card elevation={3} style={{ margin: "25px 25px 10px 15px" }}>
                <CardContent>
                  {hasWarnChartData ? (
                    <WarnBarChart data={integrationdata} />
                  ) : (
                    <div>No Data</div>
                  )}
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
      ) : null}
    </div>
  );
};
export default LogBarChart;
