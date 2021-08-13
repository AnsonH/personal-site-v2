import { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";
import { theme, GlobalStyle } from "../styles";
import SEO from "./SEO";
import Header from "./Header";

function Layout({ children }) {
  return (
    <>
      <SEO />

      <div id="root">
        <ThemeProvider theme={theme}>
          <GlobalStyle />

          <Header />
          {children}
        </ThemeProvider>
      </div>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
