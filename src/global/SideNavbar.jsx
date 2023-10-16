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
        {/* <ProSidebar collapsed={collapsed}> */}
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

                    // backgroundColor:active?"white":colors.primary[400],
                    // color:active?colors.primary[400]:"white",
                    // borderRadius: "10px",

                  transition: "0.4s ease",
                };

                if (level === 0) {
                  return {
                    ...baseStyles,
                    "&:hover": {
                      backgroundColor: colors.hoverColor[500],
                      color: "#FFF",
                      borderRadius: "10px",
                      // backgroundColor:"white",
                      // color: colors.primary[400],
                      // borderRadius: "10px",
                    },
                  };
                }

                // if (level === 0) {
                //   return {
                //     color: colors.textColor[500],

                //     fontWeight: active ? "bold" : "normal",

                //     "&:hover": {
                //       backgroundColor: "#339999 !important",
                //       color: "white !important",
                //       borderRadius: "25px !important",
                //       fontWeight: "bold !important",

                //     },
                //   };
                // }
              },
            }}
          >
            <MenuItem
              onClick={handleclose}
              icon={isCollapsed ? <MenuOutlined /> : undefined}
              style={{ margin: "20px 10px 10px 13px", padding: "10px" }}
            >
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="1px"
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
              style={{ margin: "5px 10px 0 14px", padding: "10px"}}
              active={selected === "Dashboard"}
              icon={<DashboardOutlined />}
              onClick={() => {
                setSelected("Dashboard");
                routeChange("Dashboard");
              }}
            >
              <Typography variant="h6">DASHBOARD</Typography>
            </MenuItem>

            {/* <Typography variant="h6" sx={{ m: "15px 10px 10px 20px" }}>
              Data
            </Typography> */}

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

            {/* <MenuItem icon={<Person />} rootStyles={{ position: "absolute", bottom: "2%", width: "100%" }}  >
              <div style={{ display: "flex", flexDirection: "column", justifyContent: "normal" }}>
              <Typography variant="h5">LoggedIn User</Typography>
              <Typography variant="h5">Role</Typography>
              </div>
            </MenuItem> */}
          </Menu>
          {/* </ProSidebar> */}
        </Sidebar>
      </Box>
    );
  };

  export default SideNavbar;
