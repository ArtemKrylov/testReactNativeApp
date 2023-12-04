import axios from "axios";

import {apiUrl} from "./baseURL";

export const instance = axios.create({
  baseURL: apiUrl,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("access_token") || ""}`,
  },
});

instance.interceptors.request.use(
  config => {
    config.headers["Authorization"] = `Bearer ${localStorage.getItem("access_token")}` || "";
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);
