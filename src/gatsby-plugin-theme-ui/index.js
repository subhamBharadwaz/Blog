import "@fontsource/inter";
import "@fontsource/lato";
import "@fontsource/fira-code";

export default {
  initialColorModeName: "light",
  colors: {
    text: "#0E141B",
    background: "#EFF1F5",
    primary: "#FF5277",
    secondary: "#fff",
    tertiary: "#CAE4F5",
    modes: {
      dark: {
        text: "#F2F5F7",
        background: "#0E141B",
        primary: "#FF5277",
        secondary: "#1E262F",
        tertiary: "#121A22",
      },
    },
  },
  transitions: {
    ease: "all .2s ease ",
  },

  fonts: {
    body: "Inter,sans-serif",
    heading: "Lato,sans-serif",
    monospace: "Fira Code,Menlo, monospace",
  },
  fontWeights: {
    body: 400,
    heading: 800,
    bold: 700,
    display: 800,
  },
  lineHeights: {
    body: 1.8,
    heading: 1.125,
  },
  letterSpacings: {
    body: "normal",
    caps: "0.2em",
  },
  text: {
    heading: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
    },
  },
  fontSizes: [12, 14, 16, 18, 20, 24, 32, 48, 64, 72],
  space: {
    none: "0px",
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "32px",
    xl: "48px",
    xxl: "64px",
  },
  breakpoints: [
    "40em",
    "@media (min-width: 56em) and (orientation: landscape)",
    "64em",
  ],

  styles: {
    root: {
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
    },
    p: {
      fontSize: 18,
      marginBottom: 32,
    },
    h1: {
      variant: "text.heading",
      fontSize: 32,
      pb: "lg",
    },
    h2: {
      variant: "text.heading",
      fontSize: 24,
    },
    a: {
      color: "text",
      fontWeight: "bold",
      p: "xs",
      bg: "secondary",
      "&:hover, &:focus": {
        textDecoration: "underline",
        color: "text",
      },
    },
  },
};
