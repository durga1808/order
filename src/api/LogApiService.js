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
};

export const getLogSummaryData = async (timeMinutesAgo) => {
  try {
    // Get the list of service names from localStorage and parse it
    const serviceListData = JSON.parse(localStorage.getItem("serviceListData"));

    // Construct the URL with the service names
    const serviceNameListParam = serviceListData.join('&serviceNameList=');
    const response = await axios.get(
      `${logUrl}/LogSumaryChartDataCount?&serviceNameList=${serviceNameListParam}timeAgoMinutes=${timeMinutesAgo}`
    );
    return response.data;
  } catch (error) {
    console.error("Error retrieving users:", error);
    throw error;
  }
};

export const getErroredLogDataForLastTwo = async (
  page,
  pageSize,
  serviceName
) => {
  try {
    const response = await axios.get(
      // `${logUrl}/LogSumaryChartDataCount?getErroredLogDataForLastTwo?page=${page}&pageSize=${pageSize}&serviceName=${serviceName}`
      `${logUrl}/getErroredLogDataForLastTwo?page=${page}&pageSize=${pageSize}&serviceName=${serviceName}`
    );
    return response.data;
  } catch (error) {
    console.error("Error retrieving users:", error);
    throw error;
  }
};
export const getAllLogBySorts = async (
  minutesAgo,
  page,
  pageSize,
  sortOrder
) => {
  try {
    // Get the list of service names from localStorage and parse it
    const serviceListData = JSON.parse(localStorage.getItem("serviceListData"));

    // Construct the URL with the service names
    const serviceNameListParam = serviceListData.join('&serviceNameList=');
    const response = await axios.get(
      `${logUrl}/getallLogdata-sortorder?minutesAgo=${minutesAgo}&page=${page}&pageSize=${pageSize}&serviceNameList=${serviceNameListParam}&sortOrder=${sortOrder}`
    );
    return response.data;
  } catch (error) {
    console.error("Error retrieving users:", error);
    throw error;
  }
};
