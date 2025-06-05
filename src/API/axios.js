import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.VITE_BACKEND_API_BASE_URL,
  // baseURL: "https://evangadi-forum-starter-pw48.onrender.com/api",
  // baseURL: "http://localhost:3456/api",
});

export default axiosInstance;
