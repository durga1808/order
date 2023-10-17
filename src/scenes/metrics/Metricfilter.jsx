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
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import { useContext } from "react";
import { GlobalContext } from "../../global/globalContext/GlobalContext";
import { getMetricDataApi } from "../../api/MetricApiService";

const Metricfilter = ({ open, onClose }) => {
  const { selectedService, setSelectedService, setMetricRender } =
    useContext(GlobalContext);
  const [services, setServices] = useState(
    JSON.parse(localStorage.getItem("serviceListData"))
  );

  //   console.log("metricservice", services);

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

  const handleApplyButtonClick = () => {};

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <div style={{ width: "300px" }}>
        <List>
          <ListItem
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-end",
            }}
          >
            <IconButton color="inherit" onClick={onClose}>
              <ClearRoundedIcon />
            </IconButton>
          </ListItem>

          <ListItem
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h5" fontWeight="500">
              Filter Options
            </Typography>
            <Button
              variant="outlined"
              color="inherit"
              onClick={clearSelectedOptions}
            >
              Clear
            </Button>
          </ListItem>
          <Divider />

          <ListItem>
            <Accordion style={{ width: "500px" }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h5">Service</Typography>
              </AccordionSummary>

              <AccordionDetails>
                <FormControl component="fieldset">
                  <RadioGroup
                    value={selectedService}
                    sx={{
                      color: "black",
                      "& .Mui-checked": {
                        color: "blue", // Customize the active state color here
                      },
                    }}
                  >
                    {services.map((service) => (
                      <FormControlLabel
                        key={service}
                        value={service}
                        control={<Radio />}
                        label={service}
                        onChange={handleServiceToggle(service)}
                        sx={{
                          "&.Mui-checked": {
                            color: "blue",
                          },
                        }}
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
    </Drawer>
  );
};

export default Metricfilter;
