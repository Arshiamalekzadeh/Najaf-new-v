import { useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import getAccessToken from "./helper/getAccesstoken";
export const RequireAuth = ({ children }) => {
  const Authorization = getAccessToken();
  const [approve, setApprove] = useState(false);

  const location = useLocation();

  if (Authorization == undefined && approve == false) {
    return <Navigate to="/" state={{ path: location.pathname }} />;
  }
  return children;
};
