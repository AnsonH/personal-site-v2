import styled, { css } from "styled-components";
import { bp } from "../../styles";

const paddingY = css`
  padding-top: 6rem;
  padding-bottom: 6rem;

  @media ${bp.lg} {
    padding-top: 9rem;
    padding-bottom: 9rem;
  }
`;

const Wrapper = styled.div`
  margin: 0 2.5rem;

  @media ${bp.md} {
    margin: 0 4rem;
  }

  @media ${bp.lg} {
    width: 100%;
    max-width: 122rem;
    margin: 0 auto;
  }

  ${(props) => (props.paddingY ? paddingY : null)}
`;

export default Wrapper;
