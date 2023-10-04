import axios from "axios";

const logUrl = process.env.REACT_APP_APIURL_LOGS;

export const findLogByTraceId = async (traceId) => {
    try {
        const response = await axios.get(
            `${logUrl}/findByTraceId?traceId=${traceId}`
        );
        return response.data;
    } catch (error) {
        console.error("Error retrieving users:", error);
        throw error;
    }
}