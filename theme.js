import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: 'system',
  useSystemColorMode: true,
};

const breakpoints = {
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1536px",
};

const styles = {
  global: {
    body: {
      fontFamily: "'Source Sans Pro', sans-serif",
    },
  },
};

const Input = {
  defaultProps: {
    focusBorderColor: "black",
  },
};

const Tabs = {
  baseStyle: {
    tab: {
      _focus: {
        boxShadow: "none",
      },
    },
  },
};

const colors = {
  brand: {
    blue: "#4164e3",
    cadet: "#8998a8",
    dark: "#243156",
    gray: "#a0acb9",
    gray1: "#2d3748",
    green: "#36c537",
    light: "#e9ebee",
    pure: "#fafafb",
    slate: "#77889a",
    white: "#fcfdfe",
    yellow: "#ed9b13",
  },
};

export const theme = extendTheme({
  breakpoints,
  config,
  styles,
  colors,
  components: { Input, Tabs },
});
