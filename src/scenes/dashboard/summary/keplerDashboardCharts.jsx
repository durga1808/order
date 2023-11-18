import { Box, Button, Card, CardContent, Divider, Grid, List, ListItem, Table, TableBody, TableCell, TableRow, Typography, colors, useTheme } from '@mui/material';
import React, { useCallback, useContext, useEffect, useState } from 'react'
import Loading from '../../../global/Loading/Loading';
import { keplerContainerInfo } from '../../../global/MockData/KeplerMockData';
import ContainerPowerMetrics from './keplerCharts/ContainerPowerMetrics';
import { GlobalContext } from '../../../global/globalContext/GlobalContext';
import { tokens } from '../../../theme';

const KeplerPowerMetrics = () => {

    const [errorMessage, setErrorMessage] = useState("");
    const [emptyMessage, setEmptyMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const { lookBackVal,
        setActiveTab,
        setSelected,
        selectedStartDate,
        selectedEndDate,
        needHistoricalData,
        setNavActiveTab
    } = useContext(GlobalContext);

    const [powerMetrics, setPowerMetrics] = useState();
    const [containerPowerUsage, setContainerPowerUsage] = useState([]);
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const handlePowerMetrics = (keplerContainerData) => {
        const processedData = keplerContainerInfo.containerPowerMetrics.map((metric) => {
            const timestamp = new Date(metric.createdTime).getTime(); // Convert date string to timestamp

            return {
                x: timestamp,
                y_cpuPowerUsage: metric.consumptionValue
            };
        });

        const containerPowerData = processedData.map((data) => ({
            x: data.x,
            y: data.y_cpuPowerUsage,
        }));

        setContainerPowerUsage(containerPowerData);
        console.log("Container Usage Data: ", JSON.stringify(containerPowerData));
    }

    const keplerMetrics = [
        {
            data: containerPowerUsage,
            title: "Pod-Containers Power Usage",
            yaxis: "Power Usage",
        }
    ];

    const podNameList = [
        {
            podName: "pod1"
        },
        {
            podName: "pod2"
        },
        {
            podName: "pod3"
        },
        {
            podName: "pod1"
        },
        {
            podName: "pod2"
        },
        {
            podName: "pod3"
        },
        {
            podName: "pod1"
        },
        {
            podName: "pod2"
        },
        {
            podName: "pod3"
        }, {
            podName: "pod1"
        },
        {
            podName: "pod2"
        },
        {
            podName: "pod3"
        }, {
            podName: "pod1"
        },
        {
            podName: "pod2"
        },
        {
            podName: "pod3"
        }
    ]

    // const fetchPowerMetrics = useCallback(async () => {
    //     setPowerMetrics(keplerContainerInfo);
    // }, [])

    const handlePodClick = () => {
        console.log("POD Name ");
    }

    useEffect(() => {
        // setPowerMetrics(keplerContainerInfo);
        setErrorMessage("");
        setEmptyMessage("");
        setActiveTab(4);
        setNavActiveTab(0);
        handlePowerMetrics(keplerContainerInfo);
    }, [setErrorMessage, setEmptyMessage, setActiveTab, setNavActiveTab])

    const hasContainerPowerMetrics = keplerContainerInfo.containerPowerMetrics.length !== 0;

    return (
        <div>
            {loading ? (
                <Loading />
            ) : emptyMessage ? (
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%",
                        height: "73vh",
                    }}
                >
                    <Typography variant="h6" align="center">
                        {emptyMessage}
                    </Typography>
                </div>
            ) : errorMessage ? (
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%",
                        height: "80vh",

                    }}
                >
                    <Typography variant="h6" align="center">
                        {errorMessage}
                    </Typography>
                </div>
            ) : keplerContainerInfo.containerPowerMetrics.length !== 0 ? (
                <div style={{
                    maxHeight: "73vh",
                    // overflowY: "auto",
                    minWidth: "100%"
                }}>

                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Card elevation={3} style={{ margin: "15px 25px 15px 25px", height: "calc(45vh - 30px)", color: 'black' }}>
                                <CardContent>
                                    <Box style={{ display: "flex", flexDirection: "row", }} >
                                        {hasContainerPowerMetrics ? (
                                            <ContainerPowerMetrics containerPowerMetrics={keplerMetrics[0]} />
                                        ) : (
                                            <div
                                                style={{
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                    height: "calc(45vh - 24px)",
                                                    width: "100%",
                                                }}
                                            >
                                                <Typography variant="h5" fontWeight={"600"}>
                                                    Container Power Metrics - No data
                                                </Typography>
                                            </div>
                                        )}
                                        {/* <List>
                                            {podNameList.map((pod, index) => (
                                                <ListItem key={index} disablePadding>
                                                    <div variant="outlined" style={{ backgroundColor: colors.primary[400] }} fullWidth >
                                                        {pod.podName}
                                                    </div>
                                                </ListItem>
                                            ))}
                                        </List> */}
                                        <div style={{ width: '35%', maxHeight: '280px', overflowY: 'auto' }}>
                                            <Table size="small" aria-label="a dense table" sx={{
                                                "& .MuiTableRow-root:hover": {
                                                    backgroundColor: 'lightgrey',
                                                }
                                            }} >
                                                <TableBody>
                                                    {podNameList.map((pod, index) => (
                                                        <React.Fragment key={index}>
                                                            <TableRow>
                                                                <TableCell
                                                                    style={{
                                                                        height: '20px',
                                                                        cursor: 'pointer',
                                                                    }}
                                                                    onClick={() => handlePodClick(pod.podName)}
                                                                >
                                                                    <Typography variant='h7' >
                                                                        {pod.podName}
                                                                    </Typography>
                                                                </TableCell>
                                                            </TableRow>
                                                        </React.Fragment>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        </div>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>

                    {/* <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Card elevation={3} style={{ margin: "5px 25px 15px 25px", height: "calc(40vh - 40px)", color: 'black' }}>
                                <CardContent>
                                    <PeakLatencyKafka />
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid> */}
                </div>
            ) : null
            }
        </div>
    )
}

export default KeplerPowerMetrics;