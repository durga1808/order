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

export const getLogSummaryData = async (timeMinutesAgo) => {
    try {
      const response = await axios.get(
        `${logUrl}/LogSumaryChartDataCount?timeAgoMinutes=${timeMinutesAgo}`
      )
      return response.data;
    } catch (error) {
      console.error("Error retrieving users:", error);
      throw error;
    }
  };


  

  export const getErroredLogDataForLastTwo = async (page,pageSize,serviceName) => {
    try {
      const response = await axios.get(
        // `${logUrl}/LogSumaryChartDataCount?getErroredLogDataForLastTwo?page=${page}&pageSize=${pageSize}&serviceName=${serviceName}`
        `${logUrl}/getErroredLogDataForLastTwo?page=${page}&pageSize=${pageSize}&serviceName=${serviceName}`
      )
      return response.data;
    } catch (error) {
      console.error("Error retrieving users:", error);
      throw error;
    }
  };