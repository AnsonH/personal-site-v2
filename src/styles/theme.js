import mixins from "./mixins";

// This object is passed to Styled Components' <ThemeProvider>
// https://styled-components.com/docs/advanced#theming
const theme = {
  mixins,
};

// Breakpoints Up
export const bp = {
  md: "(min-width: 480.02px)",
  lg: "(min-width: 768.02px)",
  xl: "(min-width: 1080.02px)",
};

export default theme;
