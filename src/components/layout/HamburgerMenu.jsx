import { useEffect, useState, useRef } from "react";
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
  const menuRef = useRef();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  let menuFocusables = []; // List of focusable elements in the menu
  let firstMenuFocusable = null;
  let lastMenuFocusable = null;

  // We cannot immediately set `menuFocusables` in the above because `menuRef.current` is undefined
  // before this component is mounted. Hence, this callback is invoked after the component is mounted
  const setFocusables = () => {
    menuFocusables = [menuRef.current.querySelector(".hamburger-react"), ...menuRef.current.querySelectorAll("a")];
    firstMenuFocusable = menuFocusables[0];
    lastMenuFocusable = menuFocusables[menuFocusables.length - 1];
  };

  // Cycle through menuFocusables elements
  const handleTab = (event) => {
    if (event.shiftKey) {
      // Backward Tab (Shift + Tab)
      if (document.activeElement === firstMenuFocusable) {
        event.preventDefault();
        lastMenuFocusable.focus();
      }
    } else {
      // Forward Tab
      if (document.activeElement === lastMenuFocusable) {
        event.preventDefault();
        firstMenuFocusable.focus();
      }
    }
  };

  const handleKeyDown = (event) => {
    switch (event.key) {
      case "Escape":
      case "Esc":
        setIsOpen(false);
        break;

      case "Tab":
        handleTab(event);
        break;

      default:
        break;
    }
  };

  // Close mobile menu if viewport width >= lg
  const handleResize = () => {
    if (window.innerWidth >= 768.02) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);
    setFocusables(); // Populate `menuFocusables` array

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Close the dropdown menu when user clicks outside
  useOnClickOutside(menuRef, () => setIsOpen(false));

  return (
    <StyledMenu ref={menuRef}>
      <Helmet>
        <body className={isOpen && "blur"} />
      </Helmet>

      {/* Library: https://hamburger-react.netlify.app/ */}
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
              <Link to={item.url} onClick={toggleMenu} tabIndex={isOpen ? null : -1}>
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
