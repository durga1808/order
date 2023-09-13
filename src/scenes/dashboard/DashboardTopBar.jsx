import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import FilterDialog from "../traces/FilterDialog";
import { useTheme } from "@emotion/react";
import { tokens } from "../../theme";
import { Box, IconButton } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
// import "./DashboardTopBar.css";
import Tooltip from "@mui/material/Tooltip";
import FilterListIcon from "@mui/icons-material/FilterList";
import { Link, useNavigate } from "react-router-dom";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import "./DashboardTopBar.css"
import { FilterListOutlined, RefreshOutlined } from "@mui/icons-material";

const DashboardTopBar = () => {
  const navigate = useNavigate();
  const [filterDialogOpen, setFilterDialogOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const options = [
    "30 minutes",
    "1 hour",
    "2 hours",
    "4 hours",
    "8 hours",
    "12 hours",
    "16 hours",
    "24 hours",
  ];

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const FilterbuttonStyle = {
    backgroundColor: "#6c757d", // Use your desired gray color
    color: "#fff", // Text color
    "&:hover": {
      backgroundColor: "#495057", // Color when hovered
    },
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

  return (
    <>
      <AppBar position="static">
        <Toolbar
          style={{
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: colors.primary[400],
            borderTop: "4px solid #EBEBEB",
          }}
        >
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            TabIndicatorProps={{
              sx: { backgroundColor: "black", minWidth: 50 },
            }}
            textColor="black"
          >
            <Tab label="Trace Summary" />
            <Tab label="Log Summary" />
          </Tabs>
          <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-around", mr: "5px" }} >
            <Dropdown options={options} placeholder="Lookback for" arrowClosed={<span className="arrow-closed" />}
              arrowOpen={<span className="arrow-open" />} />
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
