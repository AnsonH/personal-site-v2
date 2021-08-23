import { Link } from "gatsby";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { bp } from "../../styles";

const styles = (color, hoverColor, sansFont) => css`
  width: max-content; // Prevent button taking 100% width due to flex
  ${({ theme }) => theme.mixins.flexAlignCenter};

  padding: 1.2rem 1.5rem;
  border: 1px solid ${color};
  border-radius: 0.5rem;
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

const StyledLink = styled(Link)`
  ${(props) => styles(props.color, props.hoverColor, props.sansFont)}
`;

const Icon = styled.span`
  display: flex;
  margin-right: 1.2rem;
`;

// `anchor`: Set to true to turn the button into an anchor tag to an external link
// `link`: Set to true to turn the button to <Link /> component
function OutlineButton({ anchor, link, children, color, hoverColor, hrefLink, icon, sansFont, to }) {
  // Additional props if we cast the button into an external anchor tag
  const anchorProps = anchor
    ? {
        as: "a",
        href: hrefLink,
        target: "_blank",
        rel: "noreferrer",
      }
    : {};

  const content = (
    <>
      {icon && <Icon aria-hidden>{icon}</Icon>}
      <span>{children}</span>
    </>
  );

  return link ? (
    <StyledLink to={to} color={color} hoverColor={hoverColor} sansFont={sansFont}>
      {content}
    </StyledLink>
  ) : (
    <StyledButton {...anchorProps} color={color} hoverColor={hoverColor} sansFont={sansFont}>
      {content}
    </StyledButton>
  );
}

OutlineButton.propTypes = {
  anchor: PropTypes.bool,
  link: PropTypes.bool,
  children: PropTypes.string,
  color: PropTypes.string,
  hoverColor: PropTypes.string,
  hrefLink: PropTypes.string,
  icon: PropTypes.node,
  sansFont: PropTypes.bool,
  to: PropTypes.string,
};

OutlineButton.defaultProps = {
  anchor: false,
  link: false,
  children: "",
  color: "var(--light-gray)",
  hoverColor: "var(--light-gray-hover)",
  hrefLink: null,
  icon: null,
  sansFont: false,
  to: null,
};

export default OutlineButton;
