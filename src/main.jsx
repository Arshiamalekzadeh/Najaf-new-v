import { QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
// Import Swiper styles
import "jalaali-react-date-picker/lib/styles/index.css";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import "swiper/css";
import "./styles/index.scss";

import { queryClient } from "./utils/queryClient.js";

import { ThemeProvider } from "@mui/material/styles";

import { CacheProvider } from "@emotion/react";
import theme, { cacheRtl } from "./theme.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <CacheProvider value={cacheRtl}>
          <ThemeProvider theme={theme}>
            <div style={{ direction: "rtl" }}>
              <App />
            </div>
          </ThemeProvider>
        </CacheProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
