import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider } from "@mui/material/styles";

import App from "./App.jsx";
import { queryClient } from "./utils/queryClient.js";
import theme, { cacheRtl } from "./theme.js";

// Style imports
import "jalaali-react-date-picker/lib/styles/index.css";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import "swiper/css";
import "./style/index.scss";

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
