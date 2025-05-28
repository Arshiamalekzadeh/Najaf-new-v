import { ModeToggle } from "@/components/mode-toggle";
import { useTheme } from "@/components/theme-provider";
import { useAuth } from "@hooks/useAuth";
import { Box, Button, IconButton, Typography } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, styled, ThemeProvider } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import { Logout } from "iconsax-react";
import React from "react";
import { MdMenu } from "react-icons/md";
import { Outlet } from "react-router-dom";
import theme, { darkPalette, lightPalette } from "../theme";
import { AppBar } from "./appBar";
import Sidebar from "./sidebar";
// import MenuIcon from "@mui/icons-material/Menu";

const drawerWidth = 240;

export const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));
export default function Layout() {
  const { theme: themeColor } = useTheme();
  const { logout } = useAuth();

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  // handleLogout
  const handleLogout = () => {
    logout();
  };
  // Create the theme based on the isDarkMode state
  const appliedTheme = createTheme({
    ...theme,
    palette: themeColor === "dark" ? darkPalette : lightPalette,
  });

  return (
    <ThemeProvider theme={appliedTheme}>
      <Box className=" flex justify-between ">
        <CssBaseline />
        <AppBar position="fixed" open={open} drawerWidth={drawerWidth}>
          <Toolbar
            variant="dense"
            sx={{
              px: [3.1],
            }}
          >
            <IconButton
              color="inherit"
              aria-label="باز کردن منو"
              onClick={handleDrawerOpen}
              edge="start"
              sx={[open && { display: "none" }]}
            >
              <MdMenu />
            </IconButton>
            <Typography variant="subtitle1" noWrap component="div">
              CiS
            </Typography>

            <ModeToggle />
            <Button color="inherit" onClick={handleLogout}>
              <Logout className="rotate-180" />
            </Button>
          </Toolbar>
        </AppBar>
        <Sidebar open={open} setOpen={setOpen} />
        <Box
          component="main"
          className="flex flex-col"
          sx={{
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          {/* <Button onClick={toggleTheme}>asdad</Button> */}
          <Toolbar variant="dense"></Toolbar>{" "}
          <Box className="p-2 bg-background grow h-[calc(100%-48px)]">
            <Outlet />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
