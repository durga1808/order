import axios from "axios";


const metricURL = process.env.REACT_APP_APIURL_METRICS;

export const getMetricDataApi = async (service,minutesAgo) => {
    try {                                       // ?serviceName=order-project&timeAgoMinutes=60
        console.log("Metric url " , `${metricURL}/getByserviceNameAndMinutesAgo?serviceName=${service}&timeAgoMinutes=${minutesAgo}`);
        const response = await axios.get(`${metricURL}/getByserviceNameAndMinutesAgo?serviceName=${service}&timeAgoMinutes=${minutesAgo}`);
        return response.data;
    } catch (error) {
        console.error("Error retrieving users:", error);
        return error;
    }
};