import React, { useEffect } from "react";
import TraceList from "./trace/TraceList";
import { Box, Card, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import SpanFlow from "./trace/spanReactFlow/SpanFlow";
import SpanInfo from "./trace/spanReactFlow/SpanInfo";
import { useContext } from "react";
import { GlobalContext } from "../../global/globalContext/GlobalContext";
import KeyboardDoubleArrowRightRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowRightRounded';
import ErrorContext from "./trace/ErrorBox/ErrorContext";

import "./index.css"

const Traces = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { traceGlobalEmpty, traceGlobalError, showError } = useContext(GlobalContext);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "normal",
      }}
    >
      {traceGlobalError ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "80vh",
          }}
        >
          <Typography variant="h5" fontWeight={"600"}>
            {traceGlobalError}
          </Typography>
        </div>
      ) : traceGlobalEmpty ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "80vh",
          }}
        >
          <Typography variant="h5" fontWeight={"600"}>
            {traceGlobalEmpty}
          </Typography>
        </div>
      ) : (
        <div style={{ display: "flex", width: "100%" }}>
          {/* Rest of your JSX structure */}
          {/* <TraceTopBar /> */}

          <div style={{ width: "100%" }}>
            <Box sx={{ m: "20px 10px 0 20px" }}>
              <Card
                elevation={4}
                sx={{
                  // backgroundColor: theme.palette.mode==="dark"?"#2C3539":null,
                  padding: "15px",
                  width: "100%",
                  overflowX: "auto",
                  height: "calc(84vh - 72px)",
                }}
              >
                <TraceList />
              </Card>
            </Box>
          </div>

          <div style={{ width: "100%" }}>
            <Box sx={{ m: "20px 20px 10px 10px" }}>
              {!showError ? (<Card
                elevation={4}
                sx={{
                  // backgroundColor: theme.palette.mode==="dark"?"#2C3539":null,
                  padding: "15px",
                  width: "600px",
                  height: "calc(84vh - 72px)",
                  // overflowY: "auto",
                }}
              >
                <SpanFlow />
              </Card>
              ) : (<Card
                elevation={4}
                sx={{
                  // backgroundColor: theme.palette.mode==="dark"?"#2C3539":null,
                  padding: "15px",
                  width: "600px",
                  height: "calc(84vh - 72px)",
                  // overflowY: "auto",
                }}
              >
                <ErrorContext />
              </Card>)}
              {/* <Box sx={{ m: "30px 20px 20px 0" }} >
            <Card sx={{ backgroundColor: colors.primary[400], padding: "15px", width: "620px", height: 315 }}>
              <SpanInfo />
            </Card>
          </Box> */}
            </Box>
          </div>
        </div>
      )}
    </div>
  );
};

export default Traces;
