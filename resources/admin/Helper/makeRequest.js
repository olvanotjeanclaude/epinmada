import axios from "axios"
import { BASE_URL } from "../api/config";

const http = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Accept": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        "withCredentials": true,
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("access_token")}`,
    }
});


http.interceptors.request.use((config) => {
    if (config?.data?.files || config?.data?.file) {
        config.headers['Content-Type'] = 'multipart/form-data';
    } else {
        config.headers['Content-Type'] = 'application/json';
    }

    return config;
});

http.interceptors.response.use(response => response, (error) => {
    if (error.response.status == 401) {
        localStorage.removeItem("access_token");
    }

    return Promise.reject(error);
});

export default http;