import axios from "axios";

const api = axios.create({
  baseURL: "http://farmanow.ddns.net:13002/api/",
});

export default api;