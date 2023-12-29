import React, { useContext } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  useTheme,
  useMediaQuery,
  Box,
  Typography,
  Dialog,
  DialogContent,
  Popover,
  Divider,
} from "@mui/material";
import { Brightness4, Brightness7, Person } from "@mui/icons-material";
import LogoutIcon from "@mui/icons-material/Logout";
import Badge from '@mui/material/Badge';
import NotificationImportantIcon from '@mui/icons-material/NotificationImportant';
import { ColorModeContext, tokens } from "../theme";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "./globalContext/GlobalContext";
import logo from "../assets/zaga-logedit.jpg";
import { useState } from "react";
import { getRealtimeAlertData } from "../api/AlertApiService";
import { useEffect } from "react";

function Topbar() {
  const navigate = useNavigate();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const { setMetricRender, alertResponse, setNotificationCount, notificationCount } = useContext(GlobalContext);
  const [anchorEl, setAnchorEl] = useState(null);


  const handleIconClick = (event) => {
    setAnchorEl(event.currentTarget);
    setNotificationCount(0);
  };

  const handleCloseModal = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'notification-popover' : undefined;

  const handleLogout = () => {
    navigate("/");
  };
  const appBarStyles = {
    height: "50px",
  };

  const handleColorMode = () => {
    setMetricRender(false);
    colorMode.toggleColorMode();
  };

  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const user = userInfo.username;

  return (
    <div>
      {isSmallScreen ? (
        <AppBar position="static" style={appBarStyles}>
          <Toolbar
            sx={{
              backgroundColor: colors.primary[400],
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box style={{ margin: "15px 0px 10px 0px", display: "flex" }}>
              <img
                src={logo}
                alt="Logo"
                style={{
                  // height: "60px",
                  width: "60px",
                  height: "27px",
                  // color:"#FFF"
                }}
              />
              <Typography sx={{ color: "#FFF" }} variant="h4" fontWeight="500" marginLeft={1}>
                OBSERVABILITY
              </Typography>
            </Box>
            <Box sx={{ display: "flex" }}>
              {" "}
              <IconButton
                aria-label="Toggle Dark Mode"
                onClick={() => handleColorMode()}
              >
                {theme.palette.mode === "light" ? (
                  <Brightness7 style={{ fontSize: "20px", color: "#FFF" }} />
                ) : (
                  <Brightness4 style={{ fontSize: "20px" }} />
                )}
              </IconButton>
              {/* <IconButton style={{ marginLeft: "5px" }}>
              <Person style={{ fontSize: "20px", color: "#FFF" }} />
            </IconButton>
            <span style={{ color: colors.tabColor[500] }}>User: {user}</span> */}
              <div style={{ marginLeft: "20px" }}>
                <IconButton aria-label="Account" onClick={handleLogout}>
                  <LogoutIcon style={{ fontSize: "20px", color: "#FFF" }} />
                </IconButton>
              </div>
            </Box>
          </Toolbar>
        </AppBar>
      ) : (
        <AppBar position="static" style={appBarStyles}>
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              // marginTop: "2px",
              backgroundColor: colors.primary[400],
            }}
          >
            <IconButton onClick={handleIconClick} >
              <Badge badgeContent={notificationCount} color="primary">
                <NotificationImportantIcon style={{ fontSize: "20px", color: "#FFF" }} />
              </Badge>
            </IconButton>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleCloseModal}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              {/* {alertResponse.map((data) => (
                <>
                  <Typography sx={{ p: 2  }}>{data.alertMessage} - <span style={{backgroundColor:"black",color:"white",padding:"5px",borderRadius:"5px" }}>{data.alertType}</span></Typography>
                  <Divider />
                </>
              ))} */}
              <>
                {/* Metric Alerts */}
                {alertResponse.metric.length > 0 && (
                  <>
                    <Typography variant="h6" sx={{ mt: 2, textAlign:"center" }}>Metric Alerts</Typography>
                    {alertResponse.metric.map((data, index) => (
                      <div key={`metric-${index}`}>
                        <Typography sx={{ p: 2 }}>{data.alertData}</Typography>
                        {index !== alertResponse.metric.length - 1 && <Divider />}
                      </div>
                    ))}
                  </>
                )}

                {/* Trace Alerts */}
                {alertResponse.trace.length > 0 && (
                  <>
                    <Typography variant="h6" sx={{ mt: 2, textAlign:"center" }}>Trace Alerts</Typography>
                    {alertResponse.trace.map((data, index) => (
                      <div key={`trace-${index}`}>
                        <Typography sx={{ p: 2 }}>{data.alertData}</Typography>
                        {index !== alertResponse.trace.length - 1 && <Divider />}
                      </div>
                    ))}
                  </>
                )}

                {/* Log Alerts */}
                {alertResponse.log.length > 0 && (
                  <>
                    <Typography variant="h6" sx={{ mt: 2, textAlign:"center" }}>Log Alerts</Typography>
                    {alertResponse.log.map((data, index) => (
                      <div key={`log-${index}`}>
                        <Typography sx={{ p: 2 }}>{data.alertData}</Typography>
                        {index !== alertResponse.log.length - 1 && <Divider />}
                      </div>
                    ))}
                  </>
                )}
              </>
            </Popover>
            <IconButton
              aria-label="Toggle Dark Mode"
              onClick={() => handleColorMode()}
              style={{ marginLeft: "10px" }}
            >
              {theme.palette.mode === "light" ? (
                <Brightness7 style={{ fontSize: "20px", color: "#FFF" }} />
              ) : (
                <Brightness4 style={{ fontSize: "20px" }} />
              )}
            </IconButton>
            <IconButton style={{ marginLeft: "5px" }}>
              <Person style={{ fontSize: "20px", color: "#FFF" }} />
            </IconButton>
            <span style={{ color: colors.tabColor[500] }}>User: {user}</span>
            <div style={{ marginLeft: "20px" }}>
              <IconButton aria-label="Account" onClick={handleLogout}>
                <LogoutIcon style={{ fontSize: "20px", color: "#FFF" }} />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      )}
    </div>
  );
}

export default Topbar;
