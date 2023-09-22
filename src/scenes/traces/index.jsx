import React from "react";
import TraceList from "./trace/TraceList";
import { Box, Card, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import SpanFlow from "./trace/spanReactFlow/SpanFlow";
import SpanInfo from "./trace/spanReactFlow/SpanInfo";


const Traces = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <div style={{ display: "flex", flexDirection: "row", justifyContent: "normal", }}>
      {/* <TraceTopBar /> */}
      <Box sx={{ m: "40px 20px 0 20px" }} >
        <Card sx={{ backgroundColor: colors.primary[400], padding: "15px", width: "580px" }}>
          <TraceList />
        </Card>
      </Box>

      <div>
        <Box sx={{ m: "40px 20px 20px 10px" }} >
          <Card sx={{ backgroundColor: colors.primary[400], padding: "15px", width: "620px", height: 615 }}>
            <SpanFlow />
          </Card>
          {/* <Box sx={{ m: "30px 20px 20px 0" }} >
            <Card sx={{ backgroundColor: colors.primary[400], padding: "15px", width: "620px", height: 315 }}>
              <SpanInfo />
            </Card>
          </Box> */}
        </Box>
      </div>
    </div >
  );
};

export default Traces;
