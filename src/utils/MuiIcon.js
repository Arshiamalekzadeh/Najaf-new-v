// Assuming all icons are imported here
import {
  AcUnitOutlined,
  ElevatorOutlined,
  KitchenOutlined,
  LocalFireDepartmentOutlined,
  OutdoorGrillOutlined,
  RestaurantOutlined,
  Shower,
  TimeToLeaveOutlined,
  Wc,
} from "@mui/icons-material";

// Mapping of icon names to components
const iconMap = {
  Shower,
  OutdoorGrillOutlined,
  LocalFireDepartmentOutlined,
  AcUnitOutlined,
  KitchenOutlined,
  TimeToLeaveOutlined,
  Wc,
  ElevatorOutlined,
  RestaurantOutlined,
};
export const getIconComponent = (iconName) => {
  const IconComponent = iconMap[iconName];
  return IconComponent || null; // Return null if no component found for the given name
};
