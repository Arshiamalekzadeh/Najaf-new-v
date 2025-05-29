import React from "react";
import CustomGridLoading from "../components/dataGrid/customLoading";

const LoadingOveray = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-35 !z-[999999] flex justify-center items-center">
      <CustomGridLoading color="#fff" />
    </div>
  );
};

export default LoadingOveray;
