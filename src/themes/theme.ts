import { createTheme } from "@mui/material";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 350,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    text: {
      primary: "#FFFFFF",
      secondary: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: "Montserrat, sans-serif",
    h4: {
      color: "#000000",
      fontWeight: "300",
    },
    body1: {
      color: "#ffffff",
    },
    body2: {
      color: "#ffffff",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#FFFFFF",
          fontSize: "0.6em",
        },
      },
    },
  },
});

export default theme;
