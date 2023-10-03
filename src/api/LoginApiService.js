import axios from 'axios';

const loginURL = 'http://localhost:8080/AuthController/login'; 


export const loginUser = (data) => {
    try {
        console.log("api call data",data);
        const response = axios.post(`${loginURL}`, data);
        return response;
    } catch (error) {
        console.error("Error in login User:", error);
        throw error;
    }
};

