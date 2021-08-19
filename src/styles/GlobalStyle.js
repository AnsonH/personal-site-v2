import { createGlobalStyle } from "styled-components";
import variables from "./variables";
import { bp } from "./theme";

const GlobalStyle = createGlobalStyle`
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
    color: var(--white);
    font-family: "Ubuntu Mono", var(--font-mono-system);
    line-height: 1.1;
  }

  h2 {
    margin-top: 0;
    margin-bottom: 5rem;
    display: flex;
    justify-content: center;
    font-size: 2.5rem;
    text-align: center;

    @media ${bp.md} {
      margin-bottom: 6rem;
      font-size: 3rem;
    }

    @media ${bp.lg} {
      font-size: 3.3rem;
    }

    @media ${bp.xl} {
      font-size: 3.6rem;
    }

    &::before,
    &::after {
      content: "⠿⠿⠿";
      color: var(--dark-cyan);
      font-weight: 300;
      font-size: 2rem;
      margin-top: 0.5rem;

      @media ${bp.md} {
        content: "⠿⠿⠿⠿⠿";
        font-size: 2.6rem;
      }

      @media ${bp.lg} {
        font-size: 2.9rem;
      }

      @media ${bp.xl} {
        font-size: 3.1rem;
      }
    }

    &::before {
      margin-right: 2.2rem;

      @media ${bp.lg} {
        margin-right: 3rem;
      }
    }

    &::after {
      margin-left: 2.2rem;

      @media ${bp.lg} {
        margin-left: 3rem;
      }
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
