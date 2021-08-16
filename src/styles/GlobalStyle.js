import { createGlobalStyle } from "styled-components";
import variables from "./variables";
import { bp } from "./theme";

const GlobalStyle = createGlobalStyle`
  ${variables}

  html {
    font-size: 62.5%; // Default font size = 16px, --> 10px = 1rem
    box-sizing: border-box;
    scroll-behavior: smooth;
    scroll-padding-top: 5.5rem; // Prevent fixed header overlaps with page anchors

    // Disable smooth scrolling if user prefers reduced motion
    @media screen and (prefers-reduced-motion: reduce) {
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
    background-color: var(--black);
    color: var(--light-gray);

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
      transition: background-size 150ms ease-in-out;

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
    color: var(--white);
    font-family: "Ubuntu Mono", var(--font-mono-system);
    line-height: 1.1;
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

  ///// Global Classes /////

  .container {
    margin: 0 2.5rem;

    @media ${bp.md} {
      margin: 0 4rem;
    }

    @media ${bp.lg} {
      width: 100%;
      max-width: 122rem;
      margin: 0 auto;
    }
  }
`;

export default GlobalStyle;
