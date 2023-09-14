import React from "react";
import TraceList from "./trace/TraceList";
import { Box, Card, useTheme } from "@mui/material";
import { tokens } from "../../theme";

const Traces = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <div >
      {/* <TraceTopBar /> */}
      <Box sx={{width:"550px", m: "40px 20px 20px 20px" }} >
        <Card sx={{ backgroundColor: colors.primary[400], padding: "15px" }}>
          <TraceList />
        </Card>
      </Box>

      <div>

      </div>

    </div >
  );
};

export default Traces;
