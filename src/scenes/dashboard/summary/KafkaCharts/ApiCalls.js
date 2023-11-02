import React, { useContext } from "react";
import ReactApexChart from "react-apexcharts";
import { useTheme } from "@emotion/react";
import { tokens } from "../../../../theme";
import { GlobalContext } from "../../../../global/globalContext/GlobalContext";

const ApiCalls = ({ data })=> {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const { isCollapsed } = useContext(GlobalContext);

    const kafkaMock = [
        {
          serviceName: "order-project",
          kafkaCallCount: 20,
          kafkaPeakLatency: 4
        },
        {
          serviceName: "vendor-project",
          kafkaCallCount: 30,
          kafkaPeakLatency: 8
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
        categories: data.map((item) => item.serviceName),
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
                text: "Kafka Count",
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
            text: "Kafka Count",
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
        labels: {
            style: {
              colors: theme.palette.mode === "dark" ? "#FFF" : "#000",
            },
        },
    };

    const series = [
        {
        name: "Kafka Calls",
        data: data.map((item) => item.kafkaCallCount),
        color: "#04700b",
        },
    ];

    const chartWidth = isCollapsed ? 'calc(100% - 10px)' : 'calc(103% - 70px)'

    return (
        <div data-theme={theme.palette.mode} style={{ width: chartWidth }} >
            <ReactApexChart options={options} series={series} type="bar" height={210} />
        </div>
    );
};

export default ApiCalls;
