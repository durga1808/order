// import React, { useEffect, useState } from "react";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Button,
//   TablePagination,
// } from "@mui/material";
// import { tokens } from "../../../../theme";
// import { useTheme } from "@emotion/react";
// import { useNavigate } from "react-router-dom";
// import { useContext } from "react";
// import { GlobalContext } from "../../../../global/globalContext/GlobalContext";
// import { spanData } from "../../../../global/MockData/SpanData";

// const ServiceTable = ({
//   APICallsData,
//   PeakLatencyData,
//   ErrSuccessData,
//   selectedService,
// }) => {
//   const theme = useTheme();
//   const navigate = useNavigate();
//   const colors = tokens(theme.palette.mode);
//   const { setSelected, setTraceData, setRecentTrace, dashboardPageCount, dashboardPage, setDashboardPage } = useContext(GlobalContext);
//   const [selectedTableData, setSelectedTableData] = useState([]);
//   // Filter the data for the selected service
//   // const selectedApiCallsData = APICallsData.find(
//   //   (item) => item.serviceName === selectedService
//   // );

//   useEffect(() => {
//     if(selectedService !== null){
//       setSelectedTableData(selectedService);
//     }
//     else {
//       setSelectedTableData([]);
//     }
//   }, [selectedService])

//   // const selectedApiCallsData = spanData.find(
//   //   (item) => item.serviceName === selectedService && item.traceId === "2384799a01be10b55245e99864bba516"
//   // );

//   // const selectedPeakLatencyData = PeakLatencyData.find(
//   //   (item) => item.serviceName === selectedService
//   // );
//   // const selectedErrorSuccessData = ErrSuccessData.find(
//   //   (item) => item.serviceName === selectedService
//   // );

//   const handleOpenTrace = (trace) => {

//     // console.log("TRACE " + JSON.stringify([trace] ));
//     setRecentTrace([trace]);
//     // setTraceData([trace]);
//     localStorage.setItem("routeName", "Traces");
//     setSelected("Traces");
//     navigate("/mainpage/traces");
//   }

//   const handlePageChange = (event, newPage) => {
//     console.log("Dashboard page change " + newPage);
//     setDashboardPage(newPage);
//   }

//   return (
//     <div style={{ margin: "30px" }}>
//       {selectedService && (
//         // <Card elevation={3} style={{ margin: "16px" }}>
//         // <CardContent>
//         <TableContainer component={Paper}>
//           <Table>
//             <TableHead style={{ backgroundColor: colors.primary[400] }}>
//               <TableRow>
//                 <TableCell style={{ textAlign: "center" }}>Trace Id</TableCell>
//                 <TableCell style={{ textAlign: "center" }}>
//                   Operation Name
//                 </TableCell>
//                 <TableCell style={{ textAlign: "center" }}>
//                   Method Name
//                 </TableCell>
//                 <TableCell style={{ textAlign: "center" }}>Duration</TableCell>
//                 <TableCell style={{ textAlign: "center" }}>
//                   Status Code
//                 </TableCell>
//                 <TableCell style={{ textAlign: "center" }}>
//                   created Time
//                 </TableCell>
//                 <TableCell style={{ textAlign: "center" }}>Action</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {/* {selectedService && ( */}
//               {selectedTableData.map((trace, index) => (
//                 <TableRow key={index}>
//                   {/* <TableCell>{selectedService}</TableCell> */}
//                   <TableCell style={{ textAlign: "center" }}>
//                     {trace.traceId}
//                   </TableCell>
//                   <TableCell style={{ textAlign: "center" }}>
//                     {trace.operationName}
//                   </TableCell>
//                   <TableCell style={{ textAlign: "center" }}>
//                     {trace.methodName}
//                   </TableCell>

//                   <TableCell style={{ textAlign: "center" }}>
//                     {trace.duration}
//                   </TableCell>
//                   <TableCell style={{ textAlign: "center" }}>
//                     {trace.statusCode}
//                   </TableCell>
//                   <TableCell style={{ textAlign: "center" }}>
//                     {trace.createdTimeInWords}
//                   </TableCell>
//                   <TableCell style={{ textAlign: "center" }} onClick={() => handleOpenTrace(trace)} >
//                     <Button variant="primary">OPEN TRACE</Button>
//                   </TableCell>
//                 </TableRow>
//               ))}

//               {/* )} */}
//             </TableBody>
//           </Table>
//           <TablePagination
//             rowsPerPageOptions={[5]}
//             component="div"
//             count={dashboardPageCount}
//             rowsPerPage={5}
//             page={dashboardPage}
//             onPageChange={handlePageChange}
//           // onRowsPerPageChange={handleChangeRowsPerPage}
//           />
//         </TableContainer>
//         // </CardContent>
//         // </Card>
//       )}
//     </div>
//   );
// };

// export default ServiceTable;

import React, { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../../../../global/globalContext/GlobalContext";
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
// import { getErroredLogDataForLastTwo } from "../../../../api/LogApiService";
import Loading from "../../../../global/Loading/Loading";
import { getRecentTraceList } from "../../../../api/TraceApiService";
import { formatDistanceToNow } from "date-fns";

const ServiceTable = ({ selectedService }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);


  const { setSelected, setTraceData, setRecentTrace, dashboardPageCount, dashboardPage, setDashboardPage } = useContext(GlobalContext);
  const navigate = useNavigate();

  const [selectedServiceData, setselectedServiceData] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log("selectedServiceData", selectedServiceData);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const pageSize = 5;
  const serviceName = selectedService;

  const handlePageChange = async (event, selectedPage) => {
    setCurrentPage(selectedPage);
  };

  const createTimeInWords = (data) => {
    // Iterate through data and update createdTime
    const updatedData = data.map(item => {
      const createdTime = new Date(item.createdTime); // Convert timestamp to Date object
      const timeAgo = formatDistanceToNow(createdTime, { addSuffix: true });
      return { ...item, createdTimeInWords: timeAgo };
    });
    return updatedData;
  }

  const handleOpenTrace = (trace) => {
    const updatedData = createTimeInWords([trace]);
    // console.log("TRACE " + JSON.stringify([trace] ));
    setRecentTrace(updatedData);
    // setTraceData([trace]);
    localStorage.setItem("routeName", "Traces");
    setSelected("Traces");
    navigate("/mainpage/traces");
  }



  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const logDataResponse = await getRecentTraceList(
          currentPage,
          pageSize,
          serviceName
        );
        console.log("Response", logDataResponse.data);
        const updatedData = createTimeInWords(logDataResponse.data);
        setselectedServiceData(updatedData);
        setTotalPages(Math.ceil(logDataResponse.totalCount / pageSize));
      } catch (error) {
        console.error("Error fetching log data:", error);
      }
      setLoading(false);
    };

    fetchData();
  }, [serviceName, currentPage]);



  return (
    <div>
      {" "}
      {loading ? (
        <Loading />
      ) : (
        <div style={{ margin: "30px" }}>
          {serviceName && selectedServiceData.length > 0 ? (
            <>
              {" "}
              <TableContainer component={Paper} sx={{ maxHeight: 300 }}>
                <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                    <TableRow>
                      <TableCell
                        style={{
                          textAlign: "center",
                          backgroundColor: colors.primary[400],
                        }}
                      >
                        Service Name
                      </TableCell>
                      <TableCell
                        style={{
                          textAlign: "center",
                          backgroundColor: colors.primary[400],
                        }}
                      >
                        Trace Id
                      </TableCell>

                      <TableCell
                        style={{
                          textAlign: "center",
                          backgroundColor: colors.primary[400],
                        }}
                      >
                        created Time
                      </TableCell>
                      <TableCell
                        style={{
                          textAlign: "center",
                          backgroundColor: colors.primary[400],
                        }}
                      >
                        Action
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {selectedServiceData.length !== 0
                      ? selectedServiceData.map((tableInfo, index) => (
                        <TableRow key={index}>
                          <TableCell style={{ textAlign: "center" }}>
                            {tableInfo.serviceName}
                          </TableCell>
                          <TableCell style={{ textAlign: "center" }}>
                            {tableInfo.traceId}
                          </TableCell>

                          <TableCell style={{ textAlign: "center" }}>
                            {tableInfo.createdTimeInWords}
                          </TableCell>
                          <TableCell style={{ textAlign: "center" }}>
                            <Button variant="primary" onClick={() => handleOpenTrace(tableInfo)}>OPEN TRACE</Button>
                          </TableCell>
                        </TableRow>
                      ))
                      : null}
                  </TableBody>
                </Table>
              </TableContainer>
              <Stack
                spacing={2}
                direction="row"
                justifyContent="center"
                style={{ marginTop: "20px" }}
              >
                <Pagination
                  count={totalPages}
                  page={currentPage}
                  onChange={handlePageChange}
                  variant="outlined"
                  shape="rounded"
                  size="small"
                />
              </Stack>
            </>) : serviceName ? (<div style={{ textAlign: "center", fontWeight: "bold" }}>There is no table data for this service</div>) : null
          }
        </div>
      )}
    </div>
  );
};

export default ServiceTable;
