import React from "react";
import TraceList from "./trace/TraceList";
import { Box, Card, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import SpanFlow from "./trace/SpanFlow";

const Traces = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <div style={{ display: "flex", flexDirection: "row", justifyContent: "normal" }} >
      {/* <TraceTopBar /> */}
      <Box sx={{ width: "550px", m: "40px 20px 20px 20px" }} >
        <Card sx={{ backgroundColor: colors.primary[400], padding: "15px" }}>
          <TraceList />
        </Card>
      </Box>

      <div>
        <Box sx={{m: "40px 20px 20px 10px", width:"650px", }} >
          <Card sx={{ backgroundColor: colors.primary[400], padding: "15px" }}>
            <SpanFlow />
          </Card>
        </Box>
      </div>


    </div >
  );
};

export default Traces;
