import React, { useContext, useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  CssBaseline,
  useTheme,
} from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import LogoutIcon from "@mui/icons-material/Logout";
import { ColorModeContext, tokens } from "../theme";

function Topbar() {
  const theme = useTheme();
  console.log("theme color " + theme.palette.mode);
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  const handleLogout = () => {
    // Handle the logout logic here
    // For example, clear authentication tokens, etc.
    console.log("Logged out");
  };
  const appBarStyles = {
    // Set the height of the AppBar
    height: "45px", // Adjust this value to your desired height
  };

  return (
    <div>
      <AppBar position="static" style={appBarStyles}>
        <Toolbar
          sx={{
            justifyContent: "flex-end",
            backgroundColor: colors.primary[400],
            // height: "16px",
          }}
        >
          <IconButton
            style={{ paddingTop: "0px" }}
            aria-label="Toggle Dark Mode"
            onClick={colorMode.toggleColorMode}
          >
            {theme.palette.mode === "light" ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
          <IconButton
            aria-label="Account"
            onClick={handleLogout}
            style={{ paddingTop: "0px" }}
          >
            <LogoutIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      {/* The rest of your app content goes here */}
    </div>
  );
}

export default Topbar;
