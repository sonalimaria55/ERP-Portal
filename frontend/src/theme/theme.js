import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",

    primary: {
      main: "#D5E3D8",
      contrastText: "#1E1E1E",
    },

    secondary: {
      main: "#4A5A50",
    },

    background: {
      default: "#F8F7F4",
      paper: "#FFFFFF",
    },

    text: {
      primary: "#1E1E1E",
      secondary: "#6F6F6F",
    },

    divider: "#E7E7E7",

    success: {
      main: "#2E7D32",
    },

    error: {
      main: "#C62828",
    },

    warning: {
      main: "#ED6C02",
    },
  },

  typography: {
    fontFamily: [
      "Inter",
      "sans-serif",
    ].join(","),

    h1: {
      fontSize: "2.5rem",
      fontWeight: 600,
      color: "#1E1E1E",
    },

    h2: {
      fontSize: "2rem",
      fontWeight: 600,
    },

    h3: {
      fontSize: "1.75rem",
      fontWeight: 600,
    },

    h4: {
      fontSize: "1.5rem",
      fontWeight: 600,
    },

    h5: {
      fontSize: "1.25rem",
      fontWeight: 600,
    },

    h6: {
      fontSize: "1.05rem",
      fontWeight: 600,
    },

    body1: {
      fontSize: "1rem",
      fontWeight: 400,
    },

    body2: {
      fontSize: ".92rem",
      fontWeight: 400,
      color: "#6F6F6F",
    },

    button: {
      textTransform: "none",
      fontWeight: 600,
      fontSize: ".95rem",
    },
  },

  shape: {
    borderRadius: 20,
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#F8F7F4",
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          boxShadow: "0 6px 18px rgba(0,0,0,0.05)",
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          boxShadow: "0 6px 18px rgba(0,0,0,0.05)",
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          height: 48,
          borderRadius: 14,
          paddingLeft: 24,
          paddingRight: 24,
          boxShadow: "none",

          "&:hover": {
            boxShadow: "0 6px 16px rgba(0,0,0,.08)",
          },
        },

        contained: {
          backgroundColor: "#D5E3D8",
          color: "#1E1E1E",

          "&:hover": {
            backgroundColor: "#C7D8CB",
          },
        },
      },
    },

    MuiTextField: {
      defaultProps: {
        variant: "outlined",
        fullWidth: true,
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          background: "#FFFFFF",

          "& fieldset": {
            borderColor: "#E7E7E7",
          },

          "&:hover fieldset": {
            borderColor: "#D5E3D8",
          },

          "&.Mui-focused fieldset": {
            borderColor: "#D5E3D8",
            borderWidth: "2px",
          },
        },
      },
    },

    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "#FFFFFF",
          color: "#1E1E1E",
          boxShadow: "none",
          borderBottom: "1px solid #ECECEC",
        },
      },
    },

    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: "#FFFFFF",
          borderRight: "1px solid #ECECEC",
        },
      },
    },

    MuiTableHead: {
      styleOverrides: {
        root: {
          background: "#F7F7F7",
        },
      },
    },

    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
  },
});

export default theme;