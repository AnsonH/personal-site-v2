import styled, { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";
import { theme, GlobalStyle } from "../../styles";
import Footer from "./Footer";
import Header from "./Header";
import SEO from "../SEO";

const SkipLink = styled.a`
  padding: 1.5rem 2rem;
  position: fixed;
  top: 6rem;
  left: -18rem;
  background-color: var(--light-blue);
  border-radius: 0.5rem;
  color: var(--black);
  font-size: 1.6rem;
  font-weight: 500;
  z-index: 999;
  transition: all 150ms var(--easing);

  &:focus,
  &:active {
    left: 0rem;
    outline: none;
  }
`;

function Layout({ children }) {
  return (
    <>
      <SEO />

      <div id="root">
        <ThemeProvider theme={theme}>
          <GlobalStyle />

          <SkipLink href="#content">Skip to Content</SkipLink>

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
