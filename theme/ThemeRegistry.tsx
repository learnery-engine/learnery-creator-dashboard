"use client"

import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeOptions, ThemeProvider } from "@mui/material/styles";

const themeOptions: ThemeOptions = {
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "*::-webkit-scrollbar": {
          width: "3px"
        },
        "*::-webkit-scrollbar-track": {
          background: "#E4EFEF"
        },
        "*::-webkit-scrollbar-thumb": {
          background: "#1D388F61",
          borderRadius: "1px"
        }
      }
    }
  },
  palette: {
    primary: {
      main: '#1EFF93',
    },
    grey: {
      200: '#E2E2E2',
    },
  },
  typography: {
    h1: {
      fontSize: '4rem',
      '@media (max-width: 1728px) and (min-width: 1280px)': {
        fontSize: '3rem',
      },
    },
    // Add more responsive font sizes for other typography variants
    h2: {
      fontSize: '32px',
      '@media (max-width: 1728px) and (min-width: 1280px)': {
        fontSize: '24px',
      },
    },
    body1: {
      fontSize: '14px',
      '@media (max-width: 1728px) and (min-width: 1280px)': {
        fontSize: '10.5px',
      },
    },
    body2: {
      fontSize: '16px',
      '@media (max-width: 1728px) and (min-width: 1280px)': {
        fontSize: '12px',
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1728,
    },
  },
  spacing: (factor: number) => `${(3 / 4) * factor}rem`,
};

const theme = createTheme(themeOptions);

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </React.Fragment>
  );
}
