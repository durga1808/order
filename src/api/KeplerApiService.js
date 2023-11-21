import axios from 'axios';

const keplerUrl = process.env.REACT_APP_APIURL_KEPLER;


export const getKeplerMetricData = async (
    startDate,
    endDate,
    minutesAgo,
    type
) => {
    try {
        var finalUrl;

        if (JSON.parse(localStorage.getItem("needHistoricalData"))) {
            console.log(
                `History call + ${keplerUrl}/getAllKepler-MetricData?from=${startDate}&to=${endDate}&type=${type}`
            );
            finalUrl = `${keplerUrl}/getAllKepler-MetricData?from=${startDate}&to=${endDate}&type=${type}`;
        } else {
            console.log(
                `Minutes call + ${keplerUrl}/getAllKepler-MetricData?from=${startDate}&minutesAgo=${minutesAgo}&type=${type}`
            );
            finalUrl = `${keplerUrl}/getAllKepler-MetricData?from=${startDate}&minutesAgo=${minutesAgo}&type=${type}`;
        }

        const response = await axios.get(finalUrl);
        return response.data;
    } catch (error) {
        console.error("Error retrieving users:", error);
        throw error;
    }
};

