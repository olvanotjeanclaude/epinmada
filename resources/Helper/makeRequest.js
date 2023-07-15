import axios from "axios"

const http = axios.create({
    // baseURL: process.env.REACT_APP_BACKEND_URL,
    baseURL:"/api/",
    headers: {
        "Accept": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        "withCredentials": true,
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
    }
});

export const getCsrfCoockie = async () => {
    return await axios.get(`${process.env.REACT_APP_BACKEND_DOMAIN}/api/test`)
        .then(res => res)
        .finally(err =>{
            console.log(err);
        })
};

export default http;