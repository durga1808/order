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
import { Link, useNavigate } from "react-router-dom";

const SideNavbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isDarkMode = theme.palette.mode === "dark";
  const location = useNavigate();

  const [collapsed, setCollapsed] = useState(false);

  return (
    <Box className="sideclose" >
      {/* <ProSidebar collapsed={collapsed}> */}
      <Sidebar collapsed={collapsed} rootStyles={{ height: "100vh", color: isDarkMode ? "blue" : "black", backgroundColor: isDarkMode ? "black" : "aliceblue" }} >
        <Menu iconShape="square" rootStyles={{ display: "flex", flexDirection: "column", height: "100%" }}>
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
            component={<Link to="/mainpage" />}
            icon={<DashboardOutlined />}
          >
            <Typography variant="h7">DASHBOARD</Typography>
          </MenuItem>

          <Typography variant="h7" sx={{ m: "15px 10px 10px 20px" }}>
            Data
          </Typography>

          <MenuItem component={<Link to="/mainpage/traces" />} icon={<TimelineOutlined />}>
            <Typography variant="h7">TRACES</Typography>
          </MenuItem>

          <MenuItem component={<Link to="/mainpage/metrics" />} icon={<AnalyticsOutlined />}>
            <Typography variant="h7">METRICS</Typography>
          </MenuItem>

          <MenuItem component={<Link to="/mainpage/logs" />} icon={<ReceiptOutlined />}>
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
