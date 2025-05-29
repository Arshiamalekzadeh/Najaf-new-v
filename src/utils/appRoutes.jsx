import React from "react";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Home from "../pages/Home";
import Users from "../pages/Users";
import UserDetail from "../pages/UserDetail";
import NewUserForm from "../pages/AddNewUser";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<Users />} />
      <Route path="/users/:userId" element={<UserDetail />} />
      <Route path="/newuser" element={<NewUserForm />} />
    </Routes>
  );
};

export default AppRoutes;
