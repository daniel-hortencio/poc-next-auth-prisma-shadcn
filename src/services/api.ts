import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000/api",
});

api.interceptors.response.use((onSuccess) => onSuccess.data);
