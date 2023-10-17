import React, { useCallback, useContext, useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import FilterDialog from "./FilterDialog";
import { useTheme } from "@emotion/react";
import { tokens } from "../../theme";
import { Box, IconButton, TextField } from "@mui/material";
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
import { DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
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
    setSelectedEndDate
  } = useContext(GlobalContext);

  const [logFilterDialogOpen, setLogFilterDialogOpen] = useState(false);
  const [metricFilterDialogOpen, setmetricFilterDialogOpen] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const FilterbuttonStyle = {
    backgroundColor: theme.palette.mode === "light" ? "#339999" : "#A9A9A9",
  };

  const iconStyle = {
    fontSize: "22px",
    color: "#FFF",
  };

  const formattedDate = format(new Date(), 'yyyy-MM-dd');

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
    setEndDate(new Date());
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
    }else if(window.location.pathname === "/mainpage/metrics"){
      setmetricFilterDialogOpen(true);
    }
  };

  const handleFilterDialogClose = () => {
    // setFilterDialogOpen(false);
    if (window.location.pathname === "/mainpage/logs") {
      setLogFilterDialogOpen(false);
    } else if (window.location.pathname === "/mainpage/traces") {
      setFilterDialogOpen(false);
    }else if(window.location.pathname === "/mainpage/metrics"){
      setmetricFilterDialogOpen(false);
    }
  };

  const handleLookbackChange = (val) => {
    console.log("VAL " + JSON.stringify(val.value));
    setLookBackVal(val);
    setMetricRender(false);
    setTraceGlobalEmpty(null);
    setTraceGlobalError(null);
  };

  const handleStartDateChange = (date) => {
    const formattedDate = format(date, 'yyyy-MM-dd');
    console.log("Formatted Date " + formattedDate);
    setSelectedStartDate(formattedDate);
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    const formattedDate = format(date, 'yyyy-MM-dd');
    console.log("Formatted Date " + formattedDate);
    setSelectedEndDate(formattedDate);
    setEndDate(date);
  };


  return (
    <>
      <AppBar position="static" elevation={0}>
        <Toolbar
          style={{
            display: "flex",
            justifyContent:
              window.location.pathname === "/mainpage/dashboard" ||
                window.location.pathname === "/mainpage/dashboard/logSummary"
                ? "space-between"
                : "flex-end",
            backgroundColor: colors.primary[400],
            // backgroundColor:"#A4332D",
          }}
        >
          {window.location.pathname === "/mainpage/dashboard" ||
            window.location.pathname === "/mainpage/dashboard/logSummary" ? (
            <Tabs
              value={activeTab}
              onChange={handleTabChange}
              TabIndicatorProps={{
                sx: {
                  height: 4,
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
              mr: "5px",
            }}
          >
            {/* <div style={{ alignItems: "center", marginBottom: "20px" }}>
              <label
                style={{
                  fontSize: "12px",
                  marginBottom: "5px",
                  color: colors.tabColor[500],
                }}
              >
                TimeBy
              </label>
              <Dropdown
                options={options}
                placeholder="Lookback for"
                value={lookBackVal.label}
                onChange={(val) => handleLookbackChange(val)}
                arrowClosed={<span className="arrow-closed" />}
                arrowOpen={<span className="arrow-open" />}
              />
            </div> */}
            <div style={{ alignItems: "center", marginBottom: "20px", marginRight: "20px" }}>
              <label
                style={{
                  fontSize: "12px",
                  marginBottom: "5px",
                  color: colors.tabColor[500],
                }}
              >Start Date</label>
              <LocalizationProvider  dateAdapter={AdapterDateFns}>
                <Box
                  sx={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    position: 'relative',
                   
                   
                  }}
                >
                  <DatePicker
                    sx={{
                      width: 150,
                      backgroundColor:theme.palette.mode==="light"?"#FFF":"2C3539",
                      
                    }}
                    value={startDate}
                    onChange={handleStartDateChange}
                  />
                </Box>
              </LocalizationProvider>
            </div>
            <div style={{ alignItems: "center", marginBottom: "20px", marginRight: "20px" }}>
              <label
                style={{
                  fontSize: "12px",
                  marginBottom: "5px",
                  color: colors.tabColor[500],
                }}
              >End Date</label>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Box
                  sx={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    position: 'relative',
                  }}
                >
                  <DatePicker
                    value={endDate}
                    onChange={handleEndDateChange}
                    sx={{
                      width: 150,
                      backgroundColor:theme.palette.mode==="light"?"#FFF":"2C3539"
                    }}
                  />
                </Box>
              </LocalizationProvider>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginRight: "20px",
              }}
            >
              <Tooltip title="Refresh">
                <IconButton
                  onClick={handleRefreshClick}
                  aria-label="Refresh"
                  style={FilterbuttonStyle}
                >
                  <RefreshOutlined style={iconStyle} />
                </IconButton>
              </Tooltip>
            </div>
            {window.location.pathname === "/mainpage/traces" ||window.location.pathname === "/mainpage/metrics"||
            window.location.pathname === "/mainpage/logs" ? (
              <Tooltip title="Filter">
                <IconButton
                  onClick={handleFilterClick}
                  style={FilterbuttonStyle}
                >
                  <FilterListOutlined style={iconStyle} />
                </IconButton>
              </Tooltip>
            ) : null}
          </Box>
        </Toolbar>
      </AppBar>
      <FilterDialog open={filterDialogOpen} onClose={handleFilterDialogClose} />

      <Metricfilter open={metricFilterDialogOpen} onClose={handleFilterDialogClose}/> 

      <Logfilter open={logFilterDialogOpen} onClose={handleFilterDialogClose} />
    </>
  );
};

export default DashboardTopBar;
