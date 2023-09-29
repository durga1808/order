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
import { TraceFilterOption, TraceListPaginationApi } from '../../../api/TraceApiService';
import { formatDistanceToNow, parseISO } from 'date-fns';

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
    const { setSelectedTrace, traceData, setTraceData, lookBackVal, needFilterCall, filterApiBody } = useContext(GlobalContext);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPageCount, setTotalPageCount] = useState(0);
    const [selectedSortOrder, setSelectedSortOrder] = useState("new");
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


    useEffect(() => {
        console.log("SORT " + selectedSortOrder);
        const apiCall = async (newpage) => {
            try {
                const { data, totalCount } = await TraceListPaginationApi(newpage, pageLimit, 2440, selectedSortOrder);
                // console.log("Data " + JSON.stringify(updatedData));
                const updatedData = createTimeInWords(data);
                setTraceData(updatedData);
                setTotalPageCount(Math.ceil(totalCount / pageLimit));
            } catch (error) {
                console.log("ERROR " + error);
            }
        }

        const filterApiCall = async (newpage, payload) => {
            const { data, totalCount } = await TraceFilterOption(lookBackVal.value, newpage, pageLimit, payload);
            console.log("DATA FILTERED filter api call " + JSON.stringify(data));
            const updatedData = createTimeInWords(data);
            setTraceData(updatedData);
            setTotalPageCount(Math.ceil(totalCount / pageLimit));
        }

        if (needFilterCall) {
            filterApiCall(currentPage, filterApiBody);
        } else {
            apiCall(currentPage);
        }

    }, [currentPage, lookBackVal, setTraceData, needFilterCall, filterApiBody, selectedSortOrder]);

    const handleCardClick = (trace) => {
        console.log("Clicked");
        setSelectedTrace(trace);
    }

    const handlePageChange = (event, newPage) => {
        console.log("PAGE " + newPage);
        setCurrentPage(newPage);
    }

    const handleSortOrderChange = (selectedValue) => {
        console.log("SORT " + selectedValue.value);
        setSelectedSortOrder(selectedValue.value);
        // if (selectedValue.value === "error") {
        //     // Sort data by "statusCode" in descending order (errors first)
        //     setTraceData([...traceData].sort((a, b) => b.statusCode - a.statusCode));
        // } else if (selectedValue.value === "recent") {
        //     // Sort data by the "createdTime" field in descending order (newest first)
        //     setTraceData([...traceData].sort((a, b) => {
        //         const dateA = new Date(a.createdTime);
        //         const dateB = new Date(b.createdTime);
        //         console.log("DATES " + dateA + " " + dateB);
        //         return dateB - dateA;
        //     }));
        // } else if (selectedValue.value === "old") {
        //     // Sort data by the "createdTime" field in ascending order (oldest first)
        //     setTraceData([...traceData].sort((a, b) => {
        //         const dateA = new Date(a.createdTime);
        //         const dateB = new Date(b.createdTime);
        //         return dateA - dateB;
        //     }));
        // } else if (selectedValue.value === "peakLatency") {
        //     // Sort data by "duration" in descending order (longest duration first)
        //     const sortedData = [...traceData].sort((a, b) => {
        //         const durationA = parseFloat(a.duration);
        //         const durationB = parseFloat(b.duration);
        //         return durationB - durationA;
        //     });

        //     // Filter the data to display entries with peak latency greater than 1000ms
        //     const filteredData = sortedData.filter((item) => parseFloat(item.duration) > 1000);

        //     // Update the data state with the filtered data
        //     setTraceData(filteredData);
        // }
    };

    return (
        <div  >
            <div>
                <Box display="flex" flexDirection="row" justifyContent="space-between"  >
                    <Typography variant="h4" fontWeight="500" style={{ margin: "10px 0 20px 10px" }}>Traces ({mockTraces.length})</Typography>

                    <Box sx={{ margin: "10px 0 20px 0" }} >
                        <Pagination count={totalPageCount} variant="outlined" size='small' shape="rounded" page={currentPage} onChange={handlePageChange} />
                    </Box>

                    <Box sx={{ margin: "5px 0 20px 0" }} >
                        <Dropdown options={sortOrderOptions} placeholder="Sort Order" arrowClosed={<span className="arrow-closed" />}
                            arrowOpen={<span className="arrow-open" />} value={selectedSortOrder}
                            onChange={handleSortOrderChange} />
                    </Box>
                </Box>

                <Box sx={{ maxHeight: "calc(80vh - 85px)", overflowY: "auto" }} >
                    {traceData.map((trace, index) => (
                        <Card className="tracelist-card" onClick={() => handleCardClick(trace)} key={index} sx={{ margin: "10px 0 20px 0", width: "530px", height: "fit-content", backgroundColor: colors.primary[500] }} >
                            <CardActionArea>
                                {/* <CardHeader title={<Typography variant="h6" sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", backgroundColor: colors.greenAccent[500], paddingInlineStart: "10px" }}>
                                    <span>{trace.servicename}: {trace.endPoint}</span>
                                    <span>{trace.duration}</span>
                                </Typography>} /> */}
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