import { Outlet } from "react-router-dom";

export const PrivateRoute = () => {
  // const { isAuthenticated } = useAuth();
  const token = localStorage.getItem("token");

  return token ? <Outlet /> : <Outlet />;
};
