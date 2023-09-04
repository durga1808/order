import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, CssBaseline } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import LogoutIcon from '@mui/icons-material/Logout';

function Topbar() {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  const handleLogout = () => {
    // Handle the logout logic here
    // For example, clear authentication tokens, etc.
    console.log('Logged out');
  };

  return (
    <div>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: 'flex-end' }}>
          <IconButton color="inherit" aria-label="Toggle Dark Mode" onClick={handleDarkModeToggle}>
            {darkMode ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
          <IconButton color="inherit" aria-label="Account" onClick={handleLogout}>
            <LogoutIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      {/* The rest of your app content goes here */}
    </div>
  );
}

export default Topbar;
