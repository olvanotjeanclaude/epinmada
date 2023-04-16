import axios from "axios"

export const http = async() => {
const http= axios.create({
        baseURL: "http://localhost:8000",
    });
   
    await  http.get("/sanctum/csrf-cookie");

    return http;
}