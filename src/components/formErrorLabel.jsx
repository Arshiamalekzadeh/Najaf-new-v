import React from "react";

const FormErrorLabel = ({ children }) => {
  return (
    <div className="text-red-600 text-xs bg-red-50 p-1 rounded-bl-lg rounded-br-lg">
      {children}
    </div>
  );
};

export default FormErrorLabel;
