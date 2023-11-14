import axios from "axios"
import { BASE_URL } from "../api/config";

const http = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Accept": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        "withCredentials": true,
        "Content-Type": "application/json",
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

export default http;