import axios from 'axios';

const setupAxiosInterceptor = (setLoading) => {
    axios.interceptors.request.use((config) => {
        setLoading(true); // Show loading indicator on request start
        return config;
    });

    axios.interceptors.response.use(
        (response) => {
            setLoading(false); // Hide loading indicator on successful response
            return response;
        },
        (error) => {
            setLoading(false); // Hide loading indicator on error
            return Promise.reject(error);
        }
    );
};

export default setupAxiosInterceptor;