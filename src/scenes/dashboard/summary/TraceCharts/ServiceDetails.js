// import React from "react";
// // import Paper from "@mui/material/Paper";
// import Grid from "@mui/material/Grid";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";

// const ServiceDetails = ({
//   selectedService,
//   APICallsData,
//   PeakLatencyData,
//   ErrSuccessData,
// }) => {
//   return (
//     <div>
//       <Grid container spacing={2} justifyContent="center">
//         {selectedService ? (
//           <>
//             <Grid item xs={12} sm={4}>
//               <Card
//                 elevation={3}
//                 style={{
//                   backgroundColor: "#f5f5f5",
//                   marginLeft: "35px",
//                   marginBottom: "20px",
//                 }}
//               >
//                 <CardContent style={{ textAlign: "center" }}>
//                   <p>API Calls: {APICallsData}</p>
//                 </CardContent>
//               </Card>
//             </Grid>
//             <Grid item xs={12} sm={4}>
//               <Card
//                 elevation={3}
//                 style={{ backgroundColor: "#f5f5f5", marginBottom: "20px" }}
//               >
//                 <CardContent style={{ textAlign: "center" }}>
//                   <p>Peak Latency: {PeakLatencyData} ms</p>
//                 </CardContent>
//               </Card>
//             </Grid>
//             <Grid item xs={12} sm={4}>
//               <Card
//                 elevation={3}
//                 style={{
//                   backgroundColor: "#f5f5f5",
//                   marginRight: "35px",
//                   marginBottom: "20px",
//                 }}
//               >
//                 <CardContent style={{ textAlign: "center" }}>
//                   <p>Error Calls: {ErrSuccessData}</p>
//                 </CardContent>
//               </Card>
//             </Grid>
//           </>
//         ) : (
//           <Grid item xs={12} sm={4}>
//             <Card elevation={3} style={{ backgroundColor: "#f5f5f5" }}>
//               <CardContent style={{ textAlign: "center" }}>
//                 <p>Please click any one bar for API details.</p>
//               </CardContent>
//             </Card>
//           </Grid>
//         )}
//       </Grid>
//     </div>
//   );
// };

// export default ServiceDetails;

import React from "react";

const boxStyle = {
  backgroundColor: "#f5f5f5",
  padding: "3px 5px 3px 5px", // Adjust the padding as needed
  borderRadius: "5px",
  textAlign: "center",
  width: "fit-content", // Adjust the width as needed
  margin: "0 auto", // Center horizontally
};

const MyComponent = ({
  selectedService,
  APICallsData,
  PeakLatencyData,
  ErrSuccessData,
}) => {
  return (
    <div style={{ display: "flex" }}>
      {selectedService ? (
        <>
          <div style={boxStyle}>
            <p>API Calls: {APICallsData}</p>
          </div>
          <div style={boxStyle}>
            <p>Peak Latency: {PeakLatencyData} ms</p>
          </div>
          <div style={boxStyle}>
            <p>Error Calls: {ErrSuccessData}</p>
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

export default MyComponent;
