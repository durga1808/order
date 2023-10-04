import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  TablePagination,
} from "@mui/material";
import { tokens } from "../../../../theme";
import { useTheme } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../../../../global/globalContext/GlobalContext";
import { spanData } from "../../../../global/MockData/SpanData";

const ServiceTable = ({
  APICallsData,
  PeakLatencyData,
  ErrSuccessData,
  selectedService,
}) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const colors = tokens(theme.palette.mode);
  const { setSelected, setTraceData, setRecentTrace, dashboardPageCount, dashboardPage, setDashboardPage } = useContext(GlobalContext);
  const [selectedTableData, setSelectedTableData] = useState([]);
  // Filter the data for the selected service
  // const selectedApiCallsData = APICallsData.find(
  //   (item) => item.serviceName === selectedService
  // );

  useEffect(() => {
    if(selectedService !== null){
      setSelectedTableData(selectedService);
    }
    else {
      setSelectedTableData([]);
    }
  }, [selectedService])

  // const selectedApiCallsData = spanData.find(
  //   (item) => item.serviceName === selectedService && item.traceId === "2384799a01be10b55245e99864bba516"
  // );

  // const selectedPeakLatencyData = PeakLatencyData.find(
  //   (item) => item.serviceName === selectedService
  // );
  // const selectedErrorSuccessData = ErrSuccessData.find(
  //   (item) => item.serviceName === selectedService
  // );

  const handleOpenTrace = (trace) => {

    // console.log("TRACE " + JSON.stringify([trace] ));
    setRecentTrace([trace]);
    // setTraceData([trace]);
    localStorage.setItem("routeName", "Traces");
    setSelected("Traces");
    navigate("/mainpage/traces");
  }

  const handlePageChange = (event, newPage) => {
    console.log("Dashboard page change " + newPage);
    setDashboardPage(newPage);
  }

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
              {selectedTableData.map((trace, index) => (
                <TableRow key={index}>
                  {/* <TableCell>{selectedService}</TableCell> */}
                  <TableCell style={{ textAlign: "center" }}>
                    {trace.traceId}
                  </TableCell>
                  <TableCell style={{ textAlign: "center" }}>
                    {trace.operationName}
                  </TableCell>
                  <TableCell style={{ textAlign: "center" }}>
                    {trace.methodName}
                  </TableCell>

                  <TableCell style={{ textAlign: "center" }}>
                    {trace.duration}
                  </TableCell>
                  <TableCell style={{ textAlign: "center" }}>
                    {trace.statusCode}
                  </TableCell>
                  <TableCell style={{ textAlign: "center" }}>
                    {trace.createdTimeInWords}
                  </TableCell>
                  <TableCell style={{ textAlign: "center" }} onClick={() => handleOpenTrace(trace)} >
                    <Button variant="primary">OPEN TRACE</Button>
                  </TableCell>
                </TableRow>
              ))}

              {/* )} */}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[5]}
            component="div"
            count={dashboardPageCount}
            rowsPerPage={5}
            page={dashboardPage}
            onPageChange={handlePageChange}
          // onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableContainer>
        // </CardContent>
        // </Card>
      )}
    </div>
  );
};

export default ServiceTable;
