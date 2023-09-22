import React, { useContext, useState } from "react";
import { Drawer, Divider, IconButton } from "@mui/material";
import {List, ListItem} from "@mui/material";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FormGroup, FormControlLabel } from "@mui/material";
import { GlobalContext } from "../../global/globalContext/GlobalContext";
import { Slider, TextField, Button, Checkbox, Typography } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';

const FilterDialog = ({ open, onClose }) => {

  // const { expanded, setExpanded } = useState(false);
  // const { selectedOptions, setSelectedOptions } = useContext(GlobalContext);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const [value, setValue] = useState([0, 1000]);
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(1000);

  const services = ['OrderService', 'VendorService', 'ProviderService', 'DeliveryService'];
  const methods = ['POST', 'GET', 'PUT', 'DELETE'];
  // const codes = ['2xx', '3xx', '4xx', '5xx'];

  const codesNew = [
    {
      labelName: "2xx",
      labelValue: {
        miniVal: 200,
        maxiVal: 299
      }
    },
    {
      labelName: "3xx",
      labelValue: {
        miniVal: 300,
        maxiVal: 399
      }
    },
    {
      labelName: "4xx",
      labelValue: {
        miniVal: 400,
        maxiVal: 499
      }
    },
    {
      labelName: "5xx",
      labelValue: {
        miniVal: 500,
        maxiVal: 599
      }
    }
  ]

  const toggleOption = (option) => () => {
    if (typeof option === 'string') {
      if (selectedOptions.includes(option)) {
        setSelectedOptions(selectedOptions.filter((item) => item !== option));
      } else {
        setSelectedOptions([...selectedOptions, option]);
      }
    } else if (typeof option === 'object') {

      const isOptionSelected = selectedOptions.some(
        (opt) =>
          opt.miniVal === option.miniVal && opt.maxiVal === option.maxiVal
      );

      if (isOptionSelected) {
        setSelectedOptions((prevSelectedOptions) =>
          prevSelectedOptions.filter(
            (opt) =>
              opt.miniVal !== option.miniVal || opt.maxiVal !== option.maxiVal
          )
        );
      } else {
        setSelectedOptions([...selectedOptions, option]);
      }
    }
  };

  const clearSelectedOptions = () => {
    setSelectedOptions([]);
  };

  // const handlePanelChange = (panel) => (event, isExpanded) => {
  //   setExpanded(isExpanded ? panel : false);
  // };

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

  const handleApplyButtonClick = () => {
    console.log('Selected Options:', selectedOptions);

    const selectedDuration = `${minValue}ms - ${maxValue}ms`;
    console.log('Selected Duration:', selectedDuration);

    onClose();
  };

  return (
    <Drawer anchor="right" open={open} onClose={onClose}  >
      <div style={{ width: "300px" }}>
        <List>
          <ListItem sx={{ display: "flex", justifyContent: "flex-end", alignItems: "flex-end" }}>
            <IconButton color="inherit" onClick={onClose}><ClearRoundedIcon /></IconButton>
          </ListItem>

          <ListItem sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }} >
            <Typography variant="h5" fontWeight="500">Filter Options</Typography>
            <Button variant="outlined" color="inherit" onClick={clearSelectedOptions}>Clear</Button>
          </ListItem>
          <Divider />

          <ListItem>
            <Accordion style={{ width: "500px" }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h5">Duration</Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Slider
                  value={value}
                  min={0}
                  max={1000}
                  onChange={handleChange}
                  valueLabelDisplay="auto"
                  getAriaValueText={valuetext}
                  style={{ color: "grey" }}
                />
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
              </AccordionDetails>
            </Accordion>
          </ListItem>
          <Divider />

          <ListItem>
            <Accordion style={{ width: "500px" }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h5">Service</Typography>
              </AccordionSummary>

              <AccordionDetails>
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
            <Accordion style={{ width: "500px"}}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h5">HTTP Method</Typography>
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
            <Accordion style={{ width: "500px"}}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h5">HTTP Code</Typography>
              </AccordionSummary>

              <AccordionDetails>  
                <FormGroup>
                  {codesNew.map((code,index) => (
                    <FormControlLabel
                    key={index}
                    control={<Checkbox
                      checked={selectedOptions.some(
                        (opt) =>
                          typeof opt === 'string'
                            ? opt === code
                            : opt.miniVal === code.labelValue.miniVal &&
                              opt.maxiVal === code.labelValue.maxiVal
                      )}
                      onChange={toggleOption(
                        typeof code === 'string' ? code : code.labelValue
                      )}
                      sx={{
                        color: "grey",
                        '&.Mui-checked': {
                          color: "blue",
                        },
                      }}
                    />
                    }
                  label={code.labelName}
                  />))}
                </FormGroup>
              </AccordionDetails>
            </Accordion>
          </ListItem>
          <Divider />

        </List>

        <div style={{ padding: "16px" }}>
          <Button variant="contained" onClick={handleApplyButtonClick} color="primary">
            Apply
          </Button>
        </div>
      </div>
    </Drawer>
  );
};

export default FilterDialog;
