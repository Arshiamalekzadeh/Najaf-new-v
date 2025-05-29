import { styled, Tooltip, tooltipClasses } from "@mui/material";

export const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#fff",
    color: "#777",
    width: "auto",
    boxShadow: "0 0 38px -4px rgba(0,0,0,0.1)", // Add box shadow here
    padding: "35px 20px 20px 20px",
    borderRadius: "16px",
    border: "1px solid #ddd",
  },
}));
