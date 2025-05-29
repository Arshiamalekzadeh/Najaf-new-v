// src/components/IconSelect.js

import {
  FormControl,
  InputLabel,
  ListItemIcon,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { LiaToiletSolid } from "react-icons/lia";

import { useEffect } from "react";
import { Wc } from "@mui/icons-material";
import { Shower } from "@mui/icons-material";
import { TimeToLeaveOutlined } from "@mui/icons-material";
import { KitchenOutlined } from "@mui/icons-material";
import { AcUnitOutlined } from "@mui/icons-material";
import { LocalFireDepartmentOutlined } from "@mui/icons-material";
import { OutdoorGrillOutlined } from "@mui/icons-material";
import { ElevatorOutlined } from "@mui/icons-material";
import { RestaurantOutlined } from "@mui/icons-material";

const iconList = [
  { title: "Wc", faTitle: "سرویس بهداشتی", icon: <Wc /> },
  { title: "Shower", faTitle: "حمام", icon: <Shower /> },
  {
    title: "TimeToLeaveOutlined",
    faTitle: "پارکینگ",
    icon: <TimeToLeaveOutlined />,
  },
  { title: "KitchenOutlined", faTitle: "آشپزخانه", icon: <KitchenOutlined /> },
  { title: "AcUnitOutlined", faTitle: "سرمایشی", icon: <AcUnitOutlined /> },
  {
    title: "LocalFireDepartmentOutlined",
    faTitle: "گرمایشی",
    icon: <LocalFireDepartmentOutlined />,
  },
  {
    title: "OutdoorGrillOutlined",
    faTitle: "باربیکیو",
    icon: <OutdoorGrillOutlined />,
  },
  {
    title: "ElevatorOutlined",
    faTitle: "آسانسور",
    icon: <ElevatorOutlined />,
  },
  {
    title: "RestaurantOutlined",
    faTitle: "رستوران",
    icon: <RestaurantOutlined />,
  },
];

const IconSelect = ({ label, value, onChange, error, helperText }) => {
  const [selectedIcon, setSelectedIcon] = useState(value || "");

  const handleChange = (event) => {
    const selectedTitle = event.target.value;
    setSelectedIcon(selectedTitle);
    if (onChange) {
      onChange(selectedTitle); // Pass the selected icon title back to the parent component
    }
  };

  useEffect(() => {
    if (value === "") {
      setSelectedIcon("");
    } else {
      setSelectedIcon(value);
    }
  }, [value]);

  return (
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>
      <Select
        value={selectedIcon}
        size="small"
        label={label}
        onChange={handleChange}
        error={error}
        helperText={helperText}
        renderValue={(value) => (
          <div style={{ display: "flex", alignItems: "center" }}>
            <ListItemIcon>
              {iconList.find((iconItem) => iconItem.title === value)?.icon}
            </ListItemIcon>
          </div>
        )}
      >
        {iconList.map((iconItem) => (
          <MenuItem key={iconItem.title} value={iconItem.title}>
            <ListItemIcon>{iconItem.icon}</ListItemIcon>
            <Typography>{iconItem.faTitle}</Typography>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default IconSelect;
