import { css } from "styled-components";

const mixins = {
  flexCenter: css`
    display: flex;
    align-items: center;
    justify-content: center;
  `,

  flexBetween: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,

  paddingX: css`
    padding-left: 4rem;
    padding-right: 4rem;
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
