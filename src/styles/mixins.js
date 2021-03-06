import { css } from "styled-components";

const mixins = {
  flexAlignCenter: css`
    display: flex;
    align-items: center;
  `,

  flexBetween: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,

  dashedOutline: css`
    outline: 0.2rem dashed var(--light-blue);
    outline-offset: -0.2rem;
  `,

  disableTextSelection: css`
    user-select: none;
    -webkit-user-select: none; // Safari (Web)
    -webkit-touch-callout: none; // Safari (iOS)
  `,
};

export default mixins;
