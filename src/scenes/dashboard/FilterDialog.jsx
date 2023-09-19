import React, { useContext, useState } from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import { FormGroup } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { GlobalContext } from "../../global/globalContext/GlobalContext";
import { Box, Slider, TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";

const FilterDialog = ({ open, onClose }) => {

  const { expanded, setExpanded } = useContext(GlobalContext);
  const { selectedOptions, setSelectedOptions } = useContext(GlobalContext);

  const [value, setValue] = useState([0, 1000]);
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(1000);

  const services = ['OrderService', 'VendorService', 'ProviderService', 'DeliveryService'];
  const methods = ['POST', 'GET', 'PUT', 'DELETE'];
  const codes = ['200', '201', '400', '403', '404', '500'];

  const toggleOption = (option) => () => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const clearSelectedOptions = () => {
    setSelectedOptions([]);
  };

  const handlePanelChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setMinValue(newValue[0]);
    setMaxValue(newValue[1]);
  };

  const handleMinChange = (event) => {
    const newValue = parseInt(event.target.value);
    if (!isNaN(newValue) && newValue <= maxValue) {
      setMinValue(newValue);
      setValue([newValue, value[1]]);
    }
  };

  const handleMaxChange = (event) => {
    const newValue = parseInt(event.target.value);
    if (!isNaN(newValue) && newValue >= minValue) {
      setMaxValue(newValue);
      setValue([value[0], newValue]);
    }
  };

  const valuetext = (value) => {
    return `${value}`;
  };


  return (
    <Drawer anchor="right" open={open} onClose={onClose}  >
      <div style={{ width: "300px" }}>
        <List>
          <ListItem>
            <ListItemText primary="Filter Options" />
          </ListItem>
          <Divider />

          <ListItem>
            <Accordion expanded={expanded === 'panel4'} onChange={handlePanelChange('panel4')} style={{ width: "500px" }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Duration</Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Slider
                  value={value}
                  min={0}
                  max={1000}
                  onChange={handleChange}
                  valueLabelDisplay="auto"
                  getAriaValueText={valuetext}
                />
                {/* <Box> */}
                  <TextField
                    label="Min"
                    variant="outlined"
                    value={minValue}
                    onChange={handleMinChange}
                    InputProps={{
                      endAdornment: <InputAdornment position="end">ms</InputAdornment>,
                    }}
                    style={{ margin: "10px"}}
                  />
                  <TextField
                    label="Max"
                    variant="outlined"
                    value={maxValue}
                    onChange={handleMaxChange}
                    InputProps={{
                      endAdornment: <InputAdornment position="end">ms</InputAdornment>,
                    }}
                    style={{ margin: "10px"}}
                  />
                {/* </Box> */}
              </AccordionDetails>
            </Accordion>
          </ListItem>
          <Divider />

          <ListItem>
            <Accordion expanded={expanded === 'panel1'} onChange={handlePanelChange('panel1')} style={{ width: "500px" }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Service</Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Button color="inherit" onClick={clearSelectedOptions}>Clear</Button>

                <FormGroup>
                  {services.map((service) => (
                    <FormControlLabel
                    key={service}
                    control={<Checkbox
                      checked={selectedOptions.includes(service)}
                      onChange={toggleOption(service)}
                      sx={{
                        color: "grey",
                        '&.Mui-checked': {
                          color: "blue",
                        },
                      }}
                    />
                    }
                  label={service}
                  />))}
                </FormGroup>
              </AccordionDetails>
            </Accordion>

          </ListItem>
          <Divider />

          <ListItem>
            <Accordion expanded={expanded === 'panel2'} onChange={handlePanelChange('panel2')} style={{ width: "500px"}}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>HTTP Method <span style={{alignItems: "right", padding: "10px", margin: "10px" }} ><Button  color="inherit" onClick={clearSelectedOptions}>Clear</Button></span> </Typography>
              </AccordionSummary>

              <AccordionDetails>  
                <FormGroup>
                  {methods.map((method) => (
                    <FormControlLabel
                    key={method}
                    control={<Checkbox
                      checked={selectedOptions.includes(method)}
                      onChange={toggleOption(method)}
                      sx={{
                        color: "grey",
                        '&.Mui-checked': {
                          color: "blue",
                        },
                      }}
                    />
                    }
                  label={method}
                  />))}
                </FormGroup>
              </AccordionDetails>
            </Accordion>
          </ListItem>
          <Divider />

          <ListItem>
            <Accordion expanded={expanded === 'panel3'} onChange={handlePanelChange('panel3')} style={{ width: "500px"}}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>HTTP Code <span style={{alignItems: "right", padding: "10px", margin: "10px" }} ><Button  color="inherit" onClick={clearSelectedOptions}>Clear</Button></span> </Typography>
              </AccordionSummary>

              <AccordionDetails>  
                <FormGroup>
                  {codes.map((code) => (
                    <FormControlLabel
                    key={code}
                    control={<Checkbox
                      checked={selectedOptions.includes(code)}
                      onChange={toggleOption(code)}
                      sx={{
                        color: "grey",
                        '&.Mui-checked': {
                          color: "blue",
                        },
                      }}
                    />
                    }
                  label={code}
                  />))}
                </FormGroup>
              </AccordionDetails>
            </Accordion>
          </ListItem>
          <Divider />

        </List>

        <div style={{ padding: "16px" }}>
          <Button variant="contained" onClick={onClose} color="primary">
            Apply
          </Button>
          <Button onClick={onClose} color="primary">
            Close
          </Button>
        </div>
      </div>
    </Drawer>
  );
};

export default FilterDialog;
