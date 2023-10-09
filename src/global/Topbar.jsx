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
import { ColorModeContext, tokens } from "../theme";
import { useNavigate } from "react-router-dom";

function Topbar() {
  const navigate = useNavigate();
  const theme = useTheme();
  // console.log("theme color " + theme.palette.mode);
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  const handleLogout = () => {
    // Handle the logout logic here
    // For example, clear authentication tokens, etc.
    console.log("Logged out");
    // localStorage.setItem("serviceListData",JSON.stringify([]));
    // localStorage.setItem("userInfo","");
    navigate("/");
  };
  const appBarStyles = {
    // Set the height of the AppBar
    height: "45px", // Adjust this value to your desired height
  };

  // userinfo get from local
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const user = userInfo.username;

  return (
    <div>
      <AppBar position="static" style={appBarStyles}>
        <Toolbar
          sx={{
            justifyContent: "flex-end",
            backgroundColor: colors.primary[400],
            marginTop: "-10px",
          }}
        >
          <IconButton
            aria-label="Toggle Dark Mode"
            onClick={colorMode.toggleColorMode}
          >
            {theme.palette.mode === "light" ? (
              <Brightness7 style={{ fontSize: "20px" }} />
            ) : (
              <Brightness4 style={{ fontSize: "20px" }} />
            )}
          </IconButton>
          <IconButton aria-label="Account" onClick={handleLogout}>
            <LogoutIcon style={{ fontSize: "20px" }} />
          </IconButton>

          <IconButton>
            <Person style={{ fontSize: "20px" }} />
          </IconButton>
            <span>User: {user}</span>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Topbar;
