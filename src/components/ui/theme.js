import { unstable_createMuiStrictModeTheme as createMuiTheme } from "@material-ui/core/styles";

const arcBlue = "#0B7289";
const arcOrange = "#FFBA60";

export default createMuiTheme({
  palette: {
    common: {
      blue: `${arcBlue}`,
      orange: `${arcOrange}`,
    },
    primary: {
      main: `${arcBlue}`,
    },
    secondary: {
      main: `${arcOrange}`,
    },
  },
  typography: {
    h2: {
      fontFamily: "Raleway",
      fontSize: "2.5rem",
      fontWeight: 700,
      color: `${arcBlue}`,
      lineHeight: 1.5,
    },
    h3: {
      fontFamily: "Pacifico",
      fontSize: "2.5rem",
      color: arcBlue,
    },
    h4: {
      fontFamily: "Raleway",
      fontSize: "1.75rem",
      color: arcBlue,
      fontWeight: "bold",
    },
    subtitle1: {
      fontSize: "1.25rem",
      fontWeight: 300,
      color: arcOrange,
    },
    tab: {
      fontFamily: "Raleway",
      fontSize: "1rem",
      fontWeight: 700,
      textTransform: "none",
    },
    estimate: {
      color: "white",
      fontSize: "1rem",
      fontFamily: "Pacifico",
      textTransform: "none",
    },
    LearnMore: {
      textDecoration: "none",
      color: arcBlue,
      borderColor: arcBlue,
      borderWidth: 2,
      borderRadius: 50,
      fontFamily: "Roboto",
      fontWeight: "bold",
    },
  },
});
