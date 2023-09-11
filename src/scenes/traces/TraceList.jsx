import React from 'react'
// import CardMedia from '@mui/material/CardMedia';
import { Card, CardContent, Typography, CardActionArea, Box, useTheme, CardHeader } from '@mui/material';
import "./traceStyles/TraceList.css";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';
import { tokens } from '../../theme';

const mockTraces = [
    {
      servicename: 'orderService',
      endPoint: '/order/getAllOrder',
      traceID: '6a38d36987667898767898768987984594b345679',
      duration: 'a few seconds ago',
      statusCode: '200',
      method: 'GET',
    },
    {
      servicename: 'vendorService',
      endPoint: '/vendor/createVendor',
      traceID: '938b83b29837d8738x998378329087p0987789888',
      duration: '300 ms',
      statusCode: '404',
      method: 'POST',
    },
    {
        servicename: 'providerService',
        endPoint: '/provider/getProviderById/{id} ',
        traceID: '93875bf984375j4938749284vd87342893275874',
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

const TraceList = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    
    const [time, setTime] = useState('');

    const handleChange = (event) => {
        setTime(event.target.value);
    };
  
  return (
    <Box className="container">
        <Box className="box-container" width="100%" display="flex" flexDirection="row" justifyContent="space-between" margin= "10px 0 10px 0" >
            <Typography variant="h6" style={{ margin: "10px 0 20px 0" }}>Traces {""} ({mockTraces.length})</Typography>

            <FormControl style={{ width: "40%" }}>
                <InputLabel id="demo-simple-select-label" style={{ color: colors.primary[100] }}>Sort Order</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={time}
                label="Sort Order"
                onChange={handleChange}
                >
                    <MenuItem value={10}>Earliest First</MenuItem>
                    <MenuItem value={20}>1 hr ago</MenuItem>
                    <MenuItem value={30}>2 hrs ago</MenuItem>
                    <MenuItem value={40}>12 hrs ago</MenuItem>
                </Select>
            </FormControl>
        </Box>

        { mockTraces.map((trace, index) => (    
            <Card className="tracelist-card" key={index} sx={{ position: "relative", margin: "10px 0 10px 0", width: "500px", height: "fit-content" }} >
            {/* <Card sx={{ maxWidth: 500 }}> */}
                <CardActionArea>
                {/* <CardMedia
                    component="img"
                    height="140"
                    image="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dynatrace.com%2Fnews%2Fblog%2Fopen-observability-distributed-tracing-and-observability%2F&psig=AOvVaw1UdwSrwWOw5IRAlGjOqhrb&ust=1693308672587000&source=images&cd=vfe&opi=89978449&ved=2ahUKEwitq9XAoP-AAxUzcWwGHeggDFQQjRx6BAgAEAw"
                    alt="trace image"
                /> */}
                <CardHeader title={<Typography variant="h6" style={{ backgroundColor: colors.greenAccent[500], width: "100%" }}>{trace.servicename}: {trace.endPoint}</Typography>} />
                    <CardContent>
                        {/* <Typography gutterBottom variant="h5" component="div">
                        Traces
                        </Typography> */}
                        
                        <Typography variant="body2">
                            {/* orderProject: /get/getAllOrder
                            <br />
                            TraceID: 3948357549bas943578942nmn24985378345676543456432
                            <br />
                            20ms:  StatusCode: 200  Method: GET */}

                            <Typography variant="h8" >
                                TraceID: {trace.traceID}
                            </Typography>

                            <Typography variant="h8" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", margin: "15px 0 0 0 " }}>
                                <span>{trace.duration}</span>
                                <span>StatusCode: {trace.statusCode}</span>
                                <span>Method: {trace.method}</span>
                            </Typography>
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        ))}
    </Box>

  )
}

export default TraceList