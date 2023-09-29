import React, { useContext, useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import FilterDialog from "./FilterDialog";
import { useTheme } from "@emotion/react";
import { tokens } from "../../theme";
import { Box, IconButton } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import { useNavigate } from "react-router-dom";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import "./DashboardTopBar.css";
import { FilterListOutlined, RefreshOutlined } from "@mui/icons-material";
import { GlobalContext } from "../../global/globalContext/GlobalContext";
import { options } from "../../global/MockData/MockTraces";

const DashboardTopBar = () => {
  const navigate = useNavigate();
  const [filterDialogOpen, setFilterDialogOpen] = useState(false);
  const { lookBackVal, setLookBackVal, setNeedFilterCall, setTraceGlobalError, setTraceGlobalEmpty } = useContext(GlobalContext);
  const [activeTab, setActiveTab] = useState(0);

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const FilterbuttonStyle = {
    backgroundColor: colors.primary[800], // Use your desired gray color
  };

  const iconStyle = {
    fontSize: "22px", // Adjust the font size as needed
  };

  const handleRefreshClick = () => {
    // Implement your refresh logic here
    const defaultValue = 480;
    const defaultLabel = options.find((option) => option.value === defaultValue);
    setLookBackVal(defaultLabel);
    setNeedFilterCall(false);
    setTraceGlobalEmpty(null);
    setTraceGlobalError(null);
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
    setFilterDialogOpen(true);
  };

  const handleFilterDialogClose = () => {
    setFilterDialogOpen(false);
  };

  const handleLookbackChange = (val) => {
    console.log("VAL " + JSON.stringify(val.value));
    setLookBackVal(val);
  }

  return (
    <>
      <AppBar position="static" elevation={0}>
        <Toolbar
          style={{
            display: "flex",
            justifyContent: window.location.pathname === "/mainpage/dashboard" || window.location.pathname === "/mainpage/dashboard/logSummary" ? "space-between" : "flex-end",
            backgroundColor: colors.primary[400],
          }}
        >
          {window.location.pathname === "/mainpage/dashboard" || window.location.pathname === "/mainpage/dashboard/logSummary" ? (
            <Tabs
              value={activeTab}
              onChange={handleTabChange}
              TabIndicatorProps={{
                sx: {
                  backgroundColor: colors.lightGreen[500],
                },
              }}
              textColor="inherit"
              indicatorColor="primary"
            >
              <Tab label="Trace Summary" />
              <Tab label="Log Summary" />
            </Tabs>
          ) : null}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              mr: "5px",
            }}
          >
            <Dropdown
              options={options}
              placeholder="Lookback for"
              value={lookBackVal.label}
              onChange={(val) => handleLookbackChange(val)}
              arrowClosed={<span className="arrow-closed" />}
              arrowOpen={<span className="arrow-open" />}
            />
            <Tooltip title="Refresh">
              <IconButton
                onClick={handleRefreshClick}
                color="black"
                aria-label="refresh"
                sx={{ mr: "15px" }}
                style={FilterbuttonStyle}
              >
                <RefreshOutlined style={iconStyle} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Filter">
              <IconButton onClick={handleFilterClick} style={FilterbuttonStyle}>
                <FilterListOutlined style={iconStyle} />
              </IconButton>
            </Tooltip>
          </Box>
          {/* <div style={{ display: "flex" }}>
          <Dropdown options={options} placeholder="Select an option" />

            
          </div> */}
        </Toolbar>
      </AppBar>
      <FilterDialog open={filterDialogOpen} onClose={handleFilterDialogClose} />
    </>
  );
};

export default DashboardTopBar;
