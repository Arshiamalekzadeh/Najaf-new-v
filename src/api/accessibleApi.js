import axiosInstance from "../utils/axiosConfig";

// GET
export const getAllRoles = async () => {
  const response = await axiosInstance.get("/SuperAdmin/get-all-roles");
  return response.data;
};
// GET
export const getAllRoleAccessible = async () => {
  const response = await axiosInstance.get("/SuperAdmin/get-accessible-form");
  return response.data;
};
// GET
export const getRoleAccessible = async (RoleId) => {
  const response = await axiosInstance.get(`/SuperAdmin/get-role-accessible-form?RoleId=${RoleId}`);
  return response.data;
};

// POST
export const setRoleAccessibleApi = async (RoleData) => {
  const response = await axiosInstance.post(
    "/SuperAdmin/set-role-accessible-form-list",
    RoleData
  );
  return response.data;
};