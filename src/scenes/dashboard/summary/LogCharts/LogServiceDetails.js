import React from "react";
import { tokens } from "../../../../theme";
import { useTheme } from "@emotion/react";

const LogServiceDetails = ({
  selectedService,
  DebugCountData,
  WarnCountData,
  ErrCountData,
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const boxStyle = {
    backgroundColor: colors.primary[400],
    borderRadius: "5px",
    textAlign: "center",
    overflow: "hidden",
    width: selectedService ? "150px" : "300px", // Set a fixed width for the box (change this to your desired width)
    height: "50px", // Set a fixed height for the box (change this to your desired height)
    whiteSpace: "nowrap", // Prevents content from wrapping to the next line
    margin: "0 auto",
  };
  return (
    <div style={{ display: "flex" }}>
      {selectedService ? (
        <>
          <div style={boxStyle}>
            <p>Debug Count: {DebugCountData}</p>
          </div>
          <div style={boxStyle}>
            <p>Warn Count: {WarnCountData} ms</p>
          </div>
          <div style={boxStyle}>
          <p>Error Count: {ErrCountData}</p>
           
          </div>
        </>
      ) : (
        <div style={boxStyle}>
          <p>Please click any one bar for API details.</p>
        </div>
      )}
    </div>
  );
};

export default LogServiceDetails;
