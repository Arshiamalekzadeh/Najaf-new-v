import React from "react";
import { Typography, Box } from "@mui/material";

const ApplicantDashboard = () => {
  return (
    <Box sx={{ padding: 4, textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>
        داشبورد کاربر Applicant
      </Typography>
      <Typography>
        این صفحه فقط برای کاربران با نقش Applicant قابل دسترسی است.
      </Typography>
    </Box>
  );
};

export default ApplicantDashboard;