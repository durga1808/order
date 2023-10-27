import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, styled, tableCellClasses, useTheme } from '@mui/material';
import React from 'react'
import { tokens } from '../../../../theme';
import { errorLogs } from '../../../../global/MockData/OpenErrors';

const ErrorContext = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const StyledTableCell = styled(TableCell)(() => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: colors.primary[400],
            color: theme.palette.common.black,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    const StyledTableRow = styled(TableRow)(() => ({
        "&:nth-of-type(odd)": {
            backgroundColor: colors.primary[500],
        },
        // hide last border
        "&:last-child td, &:last-child th": {
            border: 0,
        },
    }));


    return (
        <div style={{ maxHeight: "calc(80vh - 70px)", overflowY: "auto", paddingRight: "10px" }} >
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }} >
                <Typography variant="h6" fontWeight="600" >TraceId: {errorLogs[0].traceId}</Typography>
                <Typography variant="h6" fontWeight="600" >ServiceName: {errorLogs[0].serviceName}</Typography>
            </div>
            {errorLogs.map((log, index) => (
                <Box>
                    <Typography
                        variant="h7"
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            backgroundColor: colors.redAccent[500],
                            color: "#FFF",
                            padding: "5px",
                            borderRadius: "5px",
                            marginTop: "10px"
                        }}
                    >
                        <span>SpanId:{log.spanId}</span>
                        <span>CreatedTime: {log.createdTime}</span>
                    </Typography>
                    <TableContainer component={Paper} style={{ width: "100%" }} >
                        <Table aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center" width={"20%"} >
                                        <Typography variant="h6" style={{ fontWeight: "600", color: "#000" }}>
                                            Field
                                        </Typography>
                                    </TableCell>
                                    <TableCell align="left" width={"80%"} >
                                        <Typography variant="h6" style={{ fontWeight: "600", color: "#000" }}>
                                            Value
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {log.scopeLogs.map((record, index) => (
                                    <TableRow key={index}>
                                        {Object.entries(record.scope).map(([key, value], index) => (
                                            <div key={index} >
                                                <TableCell align='center' width={"20%"} >
                                                    <div key={key}>{key}</div>
                                                </TableCell>
                                                <TableCell align='left' width={"80%"} >
                                                    <div key={value}>{value}</div>
                                                </TableCell>
                                            </div>
                                        ))}
                                    </TableRow>
                                ))}
                                {log.scopeLogs.map((scopeLogs) => (
                                    scopeLogs.logRecords.map((logRecord, index) => (
                                        <div key={index}>
                                            <TableRow key={index}>
                                                <TableCell align='center' width={"20%"} >
                                                    <div >Message Body</div>
                                                </TableCell>
                                                <TableCell align='left' width={"80%"} >
                                                    <div>{logRecord.body.stringValue}</div>
                                                </TableCell>
                                            </TableRow>
                                            {logRecord.attributes ? (
                                                logRecord.attributes.map((attribute, index) => (
                                                    <div>
                                                        <TableCell align='center' width={"20%"} >
                                                            <div>{attribute.key}</div>
                                                        </TableCell>
                                                        <TableCell align='left' width={"80%"} >
                                                            <div >{attribute.value.stringValue}</div>
                                                        </TableCell>
                                                    </div>
                                                ))
                                            ) : null}
                                        </div>
                                    ))))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            ))}
        </div>
    )
}

export default ErrorContext