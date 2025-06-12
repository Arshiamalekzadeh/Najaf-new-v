import { ThemeProvider } from "@mui/material/styles";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import ServerError from "./pages/ServerError";
import useLoadingStore from "./store/useLoadingStore";
import theme from "./theme";
import Layout from "./ui/Layout";
import LoadingOveray from "./ui/loadingOveray";
import PrivateRoute from "./utils/privateRoutes";
import SuperadminSettings from "./pages/SuperadminSettings";

function App() {
  const { loading: overlayLoading } = useLoadingStore();

  return (
    <>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/app" element={<Layout />}>
            <Route element={<PrivateRoute requiredRoles={["SuperAdmin"]} />}>
              <Route path="/app/dashboard" element={<Dashboard />} />
              <Route path="/app/superadminsettings" element={<SuperadminSettings/>} />
            </Route>
          </Route>
          <Route path="/500" element={<ServerError />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Login />} />
        </Routes>
        <ToastContainer rtl />
      </ThemeProvider>
      {overlayLoading && <LoadingOveray />}
    </>
  );
}

export default App;
