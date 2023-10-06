import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import {
    Box,
    Button,
    Card,
    IconButton,
    List,
    ListItem,
    Pagination,
    Paper,
    Stack,
    TablePagination,
    TextField,
    Tooltip,
    Typography,
    styled,
    useTheme,
} from "@mui/material";
import Dropdown from "react-dropdown";
import "./Loglists.css";
import { useContext, useState } from "react";
import { FindByTraceIdForSpans } from "../../api/TraceApiService";
import { formatDistanceToNow } from "date-fns";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../global/globalContext/GlobalContext";
import { useCallback } from "react";
import { LogFilterOption, getAllLogBySorts } from "../../api/LogApiService";
import { useEffect } from "react";
import { SearchOutlined } from "@mui/icons-material";
import { Drawer } from "@mui/material";
import { tokens } from "../../theme";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import Loading from "../../global/Loading/Loading";
import { searchLogs } from "../../api/LogApiService";

const tableHeaderData = [
    {
        id: "severity",
        label: "Severity",
        // minWidth: 120,
    },
    {
        id: "time",
        label: "Time",
        // minWidth: 170,
    },
    {
        id: "traceid",
        label: "Trace ID",
        // minWidth: 120,
    },
    {
        id: "serviceName",
        label: "Service Name",
        // minWidth: 170,
    },
    {
        id: "message",
        label: "Message",
        // minWidth: 170,
    },
    {
        id: "action",
        label: "Action",
        // minWidth: 170,
    },
];

const sortOrderOptions = [
    {
        label: "Newest First",
        value: "new",
    },
    {
        label: "Oldest First",
        value: "old",
    },
    {
        label: "Error First",
        value: "error",
    },
];

const Loglists = () => {
    const mockData = ["Newest First", "Oldest First", "Error First"];

    const defaultOptions = mockData[0];
    const [selectedOption, setSelectedOption] = useState("new");
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPageCount, setTotalPageCount] = useState(0);
    const [selectedLogData, setSelectedLogData] = useState([]);
    const [logData, setLogData] = useState([]);
    const [loading, setLoading] = useState(false);
    const pageLimit = 10;
    const {
        setRecentTrace,
        setSelected,
        setTraceGlobalEmpty,
        setTraceGlobalError,
        lookBackVal,
        globalLogData,
        logFilterApiBody,
        needLogFilterCall,
        recentLogData
    } = useContext(GlobalContext);
    const navigate = useNavigate();

    const [isRightDrawerOpen, setIsRightDrawerOpen] = useState(false);


    // const handleChangePage = (event, newPage) => {
    //     setCurrentPage(newPage);
    // };

    const handleViewButtonClick = (severity, time, traceid, serviceName, message) => {
        // Toggle the right drawer's open state
        setIsRightDrawerOpen(true);
        const selectedLogDataObj = {
            SeverityText: severity,
            CreatedTime: time,
            Traceid: traceid,
            ServiceName: serviceName,
            Message: message
        }
        setSelectedLogData([selectedLogDataObj]);
    };

    const closeDrawer = () => {
        setIsRightDrawerOpen(false);
    };

    const StyledTableCell = styled(TableCell)(() => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: colors.greenAccent[500],
            color: theme.palette.common.black,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    const StyledTableRow = styled(TableRow)(() => ({
        "&:nth-of-type(odd)": {
            backgroundColor: colors.primary[400],
        },
        // hide last border
        "&:last-child td, &:last-child th": {
            border: 0,
        },
    }));

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const createTimeInWords = (data) => {
        // Iterate through data and update createdTime
        const updatedData = data.map((item) => {
            const createdTime = new Date(item.createdTime); // Convert timestamp to Date object
            const timeAgo = formatDistanceToNow(createdTime, { addSuffix: true });
            return { ...item, createdTimeInWords: timeAgo };
        });
        return updatedData;
    };

    const handleLogToTrace = async (traceId) => {
        console.log("TraceId " + JSON.stringify(traceId));
        try {
            const correlatedTraceData = await FindByTraceIdForSpans(traceId);
            console.log("TraceData " + JSON.stringify(correlatedTraceData));
            if (correlatedTraceData.data.length !== 0) {
                const updatedData = createTimeInWords(correlatedTraceData.data);
                setRecentTrace(updatedData);
                localStorage.setItem("routeName", "Traces");
                setSelected("Traces");
                navigate("/mainpage/traces");
            } else {
                setTraceGlobalEmpty("No Trace Data for this TraceId from Log!");
            }
        } catch (error) {
            console.log("error " + error);
            setTraceGlobalError("An error occured on log to trace correlation");
        }
    };

    const handleNoTrace = () => {
        alert("No TraceId for this Log!");
    };

    function createData(severity, time, traceid, serviceName, message) {
        const actionButton = (
            <div>
                <Box sx={{ display: "flex", flexDirection: "row" }}>
                    <Tooltip>
                        <Button
                            sx={{
                                m: "8px",
                                backgroundColor: colors.greenAccent[500],
                                // color: "black",
                                "&:hover": {
                                    backgroundColor: "#ffffff",
                                    color: "black",
                                },
                            }}
                            onClick={() =>
                                traceid !== "" ? handleLogToTrace(traceid) : handleNoTrace()
                            }
                        >
                            Trace
                        </Button>
                    </Tooltip>

                    <Tooltip>
                        <Button
                            sx={{
                                m: "8px",
                                backgroundColor: colors.greenAccent[500],
                                // color: "black",
                                "&:hover": {
                                    backgroundColor: "#ffffff",
                                    color: "black",
                                },
                            }}
                            onClick={() => handleViewButtonClick(severity, time, traceid, serviceName, message)}
                        >
                            View
                        </Button>
                    </Tooltip>
                </Box>
            </div>
        );
        return {
            severity,
            time,
            traceid,
            serviceName,
            message,
            action: actionButton,
        };
    }

    const mapLogData = (logData) => {
        // Initialize an empty array to store the extracted data
        const extractedData = [];

        // Loop through the sample data
        logData.forEach((data) => {
            // Extract the relevant information from logRecords
            data.scopeLogs.forEach((scopeLog) => {
                scopeLog.logRecords.forEach((logRecord) => {
                    // Extract the desired fields
                    const extractedInfo = {
                        severityText: logRecord.severityText,
                        createdTime: data.createdTimeInWords,
                        traceId: data.traceId,
                        serviceName: data.serviceName,
                        bodyValue: logRecord.body.stringValue,
                    };

                    // Add the extracted information to the array
                    extractedData.push(extractedInfo);
                });
            });
        });

        const finalData = [];

        extractedData.forEach((log) => {
            finalData.push(createData(log.severityText, log.createdTime, log.traceId, log.serviceName, log.bodyValue));
        })

        return finalData;

    };

    const handleGetAllLogData = useCallback(

        async (newpage) => {
            setLoading(true)
            try {
                setLogData([]);
                const { data, totalCount } = await getAllLogBySorts(
                    lookBackVal.value,
                    newpage,
                    pageLimit,
                    selectedOption
                );
                if (data.length !== 0) {
                    console.log("DATA " + JSON.stringify(data));
                    const updatedData = createTimeInWords(data);
                    const finalOutput = mapLogData(updatedData);
                    setLogData(finalOutput);
                    setTotalPageCount(Math.ceil(totalCount / pageLimit));
                }
            } catch (error) {
                console.log("error " + error);
            }
            setLoading(false);
        },
        [lookBackVal, selectedOption]
    );

    const logFilterApiCall = useCallback(async (newpage, payload) => {
        try {
            console.log("Filter callback ");
            const { data, totalCount } = await LogFilterOption(lookBackVal.value, newpage + 1, pageLimit, payload);
            if (data.length !== 0) {
                const updatedData = createTimeInWords(data);
                const finalOutput = mapLogData(updatedData);
                setLogData(finalOutput);
                console.log(finalOutput);
                setTotalPageCount(Math.ceil(totalCount / pageLimit));
            }
        } catch (error) {
            console.log("ERROR from log " + error);
        }
    }, [lookBackVal, setLogData, setTotalPageCount, pageLimit])

    useEffect(() => {

        if (globalLogData.length !== 0) {
            console.log("From Trace");
            const updatedData = createTimeInWords(globalLogData);
            const finalOutput = mapLogData(updatedData);
            setLogData(finalOutput);
        } else if (needLogFilterCall) {
            console.log("From Filter");
            logFilterApiCall(currentPage, logFilterApiBody);
        } else if (recentLogData.length !== 0) {
            console.log("From recent log data");
            const updatedData = createTimeInWords(recentLogData);
            const finalOutput = mapLogData(updatedData);
            setLogData(finalOutput);
        } else {
            console.log("From get ALL");
            handleGetAllLogData(currentPage);
        }

    }, [currentPage, handleGetAllLogData, globalLogData, logFilterApiBody, logFilterApiCall, needLogFilterCall]);

    const handleSortOrderChange = (selectedValue) => {
        console.log("SORT " + selectedValue.value);
        setSelectedOption(selectedValue.value);
    };

    const tableBodyData = [
        createData(
            "Error",
            "2021-10-10 10:10:10",
            "6adf9876fg786548ghtrws899rb425435",
            "order-project",
            "No order found with id 123"
        ),
        createData(
            "Info",
            "2021-10-10 10:10:20",
            "6adf9876fg786548ghtrws900",
            "order-project",
            "No order found with id 123"
        ),
        createData(
            "Error",
            "2021-10-10 10:10:21",
            "6adf9876fg786548ghtrws901",
            "order-project",
            "No order found with id 123"
        ),
        createData(
            "Warn",
            "2021-10-10 10:10:24",
            "6adf9876fg786548ghtrws902",
            "order-project",
            "id is not used inside"
        ),
        createData(
            "Error",
            "2021-10-10 10:10:25",
            "6adf9876fg786548ghtrws903",
            "order-project",
            "No order found with id 123"
        ),
        createData(
            "Error",
            "2021-10-10 10:10:26",
            "6adf9876fg786548ghtrws904",
            "order-project",
            "No order found with id 123"
        ),
    ];

    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const handlePageChange = async (event, selectedPage) => {
        setCurrentPage(Number(selectedPage));
    };

    const handleSearch = async () => {
      setLoading(true);
      try {
          const { data, totalCount } = await searchLogs(searchQuery, lookBackVal.value, currentPage, pageLimit);
          // Process and set the search results
          const finalOutput = mapLogData(data);
          setSearchResults(finalOutput);
          setTotalPageCount(Math.ceil(totalCount / pageLimit));
          console.log("Search " + JSON.stringify(data));
          console.log("API", finalOutput)
      } catch (error) {
          console.error("Error searching logs:", error);
      } finally {
          setLoading(false);
      }
  };
  
    const handleSearchChange = (event) => {
      const searchQuery = event.target.value;
      setSearchQuery(searchQuery);
    };
    
    const handleSearchKeyDown = (event) => {
      if (event.key === "Enter") {
        handleSearch();
      }
    };

    useEffect(() => {
      if (globalLogData.length !== 0 && !searchQuery) {
        const finalOutput = mapLogData(globalLogData);
        setLogData(finalOutput);
      } else if (needLogFilterCall) {
        logFilterApiCall(currentPage, logFilterApiBody);
      } else if (searchQuery) {
        setSearchResults([]); // Clear previous search results
        handleSearch();
      } else {
        handleGetAllLogData(currentPage);
      }
    }, [currentPage, handleGetAllLogData, globalLogData, logFilterApiBody, logFilterApiCall, needLogFilterCall, searchQuery]);

    return (
        <div>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                }}
            >
                <TextField
                    className="search-bar"
                    label="Search"
                    variant="outlined"
                    size="large"
                    style={{ borderWidth: "4px", marginBottom: "10px", width: "80%" }}
                    InputProps={{
                        endAdornment: <SearchOutlined />,
                    }}
                    value={searchQuery}
                    onChange={handleSearchChange}
                    onKeyDown={handleSearchKeyDown}
                />

                {/* <FormControl variant="outlined" style={{ marginBottom: '10px', marginLeft: '10px', width: '15%' }}>
                    <InputLabel>Select an option</InputLabel>
                    <Select
                        value={selectedOption}
                        onChange={handleChange}
                        label="Select an option"
                    >
                        {mockData.map((mockDropdownData, index) => (
                            <MenuItem key={index} value={mockDropdownData}>{mockDropdownData}</MenuItem>
                        ))
                        }
                    </Select>
                </FormControl> */}

                <Box sx={{ margin: "5px 0 20px 0" }}>
                    <Dropdown
                        options={sortOrderOptions}
                        placeholder="Sort Order"
                        arrowClosed={<span className="arrow-closed" />}
                        arrowOpen={<span className="arrow-open" />}
                        value={selectedOption}
                        onChange={handleSortOrderChange}
                    />
                </Box>
            </Box>

            <Card sx={{ padding: "20px", height: "73vh" }}>
                <div>{loading ? <Loading /> : <> <TableContainer sx={{ maxWidth: 1200, maxHeight: "calc(75vh - 85px)", overflowY: "auto" }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {tableHeaderData.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ padding: "10px" }}
                                    >
                                        <Typography variant="h5" style={{ width: "130px", fontWeight: "800", padding: '10px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                            {column.label}
                                        </Typography>
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {searchResults.length > 0 ? (
                                searchResults.map((row) => (
                                    // return (
                                        <TableRow
                                            hover
                                            role="checkbox"
                                            tabIndex={-1}
                                            key={row.traceid}
                                        >
                                            {tableHeaderData.map((column) => {
                                                const value = row[column.id];
                                                // return (
                                                // <TableCell key={column.id} align={column.align}>
                                                //     {value}
                                                // </TableCell>
                                                // )
                                                if (column.id === "action") {
                                                    return (
                                                        <TableCell
                                                            key={column.id}
                                                            align={column.align}
                                                        // style={{ padding: "10px" }}
                                                        >
                                                            <Typography variant="h6" style={{ width: "150px", whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{value}</Typography>
                                                        </TableCell>
                                                    );
                                                } else {
                                                    return (
                                                        <TableCell
                                                            key={column.id}
                                                            align={column.align}
                                                        // style={{ padding: "10px" }}
                                                        >
                                                            <Typography variant="h6" style={{ width: "150px", whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{value}</Typography>
                                                        </TableCell>
                                                    );
                                                }
                                            })}
                                        </TableRow>
                                    // );
    
                                ))
                            ): (
                                logData.map((row, index) => (
                                    // return (
                                        <TableRow
                                            hover
                                            role="checkbox"
                                            tabIndex={-1}
                                            key={index}
                                        >
                                            {tableHeaderData.map((column, index) => {
                                                const value = row[column.id];
                                                // return (
                                                // <TableCell key={column.id} align={column.align}>
                                                //     {value}
                                                // </TableCell>
                                                // )
                                                if (column.id === "action") {
                                                    return (
                                                        <TableCell
                                                            key={index}
                                                            align={column.align}
                                                        // style={{ padding: "10px" }}
                                                        >
                                                            <Typography variant="h6" style={{ width: "150px", whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{value}</Typography>
                                                        </TableCell>
                                                    );
                                                } else {
                                                    return (
                                                        <TableCell
                                                            key={index}
                                                            align={column.align}
                                                        // style={{ padding: "10px" }}
                                                        >
                                                            <Typography variant="h6" style={{ width: "150px", whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{value}</Typography>
                                                        </TableCell>
                                                    );
                                                }
                                            })}
                                        </TableRow>
                                    // );
    
                                ))
                            )}
                        </TableBody>
                    </Table>

                </TableContainer>
                    <Stack
                        spacing={2}
                        direction="row"
                        justifyContent="center"
                        style={{ marginTop: "20px" }}
                    >
                        <Pagination
                            count={totalPageCount}
                            page={currentPage}
                            onChange={handlePageChange}
                            variant="outlined"
                            shape="rounded"
                            size="small"
                        />
                    </Stack></>}
                </div>
            </Card>




            {/* <TablePagination
                    rowsPerPageOptions={[5]}
                    component="div"
                    count={totalPageCount}
                    rowsPerPage={1}
                    page={currentPage}
                    onPageChange={handleChangePage}
                // onRowsPerPageChange={handleChangeRowsPerPage}
                /> */}

            <Drawer
                anchor="right"
                open={isRightDrawerOpen}
                // onClose={() => setIsRightDrawerOpen(false)} // Close the drawer when clicking outside
                // onClose={onClose}
                onClose={closeDrawer}
            >
                {/* close icon button */}
                <List>
                    <ListItem
                        sx={{
                            display: "flex",
                            justifyContent: "flex-end",
                            alignItems: "flex-end",
                        }}
                    >
                        <IconButton
                            color="inherit"
                            //    onClick={onClose}
                            onClick={closeDrawer}
                        >
                            <ClearRoundedIcon />
                        </IconButton>
                    </ListItem>
                </List>

                <div style={{ width: "300px", padding: "20px" }}>
                    {/* Content for the right drawer */}
                    <Typography variant="h6">Log Metadata</Typography>
                    {/* Add your content here */}
                </div>

                <div style={{ marginTop: "20px", paddingBottom: "20px" }}>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 450 }} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>Field</StyledTableCell>
                                    <StyledTableCell align="right">Value</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            {selectedLogData.length !== 0 ? (<TableBody>
                                {Object.entries(selectedLogData[0]).map(([key, value], index) => (
                                    <StyledTableRow key={index}>
                                        <StyledTableCell component="th" scope="row">
                                            {key}
                                        </StyledTableCell>
                                        <StyledTableCell align="right">{value}</StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>) : null}
                        </Table>
                    </TableContainer>
                </div>
            </Drawer>
        </div>
    );
};

export default Loglists;
