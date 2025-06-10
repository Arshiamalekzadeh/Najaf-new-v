import axios from "axios";
import { toast } from "react-toastify";

const serverUrl = import.meta.env.VITE_API_BASE_URL;

const axiosInstance = axios.create({
  baseURL: serverUrl,
});

axiosInstance.interceptors.request.use((config) => {
  const token = sessionStorage.getItem("token");

  if (token) {
    config.headers.Authorization = ` ${token}`;
  }

  config.metadata = { method: config.method };
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const { status, data } = error.response;
      const errorMessages = [];

      const extractMessages = (obj) => {
        if (!obj) return;

        if (typeof obj === "string") {
          errorMessages.push(obj);
        } else if (Array.isArray(obj)) {
          obj.forEach((item) => extractMessages(item));
        } else if (typeof obj === "object") {
          Object.values(obj).forEach((value) => extractMessages(value));
        }
      };

      if (status === 400) {
        extractMessages(data.errors || data);
        errorMessages.forEach((message) =>
          toast.error(message, { position: "top-right", theme: "colored" })
        );
      } else if (status === 500) {
        extractMessages(data.message);
        if (errorMessages.length > 0) {
          errorMessages.forEach((message) =>
            toast.error(message, { position: "top-right", theme: "colored" })
          );
        } else {
          window.location.href = "/500";
        }
      } else {
        toast.error(data.message.message[0] || "خطای ناشناخته");
        console.log(data);
      }
    } else {
      toast.error("خطای اتصال، لطفا مجددا بررسی نمایید");
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
