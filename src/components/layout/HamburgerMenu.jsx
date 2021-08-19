import { useState, useRef } from "react";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";
import styled from "styled-components";
import { bp } from "../../styles";
import { navLinks } from "../../config";
import { useOnClickOutside } from "../../hooks";

const StyledMenu = styled.div`
  display: flex;
  align-items: center;

  @media ${bp.lg} {
    display: none;
  }
`;

const HamburgerButton = styled.button`
  height: 2.4rem;
  width: 2.4rem;
  padding: 0;
  background-color: transparent;
  opacity: 1;
  border: none;
  outline: none; // Remove default outline on click
  transition: all 150ms var(--easing);

  &:hover {
    cursor: pointer;
    opacity: 0.75;
  }

  &:focus {
    ${({ theme }) => theme.mixins.dashedOutline};
    outline-offset: 0.5rem;
  }
`;

const HamburgerIcon = styled.div`
  height: 0.3rem;
  width: 2.4rem;
  background-color: var(--white);
  transition: all 150ms var(--easing);

  &::before,
  &::after {
    content: "";
    display: block;
    height: 0.3rem;
    width: 2.4rem;
    background-color: var(--white);
    transition: all 150ms var(--easing);
  }

  // 1st line
  &::before {
    transform-origin: 0.2rem 0.4rem;
    transform: translateY(-7px);
  }

  // 3rd line
  &::after {
    transform-origin: 0.4rem 0rem;
    transform: translateY(4px);
  }

  &.open {
    // If we animate opacity to 0, it also applies to ::before & ::after, causing the 3 lines will disappear.
    // A workaround is to set background color of middle line to be same as the navbar background to make it go away
    background-color: var(--cyan);

    &::before {
      transform: translate(1px, -7px) rotate(45deg);
    }

    &::after {
      transform: translate(1px, 4px) rotate(-45deg);
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
      background-color: var(--blue-hover);
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

      <HamburgerButton onClick={toggleMenu} aria-label="Open navigation menu">
        <HamburgerIcon className={isOpen && "open"} />
      </HamburgerButton>

      <DropdownMenu className={isOpen && "open"}>
        <StyledList>
          {navLinks.map((item) => (
            <li key={item.url}>
              <Link to={item.url} onClick={toggleMenu}>
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
