import axios from 'axios';

const keplerUrl = process.env.REACT_APP_APIURL_KEPLER;


export const getKeplerMetricData = async (
    startDate,
    endDate,
    minutesAgo,
) => {
    try {
        var finalUrl;

        if (JSON.parse(localStorage.getItem("needHistoricalData"))) {
            console.log(
                `History call + ${keplerUrl}/getAllKepler-MetricData?from=${startDate}&to=${endDate}`
            );
            finalUrl = `${keplerUrl}/getAllKepler-MetricData?from=${startDate}&to=${endDate}`;
        } else {
            console.log(
                `Minutes call + ${keplerUrl}/getAllKepler-MetricData?from=${startDate}&minutesAgo=${minutesAgo}`
            );
            finalUrl = `${keplerUrl}/getAllKepler-MetricData?from=${startDate}&minutesAgo=${minutesAgo}`;
        }

        const response = await axios.get(finalUrl);
        return response.data;
    } catch (error) {
        console.error("Error retrieving users:", error);
        throw error;
    }
};

