  import React, { useCallback, useContext, useEffect, useState } from "react";
  import AppBar from "@mui/material/AppBar";
  import Toolbar from "@mui/material/Toolbar";
  import Tabs from "@mui/material/Tabs";
  import Tab from "@mui/material/Tab";
  import FilterDialog from "./FilterDialog";
  import { useTheme } from "@emotion/react";
  import { tokens } from "../../theme";
  import { Box, IconButton, MenuItem, Select, TextField } from "@mui/material";
  import Tooltip from "@mui/material/Tooltip";
  import { useNavigate } from "react-router-dom";
  import Dropdown from "react-dropdown";
  import "react-dropdown/style.css";
  import "./DashboardTopBar.css";
  import { FilterListOutlined, RefreshOutlined } from "@mui/icons-material";
  import { GlobalContext } from "../../global/globalContext/GlobalContext";
  import { options } from "../../global/MockData/MockTraces";
  import Logfilter from "../logs/Logfilter";
  import Metricfilter from "../metrics/Metricfilter";
  import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
  import { DemoItem } from "@mui/x-date-pickers/internals/demo";
  import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
  import { format } from "date-fns";

  const DashboardTopBar = () => {
    const navigate = useNavigate();
    const [filterDialogOpen, setFilterDialogOpen] = useState(false);

    // const {
    //   lookBackVal,
    //   setLookBackVal,
    //   setNeedFilterCall,
    //   setTraceGlobalError,
    //   setTraceGlobalEmpty,
    //   setTraceData,
    //   setSelectedTrace,
    //   setRecentTrace,
    //   activeTab,
    //   setActiveTab,
    //   setGlobalLogData,
    //   setNeedLogFilterCall,
    //   setRecentLogData,
    // } = useContext(GlobalContext);
    const [refresh, setRefresh] = useState(false);
    const {
      lookBackVal,
      setLookBackVal,
      setNeedFilterCall,
      setTraceGlobalError,
      setTraceGlobalEmpty,
      setTraceData,
      setSelectedTrace,
      setRecentTrace,
      activeTab,
      setActiveTab,
      setGlobalLogData,
      setNeedLogFilterCall,
      setRecentLogData,
      setSearchQuery,
      setLogTrace,
      setTraceRender,
      setLogRender,
      setMetricRender,
      setTraceSummaryService,
      setLogSummaryService,
      setFilterApiBody,
      setClearTraceFilter,
      setLogFilterApiBody,
      setClearLogFilter,
      selectedStartDate,
      setSelectedStartDate,
      selectedEndDate,
      setSelectedEndDate,
      setNeedHistoricalData,
    } = useContext(GlobalContext);

    const [logFilterDialogOpen, setLogFilterDialogOpen] = useState(false);
    const [metricFilterDialogOpen, setmetricFilterDialogOpen] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const FilterbuttonStyle = {
      backgroundColor: theme.palette.mode === "light" ? "#339999" : "#A9A9A9",
    };

    const RefreshiconStyle={fontSize: "20px",color:colors.tabColor[500]}

    const iconStyle = {
      fontSize: "20px",
      color: window.location.pathname === "/mainpage/traces" ||
      window.location.pathname === "/mainpage/metrics" ||
      window.location.pathname === "/mainpage/logs" ?colors.tabColor[500]:"#666663",
    };

    useEffect(() => {
      if (endDate !== null) {
        console.log("jhek");
        setNeedHistoricalData(true);
        localStorage.setItem("needHistoricalData", true);
      } else {
        setNeedHistoricalData(false);
        localStorage.setItem("needHistoricalData", false);
      }
    }, [endDate]);

    const formattedDate = format(new Date(), "yyyy-MM-dd");

    const handleRefreshClick = () => {
      const defaultValue = 120;
      const defaultLabel = options.find(
        (option) => option.value === defaultValue
      );
      setLookBackVal(defaultLabel);
      setRecentTrace([]);
      setTraceData([]);
      setSelectedTrace([]);
      setNeedFilterCall(false);
      setNeedLogFilterCall(false);
      setTraceGlobalEmpty(null);
      setTraceGlobalError(null);
      setGlobalLogData([]);
      setFilterApiBody({});
      setLogFilterApiBody({});
      setRecentLogData([]);
      setRefresh(true);
      setSearchQuery([]);
      setLogTrace([]);
      setTraceRender(false);
      setLogRender(false);
      setMetricRender(false);
      setClearTraceFilter(true);
      setClearLogFilter(true);
      setTraceSummaryService([]);
      setLogSummaryService([]);
      setSelectedStartDate(formattedDate);
      setSelectedEndDate(formattedDate);
      setStartDate(new Date());
      setEndDate(null);
      setNeedHistoricalData(false);
      localStorage.setItem("needHistoricalData", false);
    };

    const handleTabChange = (event, newValue) => {
      if (newValue === 0) {
        navigate("/mainpage/dashboard");
      } else if (newValue === 1) {
        navigate("/mainpage/dashboard/logSummary");
      }
      setActiveTab(newValue);
    };

    const handleFilterClick = () => {
      // setFilterDialogOpen(true);
      if (window.location.pathname === "/mainpage/logs") {
        setLogFilterDialogOpen(true);
      } else if (window.location.pathname === "/mainpage/traces") {
        setFilterDialogOpen(true);
      } else if (window.location.pathname === "/mainpage/metrics") {
        setmetricFilterDialogOpen(true);
      }
    };

    const handleFilterDialogClose = () => {
      // setFilterDialogOpen(false);
      if (window.location.pathname === "/mainpage/logs") {
        setLogFilterDialogOpen(false);
      } else if (window.location.pathname === "/mainpage/traces") {
        setFilterDialogOpen(false);
      } else if (window.location.pathname === "/mainpage/metrics") {
        setmetricFilterDialogOpen(false);
      }
    };

    const handleLookbackChange = (event) => {
      console.log("VAL " + JSON.stringify(event.target.value));
      setLookBackVal(event.target.value);
      setMetricRender(false);
      setTraceGlobalEmpty(null);
      setTraceGlobalError(null);
    };

    const endDateClear = () => {
      console.log("On Clear");
      setEndDate(null);
      setNeedHistoricalData(false);
      localStorage.setItem("needHistoricalData", false);
    };

    const startDateClear = () => {
      setStartDate(null);
    };

    const handleStartDateChange = (date) => {
      const formattedDate = format(date, "yyyy-MM-dd");
      console.log("Formatted Date " + formattedDate);
      setMetricRender(false);
      setSelectedStartDate(formattedDate);
      setStartDate(date);
    };

    const handleEndDateChange = (date) => {
      if (date !== null) {
        const formattedDate = format(date, "yyyy-MM-dd");
        console.log("Formatted Date " + formattedDate);
        setMetricRender(false);
        setSelectedEndDate(formattedDate);
        setEndDate(date);
      }
    };
    const appBarStyles = {
      height: "70px",
    };

    console.log("edndate",endDate);
    return (
      <>
        <AppBar position="static" elevation={3} style={appBarStyles}>
          <Toolbar
            style={{
              display: "flex",
              justifyContent:
                window.location.pathname === "/mainpage/dashboard" ||
                window.location.pathname === "/mainpage/dashboard/logSummary"
                  ? "space-between"
                  : "flex-end",
              backgroundColor: colors.primary[400],
            }}
          >
            {window.location.pathname === "/mainpage/dashboard" ||
            window.location.pathname === "/mainpage/dashboard/logSummary" ? (
              <Tabs
                value={activeTab}
                onChange={handleTabChange}
                TabIndicatorProps={{
                  sx: {
                    height: 2,
                    borderRadius: 3,
                    backgroundColor: colors.tabIndicator[500],
                  },
                }}
                textColor="inherit"
                indicatorColor="primary"
              >
                <Tab label="Trace Summary" sx={{ color: "#FFF" }} />
                <Tab label="Log Summary" sx={{ color: "#FFF" }} />
              </Tabs>
            ) : null}
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
            
              <div
                style={{
                  alignItems: "center",
                  marginBottom: "10px",
                  marginRight: "10px",
                }}
              >
                <label
                  style={{
                    fontSize: "10px",
                    marginBottom: "5px",
                    color: colors.tabColor[500],
                  }}
                >
                  Start Date
                </label>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <Box
                    sx={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      justifyContent: "center",
                      position: "relative",
                    }}
                  >
                    <DatePicker
                      slotProps={{
                        textField: { variant: "standard" },
                        // field: {
                        //   clearable: true,
                        //   onClear: () => setStartDate(null),
                        // },
                      }}
                      sx={{
                        width: 153,
                        marginRight: 2,
                        backgroundColor:
                          theme.palette.mode === "dark" ? "#848482" : "#FFF",

                        "& .MuiInput-underline:before": {
                          borderBottom: "none", // Remove the default underline
                        },

                        "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                          borderBottom: "none",
                        },

                        padding: "7px",
                        "& .MuiInputBase-input": {
                          padding: 0,
                          "&:hover": {
                            border: "none", // Remove hover border effect
                          },
                        },
                        "& .MuiInputBase-root": {
                          "&:hover": {
                            border: "none", // Remove hover border effect
                          },
                        },
                        "& .MuiSvgIcon-root": {
                          fontSize: 18, // Adjust the font size of the clearable icon
                        },
                      }}
                      value={startDate}
                      onChange={handleStartDateChange}
                    />
                  </Box>
                </LocalizationProvider>
              </div>
              <div
                style={{
                  alignItems: "center",
                  marginBottom: "10px",
                  marginRight: "10px",
                }}
              >
                <label
                  style={{
                    fontSize: "10px",
                    marginBottom: "5px",
                    color: colors.tabColor[500],
                  }}
                >
                  End Date
                </label>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <Box
                    sx={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      justifyContent: "center",
                      position: "relative",
                    }}
                  >
                    <DatePicker
                      value={endDate}
                      onChange={handleEndDateChange}
                      slotProps={{
                        textField: { variant: "standard" },
                        field: { clearable: true, onClear: () => endDateClear() },
                      }}
                      className="customDatePicker"
                      sx={{
                        boxShadow: 0,
                        marginRight: 2,
                        width: 150,
                        backgroundColor:
                          theme.palette.mode === "dark" ? "#848482" : "#FFF",

                        "& .MuiInput-underline:before": {
                          borderBottom: "none",
                        },

                        "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                          borderBottom: "none",
                        },

                        padding: "7px",
                        "& .MuiInputBase-input": {
                          padding: 0,

                          "&:hover": {
                            border: "none", // Remove hover border effect
                          },
                        },
                        "& .MuiSvgIcon-root": {
                          fontSize: 18, // Adjust the font size of the clearable icon
                        },
                      }}
                    />
                  </Box>
                </LocalizationProvider>
              </div>

              {/* {endDate === null ? ( */}
                <div
                  style={{
                    alignItems: "center",
                    marginBottom: "20px",
                    marginTop: "11px",
                  }}
                >
                  <label
                    style={{
                      fontSize: "10px",

                      color: colors.tabColor[500],
                    }}
                  >
                    TimeBy
                  </label>
                  {/* <Dropdown
                      options={options}
                      placeholder="Lookback for"
                      value={lookBackVal.label}
                      onChange={(val) => handleLookbackChange(val)}
                      arrowClosed={<span className="arrow-closed" />}
                      arrowOpen={<span className="arrow-open" />}
                    /> */}
                    
                  <div>
                    {" "}
                    <Select
                      
                      value={lookBackVal}
                      onChange={endDate === null ?handleLookbackChange:null}
                      sx={{
                        minWidth: 153,
                        maxHeight: 35,
                        // marginTop: "10px",
                        marginRight: "25px",
                        borderRadius: 0,
                        // color:"",
                        backgroundColor:
                          theme.palette.mode === "dark" ? "#848482" : "#FFF",
                        color: theme.palette.mode === "dark" ? endDate===null?"#FFF":"#B3B3AD" : endDate===null?"#000":"lightgray",
                        padding: "7px 16px",
                        "& .MuiSelect-icon": {
                          color: theme.palette.mode === "dark" ?  endDate===null?"#FFF":"#B3B3AD" : endDate===null?"#000":"lightgray", // Customize the dropdown arrow color
                        },
                        "& .MuiSelect-root": {
                          color: "#000", // Customize the dropdown text color
                        },
                        "& .MuiInputBase-input": {
                          padding: 0, // Remove input padding
                        },
                      }}
                    > 
                      <MenuItem value="" disabled >
                        Select Time
                      </MenuItem>
                      {options.map((option, index) => (
                        <MenuItem key={index} value={option}sx={{color: theme.palette.mode === "dark" ?endDate===null? "#FFF":"#666663" : endDate===null?"#000":"lightgray"}}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </div>
                </div>
              {/* ) : null} */}
              <div
                style={{
                  alignItems: "center",
                  marginBottom: "20px",
                  marginRight: "10px",
                  marginTop: "9px",
                }}
              >
                <label
                  style={{
                    fontSize: "10px",
                    marginBottom: "5px",
                    // marginLeft:"1px",
                    color: colors.tabColor[500],
                  }}
                >
                  Refresh
                </label>
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    position: "relative",
                  }}
                >
                  <Tooltip title="Refresh">
                    <IconButton
                      sx={{ mr: 2 }}
                      onClick={handleRefreshClick}
                      aria-label="Refresh"
                      style={FilterbuttonStyle}
                    >
                      <RefreshOutlined style={RefreshiconStyle} />
                    </IconButton>
                  </Tooltip>
                </Box>
              </div>
              {/* {window.location.pathname === "/mainpage/traces" ||
              window.location.pathname === "/mainpage/metrics" ||
              window.location.pathname === "/mainpage/logs" ? ( */}
                <div
                  style={{
                    alignItems: "center",
                    marginBottom: "20px",
                    marginRight: "10px",
                    marginTop: "9px",
                  }}
                >
                  <label
                    style={{
                      fontSize: "10px",
                      marginBottom: "5px",
                      marginLeft: "5px",

                      color:  window.location.pathname === "/mainpage/traces" ||
                      window.location.pathname === "/mainpage/metrics" ||
                      window.location.pathname === "/mainpage/logs" ?colors.tabColor[500]:"#666663",
                    }}
                  >
                    Filter
                  </label>
                  <Box
                    sx={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      justifyContent: "center",
                      position: "relative",
                    }}
                  >
                    <Tooltip title="Filter">
                      <IconButton
                        onClick={ window.location.pathname === "/mainpage/traces" ||
                        window.location.pathname === "/mainpage/metrics" ||
                        window.location.pathname === "/mainpage/logs" ?handleFilterClick:null}
                        style={FilterbuttonStyle}
                      >
                        <FilterListOutlined style={iconStyle} />
                      </IconButton>
                    </Tooltip>
                  </Box>
                </div>
              {/* // ) : null} */}
            </Box>
          </Toolbar>
        </AppBar>
        <FilterDialog open={filterDialogOpen} onClose={handleFilterDialogClose} />

        <Metricfilter
          open={metricFilterDialogOpen}
          onClose={handleFilterDialogClose}
        />

        <Logfilter open={logFilterDialogOpen} onClose={handleFilterDialogClose} />
      </>
    );
  };

  export default DashboardTopBar;
