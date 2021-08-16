export default {
  initialColorModeName: "light",
  colors: {
    text: "#0E141B",
    background: "#FFFFFF",
    primary: "#FF5277",
    modes: {
      dark: {
        text: "#CCD6F6",
        background: "#0E141B",
        primary: "#FF5277",
      },
    },
  },

  fonts: {
    body: "system-ui, sans-serif",
    heading: "system-ui, sans-serif",
    monospace: "Menlo, monospace",
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  letterSpacings: {
    body: "normal",
    caps: "0.2em",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  breakpoints: ["40em", "56em", "64em"],
  styles: {
    // the keys used here reference elements in MDX
    h1: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
      marginTop: 0,
      marginBottom: 3,
      color: "primary",
    },
    a: {
      color: "primary",
      "&:hover, &:focus": {
        color: "primary",
      },
    },
  },
};
