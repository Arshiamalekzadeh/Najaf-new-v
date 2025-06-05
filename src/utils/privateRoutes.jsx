import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuthStore from "../store/useAuthStore";

const PrivateRoute = ({ requiredRoles }) => {
  const location = useLocation();
  const { token, role } = useAuthStore();

  const hasAccess = () => {
    // Check if token exists
    if (!token) return false;

    // If no specific roles are required, allow access if token exists
    if (!requiredRoles || requiredRoles.length === 0) return true;

    // Convert role to array if it's a single string
    const userRoles = Array.isArray(role) ? role : [role];

    // Check if user has any of the required roles
    return requiredRoles.some((requiredRole) => userRoles.includes(requiredRole));
  };

  return hasAccess() ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
};

export default PrivateRoute;