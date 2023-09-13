import React from "react";
import TraceList from "./trace/TraceList";
import { Box, Card } from "@mui/material";

const Traces = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", padding: "20px", maxHeight: "calc(100vh - 50px)", overflowY: "auto"}}>
      {/* <TraceTopBar /> */}
      <div>
        <Card sx={{ padding: "10px", flex: 1, marginTop: "10px" }}>
          <TraceList />
        </Card>
      </div>

      <div>

      </div>

    </div>
  );
};

export default Traces;
