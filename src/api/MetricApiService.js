import axios from "axios";


const metricURL = process.env.REACT_APP_APIURL_METRICS;

export const getMetricDataApi = async (service,startDate,endDate) => {
    try {                                       // ?serviceName=order-project&timeAgoMinutes=60
        console.log("Metric url " , `${metricURL}/getByserviceNameAndMinutesAgo?from=${endDate}&serviceName=${service}&to=${startDate}`);
        const response = await axios.get(`${metricURL}/getByserviceNameAndMinutesAgo?from=${endDate}&serviceName=${service}&to=${startDate}`);
        return response.data;
    } catch (error) {
        console.error("Error retrieving users:", error);
        return error;
    }
};