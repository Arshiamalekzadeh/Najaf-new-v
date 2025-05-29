import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { User } from "iconsax-react";
import React, { useState } from "react";
import useLogin from "../hooks/useLogin";

const TopBarUserMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const { LogOut: LogOutEx } = useLogin();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  function logoutApp() {
    LogOutEx();
  }

  return (
    <>
      <IconButton color="inherit" onClick={handleClick}>
        <User />
      </IconButton>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem className="!text-sm !font-normal" onClick={logoutApp}>
          خروج از سیستم
        </MenuItem>
      </Menu>
    </>
  );
};

export default TopBarUserMenu;
