import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const ServiceTable = ({
  APICallsData,
  PeakLatencyData,
  ErrSuccessData,
  selectedService,
}) => {
  // Filter the data for the selected service
  const selectedApiCallsData = APICallsData.find(
    (item) => item.serviceName === selectedService
  );
  const selectedPeakLatencyData = PeakLatencyData.find(
    (item) => item.serviceName === selectedService
  );
  const selectedErrorSuccessData = ErrSuccessData.find(
    (item) => item.serviceName === selectedService
  );

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Service Name</TableCell>
            <TableCell>API Calls</TableCell>
            <TableCell>Peak Latency</TableCell>
            <TableCell>Error Calls</TableCell>
            <TableCell>Success Calls</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {selectedService && (
            <TableRow key={selectedService}>
              <TableCell>{selectedService}</TableCell>
              <TableCell>{selectedApiCallsData.apiCalls}</TableCell>
              <TableCell>{selectedPeakLatencyData.peakLatency}</TableCell>
              <TableCell>{selectedErrorSuccessData.errorCalls}</TableCell>
              <TableCell>{selectedErrorSuccessData.successCalls}</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ServiceTable;
