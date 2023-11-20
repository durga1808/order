import { Box, useTheme } from '@mui/material';
import React, { useContext } from 'react'
import ReactApexChart from 'react-apexcharts';
import { tokens } from '../../../../theme';
import { GlobalContext } from '../../../../global/globalContext/GlobalContext';

const ContainerPowerMetrics = ({ containerPowerMetrics }) => {

    const theme = useTheme();
    const { isCollapsed } = useContext(GlobalContext);

    const series = [
        {
            name: containerPowerMetrics.title,
            data: containerPowerMetrics.data,
            color: "#00888C",
        },
    ];

    const options = {
        chart: {
            type: "area",
            stacked: true,

            zoom: {
                type: "x",
                enabled: true,
                autoScaleYaxis: true,
            },
            toolbar: {
                autoSelected: "zoom",
            },

            // background: colors.primary[400],
        },

        dataLabels: {
            enabled: false,
        },
        // markers: {
        //   size: 5,
        // },
        title: {
            // text: "CPU UTILIZATION",
            text: containerPowerMetrics.title,
            align: "middle",
            // offsetY: 10,
            style: {
                color: theme.palette.mode === "dark" ? "#FFF" : "#000",
                fontFamily: "Red Hat Display, sans-serif",
                fontWeight: 500,
            },
        },
        fill: {
            type: "gradient",
            gradient: {
                // shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 0.5,
                opacityTo: 0,
                stops: [0, 90, 100],
            },
        },
        yaxis: {
            min: 0,
            // max: 5,
            title: {
                // text: "USAGE",
                text: containerPowerMetrics.yaxis,
                style: {
                    color: theme.palette.mode === "dark" ? "#FFF" : "#000",
                    fontFamily: "Red Hat Display, sans-serif",
                    fontWeight: 500,
                },
            },
            // min: minValue,
            // max: maxValue,
            // tickAmount: tickAmount,
            labels: {
                formatter: function (val) {
                    return ((val / 1000) * 1000).toFixed(2);
                },
                style: {
                    colors: theme.palette.mode === "dark" ? "#FFF" : "#000",
                },
            },
        },
        xaxis: {
            type: "datetime",
            // offsetY: 10,
            title: {
                text: "TIME RANGE",
                style: {
                    color: theme.palette.mode === "dark" ? "#FFF" : "#000",
                    fontWeight: 500,
                    fontFamily: "Red Hat Display, sans-serif",
                },
            },
            labels: {
                style: {
                    colors: theme.palette.mode === "dark" ? "#FFF" : "#000",
                },
                datetimeUTC: false,
                datetimeFormatter: {
                    year: "yyyy",
                    month: "MMM 'yy",
                    day: "dd MMM",
                    hour: "HH:mm",
                },
            },
        },
        tooltip: {
            enabled: true,
            shared: true,
            // fillSeriesColor: true,
            // theme: false,
            x: {
                format: "dd MMM yyyy HH:mm:ss", // Format the date/time in the tooltip
            },
            y: {
                formatter: function (val) {
                    return val;
                },
            },
            style: {
                fontSize: "12px",
            },
        },
        // theme: {
        //   mode: theme.palette.mode,
        //   palette: "palette1",
        //   monochrome: {
        //     enabled: false,
        //     // color: theme.palette.mode === "dark" ? "#FFF" : "#255aee",
        //     // shadeTo: theme.palette.mode === "dark" ? "dark" : "light",
        //     // shadeIntensity: 0.65,
        //   },
        // },
    };

    const chartWidth = isCollapsed ? 'calc(70% - 10px)' : 'calc(73% - 70px)'

    return (
        <Box height="calc(45vh - 20px)" width={chartWidth} padding="5px" border="1px" style={{
            transition: "width 0.3s ease-in-out",
        }}>
            <ReactApexChart
                options={options}
                series={series}
                type="area"
                height={"90%"}
                // width={isCollapsed?1380:1210}
                width={"100%"}
            />
        </Box>
    );
}

export default ContainerPowerMetrics