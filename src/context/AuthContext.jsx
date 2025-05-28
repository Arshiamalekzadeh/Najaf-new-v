// AuthContext.jsx
import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext(undefined);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem("token"));
  const [roles, setRoles] = useState(() => {
    const storedRoles = localStorage.getItem("role");
    return storedRoles ? JSON.parse(storedRoles) : [];
  });

  const login = (token, roles) => {
    setToken(token);
    setRoles(roles);
    localStorage.setItem("token", token);
    localStorage.setItem("role", JSON.stringify(roles));
  };

  const logout = () => {
    setToken(null);
    setRoles([]);
    localStorage.removeItem("token");
    localStorage.removeItem("role");
  };

  return (
    <AuthContext.Provider value={{ token, roles, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
