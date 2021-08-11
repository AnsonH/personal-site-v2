import { createGlobalStyle } from "styled-components";
import variables from "./variables";

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
  }

  a {
    display: inline-block;
    position: relative;
    text-decoration: none;
    color: var(--light-blue);

    &.text-link {
      // Animated underline effect on hover
      &::after {
        content: "";
        width: 100%;
        height: 0.1rem;
        position: absolute;
        bottom: 0.1rem;
        left: 0;
        right: 0;
        background-color: var(--light-blue);
        transform: scaleX(0);
        transition: transform 150ms ease-in-out;
      }

      &:hover,
      &:focus {
        &::after {
          transform: scaleX(1);
        }
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
`;

export default GlobalStyle;
