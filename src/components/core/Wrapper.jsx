import styled, { css } from "styled-components";
import { bp } from "../../styles";

// Add horizontal padding for breakpoints >= lg
const paddingX_lg = css`
  @media ${bp.lg} {
    padding-left: 4rem;
    padding-right: 4rem;
  }
`;

// Vertical padding
const paddingY = css`
  padding-top: 6rem;
  padding-bottom: 6rem;

  @media ${bp.lg} {
    padding-top: 9rem;
    padding-bottom: 9rem;
  }
`;

const Wrapper = styled.div`
  ${(props) => (props.paddingX_lg ? paddingX_lg : null)}
  ${(props) => (props.paddingY ? paddingY : null)}

  margin: 0 2.5rem;

  @media ${bp.md} {
    margin: 0 4rem;
  }

  @media ${bp.lg} {
    width: 100%;
    max-width: 122rem;
    margin: 0 auto;
  }
`;

export default Wrapper;
