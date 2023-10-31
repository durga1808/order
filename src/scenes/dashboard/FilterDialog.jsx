import React, { useContext, useEffect, useState } from "react";
import { Drawer, Divider, IconButton, useTheme } from "@mui/material";
import { List, ListItem } from "@mui/material";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FormGroup, FormControlLabel } from "@mui/material";
import { Slider, TextField, Button, Checkbox, Typography } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import { TraceFilterOption } from "../../api/TraceApiService";
import { GlobalContext } from "../../global/globalContext/GlobalContext";
import { formatDistanceToNow } from "date-fns";
import { tokens } from "../../theme";

const FilterDialog = () => {
  // const [value, setValue] = useState([0, 1000]);
  const [minDurationValue, setMinDurationValue] = useState(0);
  const [maxDurationValue, setMaxDurationValue] = useState(10000);
  const [selectedService, setSelectedService] = useState([]);
  const [selectedHttpMethod, setSelectedHttpMethod] = useState([]);
  const [selectedHttpCode, setSelectedHttpCode] = useState([]);
  const {
    setNeedFilterCall,
    setClearTraceFilter,
    clearTraceFilter,
    setFilterApiBody,
    setTraceGlobalEmpty,
    setTraceGlobalError,
    setTraceDisplayService,
  } = useContext(GlobalContext);
  const [services, setServices] = useState(
    JSON.parse(localStorage.getItem("serviceListData"))
  );

  const methods = ["POST", "GET", "PUT", "DELETE"];

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const codesNew = [
    {
      labelName: "2xx",
      labelValue: {
        min: 200,
        max: 299,
      },
    },
    {
      labelName: "3xx",
      labelValue: {
        min: 300,
        max: 399,
      },
    },
    {
      labelName: "4xx",
      labelValue: {
        min: 400,
        max: 499,
      },
    },
    {
      labelName: "5xx",
      labelValue: {
        min: 500,
        max: 599,
      },
    },
  ];

  const handleServiceToggle = (service) => () => {
    if (selectedService.includes(service)) {
      setSelectedService(selectedService.filter((item) => item !== service));
      setTraceDisplayService(
        selectedService.filter((item) => item !== service)
      );
    } else {
      setSelectedService([...selectedService, service]);
      setTraceDisplayService([...selectedService, service]);
    }
  };

  const handleHttpToggle = (method) => () => {
    if (selectedHttpMethod.includes(method)) {
      setSelectedHttpMethod(
        selectedHttpMethod.filter((item) => item !== method)
      );
    } else {
      setSelectedHttpMethod([...selectedHttpMethod, method]);
    }
  };

  const handleHttpCodeToggle = (code) => () => {
    if (
      selectedHttpCode.some(
        (opt) =>
          typeof opt === "object" &&
          opt.min === code.labelValue.min &&
          opt.max === code.labelValue.max
      )
    ) {
      setSelectedHttpCode(
        selectedHttpCode.filter(
          (opt) =>
            !(
              typeof opt === "object" &&
              opt.min === code.labelValue.min &&
              opt.max === code.labelValue.max
            )
        )
      );
    } else {
      setSelectedHttpCode([...selectedHttpCode, code.labelValue]);
    }
  };

  const clearSelectedOptions = () => {
    setSelectedHttpCode([]);
    setSelectedHttpMethod([]);
    setSelectedService([]);
    setTraceDisplayService([]);
    setMinDurationValue(0);
    setMaxDurationValue(10000);
  };

  const handleChange = (event, newValue) => {
    setMinDurationValue(newValue[0]);
    setMaxDurationValue(newValue[1]);
  };

  const handleMinChange = (event) => {
    const newValue = parseInt(event.target.value);
    if (!isNaN(newValue) && newValue <= maxDurationValue) {
      setMinDurationValue(newValue);
    }
  };

  const handleMaxChange = (event) => {
    const newValue = parseInt(event.target.value);
    if (!isNaN(newValue) && newValue >= minDurationValue) {
      setMaxDurationValue(newValue);
    }
  };

  const valuetext = (value) => {
    return `${value}`;
  };

  useEffect(() => {
    if (clearTraceFilter) {
      clearSelectedOptions();
    }
  }, [clearTraceFilter]);

  const handleApplyButtonClick = () => {
    const payload = {
      duration: {
        minValue: minDurationValue,
        maxValue: maxDurationValue,
      },
      service: selectedService,
      methodName: selectedHttpMethod,
      statusCode: selectedHttpCode,
    };

    const apiBody = {};

    // Check if minValue and maxValue are not null and not empty strings in the duration object
    if (payload.duration.minValue > 0 || payload.duration.maxValue < 1000) {
      apiBody.duration = {
        min: payload.duration.minValue,
        max: payload.duration.maxValue,
      };
    }

    // Check if selectedService is not null and not an empty array
    if (
      payload.service !== null &&
      Array.isArray(payload.service) &&
      payload.service.length > 0
    ) {
      apiBody.serviceName = payload.service;
    }

    // Check if selectedHttpMethod is not null and not an empty array
    if (
      payload.methodName !== null &&
      Array.isArray(payload.methodName) &&
      payload.methodName.length > 0
    ) {
      apiBody.methodName = payload.methodName;
    }

    // Check if selectedHttpCode is not null and not an empty array
    if (
      payload.statusCode !== null &&
      Array.isArray(payload.statusCode) &&
      payload.statusCode.length > 0
    ) {
      apiBody.statusCode = payload.statusCode;
    }

    console.log("Selected Options:", apiBody);
    if (Object.keys(apiBody).length !== 0) {
      setFilterApiBody(apiBody);
      setNeedFilterCall(true);
      setTraceGlobalEmpty(null);
      setTraceGlobalError(null);
    } else {
      setNeedFilterCall(false);
      setClearTraceFilter(false);
      setTraceGlobalEmpty(null);
      setTraceGlobalError(null);
    }
    const selectedDuration = `${minDurationValue}ms - ${maxDurationValue}ms`;
    console.log("Selected Duration:", selectedDuration);

    // onClose();
  };

  return (
    <div className="custom-drawer" style={{ backgroundColor: colors.primary[400], overflowY: "auto", height: "82vh" }}>
      <style>
        {`

      .custom-drawer::-webkit-scrollbar-thumb {
        background-color: ${colors.primary[400]}; /* Color of the thumb */
        border-radius: 6px; /* Roundness of the thumb */
      }

      .custom-drawer::-webkit-scrollbar-track {
        background-color: ${colors.primary[400]}; /* Color of the track */
      }
    `}
      </style>
      <div style={{ width: '245px' }}>
        <List>
          <ListItem
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h5"
              fontWeight="500"
              color={
                window.location.pathname === "/mainpage/dashboard" ||
                window.location.pathname === "/mainpage/dashboard/logSummary" ||
                window.location.pathname === "/mainpage/dashboard/dbSummary" ||
                window.location.pathname === "/mainpage/dashboard/kafkaSummary"
                  ? "lightgrey"
                  : "#FFF"
              }
            >
              Filter Options
            </Typography>
            <Button
              variant="outlined"
              color="primary"
              onClick={clearSelectedOptions}
              disabled={
                window.location.pathname === "/mainpage/dashboard" ||
                window.location.pathname === "/mainpage/dashboard/logSummary" ||
                window.location.pathname === "/mainpage/dashboard/dbSummary" ||
                window.location.pathname === "/mainpage/dashboard/kafkaSummary"
              }
            >
              Clear
            </Button>
          </ListItem>
          <Divider />

          <ListItem>
            <Accordion
              style={{ width: "500px", backgroundColor: colors.primary[400] }}
              disabled={
                window.location.pathname === "/mainpage/dashboard" ||
                window.location.pathname === "/mainpage/dashboard/logSummary" ||
                window.location.pathname === "/mainpage/dashboard/dbSummary" ||
                window.location.pathname === "/mainpage/dashboard/kafkaSummary"
              }
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h5" color={"#FFF"}>
                  Duration
                </Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Slider
                  disabled={
                    window.location.pathname === "/mainpage/dashboard" ||
                    // window.location.pathname === "/mainpage/log" ||
                    window.location.pathname ===
                      "/mainpage/dashboard/logSummary" ||
                    window.location.pathname === "/mainpage/dashboard/dbSummary" ||
                    window.location.pathname === "/mainpage/dashboard/kafkaSummary"
                  }
                  value={[minDurationValue, maxDurationValue]}
                  min={0}
                  max={10000}
                  onChange={handleChange}
                  valueLabelDisplay="auto"
                  getAriaValueText={(valuetext) => valuetext}
                  style={{
                    color:
                      window.location.pathname === "/mainpage/dashboard" ||
                      window.location.pathname ===
                        "/mainpage/dashboard/logSummary" ||
                      window.location.pathname ===
                        "/mainpage/dashboard/dbSummary" ||
                        window.location.pathname === "/mainpage/dashboard/kafkaSummary"
                        ? "lightgrey"
                        : "white",
                  }}
                />
                <TextField
                  disabled={
                    window.location.pathname === "/mainpage/dashboard" ||
                    window.location.pathname ===
                      "/mainpage/dashboard/logSummary" ||
                    window.location.pathname === "/mainpage/dashboard/dbSummary" ||
                    window.location.pathname === "/mainpage/dashboard/kafkaSummary"
                  }
                  label="Min"
                  variant="outlined"
                  value={minDurationValue}
                  onChange={handleMinChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <span style={{ color: "#fff" }}>ms</span>
                      </InputAdornment>
                    ),
                  }}
                  style={{ margin: "10px", color: "#fff" }}
                />
                <TextField
                  disabled={
                    window.location.pathname === "/mainpage/dashboard" ||
                    window.location.pathname ===
                      "/mainpage/dashboard/logSummary" ||
                    window.location.pathname === "/mainpage/dashboard/dbSummary" ||
                    window.location.pathname === "/mainpage/dashboard/kafkaSummary"
                  }
                  label="Max"
                  variant="outlined"
                  value={maxDurationValue}
                  onChange={handleMaxChange}
                  color="primary"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <span style={{ color: "#fff" }}>ms</span>
                      </InputAdornment>
                    ),
                  }}
                  style={{ margin: "10px", color: "#fff" }}
                />
              </AccordionDetails>
            </Accordion>
          </ListItem>
          <Divider />

          <ListItem>
            <Accordion
              style={{ width: "500px", backgroundColor: colors.primary[400] }}
              disabled={
                window.location.pathname === "/mainpage/dashboard" ||
                window.location.pathname === "/mainpage/dashboard/logSummary" ||
                window.location.pathname === "/mainpage/dashboard/dbSummary" ||
                window.location.pathname === "/mainpage/dashboard/kafkaSummary"
              }
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h5" color={"#fff"}>
                  Service
                </Typography>
              </AccordionSummary>

              <AccordionDetails>
                <FormGroup>
                  {services.map((service, index) => (
                    <FormControlLabel
                      key={index}
                      control={
                        <Checkbox
                          disabled={window.location.pathname === "/mainpage/dashboard" || window.location.pathname === "/mainpage/dashboard/logSummary" || window.location.pathname === "/mainpage/dashboard/kafkaSummary"}
                          checked={selectedService.includes(service)}
                          onChange={handleServiceToggle(service)}
                          sx={{
                            // color: '#696969',
                          // color: '#F2F3F4',
                          color: '#17202A',
                          
                          '&.Mui-checked': {
                            // color: "blue",
                            color: "white",
                            },
                          }}
                        />
                      }
                      label={service}
                      sx={{
                        color: "white",
                      }}
                    />
                  ))}
                </FormGroup>
              </AccordionDetails>
            </Accordion>
          </ListItem>
          <Divider />

          <ListItem>
            <Accordion
              style={{ width: "500px", backgroundColor: colors.primary[400] }}
              disabled={
                window.location.pathname === "/mainpage/dashboard" ||
                window.location.pathname === "/mainpage/dashboard/logSummary" ||
                window.location.pathname === "/mainpage/dashboard/dbSummary" ||
                window.location.pathname === "/mainpage/dashboard/kafkaSummary"
              }
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h5" color={"#fff"}>
                  HTTP Method
                </Typography>
              </AccordionSummary>

              <AccordionDetails>
                <FormGroup>
                  {methods.map((method) => (
                    <FormControlLabel
                      key={method}
                      control={
                        <Checkbox
                          disabled={window.location.pathname === "/mainpage/dashboard" || window.location.pathname === "/mainpage/dashboard/logSummary" || window.location.pathname === "/mainpage/dashboard/kafkaSummary"}
                          checked={selectedHttpMethod.includes(method)}
                          onChange={handleHttpToggle(method)}
                          sx={{
                             // color: '#696969',
                          // color: '#F2F3F4',
                          color: '#17202A',
                          
                          '&.Mui-checked': {
                            // color: "blue",
                            color: "white",
                            },
                          }}
                        />
                      }
                      label={method}
                      sx={{
                        color: "white",
                      }}
                    />
                  ))}
                </FormGroup>
              </AccordionDetails>
            </Accordion>
          </ListItem>
          <Divider />

          <ListItem>
            <Accordion
              style={{ width: "500px", backgroundColor: colors.primary[400] }}
              disabled={
                window.location.pathname === "/mainpage/dashboard" ||
                window.location.pathname === "/mainpage/dashboard/logSummary" ||
                window.location.pathname === "/mainpage/dashboard/dbSummary" ||
                window.location.pathname === "/mainpage/dashboard/kafkaSummary"
              }
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h5" color={"#fff"}>
                  HTTP Code
                </Typography>
              </AccordionSummary>

              <AccordionDetails>
                <FormGroup>
                  {codesNew.map((code, index) => (
                    <FormControlLabel
                      key={index}
                      control={
                        <Checkbox
                          disabled={
                            window.location.pathname ===
                              "/mainpage/dashboard" ||
                            window.location.pathname ===
                              "/mainpage/dashboard/logSummary" ||
                            window.location.pathname ===
                              "/mainpage/dashboard/dbSummary" ||
                              window.location.pathname ===
                              "/mainpage/dashboard/kafkaSummary"  
                          }
                          checked={selectedHttpCode.some(
                            (opt) =>
                              typeof opt === "object" &&
                              opt.min === code.labelValue.min &&
                              opt.max === code.labelValue.max
                          )}
                          onChange={handleHttpCodeToggle(code)}
                          sx={{
                            // color: '#696969',
                          // color: '#F2F3F4',
                          color: '#17202A',
                          
                          '&.Mui-checked': {
                            // color: "blue",
                            color: "white",
                            },
                          }}
                        />
                      }
                      label={code.labelName}
                      sx={{
                        color: "white",
                      }}
                    />
                  ))}
                </FormGroup>
              </AccordionDetails>
            </Accordion>
          </ListItem>
          <Divider />
        </List>

        <div style={{ padding: "16px" }}>
          <Button
            variant="contained"
            onClick={handleApplyButtonClick}
            color="primary"
            disabled={
              window.location.pathname === "/mainpage/dashboard" ||
              window.location.pathname === "/mainpage/dashboard/logSummary" ||
              window.location.pathname === "/mainpage/dashboard/dbSummary" ||
              window.location.pathname === "/mainpage/dashboard/kafkaSummary"
            }
          >
            Apply
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FilterDialog;
