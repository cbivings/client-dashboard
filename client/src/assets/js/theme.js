/* mui theme */
import { createTheme } from "@mui/material";
import "../../App.css";

const headerFont = "'DM Serif Display', serif";
const theme = createTheme({
  typography: {
    h1: {
      fontFamily: headerFont,
      fontSize: "2rem",
      fontWeight: 400,
    },
  },
  palette: {
    primary: {
      main: "#fff",
      light: "#e1d2c6",
      dark: "#ed762f"
    },
    secondary: {
      main: "#ff9100",
      light: "#fbf7f0",
      dark: "#ed762f"
    },
  },
});

export default theme;