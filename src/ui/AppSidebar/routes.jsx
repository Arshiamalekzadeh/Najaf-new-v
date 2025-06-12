import { Home2, Setting2 } from "iconsax-react";

const routesData = (role) => {
  const allRoutes = [
    {
      icon: <Home2 variant="Bulk" />,
      text: "خانه",
      title: "dashboard",
      path: "/app/dashboard",
      roles: ["SuperAdmin"],
    },
    {
      icon: <Setting2 variant="Bulk" />,
      text: "تنظیمات",
      title: "settings",
      path: "/app/settings",
      roles: ["SuperAdmin"],
    },    {
      icon: <Home2 variant="Bulk" />,
      text: "خانه",
      title: "AdminDashbord",
      path: "/app/AdminDashbord",
      roles: ["Admin"],
    },
  ];

  return allRoutes.filter((route) => route.roles.includes(role));
};

export default routesData;
