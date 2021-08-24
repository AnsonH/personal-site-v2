import { useState, useRef } from "react";
import Hamburger from "hamburger-react";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";
import styled from "styled-components";
import { bp } from "../../styles";
import { navLinks } from "../../config";
import { useOnClickOutside } from "../../hooks";

const StyledMenu = styled.div`
  ${({ theme }) => theme.mixins.flexAlignCenter};

  @media ${bp.lg} {
    display: none;
  }

  // Add dashed outline when hamburger icon is focused
  .hamburger-react {
    &:focus {
      ${({ theme }) => theme.mixins.dashedOutline};
    }
  }
`;

const DropdownMenu = styled.div`
  height: 0rem;
  position: absolute;
  top: 5rem;
  left: 0rem;
  width: 100%;
  background-color: var(--cyan);
  transition: height 250ms var(--easing);
  overflow: hidden; // Hide links when not opened

  &.open {
    height: 24rem;
  }
`;

const StyledList = styled.ul`
  padding-left: 0;
  margin: 2rem 0;
  text-decoration: none;
  list-style: none;
  text-align: center;

  a {
    width: 100%;
    padding: 1.5rem 0;
    color: var(--white);
    transition: background-color 150ms var(--easing);

    &:hover,
    &:focus {
      background-color: var(--cyan-hover);
    }
  }
`;

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close the dropdown menu when user clicks outside
  const menuRef = useRef();
  useOnClickOutside(menuRef, () => setIsOpen(false));

  return (
    <StyledMenu ref={menuRef}>
      <Helmet>
        <body className={isOpen && "blur"} />
      </Helmet>

      {/* https://hamburger-react.netlify.app/ */}
      <Hamburger
        toggled={isOpen}
        toggle={setIsOpen}
        direction="right"
        hideOutline={false}
        size={24}
        aria-label="Open navigation menu"
      />

      <DropdownMenu className={isOpen && "open"} aria-expanded={isOpen}>
        <StyledList>
          {navLinks.map((item) => (
            <li key={item.url}>
              <Link to={item.url} onClick={toggleMenu} tabIndex={!isOpen && -1}>
                {item.label}
              </Link>
            </li>
          ))}
        </StyledList>
      </DropdownMenu>
    </StyledMenu>
  );
}

export default HamburgerMenu;
