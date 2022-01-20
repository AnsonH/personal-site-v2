import { Link } from "gatsby";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { bp } from "../../styles";

const styles = (color, hoverColor, sansFont) => css`
  width: max-content; // Prevent button taking 100% width due to flex
  ${({ theme }) => theme.mixins.flexAlignCenter};

  padding: 1rem 1.5rem;
  border: 1px solid ${color};
  border-radius: 5px;
  color: ${color};
  font-family: ${sansFont ? `"Ubuntu", var(--font-sans-system)` : `"Ubuntu Mono", var(--font-mono-system)`};
  font-size: ${sansFont ? `1.6rem` : `1.7rem`};
  font-weight: ${sansFont ? `500` : `700`};
  transition: background-color 150ms var(--easing);

  &:hover,
  &:focus {
    background-color: ${hoverColor};
  }

  @media ${bp.lg} {
    font-size: ${sansFont ? `1.6rem` : `1.9rem`};
  }
`;

const StyledButton = styled.button`
  ${(props) => styles(props.color, props.hoverColor, props.sansFont)}
`;

const StyledAnchor = styled.a`
  ${(props) => styles(props.color, props.hoverColor, props.sansFont)}
`;

const StyledLink = styled(Link)`
  ${(props) => styles(props.color, props.hoverColor, props.sansFont)}
`;

const Icon = styled.span`
  display: flex;
  margin-right: 1.2rem;
`;

// `type` prop can be one of: "button", "anchor", "link"
// "button": Render <button>
// "anchor": Render <a>
// "link": Render <Link />
function OutlineButton({ type, children, color, hoverColor, hrefLink, icon, sansFont, targetBlank }) {
  // Additional props if we cast the button into an external anchor tag
  const anchorProps = {
    href: hrefLink,
    target: targetBlank ? "_blank" : "_self",
    rel: "noreferrer",
  };

  const content = (
    <>
      {icon && <Icon aria-hidden>{icon}</Icon>}
      <span>{children}</span>
    </>
  );

  switch (type) {
    case "button":
      return (
        <StyledButton color={color} hoverColor={hoverColor} sansFont={sansFont}>
          {content}
        </StyledButton>
      );
    case "anchor":
      return (
        <StyledAnchor {...anchorProps} color={color} hoverColor={hoverColor} sansFont={sansFont}>
          {content}
        </StyledAnchor>
      );
    case "link":
      return (
        <StyledLink to={hrefLink} color={color} hoverColor={hoverColor} sansFont={sansFont}>
          {content}
        </StyledLink>
      );
    default:
      throw new Error("`type` prop should be one of 'button', 'anchor', 'link'");
  }
}

OutlineButton.propTypes = {
  type: PropTypes.oneOf(["button", "anchor", "link"]).isRequired,
  children: PropTypes.string,
  color: PropTypes.string,
  hoverColor: PropTypes.string,
  hrefLink: PropTypes.string,
  icon: PropTypes.node,
  sansFont: PropTypes.bool,
  targetBlank: PropTypes.bool,
};

OutlineButton.defaultProps = {
  type: "button",
  children: "",
  color: "var(--fg1)",
  hoverColor: "var(--fg1-hover)",
  hrefLink: null,
  icon: null,
  sansFont: false,
  targetBlank: true,
};

export default OutlineButton;
