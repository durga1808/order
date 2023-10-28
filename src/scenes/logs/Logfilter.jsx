import React, { useEffect, useState } from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Button, Checkbox, Divider, Drawer, FormControlLabel, FormGroup, IconButton, List, ListItem, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import { useContext } from 'react';
import { GlobalContext } from '../../global/globalContext/GlobalContext';

const Logfilter = ({ open, onClose }) => {
  const [selectedService, setSelectedService] = useState([]);
  const [selectedSeverity, setSelectedSeverity] = useState([]);
  const { setLogFilterApiBody, setNeedLogFilterCall,clearLogFilter, setClearLogFilter ,setSelectedLogService} = useContext(GlobalContext);
  const [services, setServices] = useState(JSON.parse(localStorage.getItem("serviceListData")));

  // const services = ['order-project', 'vendor-project', 'ProviderService', 'DeliveryService'];

  const severity = ['ERROR', 'SEVERE', 'WARNING', 'INFO'];

  const handleServiceToggle = (service) => () => {
    if (selectedService.includes(service)) {
      setSelectedService(selectedService.filter((item) => item !== service));
      setSelectedLogService(selectedService.filter((item) => item !== service));
    } else {
      setSelectedService([...selectedService, service]);
      setSelectedLogService([...selectedService, service]);
    }
  };

  const clearSelectedOptions = () => {
    setSelectedService([]);
    setSelectedSeverity([]);
    setSelectedLogService([]);
  }

  const handleSeverityToggle = (severity) => () => {
    if (selectedSeverity.includes(severity)) {
      setSelectedSeverity(selectedSeverity.filter((item) => item !== severity));
    } else {
      setSelectedSeverity([...selectedSeverity, severity]);
    }
  }

  useEffect(() => {
    if(clearLogFilter){
      clearSelectedOptions();
    }
  }, [clearLogFilter])

  const handleApplyButtonClick = () => {
    const payload = {
      service: selectedService,
      severityText: selectedSeverity
    }

    const apiBody = {};

    if (payload.service !== null && Array.isArray(payload.service) && payload.service.length > 0) {
      apiBody.serviceName = payload.service;
    }

    if (payload.severityText !== null && Array.isArray(payload.severityText) && payload.severityText.length > 0) {
      apiBody.severityText = payload.severityText;
    }


    console.log('API Body:', apiBody);

    if (Object.keys(apiBody).length !== 0) {
      setLogFilterApiBody(apiBody);
      setNeedLogFilterCall(true);
    } else {
      setClearLogFilter(false);
      setNeedLogFilterCall(false);
    }


    onClose();

  }


  return (
    <div style={{ width: "245px" }}>
        <List>
          <ListItem sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }} >
            <Typography variant="h5" fontWeight="500">Filter Options</Typography>
            <Button variant="outlined" color="inherit" onClick={clearSelectedOptions}>Clear</Button>
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
                        checked={selectedService.includes(service)}
                        onChange={handleServiceToggle(service)}
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
            <Accordion style={{ width: "500px" }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h5">Severity Changes</Typography>
              </AccordionSummary>

              <AccordionDetails>
                <FormGroup>
                  {severity.map((severity) => (
                    <FormControlLabel
                      key={severity}
                      control={<Checkbox
                        checked={selectedSeverity.includes(severity)}
                        onChange={handleSeverityToggle(severity)}
                        sx={{
                          color: "grey",
                          '&.Mui-checked': {
                            color: "blue",
                          },
                        }}
                      />
                      }
                      label={severity}
                    />))}
                </FormGroup>
              </AccordionDetails>
            </Accordion>
          </ListItem>

        </List>

        <div style={{ padding: "16px" }}>
          <Button variant="contained" onClick={handleApplyButtonClick} color="primary">
            Apply
          </Button>
        </div>
      </div>
  )
}

export default Logfilter