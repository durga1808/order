import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import { tokens } from "../../../../theme";
import { useTheme } from "@emotion/react";

const ServiceTable = ({
  APICallsData,
  PeakLatencyData,
  ErrSuccessData,
  selectedService,
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  // Filter the data for the selected service
  const selectedApiCallsData = APICallsData.find(
    (item) => item.serviceName === selectedService
  );
  // const selectedPeakLatencyData = PeakLatencyData.find(
  //   (item) => item.serviceName === selectedService
  // );
  // const selectedErrorSuccessData = ErrSuccessData.find(
  //   (item) => item.serviceName === selectedService
  // );

  return (
    <div style={{ margin: "30px" }}>
      {selectedService && (
        // <Card elevation={3} style={{ margin: "16px" }}>
        // <CardContent>
        <TableContainer component={Paper}>
          <Table>
            <TableHead style={{ backgroundColor: colors.primary[400] }}>
              <TableRow>
                <TableCell style={{ textAlign: "center" }}>Trace Id</TableCell>
                <TableCell style={{ textAlign: "center" }}>
                  Operation Name
                </TableCell>
                <TableCell style={{ textAlign: "center" }}>
                  Method Name
                </TableCell>
                <TableCell style={{ textAlign: "center" }}>Duration</TableCell>
                <TableCell style={{ textAlign: "center" }}>
                  Status Code
                </TableCell>
                <TableCell style={{ textAlign: "center" }}>
                  created Time
                </TableCell>
                <TableCell style={{ textAlign: "center" }}>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* {selectedService && ( */}
              <TableRow key={selectedService}>
                {/* <TableCell>{selectedService}</TableCell> */}
                <TableCell style={{ textAlign: "center" }}>
                  {selectedApiCallsData.traceId}
                </TableCell>
                <TableCell style={{ textAlign: "center" }}>
                  {selectedApiCallsData.operationName}
                </TableCell>
                <TableCell style={{ textAlign: "center" }}>
                  {selectedApiCallsData.methodName}
                </TableCell>

                <TableCell style={{ textAlign: "center" }}>
                  {selectedApiCallsData.duration}
                </TableCell>
                <TableCell style={{ textAlign: "center" }}>
                  {selectedApiCallsData.statusCode}
                </TableCell>
                <TableCell style={{ textAlign: "center" }}>
                  {selectedApiCallsData.createdTime}
                </TableCell>
                <TableCell style={{ textAlign: "center" }}>
                  <Button variant="primary">Action</Button>
                </TableCell>
              </TableRow>
              {/* )} */}
            </TableBody>
          </Table>
        </TableContainer>
        // </CardContent>
        // </Card>
      )}
    </div>
  );
};

export default ServiceTable;
