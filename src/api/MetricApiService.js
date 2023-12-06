import axios from "axios";

const metricURL = process.env.REACT_APP_APIURL_METRICS;

// export const getMetricDataApi = async (service,startDate,endDate) => {
//     console.log("Start---------",startDate);
//     console.log("End-------------",endDate);
//     try {                                       // ?serviceName=order-project&timeAgoMinutes=60
//         console.log("Metric url " , `${metricURL}/getByserviceNameAndMinutesAgo?from=${endDate}&serviceName=${service}&to=${startDate}`);
//         const response = await axios.get(`${metricURL}/getByserviceNameAndMinutesAgo?from=${endDate}&serviceName=${service}&to=${startDate}`);
//         return response.data;
//     } catch (error) {
//         console.error("Error retrieving users:", error);
//         return error;
//     }
// };

export const getMetricDataApi = async (
  service,
  startDate,
  endDate,
  minutesAgo
) => {
  console.log("Start---------", startDate);
  console.log("End-------------", endDate);

  try {
    var finalUrl;

    if (JSON.parse(localStorage.getItem("needHistoricalData"))) {
      console.log(
        `History call + ${metricURL}/getByserviceNameAndMinutesAgo?from=${endDate}&serviceName=${service}&to=${startDate}`
      );
      finalUrl = `${metricURL}/getByserviceNameAndMinutesAgo?from=${endDate}&serviceName=${service}&to=${startDate}`;
    } else {
      console.log(
        `Minutes call + ${metricURL}/getByserviceNameAndMinutesAgo?minutesAgo=${minutesAgo}&serviceName=${service}&to=${startDate}`
      );
      finalUrl = `${metricURL}/getByserviceNameAndMinutesAgo?minutesAgo=${minutesAgo}&serviceName=${service}&to=${startDate}`;
    }
    const response = await axios.get(finalUrl);
    return response.data;
  } catch (error) {
    console.error("Error retrieving users:", error);
    return error;
  }
};
