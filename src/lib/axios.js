import axios from "axios";

export default axios.create({
  baseURL: "https://androidtest.ziademo.com",
  //   withCredentials: true,
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${localStorage.getItem("accessToken") || ""}`,
  },
});

