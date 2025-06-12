import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuthStore from "../store/useAuthStore";
import { toast } from "react-toastify";

const PrivateRoute = ({ requiredRoles }) => {
  const location = useLocation();
  const { token, role } = useAuthStore();

  const hasAccess = () => {
    debugger
    // بررسی وجود توکن
    if (!token) {
      toast.error("لطفاً ابتدا وارد شوید.", {
        position: "top-center",
        theme: "colored",
      });
      return false;
    }

    // اگر نقش خاصی لازم نیست، دسترسی با توکن مجاز است
    if (!requiredRoles || requiredRoles.length === 0) return true;

    // تبدیل نقش به آرایه اگر یک رشته باشد
    const userRoles = Array.isArray(role) ? role : [role];

    // بررسی دسترسی کاربر به نقش‌های موردنیاز
    const access = requiredRoles.some((requiredRole) =>
      userRoles.includes(requiredRole)
    );

    if (!access) {
      toast.error("شما به این صفحه دسترسی ندارید.", {
        position: "top-center",
        theme: "colored",
      });
    }

    return access;
  };

  return hasAccess() ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
};

export default PrivateRoute;