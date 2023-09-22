import React, { useState } from "react";
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

  return (
    <>
      <AppBar position="static" elevation={0}>
        <Toolbar
          style={{
            display: "flex",

            justifyContent: "space-between",
            backgroundColor: colors.primary[400],
            // style={{
            // border: `1px solid ${theme.palette.divider}`,
            // boxShadow:
            //   "0px 4px 4px -2px rgba(0,0,0,0.2), 0px 7px 10px 1px rgba(0,0,0,0.14), 0px 2px 16px 1px rgba(0,0,0,0.12)",
            // }}

            // borderTop: "4px solid #EBEBEB",
            // borderTop: activeTab === 0 ? "4px solid #EBEBEB" : "4px solid red",
            // borderTop: colors.topBorder[400],
          }}
        >
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
