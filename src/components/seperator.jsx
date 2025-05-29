import React from "react";

const Seperator = ({ title, center }) => {
  return (
    <div className="flex items-center">
      {center && (
        <div className="grow border-b-2 border-dashed my-12 relative"></div>
      )}
      <div className="mx-4 font-medium text-orange-400">{title && title}</div>
      <div className="grow border-b-2 border-dashed my-12 relative"></div>
    </div>
  );
};

export default Seperator;


