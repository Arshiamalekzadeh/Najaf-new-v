import { useMediaQuery, useTheme } from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { ArrowLeft2, Cd } from "iconsax-react";
import * as React from "react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import routesData from "./routes.jsx";
import useAuthStore from "../../store/useAuthStore.js";

const ListItems = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();
  const locationPath = useLocation().pathname;
  const [activePath, setActivePath] = useState(locationPath);
  const [openSubMenu, setOpenSubMenu] = useState({});
  const { role } = useAuthStore(); // ⬅️ دریافت نقش کاربر
  const routes = routesData(role); // ⬅️ فیلتر مسیرها

  const handleMenuItemClick = (path) => {
    setActivePath(path);
    navigate(path);
    if (isMobile) setOpenSubMenu({});
  };

  const toggleSubMenu = (index) => {
    setOpenSubMenu((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const mainListItems = routes.map((item, index) => (
    <React.Fragment key={index}>
      <ListItemButton
        className="group"
        onClick={(e) => {
          e.stopPropagation();
          if (item.submenu) {
            toggleSubMenu(index);
          } else {
            handleMenuItemClick(item.path);
          }
        }}
      >
        <ListItemIcon
          className={`text-slate-500 !min-w-0 w-8 h-8 ml-3 flex items-center justify-center relative transition-all duration-200 ${
            activePath === item.path ? "!text-orange-500 scale-125" : ""
          } rounded-2xl group-hover:bg-blue-100 group-hover:text-blue-400`}
        >
          {item.icon}
        </ListItemIcon>
        <p className="text-[15px] group-hover:text-blue-500 text-slate-700 font-normal">
          {item.text}
        </p>
        {item.submenu && (
          <ArrowLeft2
            className={`mr-auto transition-all duration-200 ${
              openSubMenu[index] ? "-rotate-90" : ""
            }`}
            size={15}
          />
        )}
      </ListItemButton>
      {item.submenu && (
        <div
          className={`bg-slate-100 transition-all duration-300 overflow-hidden ${
            openSubMenu[index] ? "max-h-screen" : "max-h-0"
          }`}
        >
          {item.submenu.map((subItem, subIndex) => (
            <Link
              to={subItem.path}
              key={subIndex}
              onClick={(e) => {
                e.stopPropagation();
                handleMenuItemClick(subItem.path);
              }}
            >
              <ListItemButton
                className={`!border-r ${
                  activePath === subItem.path ? "active" : ""
                }`}
              >
                <ListItemIcon className="!min-w-0 w-6 h-6 ml-3 flex items-center justify-center">
                  <Cd
                    variant={activePath === subItem.path ? "Bulk" : "Bold"}
                    className={`text-slate-300 relative z-30 ${
                      activePath === subItem.path ? "!text-orange-500" : ""
                    }`}
                    size={activePath === subItem.path ? 24 : 12}
                  />
                </ListItemIcon>
                <ListItemText primary={subItem.text} />
              </ListItemButton>
            </Link>
          ))}
        </div>
      )}
    </React.Fragment>
  ));

  return <>{mainListItems}</>;
};

export default ListItems;
