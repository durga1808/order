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

const SideNavbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [collapsed, setCollapsed] = useState(true);

  return (
    <Box className="sideclose" >
      {/* <ProSidebar collapsed={collapsed}> */}
      <Sidebar collapsed={collapsed} rootStyles={{ height: "100vh", color: colors.primary[500] }} >
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
              ml="15px"
            >
              <Typography
                variant="h6"
                fontWeight="500"
                fontFamily={"Red Hat Display"}
                marginRight={1}
              >
                OBSERVABILITY
              </Typography>
              <IconButton onClick={() => setCollapsed(!collapsed)} style={{ color: colors.primary[500] }}>
                <MenuOutlined />
              </IconButton>
            </Box>
          </MenuItem>

          <MenuItem
            onClick={() => {}}
            icon={<DashboardOutlined />}
          >
            <Typography variant="h7">DASHBOARD</Typography>
          </MenuItem>

          <Typography variant="h7" sx={{ m: "15px 10px 10px 20px" }}>
            Data
          </Typography>

          <MenuItem icon={<TimelineOutlined />}>
            <Typography variant="h7">TRACES</Typography>
          </MenuItem>

          <MenuItem icon={<AnalyticsOutlined />}>
            <Typography variant="h7">METRICS</Typography>
          </MenuItem>

          <MenuItem icon={<ReceiptOutlined />}>
            <Typography variant="h7">LOGS</Typography>
          </MenuItem>

          <MenuItem icon={<Person />} rootStyles={{ marginTop: "350px" }} >
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
