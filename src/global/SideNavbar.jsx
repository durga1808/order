import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import {
  AnalyticsOutlined,
  DashboardOutlined,
  MenuOutlined,
  TimelineOutlined,
  ReceiptOutlined,
  Person,
} from "@mui/icons-material";
import { useState } from "react";
import { tokens } from "../theme";
import { useNavigate } from "react-router-dom";

const SideNavbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isDarkMode = theme.palette.mode === "dark";
  const location = useNavigate();

  const [collapsed, setCollapsed] = useState(false);

  const goToDashboard = () => {
    location("/mainpage");
  };

  const goToTraces = () => {
    location("/mainpage/traces");
  };

  const goToLogs = () => {
    location("/mainpage/logs");
  };

  const goToMetrics = () => {
    location("/mainpage/metrics");
  };

  return (
    <Box className="sideclose" sx={{
      "& .pro-sidebar-inner": {
        background: `${colors.primary[500]} !important`,
      },
      "& .pro-icon-wrapper": {
        backgroundColor: "transparent !important",
      },
      "& .pro-inner-item": {
        padding: "5px 35px 5px 20px !important",
      },
      "& .pro-inner-item:hover": {
        color: `${colors.greenAccent[500]} !important`,
      },
      "& .pro-menu-item.active": {
        color: `${colors.greenAccent[900]} !important`,
      },
    }} >
      {/* <ProSidebar collapsed={collapsed}> */}
      <Sidebar collapsed={collapsed} rootStyles={{ height: "100vh", color: isDarkMode ? "blue" : "black", backgroundColor: isDarkMode ? "black" : "aliceblue" }} >
        <Menu iconShape="square" rootStyles={{ display: "flex", flexDirection: "column", height: "100%" }} menuItemStyles={{
          button: ({ level, active, disabled }) => {
            if (level === 0) {
              return {
                color: disabled ? "#eee" : "#455A64",
                backgroundColor: active ? "#000" : "#fff",
                "&:hover": {
                  backgroundColor: "#335B8C !important",
                  color: "white !important",
                  borderRadius: "8px !important",
                  fontWeight: "bold !important"
                },
              };
            }
          },
        }} >
          <MenuItem
            onClick={() => setCollapsed(!collapsed)}
            icon={collapsed ? <MenuOutlined /> : undefined}
            style={{
              margin: "10px 0 20px 0"
            }}
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              ml="1px"
            >
              <Typography
                variant="h6"
                fontWeight="500"
                marginRight={1}
              >
                OBSERVABILITY
              </Typography>
              <IconButton onClick={() => setCollapsed(!collapsed)} icon={collapsed ? <MenuOutlined /> : undefined} style={{ color: isDarkMode ? colors.primary[900] : "black" }}>
                <MenuOutlined />
              </IconButton>
            </Box>
          </MenuItem>

          <MenuItem
            onClick={goToDashboard}
            icon={<DashboardOutlined />}
            active
          >
            <Typography variant="h7">DASHBOARD</Typography>
          </MenuItem>

          <Typography variant="h7" sx={{ m: "15px 10px 10px 20px" }}>
            Data
          </Typography>

          <MenuItem onClick={goToTraces} icon={<TimelineOutlined />} active >
            <Typography variant="h7">TRACES</Typography>
          </MenuItem>

          <MenuItem onClick={goToMetrics} icon={<AnalyticsOutlined />} active >
            <Typography variant="h7">METRICS</Typography>
          </MenuItem>

          <MenuItem onClick={goToLogs} icon={<ReceiptOutlined />} active >
            <Typography variant="h7">LOGS</Typography>
          </MenuItem>

          <MenuItem icon={<Person />} rootStyles={{ position: "absolute", bottom: "2%", width: "100%" }} >
            <Typography variant="h7">LoggedIn User</Typography>
            <br />
            <Typography variant="h7">Role</Typography>
          </MenuItem>

        </Menu>
        {/* </ProSidebar> */}
      </Sidebar>
    </Box>
  );
};

export default SideNavbar;
