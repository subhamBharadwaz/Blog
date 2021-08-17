export default {
  initialColorModeName: "light",
  colors: {
    text: "#0E141B",
    background: "#EFF1F5",
    secondary: "#fff",
    primary: "#FF5277",
    modes: {
      dark: {
        text: "#CCD6F6",
        background: "#0E141B",
        secondary: "#1E262F",
        primary: "#FF5277",
      },
    },
  },
  transitions: {
    ease: "all .3s ease ",
  },

  fonts: {
    body: "system-ui, sans-serif",
    heading: "Poppins, sans-serif",
    monospace: "Menlo, monospace",
  },
  fontWeights: {
    body: 400,
    heading: 800,
    bold: 700,
    display: 800,
  },
  lineHeights: {
    body: 1.5,
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
      fontSize: [16, 18, 20],
    },
    h1: {
      variant: "text.heading",
      fontSize: [24, 32, 48],
    },
    h2: {
      variant: "text.heading",
      fontSize: [20, 24, 32],
    },
    a: {
      color: "primary",
      "&:hover, &:focus": {
        color: "primary",
      },
    },
  },
};
