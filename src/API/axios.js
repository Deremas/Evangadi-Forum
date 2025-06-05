import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://18.206.214.228:3456/api",
  // baseURL: process.env.VITE_BACKEND_API_BASE_URL,
  // baseURL: "https://evangadi-forum-starter-pw48.onrender.com/api",
  // baseURL: "http://localhost:3456/api",
});

export default axiosInstance;
