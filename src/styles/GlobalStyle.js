import { createGlobalStyle } from "styled-components";
import transitions from "./transitions";
import variables from "./variables";
import { bp } from "./theme";

const GlobalStyle = createGlobalStyle`
  ${transitions}
  ${variables}

  html {
    font-size: 62.5%; // Default font size = 16px, --> 10px = 1rem
    box-sizing: border-box;
    scroll-behavior: smooth;

    // Disable smooth scrolling if user prefers reduced motion
    @media (prefers-reduced-motion: reduce) {
      & {
        scroll-behavior: auto;
      }
    }
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    font-size: 1.7rem;
    font-family: "Ubuntu", var(--font-sans-system);
    background-color: var(--bg0);
    color: var(--fg1);

    // Blur whole site except the header when mobile dropdown is opened
    &.blur #content > * {
      filter: blur(5px);
    }
  }

  a {
    display: inline-block;
    position: relative;
    text-decoration: none;
    color: var(--light-blue);

    // Animated underline effect on hover (supports multi-line)
    // https://codepen.io/kevinpowell/pen/MWYwgOz 
    &.text-link {
      background-image: linear-gradient(var(--light-blue), var(--light-blue));
      background-repeat: no-repeat;
      background-position: bottom left;
      background-size: 0% 0.1rem;
      transition: background-size 250ms var(--easing);

      &:hover,
      &:focus {
        background-size: 100% 0.1rem;
      }
    }
  }

  button {
    border: none;
    outline: none;
    background-color: transparent;
    cursor: pointer;
    font-family: "Ubuntu Mono", var(--font-mono-system);
  }

  h1,
  h2 {
    color: var(--fg0);
    font-family: "Ubuntu Mono", var(--font-mono-system);
    line-height: 1.1;
  }

  h3 {
    margin: 0 0 1rem;
    font-size: 1.9rem;
    font-family: "Ubuntu", var(--font-sans-system);
    font-weight: 500;
    line-height: 1.4;
    color: var(--fg0);

    @media ${bp.lg} {
      font-size: 2.2rem;
    }
  }

  p {
    margin-top: 0;
    margin-bottom: 3rem;
    line-height: 1.5;
  }

  ul {
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
    list-style: none;
  }
`;

export default GlobalStyle;
