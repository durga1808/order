import React, { useEffect, useState } from "react";
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

const DashboardTopBar = () => {
  const navigate = useNavigate();
  const [filterDialogOpen, setFilterDialogOpen] = useState(false);
  const [lookBackVal, setLookBackVal] = useState("1 hour");
  const [activeTab, setActiveTab] = useState(0);

  const options = [
    {
      "value":30,
      "label":"30 minutes"
    },
    {
      "value":60,
      "label":"1 hour"
    },
    {
      "value":120,
      "label":"2 hours"
    },
    {
      "value":240,
      "label":"4 hours"
    },
    {
      "value":480,
      "label":"8 hours"
    },
    {
      "value":720,
      "label":"12 hours"
    },
    {
      "value":960,
      "label":"16 hours"
    },
    {
      "value":1440,
      "label":"24 hours"
    }
  ];

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
    alert("Refreshing...");
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
            justifyContent: window.location.pathname === "/mainpage/dashboard" ? "space-between" : "flex-end",
            backgroundColor: colors.primary[400],
          }}
        >
          {window.location.pathname === "/mainpage/dashboard" ? (
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
              value={lookBackVal}
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
