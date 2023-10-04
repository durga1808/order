import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Button, Card, TablePagination, TextField, Tooltip, Typography } from '@mui/material';
import { SearchOutlined } from '@mui/icons-material';
import Dropdown from 'react-dropdown';
import "./Loglists.css"
import { useContext, useState } from 'react';
import { FindByTraceIdForSpans } from '../../api/TraceApiService';
import { formatDistanceToNow } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../global/globalContext/GlobalContext';
import { useCallback } from 'react';
import { getAllLogBySorts } from '../../api/LogApiService';
import { useEffect } from 'react';

const tableHeaderData = [
    {
        id: 'severity',
        label: 'Severity',
        minWidth: 120
    },
    {
        id: 'time',
        label: 'Time',
        minWidth: 170
    },
    {
        id: 'traceid',
        label: 'Trace ID',
        minWidth: 120
    },
    {
        id: 'serviceName',
        label: 'Service Name',
        minWidth: 170
    },
    {
        id: 'message',
        label: 'Message',
        minWidth: 170
    },
    {
        id: 'action',
        label: 'Action',
        minWidth: 170
    }
]

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
    }
]



const Loglists = () => {
    const mockData = ['Newest First', 'Oldest First', 'Error First']

    const defaultOptions = mockData[0]

    const [selectedOption, setSelectedOption] = useState("new");
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPageCount, setTotalPageCount] = useState(0);
    const [logData, setLogData] = useState([]);
    const pageLimit = 10;
    const { setRecentTrace, setSelected, setTraceGlobalEmpty, setTraceGlobalError, lookBackVal } = useContext(GlobalContext);
    const navigate = useNavigate();

    const createTimeInWords = (data) => {
        // Iterate through data and update createdTime
        const updatedData = data.map(item => {
            const createdTime = new Date(item.createdTime); // Convert timestamp to Date object
            const timeAgo = formatDistanceToNow(createdTime, { addSuffix: true });
            return { ...item, createdTimeInWords: timeAgo };
        });
        return updatedData;
    }

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
    }

    const handleNoTrace = () => {
        alert("No TraceId for this Log!")
    }

    function createData(severity, time, traceid, serviceName, message) {
        const actionButton = (
            <div>
                <Box sx={{ display: "flex", flexDirection: "row" }}>
                    <Tooltip>
                        <Button sx={{
                            m: "8px", backgroundColor: "blue", color: "black",
                            "&:hover": {
                                backgroundColor: "#ffffff",
                                color: "black",
                            },
                        }} onClick={() => traceid !== "" ? handleLogToTrace(traceid) : handleNoTrace()}
                        >
                            Trace
                        </Button>
                    </Tooltip>

                    <Tooltip>
                        <Button sx={{
                            m: "8px", backgroundColor: "blue", color: "black",
                            "&:hover": {
                                backgroundColor: "#ffffff",
                                color: "black",
                            },
                        }} onClick={handleActionButton}
                        >
                            View
                        </Button>
                    </Tooltip>
                </Box>
            </div>
        );
        return { severity, time, traceid, serviceName, message, action: actionButton };
    }

    const mapLogData = (logData) => {
        const slicedData = logData.slice(currentPage * 10, (currentPage + 1) * 10);
        const finalData = [];
        slicedData.forEach((data) => {
            console.log("Marshell " + data.severityText, data.createdTime, data.traceId, data.serviceName);
            data.scopeLogs.forEach((logs) => {
                logs.logRecords.forEach((record) => {
                    // console.log("Marshell " + data.severityText, data.createdTime, data.traceId, data.serviceName);
                    finalData.push(createData(data.severityText, data.createdTime, data.traceId, data.serviceName, record.body.stringValue));
                })
            });
        })
        console.log("Marshell " + JSON.stringify(finalData));
        return finalData;
    }

    const handleGetAllLogData = useCallback(async (newpage) => {
        try {
            setLogData([]);
            const { data, totalCount } = await getAllLogBySorts(lookBackVal.value, newpage + 1, pageLimit, selectedOption);
            if (data.length !== 0) {
                // console.log("DATA " + JSON.stringify(data));
                const finalOutput = mapLogData(data);
                setLogData(finalOutput);
                setTotalPageCount(Math.ceil(totalCount / pageLimit));
            }
        } catch (error) {
            console.log("error " + error);
        }
    }, [lookBackVal, selectedOption]);

    const handleChangePage = (event, newPage) => {
        setCurrentPage(newPage);
    };

    useEffect(() => {
        handleGetAllLogData(currentPage);
    }, [currentPage, handleGetAllLogData]);

    const handleSortOrderChange = (selectedValue) => {
        console.log("SORT " + selectedValue.value);
        setSelectedOption(selectedValue.value);
    };


    const handleActionButton = () => {
        console.log('action button clicked')
    }


    const tableBodyData = [
        createData('Error', '2021-10-10 10:10:10', '6adf9876fg786548ghtrws899rb425435', 'order-project', 'No order found with id 123'),
        createData('Info', '2021-10-10 10:10:20', '6adf9876fg786548ghtrws900', 'order-project', 'No order found with id 123'),
        createData('Error', '2021-10-10 10:10:21', '6adf9876fg786548ghtrws901', 'order-project', 'No order found with id 123'),
        createData('Warn', '2021-10-10 10:10:24', '6adf9876fg786548ghtrws902', 'order-project', 'id is not used inside'),
        createData('Error', '2021-10-10 10:10:25', '6adf9876fg786548ghtrws903', 'order-project', 'No order found with id 123'),
        createData('Error', '2021-10-10 10:10:26', '6adf9876fg786548ghtrws904', 'order-project', 'No order found with id 123'),
    ]

    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (event) => {
        const searchQuery = event.target.value;
        setSearchQuery(searchQuery);

        console.log("query " + searchQuery);
    };


    return (
        <div>
            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }} >
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

                <Box sx={{ margin: "5px 0 20px 0" }} >
                    <Dropdown options={sortOrderOptions} placeholder="Sort Order" arrowClosed={<span className="arrow-closed" />}
                        arrowOpen={<span className="arrow-open" />} value={selectedOption}
                        onChange={handleSortOrderChange} />
                </Box>

            </Box>

            <Card sx={{ padding: "20px", height: "73vh" }}>
                <TableContainer sx={{ maxHeight: 800, maxWidth: 1200 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {tableHeaderData.map((column,index) => (
                                    <TableCell
                                        key={index}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth, padding: '10px' }}
                                    >
                                        <Typography variant='h5' style={{ fontWeight: "800" }}>
                                            {column.label}
                                        </Typography>
                                    </TableCell>
                                ))}

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {logData.map((row,index) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                                        {tableHeaderData.map((column) => {
                                            const value = row[column.id];
                                            // return (
                                            // <TableCell key={column.id} align={column.align}>
                                            //     {value}
                                            // </TableCell>
                                            // )
                                            if (column.id === 'action') {
                                                return (
                                                    <TableCell key={column.id} align={column.align} style={{ padding: '10px' }}>
                                                        <Typography variant='h6'>
                                                            {value}
                                                        </Typography>
                                                    </TableCell>
                                                );
                                            } else {
                                                return (
                                                    <TableCell key={column.id} align={column.align} style={{ padding: '10px' }}>
                                                        <Typography variant='h6'>
                                                            {value}
                                                        </Typography>
                                                    </TableCell>
                                                );
                                            }

                                        })}
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                    <TablePagination
                        rowsPerPageOptions={[5]}
                        component="div"
                        count={totalPageCount}
                        rowsPerPage={10}
                        page={currentPage}
                        onPageChange={handleChangePage}
                    // onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </TableContainer>
            </Card>
        </div>
    )
}

export default Loglists