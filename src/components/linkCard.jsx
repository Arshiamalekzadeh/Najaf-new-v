import { Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const LinkCard = ({ link, icon, color, title, subTitle }) => {
  return (
    <Grid item xs={12} md={3} lg={3}>
      <Link to={link}>
        <div className="group relative bg-white py-6 px-6 rounded-xl w-full my-4 shadow-xl hover:shadow-md transition-all duration-200">
          <div
            className={`text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl ${color} right-4 -top-8 group-hover:-top-10 transition-all duration-100`}
          >
            {icon}
          </div>
          <div className="mt-8">
            <p
              className={`text-xl font-semibold my-2 text-slate-600 group-hover:text-slate-500 transition-all duration-100`}
            >
              {title}
            </p>
            <div className="flex space-x-2 text-gray-400 group-hover:text-slate-800 text-sm">
              <p>{subTitle}</p>
            </div>
          </div>
        </div>
      </Link>
    </Grid>
  );
};

export default LinkCard;
