import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useNavigate } from "react-router";

const SustainabilityTabs = ({ onDashboardOptionSelect }) => {
    const [dashboardMenuAnchor, setDashboardMenuAnchor] = useState(null);
    const navigate = useNavigate();

    const options = [
        { label: "Pod Metrics", value: "/mainpage/sustainability" },
        { label: "Node Metrics", value: "/mainpage/sustainability/node" },
       
    ];

    const handleDashboardTabClick = (event) => {
      setDashboardMenuAnchor(event.currentTarget);
    };

    const handleDashboardOptionSelect = (option) => {
      setDashboardMenuAnchor(null);
      onDashboardOptionSelect(option);
    //   if (option === "Trace Summary") {
    //     navigate("/mainpage/dashboard");
    //   } 
    //   else if (option === "Log Summary") {
    //     navigate("/mainpage/dashboard/logSummary");
    //   } else if (option === "Db Summary") {
    //     navigate("/mainpage/dashboard/dbSummary");
    //   } else if (option === "Kafka Summary") {
    //     navigate("/mainpage/dashboard/kafkaSummary");
    //   }
    };

    return (
      <>
        <IconButton
          onClick={handleDashboardTabClick}
          aria-label="Sustainability"
          style={{ color: "#FFF" }}
        >
          <Typography variant="h7">SUSTAINABILITY</Typography>
          <ArrowDropDownIcon />
        </IconButton>
        <Menu
          anchorEl={dashboardMenuAnchor}
          open={Boolean(dashboardMenuAnchor)}
          onClose={() => setDashboardMenuAnchor(null)}
        >
         
            {options.map((option, index) => (
                <MenuItem
                key={index}
                onClick={() => handleDashboardOptionSelect(option.label)}
                >
                {option.label}
                </MenuItem>
            ))}
        </Menu>
      </>
    );
  };

export default SustainabilityTabs;
