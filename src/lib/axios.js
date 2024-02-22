import axios from "axios";

const http = axios.create({
  baseURL: "https://androidtest.ziademo.com",
//   withCredentials: true,
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${localStorage.getItem("accessToken") || ""}`,
  },
});

export default http;