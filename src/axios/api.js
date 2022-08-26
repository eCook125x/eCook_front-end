import axios from "axios";
const api = axios.create({
    baseURL: "https://ecook-20220714.herokuapp.com",
});

export default api;