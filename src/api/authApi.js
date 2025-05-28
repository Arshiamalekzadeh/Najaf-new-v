import axiosInstance from "../utils/axios";

export const login = async (credentials) => {
  const response = await axiosInstance.post("/Authentication/sign-in", credentials);
  return response.data;
};

export const changepassword = async (data) => {
  const response = await axiosInstance.post("/Identity/ChangePassword", data);
  return response.data;
};

export const getCaptcha = async () => {
  const response = await axiosInstance.get("/Identity/Captcha");
  return response.data;
};
