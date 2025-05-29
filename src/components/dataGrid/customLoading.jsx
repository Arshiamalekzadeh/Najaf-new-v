import React from "react";
import MoonLoader from "react-spinners/MoonLoader";

const CustomGridLoading = ({ color }) => {
  return (
    <div className="h-full flex justify-center items-center">
      <MoonLoader
        size={40}
        color={`${color ? color : "#64748b"}`}
        className="text-slate-500"
      />
    </div>
  );
};

export default CustomGridLoading;
