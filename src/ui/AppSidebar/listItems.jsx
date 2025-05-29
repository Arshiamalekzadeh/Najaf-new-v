import { Divider, useMediaQuery, useTheme } from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Dropbox } from "iconsax-react";
import { ShoppingCart } from "iconsax-react";
import { Signpost } from "iconsax-react";
import { Buildings2 } from "iconsax-react";
import {
  ArrowLeft2,
  Calendar,
  Calendar2,
  Cd,
  Convert3DCube,
  HomeHashtag,
  House2,
  Monitor,
  Reserve,
} from "iconsax-react";
import * as React from "react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const ListItems = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();

  const routesData = [
    {
      icon: <Monitor variant="Bulk" />,
      text: "داشبورد",
      title: "dashboard",
      path: "/app/dashboard",
    },
    // {
    //   icon: <House2 variant="Bulk" />,
    //   text: "اقامتگـاه‌هـا",
    //   title: "accommodation",
    //   submenu: [
    //     { text: "مدیریت اقامتگاه‌هـا", path: "/app/accommodation" },
    //     { text: "نوع اقامتگاه‌هـا", path: "/app/accommodationtype" },
    //     { text: "امکانات", path: "/app/accommodationEquipmentType" },
    //   ],
    // },
    // {
    //   icon: <Calendar2 variant="Bulk" />,
    //   text: "اقامت‌هـا",
    //   title: "equipments",
    //   path: "#",
    //   submenu: [{ text: "مدیریت اقامت‌هـا", path: "/app/stays" }],
    // },
    // {
    //   icon: <Calendar variant="Bulk" />,
    //   text: "مدیریت رزروهـا",
    //   title: "equipments",
    //   path: "/app/reservationManagement",
    // },
    // {
    //   icon: <Reserve variant="Bulk" />,
    //   text: "رزرو",
    //   title: "provinceCard",
    //   path: "/app/provinceCard",
    // },
    // {
    //   icon: <Convert3DCube variant="Bulk" />,
    //   text: "درخواست‌هـای مـن",
    //   title: "equipments",
    //   path: "/app/myRequests",
    // },
    // {
    //   icon: <HomeHashtag variant="Bulk" />,
    //   text: "رزروهای اقامتگاه من",
    //   title: "myAaccommodationReservations",
    //   path: "/app/myAaccommodationReservations",
    // },
    {
      icon: <Buildings2 variant="Bulk" />,
      text: "مدیریت آدرس",
      title: "AddressManagement",
      path: "/app/addressManagement",
     
    },
    {
      icon: <Signpost variant="Bulk" />,
      text: "مدیریت قرارداد",
      title: "ContractManagement",
      path: "/app/contractManagement",
    },
    {
      icon: <Dropbox variant="Bulk" />,
      text: "مدیریت محصول",
      title: "ProductManagement",
      path: "/app/productManagement",
    },
    {
      icon: <ShoppingCart variant="Bulk" />,
      text: "مدیریت ارسال",
      title: "OrderManagement",
      path: "/app/orderManagement",
    },
  ];

  const locationPath = useLocation().pathname;
  const [activePath, setActivePath] = useState(locationPath);
  const [openSubMenu, setOpenSubMenu] = useState({});

  const handleMenuItemClick = (path) => {
    setActivePath(path);
    navigate(path);
    if (isMobile) {
      setOpenSubMenu({}); // Close all submenus when navigating in mobile
    }
  };

  const toggleSubMenu = (index) => {
    setOpenSubMenu((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const mainListItems = routesData.map((item, index) => (
    <React.Fragment key={index}>
      <ListItemButton
        className="group"
        onClick={(e) => {
          e.stopPropagation();
          if (item.submenu) {
            toggleSubMenu(index); // Toggle the submenu if it exists
          } else {
            handleMenuItemClick(item.path); // Change the path if no submenu
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
                e.stopPropagation(); // Prevent parent click event
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
      {/* {index === 5 && <Divider />}
      {index === 3 && <Divider />}
      {index === 2 && <Divider />} */}
    </React.Fragment>
  ));

  return <>{mainListItems}</>;
};

export default ListItems;
