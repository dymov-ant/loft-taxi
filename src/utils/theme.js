import { createTheme } from "@material-ui/core"
import { orange } from "@material-ui/core/colors"

export const theme = createTheme({
  palette: {
    primary: {
      main: "#ffc617"
    },
    secondary: {
      main: "#ff0000"
    }
  },
  status: {
    danger: orange[500]
  },
  overrides: {
    MuiFormLabel: {
      root: {
        "&$focused": {
          color: "#1473e6"
        }
      }
    },
    MuiLink: {
      root: {
        color: "#1473e6",
        cursor: "pointer"
      }
    },
    MuiInput: {
      underline: {
        "&:after": {
          "border-bottom-color": "#1473e6"
        }
      }
    },
    MuiFormHelperText: {
      root: {
        position: "absolute",
        bottom: "-1.4em"
      }
    },
    MuiButton: {
      root: {
        textTransform: "none"
      },
      containedPrimary: {
        boxShadow: "none",
        backgroundColor: "#ffc617",
        "&:focus": {
          boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)"
        }
      }
    }
  }
})