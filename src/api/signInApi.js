import axiosInstance from "../utils/axiosConfig";

// POST
export const signIn = async (data) => {
  const response = await axiosInstance.post("Authentication/sign-in", data);
  return response.data;
};

// POST
export const signOut = async () => {
  const response = await axiosInstance.post("/Identity/Logout");
  return response.data;
};

// get
export const captcha = async () => {
  debugger;
  const response = await axiosInstance.get("/Identity/Captcha");
  return response.data;
};
