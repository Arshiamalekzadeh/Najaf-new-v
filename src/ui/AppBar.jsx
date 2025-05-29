import React from "react";

import MenuIcon from "@mui/icons-material/Menu";
import { IconButton, styled, Toolbar, Typography } from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import TopBarUserMenu from "../components/topBarUserMenu";


const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open, drawerWidth }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const TopBar = ({ toggleDrawer, drawerWidth, open, username }) => {

  return (
    <AppBar
      color="info"
      position="absolute"
      open={open}
      drawerWidth={drawerWidth}
    >
      <Toolbar
        variant="dense"
        sx={{
          pl: "24px", 
        }}
      >
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          className="!text-white"
          onClick={toggleDrawer}
          sx={{
            ...(open && { display: "none" }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          component="h1"
          variant="body1"
          color="inherit"
          noWrap
          className="!text-white"
          sx={{ 
            flexGrow: 1,
            display: { xs: 'none', sm: 'block' } 
          }}          
        >
          سـامانه انبارداری
        </Typography>
        <div  className="ml-7">
        </div>
       <div className="flex items-center ">
       <TopBarUserMenu />
       <Typography>{username}</Typography>
       </div>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
