import { MdExpandLess } from "react-icons/md";
import styled from "styled-components";

const ButtonWrapper = styled.div`
  position: relative;

  button {
    padding: 1rem;
    display: flex;
    background-color: var(--cyan);
    border-radius: 2.5rem;
    color: var(--fg0);
    font-size: 3rem; // Chevron icon size
    transition: background-color 250ms var(--easing);

    &:hover,
    &:focus {
      background-color: var(--cyan-hover);

      & ~ .scroll-to-top-text {
        opacity: 1;
      }

      .scroll-to-top-icon {
        animation: ${({ theme }) => theme.animations.bounceUp} 0.5s 1; // 0.5s for 1 iteration
      }
    }
  }

  .scroll-to-top-text {
    position: absolute;
    left: -1.5rem;
    right: -1.5rem;
    top: -2rem;
    font-size: 1.3rem;
    text-align: center;
    opacity: 0;
    transition: opacity 250ms var(--easing);
  }
`;

function ScrollToTop() {
  const handleClick = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <ButtonWrapper>
      <button onClick={handleClick} aria-label="Scroll to Top">
        <MdExpandLess className="scroll-to-top-icon" aria-hidden />
      </button>
      <p className="scroll-to-top-text" aria-hidden>
        Scroll to Top
      </p>
    </ButtonWrapper>
  );
}

export default ScrollToTop;
