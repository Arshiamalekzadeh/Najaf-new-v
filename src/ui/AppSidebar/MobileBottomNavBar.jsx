import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import routesData from "./routes.jsx";

const MobileBottomNavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [value, setValue] = React.useState(location.pathname);



  const handleChange = (event, newValue) => {
    setValue(newValue);
    navigate(newValue);
  };

  return (
    <Paper elevation={3} sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}>
      <BottomNavigation value={value} onChange={handleChange} showLabels>
        {routesData.map((route, index) => {
          return (
            <BottomNavigationAction
              className="p-2"
              key={index}
              label={route.text}
              icon={route.icon}
              value={route.path}
            />
          );
        })}

      </BottomNavigation>
    </Paper>
  );
};

export default MobileBottomNavBar;
