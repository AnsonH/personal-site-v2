import { css } from "styled-components";

const variables = css`
  :root {
    // Colors
    --red: #ff6860;
    --orange: #ff9900;
    --orange-hover: rgba(255, 153, 0, 0.2);
    --lime: #5fd700;
    --green: #265600;
    --light-blue: #53d5e4;
    --light-blue-hover: rgba(83, 213, 228, 0.2);
    --blue: #3a95a0;
    --blue-hover: #3a96a080;
    --cyan: #436069;
    --dark-cyan: #21555b;
    --white: #ffffff;
    --light-gray: #c1c1c1;
    --light-gray-hover: rgba(178, 178, 178, 0.17);
    --gray: #777777;
    --dark-gray: #505050;
    --black: #1f2122;
    --black-overlay: rgba(31, 33, 34, 0.9);

    // Font stacks
    --font-sans-system: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell",
      "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    --font-mono-system: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;
  }
`;

export default variables;
