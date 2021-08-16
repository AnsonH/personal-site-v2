import { keyframes } from "styled-components";

const animations = {
  // Hand wave animation (on hover) in Hero section of home page
  // Credits: https://codepen.io/jakejarvis/pen/pBZWZw
  heroWavingHand: keyframes`
    0% {
      transform: rotate(0deg);
    }
    10% {
      transform: rotate(14deg);
    }
    20% {
      transform: rotate(-8deg);
    }
    30% {
      transform: rotate(14deg);
    }
    40% {
      transform: rotate(-4deg);
    }
    50% {
      transform: rotate(10deg);
    }
    60% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  `,
};

export default animations;
