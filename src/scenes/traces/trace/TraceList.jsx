import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActionArea,
  Box,
  useTheme,
  CardHeader,
  Pagination,
  Button,
} from "@mui/material";
import "./TraceList.css";
import { tokens } from "../../../theme";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { useEffect } from "react";
import { useState } from "react";
import { spanData } from "../../../global/MockData/SpanData";
import { useContext } from "react";
import { GlobalContext } from "../../../global/globalContext/GlobalContext";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {
  FindByTraceIdForSpans,
  TraceFilterOption,
  TraceListPaginationApi,
} from "../../../api/TraceApiService";
import { formatDistanceToNow, parseISO } from "date-fns";
import { useCallback } from "react";
import setupAxiosInterceptor from "../../../api/SetupAxiosInterceptors";
import Loading from "../../../global/Loading/Loading";
import { findLogByTraceId } from "../../../api/LogApiService";
import { useNavigate } from "react-router-dom";
import PaginationItem from "@mui/material/PaginationItem";
import OutboundSharpIcon from '@mui/icons-material/OutboundSharp';

const mockTraces = [
  {
    servicename: "orderService",
    endPoint: "/order/getOrderById/{id}",
    traceID: "123456987667898767898768987984594b345679",
    createdTime: "a few seconds ago",
    statusCode: "200",
    method: "GET",
    duration: "100 ms",
  },
  {
    servicename: "Service 2",
    endPoint: "/endpoint2",
    traceID: "789012",
    createdTime: "1 min ago",
    statusCode: "404",
    method: "POST",
    duration: "200 ms",
  },
  {
    servicename: "Service 3",
    endPoint: "/endpoint3",
    traceID: "345678",
    createdTime: "2 min ago",
    statusCode: "200",
    method: "GET",
    duration: "250 ms",
  },
  {
    servicename: "Service 4",
    endPoint: "/endpoint4",
    traceID: "123456",
    createdTime: "5 min ago",
    statusCode: "200",
    method: "GET",
    duration: "200 ms",
  },
  {
    servicename: "Service 5",
    endPoint: "/endpoint5",
    traceID: "123456",
    createdTime: "10 min ago",
    statusCode: "200",
    method: "GET",
    duration: "150 ms",
  },
  {
    servicename: "vendorService",
    endPoint: "/vendor/deleteVendorById/{id}",
    traceID: "123456",
    createdTime: "15 min ago",
    statusCode: "200",
    method: "DELETE",
    duration: "200 ms",
  },
];

// const sortOrder = ['Earliest First', 'Oldest First', 'Error First', 'Peak Latency First'];

const sortOrderOptions = [
  {
    label: "Newest",
    value: "new",
  },
  {
    label: "Oldest",
    value: "old",
  },
  {
    label: "Error",
    value: "error",
  },
  {
    label: "Peaked Latency",
    value: "peakLatency",
  },
];

const TraceList = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  // const [traceData, setTraceData] = useState([]);
  const {
    setIsCollapsed,
    setSelectedTrace,
    traceData,
    setTraceData,
    lookBackVal,
    needFilterCall,
    filterApiBody,
    setTraceGlobalEmpty,
    setTraceGlobalError,
    setTraceLoading,
    recentTrace,
    setGlobalLogData,
    setTraceToLogError,
    setSelected,
    logTrace,
    traceRender,
    setLogRender,
    setMetricRender,
    traceSummaryService,
    setLogSummaryService,
    setClearTraceFilter,
  } = useContext(GlobalContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPageCount, setTotalPageCount] = useState(0);
  const [selectedSortOrder, setSelectedSortOrder] = useState("error");
  const [loading, setLoading] = useState(false);
  const [activeTraceIcon, setActiveTraceIcon] = useState(false);

  const [activeTraceId, setActiveTraceId] = useState(null);

  // const [isEmptyData, setIsEmptyData] = useState(false);
  // const [emptyMessage, setEmptyMessage] = useState(null);
  // const [error, setError] = useState(null);
  const pageLimit = 10;

  const createTimeInWords = (data) => {
    // Iterate through data and update createdTime
    const updatedData = data.map((item) => {
      const createdTime = new Date(item.createdTime); // Convert timestamp to Date object
      const timeAgo = formatDistanceToNow(createdTime, { addSuffix: true });
      return { ...item, createdTimeInWords: timeAgo };
    });
    return updatedData;
  };

  // setupAxiosInterceptor(setTraceLoading);

  const apiCall = useCallback(
    async () => {
      try {
        console.log("Trace api called!");
        // Get the list of service names from localStorage and parse it
        let serviceListData = [];
        if (traceSummaryService.length === 0) {
          console.log("called default" + traceSummaryService);
          serviceListData = JSON.parse(localStorage.getItem("serviceListData"));
        } else {
          console.log("called dashboard" + traceSummaryService);
          serviceListData = traceSummaryService
        }
        setLoading(true);
        const { data, totalCount } = await TraceListPaginationApi(
          currentPage,
          pageLimit,
          lookBackVal.value,
          selectedSortOrder,
          serviceListData
        );
        const updatedData = createTimeInWords(data);

      if (updatedData.length === 0) {
        setTraceGlobalEmpty("No Data to Display!");
      } else {
        setTraceData(updatedData);
        setTotalPageCount(Math.ceil(totalCount / pageLimit));
      }

      // setTraceLoading(false);
      setLoading(false);
    } catch (error) {
      console.log("ERROR " + error);
      setTraceGlobalError("An error occurred");
      // setTraceLoading(false);
      setLoading(false);
    }
  }, [
    pageLimit,
    traceSummaryService,
    currentPage,
    lookBackVal,
    selectedSortOrder,
    setTraceData,
    setTotalPageCount,
    setTraceGlobalEmpty,
    setTraceGlobalError,
  ]);

  const filterApiCall = useCallback(async () => {
    try {
      console.log("Trace filter called!");
      // setTraceLoading(true);
      setLoading(true);
      const { data, totalCount } = await TraceFilterOption(
        lookBackVal.value,
        currentPage,
        pageLimit,
        filterApiBody
      );
      const updatedData = createTimeInWords(data);

      if (updatedData.length === 0) {
        setTraceGlobalEmpty(
          `No Data Matched for this filter! Please click on refresh / select different queries to filter!`
        );
      } else {
        setTraceData(updatedData);
        setTotalPageCount(Math.ceil(totalCount / pageLimit));
      }

      setLoading(false);
      // setTraceLoading(false);
    } catch (error) {
      console.log("ERROR " + error);
      setTraceGlobalError("An error occurred On Filter");
      // setTraceLoading(false);
      setLoading(false);
    }
  }, [
    pageLimit,
    currentPage,
    filterApiBody,
    lookBackVal,
    setTraceData,
    setTotalPageCount,
    setTraceGlobalEmpty,
    setTraceGlobalError,
  ]);

  const handleCardClick = (traceId, index) => {
    console.log("Clicked");
    const spanApiCall = async (traceId) => {
      try {
        setTraceLoading(true);
        const data = await FindByTraceIdForSpans(traceId);
        console.log("OUTPUT " + JSON.stringify(data.data[0]));
        setSelectedTrace(data.data[0]);
        setTraceLoading(false);
      } catch (error) {
        console.log("ERROR " + error);
        setTraceLoading(false);
      }
    };
    spanApiCall(traceId);
    setActiveTraceId(traceId);
    setActiveTraceIcon(true);
  };

  const dashboardTraceMap = useCallback(() => {
    if (recentTrace.length !== 0) {
      console.log("Trace UseEffect called!" + recentTrace);
      setTraceData(recentTrace);
    } else if (logTrace.length !== 0) {
      setTraceData(logTrace);
      handleCardClick(logTrace[0].traceId);
    }
  }, [recentTrace, setTraceData, logTrace]);

  // useEffect(() => {
  //   console.log("Trace UseEffect called!");
  //   setSelectedTrace([]);
  //   if (needFilterCall) {
  //     filterApiCall(currentPage, filterApiBody);
  //   } else {
  //     if (recentTrace.length === 0 && logTrace.length === 0) {
  //       apiCall(currentPage);
  //     } else {
  //       dashboardTraceMap();
  //     }
  //   }

  //   // return () => {
  //   //   setRecentTrace([]);
  //   //   setLogTrace([]);
  //   // };
  // }, [
  //   currentPage,
  //   needFilterCall,
  //   apiCall,
  //   filterApiCall,
  //   filterApiBody,
  //   recentTrace,
  //   dashboardTraceMap,
  //   setSelectedTrace,
  //   logTrace
  // ]);

  useEffect(() => {
    setSelectedTrace([]);
    setLogRender(false);
    setMetricRender(false);
    setLogSummaryService([]);
    if (needFilterCall) {
      filterApiCall();
    } else if (logTrace.length === 0 || !traceRender) {
      setClearTraceFilter(false);
      apiCall();
    } else {
      setClearTraceFilter(false);
      dashboardTraceMap();
      setIsCollapsed(false);
    }

  }, [apiCall, filterApiCall, needFilterCall, dashboardTraceMap, traceRender, setLogRender, logTrace, setSelectedTrace, setMetricRender, setLogSummaryService]);


  const handlePageChange = (event, newPage) => {
    console.log("PAGE " + newPage);
    setCurrentPage(newPage);
  };

  const handleLogRoute = async (traceId) => {
    console.log("TraceId " + traceId);
    try {
      const logData = await findLogByTraceId(traceId);
      console.log("Log Data " + JSON.stringify(logData));
      if (logData.length !== 0) {
        setLogRender(true);
        setGlobalLogData(logData);
        localStorage.setItem("routeName", "Logs");
        setSelected("Logs");
        navigate("/mainpage/logs");
      } else {
        setTraceToLogError("No Log for this TraceId!");
      }
    } catch (error) {
      setTraceToLogError("An error occurred!");
    }
  };

  const handleSortOrderChange = (selectedValue) => {
    console.log("SORT " + selectedValue.value);
    setSelectedSortOrder(selectedValue.value);
  };

  const customPageStyles = {
    backgroundColor: colors.greenAccent[500], // Change 'blue' to your desired background color for the page numbers
    color: colors.textColor[500], // Change 'black' to your desired text color for the page numbers
  };

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-evenly"
            alignItems="center"
          >
            <Typography
              variant="h4"
              fontWeight="500"
              style={{ margin: "10px 0 20px 10px" }}
            >
              Traces ({traceData.length})
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignItems: "center",
                margin: "10px 0 20px 0",
              }}
            >
              {/* <Pagination
                count={totalPageCount}
                variant="outlined"
                size="small"
                shape="rounded"
                page={currentPage}
                onChange={handlePageChange}
              /> */}
              <Pagination
                count={totalPageCount}
                page={currentPage}
                onChange={handlePageChange}
                variant="outlined"
                shape="rounded"
                size="small"
                renderItem={(item) => (
                  <PaginationItem
                    component="div"
                    {...item}
                    style={{
                      backgroundColor:
                        item.type === "page" && item.page !== currentPage
                          ?null
                          : colors.primary[400],
                      color:
                        item.type === "page" && item.page === currentPage
                          ?"#FFF"
                          : null,

                      // backgroundColor:colors.primary[]
                    }}
                  />
                )}
              />
            </Box>

            {!needFilterCall ? (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  margin: "5px 0 20px 0",
                }}
              >
                <div style={{ alignItems: "center", marginBottom: "5px" }}>
                  <label style={{ fontSize: "12px", marginBottom: "5px" }}>
                    SortBy
                  </label>
                  <Dropdown
                    options={sortOrderOptions}
                    placeholder="Sort Order"
                    arrowClosed={<span className="arrow-closed" />}
                    arrowOpen={<span className="arrow-open" />}
                    value={selectedSortOrder}
                    onChange={handleSortOrderChange}
                  />
                </div>
              </Box>
            ) : null}
          </Box>
          <div
            className="scrollable-div"
            style={{
              maxHeight: "calc(80vh - 85px)",
              overflowY: "auto",
            }}
          >
            {" "}
            <Box
              sx={{
                marginRight: "8px",
              }}
            >
              {traceData.map((trace, index) => (
                <Card
                  className="tracelist-card"
                  key={index}
                  sx={{
                    margin: "10px 0 20px 0",
                    width: "calc(560px-10px)",
                    height: "fit-content",
                    backgroundColor: colors.primary[500],
                  }}
                >
                  {/* <CardActionArea> */}
                  <Box>
                    <Typography
                      variant="h5"
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        backgroundColor:
                          trace.statusCode >= 400 && trace.statusCode <= 500
                            ? colors.redAccent[500]
                            : colors.primary[400],
                        color:
                          trace.statusCode >= 400 && trace.statusCode <= 500
                            ? "#FFF"
                            : colors.textColor[500],
                        padding: "5px",
                      }}
                    >
                      <span>
                        {" "}
                        <span style={{ fontWeight: "500" }}>
                          {trace.serviceName}:
                        </span>{" "}
                        {trace.operationName}
                      </span>
                      <span>
                        {trace.duration}ms{" "}
                        {trace.traceId === activeTraceId ?activeTraceIcon ? <OutboundSharpIcon style={{color:"#FFF"}} /> : null:null}
                      </span>
                    </Typography>
                  </Box>
                  <CardContent>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography variant="h7">
                        <span style={{ fontWeight: "500" }}>TraceID:</span>{" "}
                        {trace.traceId}
                      </Typography>
                      <Button
                        sx={{
                          backgroundColor:
                            trace.statusCode >= 400 && trace.statusCode <= 500
                              ? colors.redAccent[500]
                              : colors.primary[400],
                          color:
                            trace.statusCode >= 400 && trace.statusCode <= 500
                              ? "#FFF"
                              : colors.textColor[500],
                          "&:hover": {
                            backgroundColor: "#ffffff",
                            color: colors.primary[600],
                          },
                        }}
                        // component={Link}
                        // to={`/mainpage/logs`}
                        variant="contained"
                        onClick={() => handleLogRoute(trace.traceId)}
                      >
                        <Typography variant="h8">View Log</Typography>
                      </Button>
                      <Button
                        sx={{
                          backgroundColor:
                            trace.statusCode >= 400 && trace.statusCode <= 500
                              ? colors.redAccent[500]
                              : colors.primary[400],
                          color:
                            trace.statusCode >= 400 && trace.statusCode <= 500
                              ? "#FFF"
                              : colors.textColor[500],
                          "&:hover": {
                            backgroundColor: "#ffffff",
                            color: colors.primary[600],
                          },
                        }}
                        // component={Link}
                        // to={`/mainpage/logs`}
                        variant="contained"
                        onClick={() => handleCardClick(trace.traceId, index)}
                      >
                        <Typography variant="h8">Open Spans</Typography>
                      </Button>
                    </div>

                    <Typography
                      variant="h7"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        margin: "15px 0 0 0 ",
                      }}
                    >
                      <span style={{ width: "150px" }}>
                        {trace.createdTimeInWords}
                      </span>

                      <span style={{ width: "200px" }}>
                        {" "}
                        <span
                          style={{ fontWeight: "500", margin: "0 5px 0 0" }}
                        >
                          StatusCode:
                        </span>
                        {trace.statusCode}
                      </span>
                      <span style={{ width: "100px" }}>
                        {" "}
                        <span
                          style={{ fontWeight: "500", margin: "0 2px 0 0" }}
                        >
                          Method:
                        </span>
                        {trace.methodName}
                      </span>
                    </Typography>
                  </CardContent>
                  {/* </CardActionArea> */}
                </Card>
              ))}
            </Box>
          </div>
        </div>
      )}
    </div>
  );
};

export default TraceList;
