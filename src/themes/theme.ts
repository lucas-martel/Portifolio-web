import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    text: {
      primary: "#FFFFFF",
      secondary: "#000000",
    },
  },
  typography: { 
    fontFamily: "Montserrat, sans-serif",
    h4: {
      color: "#000000",
      fontWeight: "300"
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#FFFFFF",
          fontSize: "0.6em"
        }
      }
    }
  }
});

export default theme;
