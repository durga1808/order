import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Grid, Typography, useTheme } from "@mui/material";
import ApiCallCount from "./TraceCharts/ApiCallCount";
import PeakLatencyChart from "./TraceCharts/PeakLatencyChart";
import ErrSucssCallCountChart from "./TraceCharts/ErrSucssCallCountChart";
import ServiceDetails from "./TraceCharts/ServiceDetails";
import ServiceTable from "./TraceCharts/ServiceTable";
import {
  getRecentTraceList,
  getTraceSummaryData,
} from "../../../api/TraceApiService";
import { GlobalContext } from "../../../global/globalContext/GlobalContext";
import { useEffect } from "react";
import { useContext } from "react";
import Loading from "../../../global/Loading/Loading";
import { formatDistanceToNow } from "date-fns";
import { useCallback } from "react";
import { tokens } from "../../../theme";
import { useNavigate } from "react-router-dom";

const TraceBarChart = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [errorCalls, setErrorCalls] = useState(null);
  const [successCalls, setSuccessCalls] = useState(null);
  const { lookBackVal, setActiveTab, setTraceRender, setLogRender, setSelected, traceSummaryService, setMetricRender, setTraceSummaryService,setLogSummaryService } = useContext(GlobalContext);
  const [errorMessage, setErrorMessage] = useState("");
  const [emptyMessage, setEmptyMessage] = useState("");

  const [integrationdata, setintegrationdata] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();


  const traceSummaryApiCall = useCallback(async () => {
    try {
      setLoading(true);
      var response = await getTraceSummaryData(lookBackVal.value);
      if (response.length !== 0) {
        setintegrationdata(response);
      } else {
        setEmptyMessage("No Data to show");
      }

      console.log("Trace summary data " + JSON.stringify(response));
      setLoading(false);
    } catch (error) {
      console.log("error " + error);
      setErrorMessage("An error Occurred!");
      setLoading(false);
    }
  }, [lookBackVal]);

  useEffect(() => {
    setErrorMessage("");
    setEmptyMessage("");
    setTraceSummaryService([]);
    setLogSummaryService([]);
    setMetricRender(false);
    traceSummaryApiCall();
    setActiveTab(0);
    setTraceRender(false);
    setLogRender(false)
  }, [traceSummaryApiCall, setActiveTab, setTraceRender, setLogRender, setMetricRender,setTraceSummaryService,setLogSummaryService]);

  const handleBarClick = (selectedDataPointIndex, selectedSeriesName) => {
    ///DONT REMOVE THIS CODE-----------------//
    const serviceName = integrationdata[selectedDataPointIndex].serviceName;
    console.log("ServiceName from Trace summary" + serviceName);
    // const clickedBarData = integrationdata[selectedDataPointIndex];
    // console.log("serviceName " + serviceName);

    // const peakLatency = integrationdata.find(
    //   (item) => item.serviceName === serviceName
    // ).peakLatency;
    // const errorCalls = integrationdata.find(
    //   (item) => item.serviceName === serviceName
    // ).totalErrorCalls;
    // const successCalls = integrationdata.find(
    //   (item) => item.serviceName === serviceName
    // ).totalSuccessCalls;

    // setSelectedService(serviceName, peakLatency, errorCalls, successCalls);

    // if (selectedSeriesName === "Error Calls") {
    //   setErrorCalls(clickedBarData.totalErrorCalls);
    //   setSuccessCalls(null);
    // } else if (selectedSeriesName === "Success Calls") {
    //   setSuccessCalls(clickedBarData.totalSuccessCalls);
    //   setErrorCalls(null);
    // }
    // const apiBody = {
    //   serviceName: [serviceName]
    // }
    // setNeedFilterCall(true);
    // setFilterApiBody(apiBody);
    traceSummaryService.push(serviceName);
    localStorage.setItem("routeName", "Traces");
    setSelected("Traces");
    navigate("/mainpage/traces");
  };

  const hasErrChartData = integrationdata.some(
    (item) => item.totalErrorCalls !== 0
  );
  const hasApiChartData = integrationdata.some(
    (item) => item.apiCallCount !== 0
  );
  const hasPeakChartData = integrationdata.some(
    (item) => item.peakLatency !== 0
  );

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <div>
      {loading ? (
        <Loading />
      ) : emptyMessage ? (<div style={{ display: 'flex', justifyContent: 'center', alignItems: "center", width: "100%", height: "80vh" }}>
        <Typography variant="h5" fontWeight={"600"}>
          {emptyMessage}
        </Typography>
      </div>) : errorMessage ? (<div style={{ display: 'flex', justifyContent: 'center', alignItems: "center", width: "100%", height: "80vh" }}>
        <Typography variant="h5" fontWeight={"600"}>
          {errorMessage}
        </Typography>
      </div>) : integrationdata.length !== 0 ? (
        <div>
          <div
            style={{
              maxHeight: "82vh",
              overflowY: "auto",
              width: "100%"
            }}
          >
            <div>
              {" "}
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Card elevation={3} style={{ margin: "25px" }}>
                    <CardContent>
                      {hasErrChartData ? (
                        <ErrSucssCallCountChart
                          ErrSuccessData={integrationdata}
                          onBarClick={handleBarClick}
                        />
                      ) : (
                        // <div>Error and Success Call Count Chart - No Data</div>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: "center", height: 240, width: "100%" }}>
                          <Typography variant="h5" fontWeight={"600"}>
                            Error and Success Count Chart - No Data
                          </Typography>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>


              {/* {hasErrChartData ? (
                <ServiceDetails
                  selectedService={selectedService}
                  APICallsData={
                    selectedService
                      ? integrationdata.find(
                        (item) => item.serviceName === selectedService
                      ).apiCallCount
                      : null
                  }
                  PeakLatencyData={
                    selectedService
                      ? integrationdata.find(
                        (item) => item.serviceName === selectedService
                      ).peakLatency
                      : null
                  }
                  ErrorData={errorCalls}
                  SuccessData={successCalls}
                />
              ) : null}
              <ServiceTable selectedService={selectedService} /> */}
              <Grid container spacing={2}>
                {" "}
                <Grid item xs={12} sm={6}>
                  <Card elevation={3} style={{ margin: "5px 15px 10px 25px" }}>
                    <CardContent>
                      {/* {integrationdata.map((items) =>
                        items.apiCallCount !== 0 ? (
                          <ApiCallCount data={integrationdata} />
                        ) : (
                          <div>No Data</div>
                        )
                      )} */}

                      {hasApiChartData ? (
                        <ApiCallCount data={integrationdata} />
                      ) : (
                        // <div>Api Call Count Chart - No data</div>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: "center", height: 240 }}>
                          <Typography variant="h5" fontWeight={"600"}>
                            Api Count Chart - No data
                          </Typography>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Card elevation={3} style={{ margin: "5px 25px 10px 15px" }}>
                    <CardContent>
                      {hasPeakChartData ? (
                        <PeakLatencyChart data={integrationdata} />
                      ) : (
                        // <div>PeakLatency Call Count Chart - No data</div>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: "center", height: 240 }}>
                          <Typography variant="h5" fontWeight={"600"}>
                            PeakLatency Count Chart - No data
                          </Typography>
                        </div>

                      )}
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
export default TraceBarChart;
