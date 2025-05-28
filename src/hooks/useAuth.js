import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { changepassword, getCaptcha, login } from "../api/authApi";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../store/useAuthStore";

export const useAuth = () => {
  const naviagte = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const queryClient = useQueryClient();
  const { update } = useAuthStore();
  const { data: captcha } = useQuery({
    queryKey: ["captcha"],
    queryFn: getCaptcha,
    enabled: false,
  });

  const loginMutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      const { accessToken, role, username, userId, name } = data;
      localStorage.setItem("token", data.accessToken);
      localStorage.setItem("role", JSON.stringify(role));
      localStorage.setItem("username",data.username);
      localStorage.setItem("userId", data.userId);
      localStorage.setItem("name", data.name);

      update(accessToken, role, username, userId, name);
      setIsAuthenticated(true);
      setTimeout(() => {
        naviagte("/app/dashboard");
      }, 1000);
    },
  });

  const changePasswordMutation = useMutation({
    mutationFn: changepassword,
    onSuccess: () => {
      setTimeout(() => {
        naviagte("/app/dashboard");
      }, 500);
    },
  });

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("username");
    localStorage.removeItem("userId");
    localStorage.removeItem("name");
    
    setIsAuthenticated(false);
    queryClient.clear();
    naviagte("/");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  return {
    isAuthenticated,
    captcha,
    login: loginMutation.mutate,
    changePassword: changePasswordMutation.mutate,
    logout,
    isLoading: loginMutation.isPending,
    error: loginMutation.error,
  };
};
