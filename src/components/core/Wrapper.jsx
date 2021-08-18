import styled from "styled-components";
import { bp } from "../../styles";

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
`;

export default Wrapper;
