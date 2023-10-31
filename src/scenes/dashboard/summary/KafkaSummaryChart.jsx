import React, { useCallback, useContext, useEffect, useState } from 'react'
import ApiCalls from './KafkaCharts/ApiCalls'
import { Card, CardContent, Grid } from '@mui/material'
import PeakLatencyKafka from './KafkaCharts/PeakLatencyKafka'
import { getKafkaSummaryData } from '../../../api/TraceApiService'
import { GlobalContext } from '../../../global/globalContext/GlobalContext'

const KafkaSummaryChart = () => {
    const { lookBackVal, 
        setActiveTab, 
        setTraceRender, 
        setLogRender, 
        setSelected, 
        traceSummaryService, 
        setMetricRender, 
        setTraceSummaryService, 
        setLogSummaryService, 
        selectedStartDate,
        selectedEndDate ,
        needHistoricalData,
        setNavActiveTab
    } = useContext(GlobalContext);
    const [errorMessage, setErrorMessage] = useState("");
    const [emptyMessage, setEmptyMessage] = useState("");

    const [integrationdata, setintegrationdata] = useState([]);

    const kafkaSummaryCount = useCallback(async () => {
        try {
            var response = await getKafkaSummaryData(selectedStartDate, selectedEndDate, lookBackVal.value, needHistoricalData)
            if (response.length !== 0) {
                setintegrationdata(response);
              } else {
                setEmptyMessage("No Data to show");
              }
        } catch (error) {
            console.log("ERROR on Kafka summary " + error)
            setErrorMessage("An error Occurred!");
        }
    }, [selectedStartDate, selectedEndDate, lookBackVal.value, needHistoricalData])

    useEffect(() => {
        kafkaSummaryCount();
        setActiveTab(3);
        setNavActiveTab(0);
    }, [kafkaSummaryCount, setActiveTab, setNavActiveTab])

  return (
    <div style={{
        maxHeight: "82.5vh",
        overflowY: "auto",
        minWidth: "100%"
      }}>

        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Card elevation={3} style={{ margin: "15px 25px 15px 25px", height: "calc(40vh - 40px)" , color: 'black'}}>
                    <CardContent>
                        <ApiCalls data={integrationdata} />
                    </CardContent>
                </Card>
            </Grid>
        </Grid>

        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Card elevation={3} style={{ margin: "5px 25px 15px 25px", height: "calc(40vh - 40px)" , color: 'black'}}>
                    <CardContent>
                        <PeakLatencyKafka data={integrationdata} />
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    </div>
  )
}

export default KafkaSummaryChart