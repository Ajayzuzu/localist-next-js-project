import axios from "axios";
import { clearAuthData } from "../utils/utility";
export const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
export const googleAPI = process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY;
export const OAuth_Client_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;

const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token =
      JSON.parse(localStorage.getItem("barkToken")) ||
      JSON.parse(localStorage.getItem("registerTokens")) ||
      JSON.parse(localStorage.getItem("createRequestToken")) ||
      null;
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error?.response?.status === 401) {
      clearAuthData();
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
