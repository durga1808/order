import React, { useContext, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import FilterDialog from "./FilterDialog";
import { useTheme } from "@emotion/react";
import { ColorModeContext, tokens } from "../../theme";
import { Link } from "react-router-dom";
import SummaryChart from "./summary/SummaryChart";

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

  // const theme = useTheme();
  // const colors = tokens(theme.palatte.mode);
  // const ColorMode = useContext(ColorModeContext);

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
            // backgroundColor: colors.primary[400],
          }}
        >
          <Tabs value={activeTab} onChange={handleTabChange}>
            <Link to={"/mainpage/traces/"} >
              <Tab label="Summary" />
            </Link>
            <Link to={"/mainpage/traces/trace"} >
              <Tab label="Traces" />
            </Link>

          </Tabs>
          <div>
            <Button
              sx={{ mr: "30px" }}
              variant="contained"
              color="primary"
              size="large"
            >
              Refresh
            </Button>
            <Select
              // className={classes.select}
              value={selectedTime}
              onChange={handleTimeChange}
              displayEmpty
              inputProps={{ "aria-label": "Select Time" }}
              style={{ fontSize: "10px" }}
            // sx={{ mr: "30px", p: "-20px" }}
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
