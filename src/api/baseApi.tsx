// axiosInstance.js
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
const axiosInstance = axios.create({
 baseURL: 'https://api.example.com', // Replace with your API base URL
 headers: {
   'Content-Type': 'application/json',
   // Add any other headers or configurations you need
 },
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
 (config: any) => {
   // You can modify the request config here, e.g., add authentication headers
   // config.headers.Authorization = `Bearer ${getToken()}`;
   const token = localStorage.getItem("@ACCESS_TOKEN");
   config.headers = {
    [`Access-Control-Allow-Credentials`]: true,
    ["accept"]: 'application/json',
    ["Authorization"]: `Bearer ${token}`,
    ["Content-Type"]: 'application/json-patch+json'
  
};

   return config;
 }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
 (response) => {
   // You can modify the response data here, e.g., handling pagination
   return response.data;
 },
 (error) => {
   return Promise.reject(error);
 }
);

export default axiosInstance;