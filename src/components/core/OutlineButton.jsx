import styled from "styled-components";
import PropTypes from "prop-types";
import { bp } from "../../styles";

const StyledButton = styled.button`
  width: max-content; // Prevent button taking 100% width due to flex
  display: flex;
  align-items: center;
  padding: 1.2rem 1.5rem;
  margin: 1rem 0;
  border: 1px solid ${(props) => props.color};
  border-radius: 0.5rem;
  color: ${(props) => props.color};
  font-family: "Ubuntu Mono", var(--font-mono-system);
  font-size: 1.7rem;
  font-weight: 700;
  transition: background-color 150ms var(--easing);

  &:hover,
  &:focus {
    background-color: ${(props) => props.hoverColor};
  }

  @media ${bp.lg} {
    font-size: 1.9rem;
  }
`;

const Icon = styled.span`
  display: flex;
  margin-right: 1.2rem;
`;

function OutlineButton({ anchor, children, color, hoverColor, hrefLink, icon }) {
  // Additional props if we cast the button into an anchor tag
  const anchorProps = anchor
    ? {
        as: "a",
        href: hrefLink,
        target: "_blank",
        rel: "noreferrer",
      }
    : {};

  return (
    <StyledButton {...anchorProps} color={color} hoverColor={hoverColor}>
      {icon && <Icon aria-hidden>{icon}</Icon>}
      <span>{children}</span>
    </StyledButton>
  );
}

OutlineButton.propTypes = {
  anchor: PropTypes.bool,
  children: PropTypes.string,
  color: PropTypes.string,
  hoverColor: PropTypes.string,
  hrefLink: PropTypes.string,
  icon: PropTypes.node,
};

OutlineButton.defaultProps = {
  anchor: false,
  children: "",
  color: "var(--light-gray)",
  hoverColor: "var(--light-gray-hover)",
  hrefLink: null,
  icon: null,
};

export default OutlineButton;
