import { Button, Typography } from "@mui/material";
import { Back } from "iconsax-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const PageHeader = ({ title, icon, children, withoutBack }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex px-4 py-3  items-center mb-2 rounded-md">
        <div className="ml-2 w-8 h-8 rounded-full bg-blue-50 text-blue-400 flex justify-center items-center">
          {icon}
        </div>
        <div className="">
          <Typography className="text-slate-500" variant="body1">
            {title}
          </Typography>
        </div>
        {!withoutBack && (
          <div className="grow text-left flex justify-end">
            {children}
            <Button
              onClick={() => navigate(-1)}
              variant="text"
              color="inherit"
              className=" !mr-5 !text-slate-500"
              sx={{
                display: { xs: "none", sm: "inline-flex" }, 
              }}
            >
              <Back className="ml-1" size={20} />
              بازگشت
            </Button>
          </div>
        )}
      </div>

      <hr />
      <div className="mb-2" />
    </>
  );
};

export default PageHeader;
