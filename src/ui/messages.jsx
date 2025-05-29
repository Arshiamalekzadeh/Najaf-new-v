import { InfoCircle } from "iconsax-react";
import propTypes from "prop-types";
import React from "react";

const HintMessages = ({ type, message, title }) => {
  const alertTypes = {
    info: {
      text: "text-blue-800",
      bg: "bg-blue-50",
      darkBg: "dark:bg-gray-800",
      darkText: "dark:text-blue-400",
      iconColor: "currentColor",
    },
    danger: {
      text: "text-red-800",
      bg: "bg-red-50",
      darkBg: "dark:bg-gray-800",
      darkText: "dark:text-red-400",
      iconColor: "currentColor",
    },
    success: {
      text: "text-green-800",
      bg: "bg-green-50",
      darkBg: "dark:bg-gray-800",
      darkText: "dark:text-green-400",
      iconColor: "currentColor",
    },
    warning: {
      text: "text-orange-700",
      bg: "bg-orange-50",
      darkBg: "dark:bg-gray-800",
      darkText: "dark:text-orange-300",
      iconColor: "currentColor",
    },
    dark: {
      text: "text-gray-800",
      bg: "bg-gray-50",
      darkText: "dark:text-gray-300",
      iconColor: "currentColor",
    },
  };

  const { text, bg, darkBg, darkText, iconColor } =
    alertTypes[type] || alertTypes.info;

  return (
    <div
      className={`flex items-center p-2 mb-4 text-sm ${text} rounded-lg ${bg} ${darkBg} ${darkText}`}
      role="alert"
    >
      <InfoCircle variant="Bold" className="ml-2" />
      <span className="sr-only">{type}</span>
      <div >
        <span className="font-medium">{title}</span> 
        <span className="block line-clamp-3">{message}</span> 
      </div>
    </div>
  );
};

HintMessages.propTypes = {
  type: propTypes.oneOf(["info", "danger", "success", "warning", "dark"]),
  message: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
};
export default HintMessages;
