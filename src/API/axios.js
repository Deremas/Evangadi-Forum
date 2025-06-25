import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "http://18.206.214.228:3456/api",
  baseURL: "https://evangadi-forum-starter-pw48.onrender.com/api",
  // baseURL: "http://localhost:2224/api",
});

export default axiosInstance;
