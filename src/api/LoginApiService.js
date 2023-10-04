import axios from 'axios';

const loginURL = process.env.REACT_APP_APIURL_AUTH;


export const loginUser = async (data) => {
    try {
        console.log("api call data", data);
        const response = await axios.post(`${loginURL}/login`, data);
        return response;
    } catch (error) {
        console.error("Error in login User:", error);
        return error;
    }
};

export const getServiceList = async (userInfo) => {
    try {
        console.log("api call data", userInfo);
        const response = await axios.post(`${loginURL}/getServiceList`, userInfo);
        return response.data;
    } catch (error) {
        console.error("Error in login User:", error);
        throw error;
    }
};

