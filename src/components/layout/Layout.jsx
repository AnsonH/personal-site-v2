import { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";
import { theme, GlobalStyle } from "../../styles";
import Footer from "./Footer";
import Header from "./Header";
import SEO from "../SEO";

function Layout({ children }) {
  return (
    <>
      <SEO />

      <div id="root">
        <ThemeProvider theme={theme}>
          <GlobalStyle />

          <Header />
          <div id="content">{children}</div>
          <Footer />
        </ThemeProvider>
      </div>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
