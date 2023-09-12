import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
// import Button from "@mui/material/Button";
// import { makeStyles } from "@mui/styles";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import FilterDialog from "../traces/FilterDialog";
import { useTheme } from "@emotion/react";
import { tokens } from "../../theme";
import { IconButton } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import './TraceTopBar.css'
import Tooltip from "@mui/material/Tooltip";
import FilterListIcon from "@mui/icons-material/FilterList";
import { Link } from "react-router-dom";
// import "./customDropDown.css";
// import { Button } from "react-bootstrap";

const timeOptions = [
  "15 minutes",
  "30 minutes",
  "1 hour",
  "2 hours",
  "4 hours",
  "6 hours",
  "8 hours",
  "12 hours",
  "16 hours",
  "24 hours",
];

const DashboardTopBar = () => {
  const [filterDialogOpen, setFilterDialogOpen] = useState(false);
  const [selectedTime, setSelectedTime] = useState("");
  const [activeTab, setActiveTab] = useState(0);
  const [value, setValue] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleTabwidthChange = (event, newValue) => {
    setValue(newValue);
  };

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

  const activeItemStyle = {
    /* Styles for the active dropdown item */
    backgroundColor: colors.primary[900],
    color: "black",
    /* Add any other desired styles */
  };

  const dropdownItemStyle = {
    /* Default styles for dropdown items */
    backgroundColor: "#your-desired-color",
    color: "#your-desired-text-color",
    /* Add any other desired styles */
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleRefreshClick = () => {
    // Implement your refresh logic here
    alert("Refreshing...");
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const handleFilterClick = () => {
    setFilterDialogOpen(true);
  };

  const handleFilterDialogClose = () => {
    setFilterDialogOpen(false);
  };

  return (
    <>
      <AppBar position="static" style={{ height: "45px" }}>
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
            // onChange={handleTabwidthChange}
            TabIndicatorProps={{
              sx: { backgroundColor: "black", minWidth: 50 },
            }}
            textColor="black"
          >
            <Link to={"/mainpage/dashboard"} >
              <Tab
                label="Trace Summary"
                // onChange={handleTabwidthChange}
                // style={value === 0 ? tabStyles.activeTab : tabStyles.tab}
              />
            </Link>
            <Link to={"/mainpage/dashboard/logSummary"} >
              <Tab
                label="Log Summary"
                // onChange={handleTabwidthChange}
                // style={value === 1 ? tabStyles.activeTab : tabStyles.tab}
              />
            </Link>
          </Tabs>
          <div style={{ display: "flex" }}>
            {/* <Button
              sx={{ mr: "30px" , color: "black" }}
              variant="contained"
              color="primary"
              size="large"
            >
              Refresh
            </Button> */}
            {/* <Select
              // className={classes.select}
              value={selectedTime}
              onChange={handleTimeChange}
              displayEmpty
              inputProps={{ "aria-label": "Select Time" }}
              style={{ fontSize: "10px" }}
              sx={{ mr: "30px" }}
            >
              <MenuItem value="" disabled>
                Select Time
              </MenuItem>
              {timeOptions.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
              </Select> */}
	<div class="sec-center"> 	
	  	<input class="dropdown" type="checkbox" id="dropdown" name="dropdown"/>
	  	<label class="for-dropdown" for="dropdown">Dropdown Menu <i class="uil uil-arrow-down"></i></label>
  		<div class="section-dropdown"> 
  			<a href="#">Dropdown Link <i class="uil uil-arrow-right"></i></a>
		  	<input class="dropdown-sub" type="checkbox" id="dropdown-sub" name="dropdown-sub"/>
		  	<label class="for-dropdown-sub" for="dropdown-sub">Dropdown Sub <i class="uil uil-plus"></i></label>
	  		<div class="section-dropdown-sub"> 
	  			<a href="#">Dropdown Link <i class="uil uil-arrow-right"></i></a>
	  			<a href="#">Dropdown Link <i class="uil uil-arrow-right"></i></a>
	  		</div>
  			<a href="#">Dropdown Link <i class="uil uil-arrow-right"></i></a>
  			<a href="#">Dropdown Link <i class="uil uil-arrow-right"></i></a>
  		</div>
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

            {/* <Button
              // color="inherit"
              variant="secondary"
              onClick={handleFilterClick}
              // style={{ backgroundColor: colors.primary[900] }}
            >
              Filter
            </Button> */}
          </div>

          {/* <Button color="inherit" onClick={handleFilterClick}>
            Filter
            
          </Button> */}

          </div>
        </Toolbar>
      </AppBar>
      <FilterDialog open={filterDialogOpen} onClose={handleFilterDialogClose} />
    </>
  );
};

export default DashboardTopBar;
