import axios from "axios";
import { toast } from "react-toastify";
import useLoadingStore from "../store/useLoadingStore";

const axiosInstance = axios.create({
  baseURL: "http://194.180.11.40:8080/api/v1/",
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptors for managing loading state and tokens
axiosInstance.interceptors.request.use((config) => {
  const { startLoading } = useLoadingStore.getState(); // Get startLoading from Zustand
  startLoading(); // Increment loading count

  const token = localStorage.getItem("token");
  if (token && config.url && !config.url.includes("/login")) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config; // Return modified config
});

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    const { stopLoading } = useLoadingStore.getState(); // Get stopLoading from Zustand
    stopLoading(); // Decrement loading count

    return response; // Return the response as is
  },
  (error) => {
    const { stopLoading } = useLoadingStore.getState(); // Get stopLoading from Zustand
    stopLoading(); // Decrement loading count

    if (error.response) {
      const errorData = error.response.data;

      if (errorData && errorData.errors) {
        const messages = Object.values(errorData.errors).flat().join(", ");
        toast.error(messages, {
          position: "top-center",
          theme: "colored",
        });
      } else {
        toast.error(errorData.title || "خطای ناشناخته", {
          position: "top-center",
          theme: "colored",
        });
      }
    } else {
      toast.error("خطا در اتصال: " + error.message, {
        position: "top-center",
        theme: "colored",
      });
    }

    return Promise.reject(error); // Reject the promise
  }
);

export default axiosInstance;
