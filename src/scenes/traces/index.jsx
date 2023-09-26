import React from "react";
import TraceList from "./trace/TraceList";
import { Box, Card, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import SpanFlow from "./trace/spanReactFlow/SpanFlow";
import SpanInfo from "./trace/spanReactFlow/SpanInfo";
import { useContext } from "react";
import { GlobalContext } from "../../global/globalContext/GlobalContext";


const Traces = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { selectedTrace, selectedSpan } = useContext(GlobalContext);
  return (
    <div style={{ display: "flex", flexDirection: "row", justifyContent: "normal", }}>
      {/* <TraceTopBar /> */}
      <Box sx={{ m: "20px 20px 0 20px" }} >
        <Card sx={{ backgroundColor: colors.primary[400], padding: "15px", width: "580px",height: "calc(90vh - 70px)", }}>
          <TraceList />
        </Card>
      </Box>

      <div>
        <Box sx={{ m: "20px 20px 20px 10px", }} >
          <Card sx={{
            backgroundColor: colors.primary[400], padding: "15px", width: "620px",
            height: "calc(90vh - 70px)",
            overflowY:"auto"
          }}>
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
