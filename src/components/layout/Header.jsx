import { Link } from "gatsby";
import styled from "styled-components";
import { bp } from "../../styles";
import { navLinks } from "../../config";
import { Wrapper } from "../core";
import { NavLogo } from "../icons";
import HamburgerMenu from "./HamburgerMenu";

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  box-shadow: 0 0.2rem 0.4rem 0 rgb(0 0 0 / 20%);
  background-color: var(--cyan);
  color: var(--fg0);
  z-index: 999; // So that mobile menu & overlay is always on top
`;

const StyledNav = styled.nav`
  height: 5rem;
  ${({ theme }) => theme.mixins.flexBetween};
`;

const LogoAnchor = styled(Link)`
  padding: 1.5rem 0.5rem;
  display: inline-block;
  transition: all 150ms var(--easing);

  &:hover {
    background-color: var(--cyan-hover);
  }

  &:focus {
    ${({ theme }) => theme.mixins.dashedOutline};
  }

  svg {
    display: block; // Remove unwanted bottom margin
  }
`;

const StyledLinks = styled.div`
  display: none; // Hide links in tablet or below

  @media ${bp.lg} {
    display: block;
  }

  ul {
    display: flex;
    list-style: none;

    a {
      display: inline-block;
      padding: 1.5rem 2rem;
      color: var(--fg0);
      transition: all 150ms var(--easing);

      &:hover {
        background-color: var(--cyan-hover);
      }

      &:focus {
        ${({ theme }) => theme.mixins.dashedOutline};
      }
    }
  }
`;

function Header() {
  return (
    <StyledHeader>
      <Wrapper paddingX_lg>
        <StyledNav>
          <LogoAnchor to="/" aria-label="Home">
            <NavLogo />
          </LogoAnchor>

          <StyledLinks>
            <ul>
              {navLinks.map((item) => (
                <li key={item.url}>
                  <Link to={item.url}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </StyledLinks>

          <HamburgerMenu />
        </StyledNav>
      </Wrapper>
    </StyledHeader>
  );
}

export default Header;
