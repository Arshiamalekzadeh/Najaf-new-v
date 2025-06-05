import axiosInstance from "../utils/axiosConfig";

// GET
export const getAllRoles = async () => {
    debugger
    const response = await axiosInstance.get("/SuperAdmin/get-all-roles");
    return response.data;
  };