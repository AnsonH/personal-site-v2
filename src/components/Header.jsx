import styled from "styled-components";

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  box-shadow: 0 0.2rem 0.4rem 0 rgb(0 0 0 / 20%);
  background-color: var(--dark-cyan);
  color: var(--white);
  z-index: 999; // So that mobile menu & overlay is always on top
`;

function Header() {
  return <StyledHeader></StyledHeader>;
}

export default Header;
