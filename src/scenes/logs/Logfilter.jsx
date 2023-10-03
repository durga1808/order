import React, { useState } from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Button, Checkbox, Divider, Drawer, FormControlLabel, FormGroup, IconButton, InputAdornment, List, ListItem, Slider, TextField, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';

const Logfilter = ({ open, onClose}) => {
    const [selectedService, setSelectedService] = useState([]);

    const services = ['order-project', 'vendor-project', 'ProviderService', 'DeliveryService'];

    const handleServiceToggle = (service) => () => {
        if (selectedService.includes(service)) {
          setSelectedService(selectedService.filter((item) => item !== service));
        } else {
          setSelectedService([...selectedService, service]);
        }
      };

    const handleApplyButtonClick = () => {
        onClose();
    }

    const clearSelectedOptions = () => {
        setSelectedService([]);
    }

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

      </List>

      <div style={{ padding: "16px" }}>
        <Button variant="contained" onClick={handleApplyButtonClick} color="primary">
          Apply
        </Button>
      </div>
    </div>
  </Drawer>
  )
}

export default Logfilter