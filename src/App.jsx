import { ThemeProvider } from "@mui/material/styles";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Access from "./components/accessbilty/access";
import AdminDashbord from "./pages/AdminDashbord";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import ServerError from "./pages/ServerError";
import useLoadingStore from "./store/useLoadingStore";
import theme from "./theme";
import Layout from "./ui/Layout";
import LoadingOveray from "./ui/loadingOveray";
import PrivateRoute from "./utils/privateRoutes";

function App() {
  const { loading: overlayLoading } = useLoadingStore();

  useEffect(() => {
    const disableZoom = (event) => {
      if (
        event.ctrlKey ||
        event.metaKey ||
        (event.touches && event.touches.length > 1)
      ) {
        event.preventDefault();
      }
    };

    const disableKeyZoom = (event) => {
      if (
        (event.ctrlKey || event.metaKey) &&
        (event.key === "+" || event.key === "-" || event.key === "0")
      ) {
        event.preventDefault();
      }
    };

    document.addEventListener("wheel", disableZoom, { passive: false });
    document.addEventListener("keydown", disableKeyZoom, { passive: false });
    document.addEventListener("touchstart", disableZoom, { passive: false });

    return () => {
      document.removeEventListener("wheel", disableZoom);
      document.removeEventListener("keydown", disableKeyZoom);
      document.removeEventListener("touchstart", disableZoom);
    };
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/app" element={<Layout />}>
            {/* مسیرهای مخصوص SuperAdmin */}
            <Route element={<PrivateRoute requiredRoles={["SuperAdmin"]} />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="accessbilty" element={<Access />} />
            </Route>
            {/* مسیرهای مخصوص admin */}
            <Route element={<PrivateRoute requiredRoles={["Admin"]} />}>
              <Route path="AdminDashbord" element={<AdminDashbord />} />
            </Route>
            {/* مسیر پیش‌فرض برای موارد تعریف‌نشده */}
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="/500" element={<ServerError />} />
          <Route path="/" element={<Login />} />
        </Routes>
        <ToastContainer rtl />
      </ThemeProvider>
      {overlayLoading && <LoadingOveray />}
    </>
  );
}

export default App;