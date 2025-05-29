import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuthStore from "../store/useAuthStore";

const PrivateRoute = ({ requiredRoles }) => {
  const location = useLocation();
  const { AccountTokenID, LoginTokenID, RoleUser } = useAuthStore();

  const hasAccess = () => {
    if (!AccountTokenID || !LoginTokenID) return false;

    if (!requiredRoles || requiredRoles.length === 0) return true;

    const roles = Array.isArray(RoleUser) ? RoleUser : [RoleUser];

    return requiredRoles.some((role) => roles.includes(role));
  };

  return hasAccess() ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
};

export default PrivateRoute;
