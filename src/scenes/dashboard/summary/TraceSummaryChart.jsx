import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Grid } from "@mui/material";
import ApiCallCount from "./TraceCharts/ApiCallCount";
import PeakLatencyChart from "./TraceCharts/PeakLatencyChart";
import ErrSucssCallCountChart from "./TraceCharts/ErrSucssCallCountChart";
import ServiceDetails from "./TraceCharts/ServiceDetails";

const BarChar = () => {
  const [selectedService, setSelectedService] = useState(null);

  const apiCallsData = [
    { serviceName: "Service A", apiCalls: 100 },
    { serviceName: "Service B", apiCalls: 150 },
    { serviceName: "Service C", apiCalls: 75 },
  ];

  const peakLatencyData = [
    { serviceName: "Service A", peakLatency: 10 },
    { serviceName: "Service B", peakLatency: 20 },
    { serviceName: "Service C", peakLatency: 15 },
  ];

  const errorSuccessData = [
    { serviceName: "Service A", errorCalls: 20, successCalls: 80 },
    { serviceName: "Service B", errorCalls: 30, successCalls: 120 },
    { serviceName: "Service C", errorCalls: 10, successCalls: 65 },
  ];

  const handleBarClick = (selectedDataPointIndex) => {
    const serviceName = errorSuccessData[selectedDataPointIndex].serviceName;
    // const serviceName = "Service A";
    // console.log("there is no service name", event.dataPointIndex);

    const peakLatency = peakLatencyData.find(
      (item) => item.serviceName === serviceName
    ).peakLatency;
    const errorCalls = errorSuccessData.find(
      (item) => item.serviceName === serviceName
    ).errorCalls;

    setSelectedService(serviceName, peakLatency, errorCalls);
  };
  return (
    <div style={{ maxHeight: "80vh", overflowY: "auto" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Card
            elevation={3}
            style={{ margin: "25px 15px 10px 25px", flex: 1 }}
          >
            <CardContent>
              <ApiCallCount data={apiCallsData} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card
            elevation={3}
            style={{ margin: "25px 25px 10px 15px", flex: 1 }}
          >
            <CardContent>
              <PeakLatencyChart data={peakLatencyData} />
            </CardContent>
          </Card>
        </Grid>
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
        ErrSuccessData={
          selectedService
            ? errorSuccessData.find(
                (item) => item.serviceName === selectedService
              ).errorCalls
            : null
        }
      />
    </div>
  );
};
export default BarChar;
