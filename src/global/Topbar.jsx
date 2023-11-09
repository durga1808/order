import React, { useContext, useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  CssBaseline,
  useTheme,
} from "@mui/material";
import { Brightness4, Brightness7, Person } from "@mui/icons-material";
import LogoutIcon from "@mui/icons-material/Logout";
import {  tokens } from "../theme";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "./globalContext/GlobalContext";

function Topbar() {
  const navigate = useNavigate();
  const theme = useTheme();

  const colors = tokens(theme.palette.mode);
  // const colorMode = useContext(ColorModeContext);
  const {setMetricRender} = useContext(GlobalContext);

  const handleLogout = () => {
    navigate("/");
  };
  const appBarStyles = {
    height: "55px",
  };

  const handleColorMode = () => {
    setMetricRender(false);
    let colorMode = localStorage.getItem("mode");
    localStorage.setItem("mode",!colorMode);
    // colorMode.toggleColorMode();
  }

  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const user = userInfo.username;

  return (
    <div>
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
          <IconButton style={{ marginLeft: "5px" }}>
            <Person style={{ fontSize: "20px", color: "#FFF" }} />
          </IconButton>

          <span style={{ color: colors.tabColor[500] }}>User: {user}</span>
          <div style={{marginLeft: "20px"}}>
          <IconButton aria-label="Account" onClick={handleLogout}>
            <LogoutIcon style={{ fontSize: "20px", color: "#FFF" }} />
          </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Topbar;
