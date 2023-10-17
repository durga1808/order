import axios from "axios";

const traceURL = process.env.REACT_APP_APIURL_TRACES;

export const TraceListPaginationApi = async (
    page,
    itemsPerPage,
    interval,
    sortOrder,
    serviceListData
) => {
    try {
        // Get the list of service names from localStorage and parse it
        // const serviceListData = JSON.parse(localStorage.getItem("serviceListData"));

        // Construct the URL with the service names
        const serviceNameListParam = serviceListData.join('&serviceNameList=');
        // console.log(`${traceURL}/getalldata-sortorder?minutesAgo=${interval}&page=${page}&pageSize=${itemsPerPage}&serviceNameList=${serviceNameListParam}&sortOrder=${sortOrder}`);
        const response = await axios.get(
            `${traceURL}/getalldata-sortorder?minutesAgo=${interval}&page=${page}&pageSize=${itemsPerPage}&serviceNameList=${serviceNameListParam}&sortOrder=${sortOrder}`
        );
        return response.data;
    } catch (error) {
        console.error("Error retrieving users:", error);
        throw error;
    }
};

export const TraceFilterOption = async (lookback, page, pageSize, payload) => {
    try {
        const response = await axios.post(
            `${traceURL}/TraceQueryFilter?minutesAgo=${lookback}&page=${page}&pageSize=${pageSize}`,
            payload,
            {
                headers: {
                    "Content-Type": "application/json", // Set the Content-Type header
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error("Error retrieving users:", error);
        throw error;
    }
};

export const TraceFilterOptionWithDate = async (startDate, endDate, page, pageSize, payload) => {
    try {
        const response = await axios.post(
            `${traceURL}/TraceQueryFilter?from=${endDate}&page=${page}&pageSize=${pageSize}&to=${startDate}`,
            payload,
            {
                headers: {
                    "Content-Type": "application/json", // Set the Content-Type header
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error("Error retrieving users:", error);
        throw error;
    }
};

export const FindByTraceIdForSpans = async (traceId) => {
    try {
        const response = await axios.get(`${traceURL}/findByTraceId?traceId=${traceId}`);
        return response.data;
    } catch (error) {
        console.error("Error retrieving users:", error);
        return error;
    }
};

export const getTraceSummaryData = async (timeMinutesAgo) => {
    try {
        // Get the list of service names from localStorage and parse it
        const serviceListData = JSON.parse(localStorage.getItem("serviceListData"));

        // Construct the URL with the service names
        // const serviceNameListParam = serviceListData.join('&serviceNameList=');

        const serviceNameListParam = serviceListData.join('&serviceNameList=');

        console.log(`${traceURL}/TraceSumaryChartDataCount?serviceNameList=${serviceNameListParam}&timeAgoMinutes=${timeMinutesAgo}`)

        const response = await axios.get(
            `${traceURL}/TraceSumaryChartDataCount?serviceNameList=${serviceNameListParam}&timeAgoMinutes=${timeMinutesAgo}`
        )
        return response.data;
    } catch (error) {
        console.error("Error retrieving users:", error);
        throw error;
    }
};


export const getRecentTraceList = async (page, pageSize, serviceName) => {
    try {
        const response = await axios.get(
            `${traceURL}/getErroredDataForLastTwo?page=${page}&pageSize=${pageSize}&serviceName=${serviceName}`
        );
        return response.data;
    } catch (error) {
        console.error("Error retrieving users:", error);
        throw error;
    }
};
