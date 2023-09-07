import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
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

  const handleTabwidthChange = (event, newValue) => {
    setValue(newValue);
  };

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const tabStyles = {
    // Default tab style
    tab: {
      minWidth: 0, // Set the default minimum width of tabs
    },
    // Active tab style with a different width
    activeTab: {
      minWidth: 50, // Set the width of the active tab
    },
  };

  // const useStyles = makeStyles((theme) => ({
  //   select: {
  //     padding: "5px", // Adjust the padding as per your requirements
  //   },
  // }));

  // const classes = useStyles();

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
            // onChange={handleTabwidthChange}
            TabIndicatorProps={{
              sx: { backgroundColor: "black", minWidth: 50 },
            }}
            textColor="black"
          >
            <Tab
              label="Summary"
              // onChange={handleTabwidthChange}
              style={value === 0 ? tabStyles.activeTab : tabStyles.tab}
            />
            <Tab
              label="Traces"
              // onChange={handleTabwidthChange}
              style={value === 1 ? tabStyles.activeTab : tabStyles.tab}
            />
          </Tabs>
          <div>
            <IconButton color="black" sx={{ mr: "30px" }} aria-label="refresh">
              <RefreshIcon />
            </IconButton>
            {/* <Button
              sx={{ mr: "30px" , color: "black" }}
              variant="contained"
              color="primary"
              size="large"
            >
              Refresh
            </Button> */}
            <Select
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
            </Select>
            <Button
              color="inherit"
              onClick={handleFilterClick}
              style={{ fontSize: "15px" }}
            >
              Filter
            </Button>
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
