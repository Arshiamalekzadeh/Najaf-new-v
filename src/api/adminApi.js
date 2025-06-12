import axiosInstance from "../utils/axiosConfig";

// get get-missing-persons-count
export const getMissingPersonsCount = async () => {
  debugger;
  const response = await axiosInstance.get("/Admin/get-missing-persons-count");
  return response.data;
};

// get get-founded-persons-count
export const getFoundedPersonsCount = async () => {
  debugger;
  const response = await axiosInstance.get("/Admin/get-founded-persons-count");
  return response.data;
};
// get get-last-missing-persons
export const getLastMissingPersons = async ({params}) => {
  debugger;
  const response = await axiosInstance.get("/Admin/get-last-missing-persons",{params});
  return response.data;
};