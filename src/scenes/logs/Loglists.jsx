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
    Paper,
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
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPageCount, setTotalPageCount] = useState(0);
  const [logData, setLogData] = useState([]);
  const pageLimit = 10;
  const {
    setRecentTrace,
    setSelected,
    setTraceGlobalEmpty,
    setTraceGlobalError,
    lookBackVal,
    logFilterApiBody,
    needLogFilterCall
  } = useContext(GlobalContext);
  const navigate = useNavigate();

    const [isRightDrawerOpen, setIsRightDrawerOpen] = useState(false);

    const handleViewButtonClick = () => {
        // Toggle the right drawer's open state
        setIsRightDrawerOpen(true);
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
                                backgroundColor: "blue",
                                color: "black",
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
                                backgroundColor: "blue",
                                color: "black",
                                "&:hover": {
                                    backgroundColor: "#ffffff",
                                    color: "black",
                                },
                            }}
                            onClick={() => handleViewButtonClick()}
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
    const slicedData = logData.slice(currentPage * 10, (currentPage + 1) * 10);
    const finalData = [];
    slicedData.forEach((data) => {
      // console.log(
      //   "Marshell " + data.severityText,
      //   data.createdTime,
      //   data.traceId,
      //   data.serviceName
      // );
      data.scopeLogs.forEach((logs) => {
        logs.logRecords.forEach((record) => {
          // console.log("Marshell " + data.severityText, data.createdTime, data.traceId, data.serviceName);
          finalData.push(
            createData(
              data.severityText,
              data.createdTime,
              data.traceId,
              data.serviceName,
              record.body.stringValue
            )
          );
        });
      });
    });
    // console.log("Marshell " + JSON.stringify(finalData));
    return finalData;
  };

  const handleGetAllLogData = useCallback(
    async (newpage) => {
      try {
        setLogData([]);
        const { data, totalCount } = await getAllLogBySorts(
          lookBackVal.value,
          newpage + 1,
          pageLimit,
          selectedOption
        );
        if (data.length !== 0) {
          console.log("DATA " + JSON.stringify(data));
          const finalOutput = mapLogData(data);
          setLogData(finalOutput);
          setTotalPageCount(Math.ceil(totalCount / pageLimit));
        }
      } catch (error) {
        console.log("error " + error);
      }
    },
    [lookBackVal, selectedOption]
  );

  const logFilterApiCall = useCallback(async (newpage,payload) => {
    try {
      console.log("Filter callback ");
      const {data, totalCount} = await LogFilterOption(lookBackVal.value, newpage + 1, pageLimit, payload);
      if(data.length !== 0) {
        const finalOutput = mapLogData(data);
        setLogData(finalOutput);
        console.log(finalOutput);
        setTotalPageCount(Math.ceil(totalCount / pageLimit));
      }
    } catch (error) {
        console.log("ERROR from log " + error);
    } 
  }, [])

    const handleChangePage = (event, newPage) => {
        setCurrentPage(newPage);
    };

  useEffect(() => {
    if(needLogFilterCall) {
      logFilterApiCall(currentPage, logFilterApiBody);
    } else {
      handleGetAllLogData(currentPage);
    }
  }, [currentPage, handleGetAllLogData, logFilterApiBody, logFilterApiCall, needLogFilterCall]);

    const handleSortOrderChange = (selectedValue) => {
        console.log("SORT " + selectedValue.value);
        setSelectedOption(selectedValue.value);
    };

    const handleActionButton = () => {
        console.log("action button clicked");
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

    const handleSearchChange = (event) => {
        const searchQuery = event.target.value;
        setSearchQuery(searchQuery);

        console.log("query " + searchQuery);
    };

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
                    onChange={handleSearchChange}
                    onKeyDown={(event) => {
                        if (event.key === "Enter") {
                            handleSearchChange(event);
                        }
                    }}
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
                <TableContainer sx={{ maxWidth: 1200, maxHeight: "calc(75vh - 85px)", overflowY: "auto" }}>
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
                            {logData.map((row) => {
                                return (
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
                                );
                            })}
                        </TableBody>
                    </Table>

                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5]}
                    component="div"
                    count={totalPageCount}
                    rowsPerPage={1}
                    page={currentPage}
                    onPageChange={handleChangePage}
                // onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Card>
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
                            <TableBody>
                                {/* {selectedSpan.attributes.map((attribute, index) => (
                  <StyledTableRow key={attribute.key}>
                    <StyledTableCell component="th" scope="row">
                      Severity
                    </StyledTableCell>
                    <StyledTableCell align="right"></StyledTableCell>
                  </StyledTableRow>
                ))} */}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </Drawer>
        </div>
    );
};

export default Loglists;
