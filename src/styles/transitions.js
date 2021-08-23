import { css } from "styled-components";

/**
 * Transition classes for React Transition Group
 * @see {@link http://reactcommunity.org/react-transition-group/css-transition Docs on CSSTransition}
 */
const transitions = css`
  // Zoom in
  .zoom-in-enter {
    opacity: 0;
    transform: scale(0.6);
  }

  .zoom-in-enter-active {
    opacity: 1;
    transform: scale(1);
    transition: all 250ms var(--easing);
  }

  .zoom-in-exit {
    opacity: 1;
    transform: scale(1);
  }

  .zoom-in-exit-active {
    opacity: 0;
    transform: scale(0.6);
    transition: all 250ms var(--easing);
  }

  .zoom-in-exit-done {
    opacity: 0;
  }
`;

export default transitions;
