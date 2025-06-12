import { Button, Typography, IconButton } from "@mui/material";
import { Back } from "iconsax-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const PageHeader = ({ title, icon, children, withoutBack }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex px-4  flex-row-reverse py-3 items-center mb-2 rounded-md ">
        {/* آیکون بازگشت سمت راست (آغاز خط) */}
        {!withoutBack ? (
          <IconButton
            onClick={() => navigate(-1)}
            className="text-slate-500"
          >
            <Back size={20} />
          </IconButton>
        ) : (
          <div className="w-[40px]" /> // جای خالی برای حفظ تراز وسط
        )}

        {/* بخش میانی: آیکون صفحه و عنوان */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-400 flex justify-center items-center">
            {icon}
          </div>
          <Typography className="text-slate-500" variant="body1">
            {title}
          </Typography>
        </div>

        {/* دکمه بازگشت سمت چپ (پایان خط) */}
        {!withoutBack ? (
          <div className="flex items-center gap-2">
            {children}
            <Button
              onClick={() => navigate(-1)}
              variant="text"
              color="inherit"
              className="!text-slate-500"
              sx={{
                display: { xs: "none", sm: "inline-flex" },
              }}
              startIcon={<Back size={20} />}
            >
              بازگشت
            </Button>
          </div>
        ) : (
          <div className="w-[80px]" /> // حفظ تراز وسط
        )}
      </div>


      <div className="mb-2" />
    </>
  );
};

export default PageHeader;
