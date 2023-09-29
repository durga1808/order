import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, styled, tableCellClasses, useTheme } from '@mui/material'
import React from 'react'
import { useEffect } from 'react';
import { spanData } from '../../../../global/MockData/SpanData';
import { useState } from 'react';
import { tokens } from '../../../../theme';
import { useContext } from 'react';
import { GlobalContext } from '../../../../global/globalContext/GlobalContext';

const SpanInfo = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const { selectedSpan } = useContext(GlobalContext);
    // const [attributes, setAttributes] = useState([]);

    const StyledTableCell = styled(TableCell)(() => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: colors.greenAccent[500],
            color: theme.palette.common.black,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    const StyledTableRow = styled(TableRow)(() => ({
        '&:nth-of-type(odd)': {
            backgroundColor: colors.primary[400],
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));

    useEffect(() => {
        console.log(selectedSpan.attributes);
    }, [selectedSpan])


    return (
        <div >

            <div style={{ margin: "20px 10px 20px 10px", textAlign: "center" }}  >
                <Typography variant='h6' >Metadata Attributes</Typography>
                {Object.keys(selectedSpan.attributes).length === 0 ? (
                    <div>
                        <Typography variant="h5" sx={{ textAlign: "center", marginTop: "5%" }} >Please Select any one of the Span from the flow!</Typography>
                    </div>
                ) : (
                    <div>
                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", textAlign: "center", margin: "10px" }} >
                            <Typography variant="h6" >SpanId <br /><Typography variant="h7" >{selectedSpan.spanId}</Typography></Typography>
                            <Typography variant="h6" >SpanName <br /><Typography variant="h7" textOverflow={"ellipsis"} whiteSpace={"nowrap"} overflow={"hidden"} >{selectedSpan.name}</Typography></Typography>
                            <Typography variant="h6" >ChildSpans <br /><Typography variant="h7" >{selectedSpan.childSpansCount}</Typography></Typography>
                            <Typography variant="h6" >Duration <br /><Typography variant="h7" >{selectedSpan.duration}ms</Typography></Typography>
                        </div>
                        <div style={{ marginTop: "20px", paddingBottom: "20px" }} >
                            <TableContainer component={Paper} >
                                <Table sx={{ minWidth: 450 }} aria-label="customized table">
                                    <TableHead>
                                        <TableRow>
                                            <StyledTableCell>Field</StyledTableCell>
                                            <StyledTableCell align="right">Value</StyledTableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {selectedSpan.attributes.map((attribute, index) => (
                                            <StyledTableRow key={attribute.key}>
                                                <StyledTableCell component="th" scope="row">
                                                    {attribute.key}
                                                </StyledTableCell>
                                                <StyledTableCell align="right">
                                                    {Array.isArray(attribute.value.arrayValue)
                                                        ? attribute.value.arrayValue.join(', ')
                                                        : attribute.value.stringValue !== undefined && attribute.value.stringValue !== null
                                                            ? attribute.value.stringValue
                                                            : attribute.value.intValue}
                                                </StyledTableCell>
                                            </StyledTableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                    </div>
                )}
            </div >

        </div>
    )
}

export default SpanInfo