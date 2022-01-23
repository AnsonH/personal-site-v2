import { css } from "styled-components";

const variables = css`
  :root {
    // Colors
    --red: #ff6860;
    --orange: #ff9900;
    --orange-hover: rgba(255, 153, 0, 0.2);
    --lime: #5fd700;
    --light-blue: #53d5e4;
    --light-blue-hover: rgba(83, 213, 228, 0.2);
    --cyan: #226067;
    --cyan-hover: #357b83;
    --dark-cyan: #354a52;
    --fg0: #ffffff;
    --fg1: #c1c1c1;
    --fg1-hover: rgba(178, 178, 178, 0.17);
    --fg2: #929292;
    --bg0: #1f2122;
    --bg1: #2a2c2d;
    --bg2: #393b3c;
    --bg3: #505050;

    // Font stacks
    --font-sans-system: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell",
      "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    --font-mono-system: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;

    // Transition
    --easing: cubic-bezier(0.4, 0, 0.2, 1);

    // Components-related
    --tab-button-width: 10rem;
    --tab-button-height: 4rem;
  }
`;

export default variables;
