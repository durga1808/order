import React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";

const FilterDialog = ({ open, onClose }) => {
  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <div style={{ width: "300px" }}>
        <List>
          <ListItem>
            <ListItemText primary="Filter Options" />
          </ListItem>
          <Divider />
          {/* Add your filter options as ListItems */}
          <ListItem>
            {/* Example: */}
            {/* <TextField label="Filter by Name" fullWidth /> */}
          </ListItem>
          <ListItem>
            {/* Example: */}
            {/* <TextField label="Filter by Date" fullWidth /> */}
          </ListItem>
        </List>
        <Divider />
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
