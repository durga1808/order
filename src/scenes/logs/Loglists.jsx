import {
  Box,
  Button,
  Card,
  IconButton,
  List,
  ListItem,
  TextField,
  Tooltip,
  Typography,
  colors,
} from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";
import Dropdown from "react-dropdown";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useContext, useState } from "react";
import { FindByTraceIdForSpans } from "../../api/TraceApiService";
import { formatDistanceToNow } from "date-fns";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../global/globalContext/GlobalContext";
import { Drawer } from "@mui/material";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  styled,
  tableCellClasses,
  useTheme,
} from "@mui/material";
import { tokens } from "../../theme";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";

const tableHeaderData = [
  {
    id: "severity",
    label: "Severity",
    minWidth: 120,
  },
  {
    id: "time",
    label: "Time",
    minWidth: 170,
  },
  {
    id: "traceid",
    label: "Trace ID",
    minWidth: 120,
  },
  {
    id: "serviceName",
    label: "Service Name",
    minWidth: 170,
  },
  {
    id: "message",
    label: "Message",
    minWidth: 170,
  },
  {
    id: "action",
    label: "Action",
    minWidth: 170,
  },
];

const Loglists = () => {
  const mockData = ["Newest First", "Oldest First", "Error First"];

  const defaultOptions = mockData[0];

  const [selectedOption, setSelectedOption] = useState("");
  const {
    setRecentTrace,
    setSelected,
    setTraceGlobalEmpty,
    setTraceGlobalError,
  } = useContext(GlobalContext);
  const navigate = useNavigate();

  const [isRightDrawerOpen, setIsRightDrawerOpen] = useState(false);

  const handleViewButtonClick = () => {
    // Toggle the right drawer's open state
    setIsRightDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsRightDrawerOpen(false);
  }

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
  const { selectedSpan } = useContext(GlobalContext);

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

  const handleActionButton = () => {
    console.log("action button clicked");
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
              onClick={handleViewButtonClick}
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

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div>
      <Box>
        <TextField
          className="search-bar"
          label="Search"
          variant="outlined"
          size="large"
          style={{ borderWidth: "4px", marginBottom: "10px", width: "80%" }}
          InputProps={{
            endAdornment: <SearchOutlined />,
          }}
        />

        <FormControl
          variant="outlined"
          style={{ marginBottom: "10px", marginLeft: "10px", width: "15%" }}
        >
          <InputLabel>Select an option</InputLabel>
          <Select
            value={selectedOption}
            onChange={handleChange}
            label="Select an option"
          >
            {mockData.map((mockDropdownData, index) => (
              <MenuItem key={index} value={mockDropdownData}>
                {mockDropdownData}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      <Card sx={{ padding: "20px", height: "73vh" }}>
        <TableContainer sx={{ maxHeight: 800, maxWidth: 1200 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {tableHeaderData.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth, padding: "10px" }}
                  >
                    <Typography variant="h5" style={{ fontWeight: "800" }}>
                      {column.label}
                    </Typography>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {tableBodyData.map((row) => {
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
                            style={{ padding: "10px" }}
                          >
                            <Typography variant="h6">{value}</Typography>
                          </TableCell>
                        );
                      } else {
                        return (
                          <TableCell
                            key={column.id}
                            align={column.align}
                            style={{ padding: "10px" }}
                          >
                            <Typography variant="h6">{value}</Typography>
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
      </Card>

      {/* {isRightDrawerOpen && ( */}
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
          <Typography variant="h6">Selected Content</Typography>
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
                {selectedSpan.attributes.map((attribute, index) => (
                  <StyledTableRow key={attribute.key}>
                    <StyledTableCell component="th" scope="row">
                      {attribute.key}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {Array.isArray(attribute.value.arrayValue)
                        ? attribute.value.arrayValue.join(", ")
                        : attribute.value.stringValue !== undefined &&
                          attribute.value.stringValue !== null
                        ? attribute.value.stringValue
                        : attribute.value.intValue}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </Drawer>
      {/* )} */}
    </div>
  );
};

export default Loglists;
