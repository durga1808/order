import React from 'react'
import { Card, CardContent, Typography, CardActionArea, Box, useTheme, CardHeader, Pagination } from '@mui/material';
import "./TraceList.css";
import { tokens } from '../../../theme';
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { useEffect } from 'react';
import { useState } from 'react';
import { spanData } from '../../../global/MockData/SpanData';
import { useContext } from 'react';
import { GlobalContext } from '../../../global/globalContext/GlobalContext';
import { FindByTraceIdForSpans, TraceFilterOption, TraceListPaginationApi } from '../../../api/TraceApiService';
import { formatDistanceToNow, parseISO } from 'date-fns';
import { useCallback } from 'react';

const mockTraces = [
    {
        servicename: 'orderService',
        endPoint: '/order/getOrderById/{id}',
        traceID: '123456987667898767898768987984594b345679',
        createdTime: 'a few seconds ago',
        statusCode: '200',
        method: 'GET',
        duration: '100 ms',
    },
    {
        servicename: 'Service 2',
        endPoint: '/endpoint2',
        traceID: '789012',
        createdTime: '1 min ago',
        statusCode: '404',
        method: 'POST',
        duration: '200 ms',
    },
    {
        servicename: 'Service 3',
        endPoint: '/endpoint3',
        traceID: '345678',
        createdTime: '2 min ago',
        statusCode: '200',
        method: 'GET',
        duration: '250 ms',
    },
    {
        servicename: 'Service 4',
        endPoint: '/endpoint4',
        traceID: '123456',
        createdTime: '5 min ago',
        statusCode: '200',
        method: 'GET',
        duration: '200 ms',
    },
    {
        servicename: 'Service 5',
        endPoint: '/endpoint5',
        traceID: '123456',
        createdTime: '10 min ago',
        statusCode: '200',
        method: 'GET',
        duration: '150 ms',
    },
    {
        servicename: 'vendorService',
        endPoint: '/vendor/deleteVendorById/{id}',
        traceID: '123456',
        createdTime: '15 min ago',
        statusCode: '200',
        method: 'DELETE',
        duration: '200 ms',
    }
];

// const sortOrder = ['Earliest First', 'Oldest First', 'Error First', 'Peak Latency First'];

const sortOrderOptions = [
    {
        label: "Newest First",
        value: "new"
    },
    {
        label: "Oldest First",
        value: "old"
    },
    {
        label: "Error First",
        value: "error"
    },
    {
        label: "Peaked Latency First",
        value: "peakLatency"
    }
]

const TraceList = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    // const [traceData, setTraceData] = useState([]);
    const { setSelectedTrace, traceData, setTraceData, lookBackVal, needFilterCall, filterApiBody, setTraceGlobalEmpty, setTraceGlobalError, setTraceLoading } = useContext(GlobalContext);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPageCount, setTotalPageCount] = useState(0);
    const [selectedSortOrder, setSelectedSortOrder] = useState("new");
    // const [isEmptyData, setIsEmptyData] = useState(false);
    // const [emptyMessage, setEmptyMessage] = useState(null);
    // const [error, setError] = useState(null);
    const pageLimit = 10;


    const createTimeInWords = (data) => {
        // Iterate through data and update createdTime
        const updatedData = data.map(item => {
            const createdTime = new Date(item.createdTime); // Convert timestamp to Date object
            const timeAgo = formatDistanceToNow(createdTime, { addSuffix: true });
            return { ...item, createdTimeInWords: timeAgo };
        });
        return updatedData;
    }


    const apiCall = useCallback(async (newpage) => {
        try {
            const { data, totalCount } = await TraceListPaginationApi(newpage, pageLimit, lookBackVal.value, selectedSortOrder);
            const updatedData = createTimeInWords(data);

            if (updatedData.length === 0) {
                setTraceGlobalEmpty("No Data to Display!");
            } else {
                setTraceData(updatedData);
                setTotalPageCount(Math.ceil(totalCount / pageLimit));
            }
        } catch (error) {
            console.log("ERROR " + error);
            setTraceGlobalError("An error occurred");
        }
    }, [pageLimit, lookBackVal, selectedSortOrder, setTraceData, setTotalPageCount, setTraceGlobalEmpty, setTraceGlobalError]);

    const filterApiCall = useCallback(async (newpage, payload) => {
        try {
            const { data, totalCount } = await TraceFilterOption(lookBackVal.value, newpage, pageLimit, payload);
            const updatedData = createTimeInWords(data);

            if (updatedData.length === 0) {
                setTraceGlobalEmpty(`No Data Matched for this filter! Please click on refresh / select different queries to filter!`);
            } else {
                setTraceData(updatedData);
                setTotalPageCount(Math.ceil(totalCount / pageLimit));
            }
        } catch (error) {
            console.log("ERROR " + error);
            setTraceGlobalError("An error occurred On Filter");
        }
    }, [pageLimit, lookBackVal, setTraceData, setTotalPageCount, setTraceGlobalEmpty, setTraceGlobalError]);

    useEffect(() => {
        if (needFilterCall) {
            filterApiCall(currentPage, filterApiBody);
        } else if (traceData.length === 0) {
            apiCall(currentPage);
        }
    }, [currentPage, needFilterCall, traceData, apiCall, filterApiCall, filterApiBody]);

    const handleCardClick = (traceId) => {
        console.log("Clicked");
        const spanApiCall = async (traceId) => {
            try {
                const data = await FindByTraceIdForSpans(traceId);
                console.log("OUTPUT " + JSON.stringify(data.data[0]));
                setSelectedTrace(data.data[0]);
            } catch (error) {
                console.log("ERROR " + error);
            }
        }
        spanApiCall(traceId);
    }

    const handlePageChange = (event, newPage) => {
        console.log("PAGE " + newPage);
        setCurrentPage(newPage);
    }

    const handleSortOrderChange = (selectedValue) => {
        console.log("SORT " + selectedValue.value);
        setSelectedSortOrder(selectedValue.value);
    };

    return (
        <div >
            <div>
                <Box display="flex" flexDirection="row" justifyContent="space-between"  >
                    <Typography variant="h4" fontWeight="500" style={{ margin: "10px 0 20px 10px" }}>Traces ({traceData.length})</Typography>

                    <Box sx={{ margin: "10px 0 20px 0" }} >
                        <Pagination count={totalPageCount} variant="outlined" size='small' shape="rounded" page={currentPage} onChange={handlePageChange} />
                    </Box>

                    {!needFilterCall ? (<Box sx={{ margin: "5px 0 20px 0" }} >
                        <Dropdown options={sortOrderOptions} placeholder="Sort Order" arrowClosed={<span className="arrow-closed" />}
                            arrowOpen={<span className="arrow-open" />} value={selectedSortOrder}
                            onChange={handleSortOrderChange} />
                    </Box>) : null}
                </Box>

                <Box sx={{ maxHeight: "calc(80vh - 85px)", overflowY: "auto" }} >
                    {traceData.map((trace, index) => (
                        <Card className="tracelist-card" onClick={() => handleCardClick(trace.traceId)} key={index} sx={{ margin: "10px 0 20px 0", width: "530px", height: "fit-content", backgroundColor: colors.primary[500] }} >
                            <CardActionArea>
                                <Box>
                                    <Typography variant="h5" sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", backgroundColor: colors.greenAccent[500], padding: "5px" }}>
                                        <span> <span style={{ fontWeight: "500" }}>{trace.serviceName}:</span> {trace.operationName}</span>
                                        <span>{trace.duration}ms</span>
                                    </Typography>
                                </Box>
                                <CardContent>
                                    <Typography variant="h6" >
                                        <span style={{ fontWeight: "500" }}>TraceID:</span> {trace.traceId}
                                    </Typography>

                                    <Typography variant="h7" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "15px 0 0 0 " }}>
                                        <span style={{ width: "150px" }} >{trace.createdTimeInWords}</span>
                                        <span style={{ width: "200px" }} > <span style={{ fontWeight: "500", margin: "0 5px 0 0" }}>StatusCode:</span>{trace.statusCode}</span>
                                        <span style={{ width: "100px" }} > <span style={{ fontWeight: "500", margin: "0 2px 0 0" }}>Method:</span>{trace.methodName}</span>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>

                    ))}
                </Box>
            </div>
        </div>
    )
}

export default TraceList