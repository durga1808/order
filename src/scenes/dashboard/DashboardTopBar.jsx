import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import FilterDialog from "../traces/FilterDialog";
import { useTheme } from "@emotion/react";
import { tokens } from "../../theme";
import { IconButton } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import "./DashboardTopBar.css";
import Tooltip from "@mui/material/Tooltip";
import FilterListIcon from "@mui/icons-material/FilterList";
import { Link } from "react-router-dom";

const DashboardTopBar = () => {
  const [filterDialogOpen, setFilterDialogOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
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
    fontSize: "21px", // Adjust the font size as needed
    mar: "30px",
  };

  const handleRefreshClick = () => {
    // Implement your refresh logic here
    alert("Refreshing...");
  };

  const handleTabChange = (event, newValue) => {
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
      <AppBar position="static" >
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
            <Link to={"/mainpage/dashboard"}>
              <Tab label="Trace Summary" />
            </Link>
            <Link to={"/mainpage/dashboard/logSummary"}>
              <Tab label="Log Summary" />
            </Link>
          </Tabs>
          <div style={{ display: "flex" }}>

            <div></div>
            <Tooltip title="Refresh">
              <IconButton
                onClick={handleRefreshClick}
                color="black"
                aria-label="refresh"
                sx={{ mr: "15px" }}
              >
                <RefreshIcon style={iconStyle} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Filter">
              <IconButton onClick={handleFilterClick} style={FilterbuttonStyle}>
                <FilterListIcon style={iconStyle} />
              </IconButton>
            </Tooltip>
          </div>
        </Toolbar>
      </AppBar>
      <FilterDialog open={filterDialogOpen} onClose={handleFilterDialogClose} />
    </>
  );
};

export default DashboardTopBar;
