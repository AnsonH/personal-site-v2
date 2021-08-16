import mixins from "./mixins";
import animations from "./animations";

// This object is passed to Styled Components' <ThemeProvider>
// https://styled-components.com/docs/advanced#theming
const theme = {
  mixins,
  animations,
};

// Breakpoints Up
export const bp = {
  md: "(min-width: 480.02px)",
  lg: "(min-width: 768.02px)",
  xl: "(min-width: 1080.02px)",
};

export default theme;
