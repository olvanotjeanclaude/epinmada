import axios from "axios"

const http = axios.create({
    // baseURL: process.env.REACT_APP_BACKEND_URL,
    baseURL: "/api/",
    headers: {
        "Accept": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        "withCredentials": true,
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
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


export const getCsrfCoockie = async () => {
    return await axios.get(`${process.env.REACT_APP_BACKEND_DOMAIN}/api/test`)
        .then(res => res)
        .finally(err => {
            console.log(err);
        })
};

export default http;