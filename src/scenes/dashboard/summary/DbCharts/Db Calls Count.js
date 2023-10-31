    import React from "react";
    import ReactApexChart from "react-apexcharts";
    import { useTheme } from "@emotion/react";
    import { tokens } from "../../../../theme";
    import { Card } from "@mui/material";

    const DBCallsCount = ()=> {

        const theme = useTheme();
        const colors = tokens(theme.palette.mode);

        const data = [
            {
            serviceName: "order-project",
            dbCallCount: 20,
            dbName: "postgres",
            dbPeakLatencyCount: 4
            },
            {
            serviceName: "order-project",
            dbCallCount: 30,
            dbName: "mongodb",
            dbPeakLatencyCount: 8
            }
        ]



    const options = {
        chart: {
        type: "bar",
        height: 300,
        
        },
        plotOptions: {
            bar: {
            columnWidth: "30px",
            },
        },
    
        xaxis: {
        categories: data.map((item) => item.dbName),
        title: {
            text: "List of Services",
            style: {
            color: colors.textColor[500],
            fontSize: 12,
            fontWeight: 500,
            fontFamily: "Red Hat Display",
            },
        },
        labels: {
            rotate: -45,
            style: {
            colors: colors.textColor[500],
            fontSize: 12,
            fontWeight: 500,
            fontFamily: "Red Hat Display",
            },
        },
        },
        yaxis: {
            title: {
                text: "DB Count",
                style: {
                color: colors.textColor[500],
                fontSize: 12,
                fontWeight: 500,
                fontFamily: "Red Hat Display",
                },
            },
        
            labels: {
                style: {
                colors: colors.textColor[500],
                fontSize: 12,
                fontWeight: 500,
                fontFamily: "Red Hat Display",
                },
            },
        },
        title: {
            text: "Database Calls Count",
            align: "center",
            margin: 5,
            offsetX: 0,
            offsetY: 5,
            style: {
            color: colors.textColor[500],
            fontSize: 16,
            fontWeight: 500,
            fontFamily: "Red Hat Display",
            },
        },
    };




    const series = [
        {
        name: "DB Calls",
        data: data.map((item) => item.dbCallCount),
        color: "#04700b",
        },
    ];

    return (
        <div className="db-summary-chart" >
            <Card elevation={3} sx={{margin:"25px 25px 15px 25px"}}> <ReactApexChart options={options} series={series} type="bar" height={250} /></Card>
        
        </div>
    );
    };

    export default DBCallsCount;
