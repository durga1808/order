import React from "react";
import { tokens } from "../../../../theme";
import { useTheme } from "@emotion/react";

const MyComponent = ({
  selectedService,
  APICallsData,
  PeakLatencyData,
  ErrorData,
  SuccessData,
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const boxStyle = {
    backgroundColor: colors.primary[400],
    borderRadius: "5px",
    textAlign: "center",
    overflow: "hidden",
    width: selectedService ? "150px" : "350px", // Set a fixed width for the box (change this to your desired width)
    height: "50px", // Set a fixed height for the box (change this to your desired height)
    whiteSpace: "nowrap", // Prevents content from wrapping to the next line
    margin: "0 auto",
  };
  return (
    <div style={{ display: "flex" }}>
      {selectedService ? (
        <>
          <div style={boxStyle}>
            <p>API Calls: {APICallsData}</p>
          </div>
          <div style={boxStyle}>
            <p>Peak Latency: {PeakLatencyData}</p>
          </div>
          <div style={boxStyle}>
            {ErrorData !== null && <p>Error Calls: {ErrorData}</p>}
            {SuccessData !== null && <p>Success Calls: {SuccessData}</p>}
          </div>
        </>
      ) : (
        <div style={boxStyle}>
          <p>Please click on Error bar to get more information!</p>
        </div>
      )}
    </div>
  );
};

export default MyComponent;
