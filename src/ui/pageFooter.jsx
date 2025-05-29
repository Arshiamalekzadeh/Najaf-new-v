import { Grid } from "@mui/material";
import React from "react";

const PageFooter = ({ children }) => {
  return (
    <Grid container className="mt-4 bg-slate-100 p-4 border-t">
      <Grid item xs={12}>
        {children}
      </Grid>
    </Grid>
  );
};

export default PageFooter;
