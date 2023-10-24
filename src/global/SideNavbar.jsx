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
import { useContext } from "react";
import { tokens } from "../theme";
import { Link } from "react-router-dom";
import { GlobalContext } from "./globalContext/GlobalContext";
import logo from "../assets/zaga-logedit.jpg"

const SideNavbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isDarkMode = theme.palette.mode === "dark";

  const routeChange = (routeName) => {
    localStorage.setItem("routeName", routeName);
  };

  const { isCollapsed, setIsCollapsed, isCardVisible, setIsCardVisible } =
    useContext(GlobalContext);
  const { selected, setSelected } = useContext(GlobalContext);

  const handleclose = () => {
    setIsCardVisible(false);
    setIsCollapsed(!isCollapsed);
  };

  return (
    <Box>
      <Sidebar
        collapsed={isCollapsed}
        rootStyles={{ height: "100vh", borderRight: "none" }}
      >
        <Menu
          iconShape="square"
          rootStyles={{
            display: "flex",
            flexDirection: "column",
            height: "100vh",
            backgroundColor: colors.primary[400],
          }}
          menuItemStyles={{
            button: ({ level, active, disabled }) => {
              const baseStyles = {
                fontWeight: active ? "bold" : "normal",
                backgroundColor: active ? colors.hoverColor[500] : "",
                borderRadius: "10px",
                color: "#FFF",
                transition: "0.4s ease",
              };

              if (level === 0) {
                return {
                  ...baseStyles,
                  "&:hover": {
                    backgroundColor: colors.hoverColor[500],
                    color: "#FFF",
                    borderRadius: "10px",
                  },
                };
              }
            },
          }}
        >
          {!isCollapsed ? (<Box style={{ margin: "8px 10px -8px 33px", }} >
            <img
              src={logo}
              alt="Logo"
              style={{
                width: "180px",
                height: "60px",
              }}
            />
          </Box>) : null}

          <MenuItem
            onClick={handleclose}
            icon={isCollapsed ? <MenuOutlined /> : undefined}
            style={{ margin: "5px 10px 5px 13px", padding: "10px" }}
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            // ml="1px"
            // mt="5px"
            >
              <Typography variant="h4" fontWeight="500" marginLeft={1}>
                OBSERVABILITY
              </Typography>
              <IconButton
                onClick={() => setIsCollapsed(!isCollapsed)}
                icon={isCollapsed ? <MenuOutlined /> : undefined}
              >
                <MenuOutlined style={{ color: colors.tabColor[500] }} />
              </IconButton>
            </Box>
          </MenuItem>

          <MenuItem
            component={<Link to="/mainpage/dashboard" />}
            style={{ margin: "10px 10px 10px 14px", padding: "10px" }}
            active={selected === "Dashboard"}
            icon={<DashboardOutlined />}
            onClick={() => {
              setSelected("Dashboard");
              routeChange("Dashboard");
            }}
          >
            <Typography variant="h6">DASHBOARD</Typography>
          </MenuItem>
          <MenuItem
            component={<Link to="/mainpage/traces" />}
            style={{ margin: "5px 10px 0 14px", padding: "10px" }}
            active={selected === "Traces"}
            icon={<TimelineOutlined />}
            onClick={() => {
              setSelected("Traces");
              routeChange("Traces");
            }}
          >
            <Typography variant="h6">TRACES</Typography>
          </MenuItem>

          <MenuItem
            component={<Link to="/mainpage/metrics" />}
            style={{ margin: "5px 10px 0 14px", padding: "10px" }}
            active={selected === "Metrics"}
            icon={<AnalyticsOutlined />}
            onClick={() => {
              setSelected("Metrics");
              routeChange("Metrics");
            }}
          >
            <Typography variant="h6">METRICS</Typography>
          </MenuItem>

          <MenuItem
            component={<Link to="/mainpage/logs" />}
            style={{ margin: "5px 10px 0 14px", padding: "10px" }}
            active={selected === "Logs"}
            icon={<ReceiptOutlined />}
            onClick={() => {
              setSelected("Logs");
              routeChange("Logs");
            }}
          >
            <Typography variant="h6">LOGS</Typography>
          </MenuItem>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default SideNavbar;
