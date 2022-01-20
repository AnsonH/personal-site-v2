import PropTypes from "prop-types";
import { forwardRef } from "react";
import styled, { css } from "styled-components";
import { bp } from "../../styles/theme";

const decorationStyles = css`
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
`;

const StyledH2 = styled.h2`
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

  ${(props) => props.hasDecoration && decorationStyles}
`;

// `hasDecoration` prop adds ⠿⠿⠿ symbols around the h2 text
const H2 = forwardRef((props, ref) => (
  <StyledH2 hasDecoration={props.hasDecoration} ref={ref}>
    {props.children}
  </StyledH2>
));
H2.displayName = "H2";

H2.propTypes = {
  hasDecoration: PropTypes.bool,
  children: PropTypes.string.isRequired,
};

H2.defaultProps = {
  hasDecoration: true,
};

export default H2;
