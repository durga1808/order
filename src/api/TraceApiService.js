import axios from "axios";

const traceURL = "http://localhost:8081/traces";


export const TraceListPaginationApi = async (page, itemsPerPage, interval, sortOrder) => {
    try {
        const response = await axios.get(
            `${traceURL}/getalldata-sortorder?minutesAgo=${interval}&page=${page}&pageSize=${itemsPerPage}&sortOrder=${sortOrder}`
        );
        return response.data;
    } catch (error) {
        console.error("Error retrieving users:", error);
        throw error;
    }
}


export const TraceFilterOption = async (lookback, page, pageSize, payload) => {
    try {
        const response = await axios.post(
            `${traceURL}/TraceQueryFilter?minutesAgo=${lookback}&page=${page}&pageSize=${pageSize}`,
            payload,
            {
                headers: {
                    'Content-Type': 'application/json', // Set the Content-Type header
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error("Error retrieving users:", error);
        throw error;
    }
}

export const FindByTraceIdForSpans = async (traceId) => {
    try {
        const response = await axios.get(`${traceURL}//findByTraceId?traceId=${traceId}`);
        return response.data;
    } catch (error) {
        console.error("Error retrieving users:", error);
        throw error;
    }
}
