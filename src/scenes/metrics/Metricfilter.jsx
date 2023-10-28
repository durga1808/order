import React, { useCallback, useEffect, useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Checkbox,
  Divider,
  Drawer,
  FormControl,
  FormControlLabel,
  FormGroup,
  IconButton,
  List,
  ListItem,
  Radio,
  RadioGroup,
  Typography,
  useTheme,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import { useContext } from "react";
import { GlobalContext } from "../../global/globalContext/GlobalContext";
import { getMetricDataApi } from "../../api/MetricApiService";
import { tokens } from "../../theme";

const Metricfilter = ({ open, onClose }) => {
  const { selectedService, setSelectedService, setMetricRender } =
    useContext(GlobalContext);
  const [services, setServices] = useState(
    JSON.parse(localStorage.getItem("serviceListData"))
  );

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const clearSelectedOptions = () => {
    setSelectedService([]);

  };

  const handleServiceToggle = (service) => () => {
    if (selectedService.includes(service)) {
      setSelectedService(selectedService.filter((item) => item !== service));
    } else {
      setSelectedService([service]);
    }
    setMetricRender(false);
    onClose();
  };

  const handleApplyButtonClick = () => { };

  return (
    <div style={{ width: "245px", backgroundColor: colors.primary[400] }}>
      <List>
        <ListItem
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h5" fontWeight="500" color={"#fff"}>
            Filter Options
          </Typography>
          {/* <Button
              variant="outlined"
              color="inherit"
              onClick={clearSelectedOptions}
            >
              Clear
            </Button> */}
        </ListItem>
        <Divider />

        <ListItem>
          <Accordion style={{ width: "500px", backgroundColor: colors.primary[400] }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h5" color={"#fff"}>Service</Typography>
            </AccordionSummary>

            <AccordionDetails>
              <FormControl component="fieldset">
                <RadioGroup
                  value={selectedService}
                  sx={{
                    color: theme.palette.mode === "light" ? "#000" : "#FFF",
                  }}
                >
                  {services.map((service) => (
                    <FormControlLabel
                      key={service}
                      value={service}
                      control={
                        <Radio sx={{ "&.Mui-checked": { color: "blue" } }} />
                      }
                      label={service}
                      sx={{
                        color: 'white',
                      }}
                      onChange={handleServiceToggle(service)}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </AccordionDetails>
          </Accordion>
        </ListItem>
        <Divider />
      </List>
    </div>
  );
};

export default Metricfilter;
