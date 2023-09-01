import { Box, IconButton, Typography } from '@mui/material'
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import {
  AnalyticsOutlined,
  DashboardOutlined,
  MenuOutlined,
  TimelineOutlined,
  ReceiptOutlined,
} from "@mui/icons-material";
import { useState } from 'react'

const SideNavbar = () => {
    
    const [collapsed, setCollapsed] = useState(false);

  return (

    <Box>
        {/* <ProSidebar collapsed={collapsed}> */}
        <Sidebar collapsed={collapsed} style={{ height: '100vh' }}>
            <Menu iconShape="square">

                <MenuItem onClick={() => setCollapsed(!collapsed)}
                icon={collapsed ? <MenuOutlined /> : undefined}
                style={{
                margin: "10px 0 20px 0",
                color: "black",
                }}>
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
                        > OBSERVABILITY
                        </Typography>
                            <IconButton onClick={ () => setCollapsed(!collapsed) }>
                            <MenuOutlined />
                            </IconButton>
                    </Box>
                </MenuItem>

                <MenuItem
                style={{ color: "black"}}
                onClick={() => { }}
                icon={<DashboardOutlined />}
                >
                    <Typography variant="h7">DASHBOARD</Typography>
                </MenuItem>

                <Typography variant="h7" sx={{ m: "15px 0 5px 20px" }}>Data</Typography>

                <MenuItem
                    icon={<TimelineOutlined />}
                >
                    <Typography variant="h7">TRACES</Typography>
                </MenuItem>

                <MenuItem
                    icon={<AnalyticsOutlined />}
                >
                    <Typography variant="h7">METRICS</Typography>
                </MenuItem>

                <MenuItem
                    icon={<ReceiptOutlined />}
                >
                    <Typography variant="h7">LOGS</Typography>
                </MenuItem>

            </Menu>
        {/* </ProSidebar> */}
        </Sidebar>

    </Box>

  )
}

export default SideNavbar