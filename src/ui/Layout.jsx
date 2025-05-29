import { Box, useMediaQuery } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import useAuthStore from "../store/useAuthStore";
import theme from "../theme";
import TopBar from "./AppBar";
import Navigation from "./AppSidebar/Navigation";

const drawerWidth = 240;

export default function Layout() {
  const location = useLocation();
  const [open, setOpen] = React.useState(false);
  const [userName, setUsername] = React.useState("");
  const { user } = useAuthStore();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const setAuth = useAuthStore((state) => state.update);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (isMobile) {
      setOpen(false);
    } else {
      setOpen(true);
    }

    if (location.pathname === "/") {
      window.location.href = "/dashboard";
    }
  }, [isMobile, location]);

  return (
    <ThemeProvider theme={theme}>
      <Box className="flex">
        <CssBaseline />

        {!isMobile && (
          <>
            <TopBar
              username={userName}
              toggleDrawer={toggleDrawer}
              open={open}
              drawerWidth={drawerWidth}
            />
            <Navigation
              toggleDrawer={toggleDrawer}
              open={open}
              drawerWidth={drawerWidth}
            />
          </>
        )}

        {isMobile && (
          <>
            {!open && (
              <TopBar
                username={userName}
                toggleDrawer={toggleDrawer}
                open={open}
                drawerWidth={drawerWidth}
              />
            )}

            {open && (
              <Navigation
                toggleDrawer={toggleDrawer}
                open={open}
                drawerWidth={drawerWidth}
              />
            )}
          </>
        )}

        <Box
          component="main"
          className="flex flex-col"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[50]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar variant="dense" />
          <Box className=" xl:p-4 bg-slate-50 grow ">
            <Outlet />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
