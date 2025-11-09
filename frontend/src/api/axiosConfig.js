import axios from "axios";

const api = axios.create({
  baseURL: "https://ilham-sir-project.vercel.app",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
