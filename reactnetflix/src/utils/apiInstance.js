import axios from 'axios';

export const apiInstance = axios.create({
    baseURL: "http://localhost:4000",
    headers: {
        "Content-Type" : "Application/json"
    }
})
