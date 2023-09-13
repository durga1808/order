import React from 'react'
import { Card, CardContent, Typography, CardActionArea, Box, useTheme, CardHeader, OutlinedInput } from '@mui/material';
import "./TraceList.css";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';
import { tokens } from '../../../theme';

const mockTraces = [
    {
        servicename: 'Service 1',
        endPoint: '/endpoint1',
        traceID: '123456987667898767898768987984594b345679',
        duration: 'a few seconds ago',
        statusCode: '200',
        method: 'GET',
    },
    {
        servicename: 'Service 2',
        endPoint: '/endpoint2',
        traceID: '789012',
        duration: '300 ms',
        statusCode: '404',
        method: 'POST',
    },
    {
        servicename: 'Service 3',
        endPoint: '/endpoint3',
        traceID: '345678',
        duration: '200 ms',
        statusCode: '200',
        method: 'GET',
    },
    {
        servicename: 'Service 4',
        endPoint: '/endpoint4',
        traceID: '123456',
        duration: '100 ms',
        statusCode: '200',
        method: 'GET',
    },
    {
        servicename: 'Service 5',
        endPoint: '/endpoint5',
        traceID: '123456',
        duration: '100 ms',
        statusCode: '200',
        method: 'GET',
    },
    {
        servicename: 'Service 6',
        endPoint: '/endpoint6',
        traceID: '123456',
        duration: '100 ms',
        statusCode: '200',
        method: 'GET',
    }
];

const sortOrder = ['Earliest First', '1 hr ago', '2 hrs ago', '12 hrs ago'];

const TraceList = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const [time, setTime] = useState('');

    const handleChange = (event) => {
        setTime(event.target.value);
    };

    return (
        <div style={{ maxHeight: "calc(100vh - 50px)", overflowY: "auto" }} >
            <div className="container"  >
                <Box width="100%" display="flex" flexDirection="row" justifyContent="space-between" margin="10px 10px 0 10px" >
                    <Typography variant="h6" style={{ margin: "10px 0 20px 10px" }}>Traces ({mockTraces.length})</Typography>

                    <FormControl sx={{ width: "40%" }}>
                        <InputLabel id="demo-simple-select-label" style={{ color: colors.primary[100] }}>Sort Order</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={time}
                            input={<OutlinedInput label="Sort Order" />}
                            onChange={handleChange}
                        >
                            {sortOrder.map((sortorder) => (
                                <MenuItem
                                    key={sortorder}
                                    value={sortorder}
                                >
                                    {sortorder}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Box>

                {mockTraces.map((trace, index) => (
                    <Card className="tracelist-card" key={index} sx={{ margin: "10px 0 20px 0", width: "500px", height: "fit-content" }} >
                        <CardActionArea>
                            <CardHeader title={<Typography variant="h6" sx={{ backgroundColor: colors.greenAccent[500], paddingInlineStart: "10px" }}>{trace.servicename}: {trace.endPoint}</Typography>} />
                            <CardContent style={{ marginTop: "-20px"}}>
                                    {/* orderProject: /get/getAllOrder
                            <br />
                            TraceID: 3948357549bas943578942nmn24985378345676543456432
                            <br />
                            20ms:  StatusCode: 200  Method: GET */}
                                    {/* <Typography variant="h6">
                                {trace.servicename}: {trace.endPoint} 
                            </Typography> */}

                                    <Typography variant="h8" >
                                        TraceID: {trace.traceID}
                                    </Typography>

                                    <Typography variant="h8" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", margin: "15px 0 0 0 " }}>
                                        <span>{trace.duration}</span>
                                        <span>StatusCode: {trace.statusCode}</span>
                                        <span>Method: {trace.method}</span>
                                    </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default TraceList