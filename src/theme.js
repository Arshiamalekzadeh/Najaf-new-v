import createCache from "@emotion/cache";
import { blue } from "@mui/material/colors";
import { faIR } from "@mui/material/locale";
import { alpha, createTheme } from "@mui/material/styles";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";

//global design variables
const variables = {
  borderRadius: "3px",
  fontSize: "13px",
  inputBorder: "0px solid red",
  primaryColor: blue[700],
  secondaryColor: "#11cb5f",
  hoverColor: "rgb(233 240 247 / 50%)",
  inputFontSize: "13px",
};

export const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const globalTheme = createTheme({
  direction: "rtl",
  palette: {
    primary: {
      main: blue[700],
    },
    secondary: {
      main: "#11cb5f",
    },
  },
});

const theme = createTheme(
  {
    components: {
      MuiButton: {
        variants: [
          {
            props: { variant: "text", color: "primary" },
            style: {
              textTransform: "none",
              border: "none",
              backgroundColor: globalTheme.palette.primary.light,
              boxShadow: "none",
              color: "#fff",
              borderRadius: variables.borderRadius,
              "&:hover": {
                color: globalTheme.palette.primary.light,
                backgroundColor: alpha(globalTheme.palette.primary.main, 0.16),
              },
              "&:active": {
                backgroundColor: globalTheme.palette.primary.dark,
                color: "#fff",
              },
            },
          },
          {
            props: { variant: "contained" },
            style: {
              border: "none",
              boxShadow: "none",
              borderRadius: variables.borderRadius,
            },
          },
        ],
      },
      MuiListItemButton: {
        styleOverrides: {
          root: {
            padding: "4px 15px",
            "&:hover": {
              backgroundColor: "rgb(233 240 247 / 50%)", // Your custom hover color
            },
          },
        },
      },

      MuiAppBar: {
        styleOverrides: {
          root: {
            boxShadow: "none",
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          input: {
            borderRadius: variables.borderRadius,
            // fontSize: variables.fontSize,
            border: variables.inputBorder,
          },
          root: {
            borderRadius: variables.borderRadius,
            border: variables.inputBorder,
          },
        },
      },
      MuiFormLabel: {
        styleOverrides: {
          root: {
            fontSize: "14px",
            transform: "translate(14px, 10px) scale(1)",
          },
        },
      },
      MuiSelect: {
        styleOverrides: {
          root: {
            borderRadius: variables.borderRadius, // Set your desired border radius here
          },
        },
      },
    },
  },
  globalTheme,
  faIR
);
export default theme;