import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3300/api",
  withCredentials: true
});

export default api;
