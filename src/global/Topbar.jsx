import React, { useContext, useState } from "react";
import { AppBar, Toolbar, IconButton, CssBaseline, useTheme } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import LogoutIcon from "@mui/icons-material/Logout";
import { ColorModeContext, tokens } from "../theme";

function Topbar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  
  const handleLogout = () => {
    // Handle the logout logic here
    // For example, clear authentication tokens, etc.
    console.log("Logged out");
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: "flex-end" }}>
          <IconButton
            color="inherit"
            aria-label="Toggle Dark Mode"
            onClick={colorMode.toggleColorMode}
          >
            {theme.palette.mode === "light" ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
          <IconButton
            color="inherit"
            aria-label="Account"
            onClick={handleLogout}
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
