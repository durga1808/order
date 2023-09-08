import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
// import Button from "@mui/material/Button";
// import { makeStyles } from "@mui/styles";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import FilterDialog from "./FilterDialog";
import { useTheme } from "@emotion/react";
import { tokens } from "../../theme";
import { IconButton } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import Dropdown from "react-bootstrap/Dropdown";
import Tooltip from "@mui/material/Tooltip";
import FilterListIcon from "@mui/icons-material/FilterList";
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

const TraceTopBar = () => {
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
            <Tab
              label="Summary"
              style={{ fontSize: "10px" }}
              // onChange={handleTabwidthChange}
              // style={value === 0 ? tabStyles.activeTab : tabStyles.tab}
            />
            <Tab
              label="Traces"
              style={{ fontSize: "10px" }}
              // onChange={handleTabwidthChange}
              // style={value === 1 ? tabStyles.activeTab : tabStyles.tab}
            />
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

            <div style={{ marginRight: "15px" }}>
              <Dropdown>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                  {selectedOption || "Select an Option"}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item
                    style={
                      {
                        // activeItem === '30 minutes' ? activeItemStyle : dropdownItemStyle,
                        // color: "black",
                      }
                    }
                    onClick={() => handleOptionSelect("30 minutes")}
                  >
                    30 minutes
                  </Dropdown.Item>
                  <Dropdown.Item
                    style={{
                      // backgroundColor: colors.primary[900],
                      color: "black",
                    }}
                    onClick={() => handleOptionSelect("1 hour")}
                  >
                    1 hour
                  </Dropdown.Item>
                  <Dropdown.Item
                    style={{
                      // backgroundColor: colors.primary[900],
                      color: "black",
                    }}
                    onClick={() => handleOptionSelect("2 hours")}
                  >
                    2 hours
                  </Dropdown.Item>
                  <Dropdown.Item
                    style={{
                      // backgroundColor: colors.primary[900],
                      color: "black",
                    }}
                    onClick={() => handleOptionSelect("4 hours")}
                  >
                    4 hours
                  </Dropdown.Item>
                  <Dropdown.Item
                    style={{
                      // backgroundColor: colors.primary[900],
                      color: "black",
                    }}
                    onClick={() => handleOptionSelect("8 hours")}
                  >
                    8 hours
                  </Dropdown.Item>
                  <Dropdown.Item
                    style={{
                      // backgroundColor: colors.primary[900],
                      color: "black",
                    }}
                    onClick={() => handleOptionSelect("12 hours")}
                  >
                    12 hours
                  </Dropdown.Item>
                  <Dropdown.Item
                    style={{
                      // backgroundColor: colors.primary[900],
                      color: "black",
                    }}
                    onClick={() => handleOptionSelect("16 hours")}
                  >
                    16 hours
                  </Dropdown.Item>
                  <Dropdown.Item
                    style={{
                      // backgroundColor: colors.primary[900],
                      color: "black",
                    }}
                    onClick={() => handleOptionSelect("24 hours")}
                  >
                    24 hours
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
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
        </Toolbar>
      </AppBar>
      <FilterDialog open={filterDialogOpen} onClose={handleFilterDialogClose} />
    </>
  );
};

export default TraceTopBar;
