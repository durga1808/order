import axios from 'axios';

const keplerUrl = process.env.REACT_APP_APIURL_KEPLER;


export const getKeplerMetricData = async (
    startDate,
    endDate,
    minutesAgo,
    type,
    keplerTypeList
) => {
    try {
        var finalUrl;

        const keplerTypeParam = keplerTypeList.join("&keplerType=");

        if (JSON.parse(localStorage.getItem("needHistoricalData"))) {
            console.log(
                `History call + ${keplerUrl}/getAllKepler-MetricData?from=${startDate}&keplerType=${keplerTypeParam}&to=${endDate}&type=${type}`
            );
            finalUrl = `${keplerUrl}/getAllKepler-MetricData?from=${startDate}&keplerType=${keplerTypeParam}&to=${endDate}&type=${type}`;
        } else {
            console.log(
                `Minutes call + ${keplerUrl}/getAllKepler-MetricData?from=${startDate}&keplerType=${keplerTypeParam}&minutesAgo=${minutesAgo}&type=${type}`
            );
            finalUrl = `${keplerUrl}/getAllKepler-MetricData?from=${startDate}&keplerType=${keplerTypeParam}&minutesAgo=${minutesAgo}&type=${type}`;
        }

        const response = await axios.get(finalUrl);
        return response.data;
    } catch (error) {
        console.error("Error retrieving users:", error);
        throw error;
    }
};

export const getKeplerMetricDataPaginated = async (
    startDate,
    endDate,
    minutesAgo,
    type,
    keplerTypeList,
    page,
    pageSize
) => {
    try {
        var finalUrl;

        const keplerTypeParam = keplerTypeList.join("&keplerType=");

        if (JSON.parse(localStorage.getItem("needHistoricalData"))) {
            console.log(
                `History call + ${keplerUrl}/getAllKepler-MetricData?from=${startDate}&keplerType=${keplerTypeParam}&page=${page}&pageSize=${pageSize}&to=${endDate}&type=${type}`
            );
            finalUrl = `${keplerUrl}/getAllKepler-MetricData?from=${startDate}&keplerType=${keplerTypeParam}&page=${page}&pageSize=${pageSize}&to=${endDate}&type=${type}`;
        } else {
            console.log(
                `Minutes call + ${keplerUrl}/getAllKepler-MetricData?from=${startDate}&keplerType=${keplerTypeParam}&minutesAgo=${minutesAgo}&page=${page}&pageSize=${pageSize}&type=${type}`
            );
            finalUrl = `${keplerUrl}/getAllKepler-MetricData?from=${startDate}&keplerType=${keplerTypeParam}&minutesAgo=${minutesAgo}&page=${page}&pageSize=${pageSize}&type=${type}`;
        }

        const response = await axios.get(finalUrl);
        return response.data;
    } catch (error) {
        console.error("Error retrieving users:", error);
        throw error;
    }
};

