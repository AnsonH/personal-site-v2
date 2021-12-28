import { OutboundLink } from "gatsby-plugin-google-gtag";
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

const StyledLink = styled(OutboundLink)`
  ${(props) => styles(props.color, props.hoverColor, props.sansFont)}
`;

const Icon = styled.span`
  display: flex;
  margin-right: 1.2rem;
`;

// `anchor`: Set to true to turn the button into an anchor tag to an external link
function OutlineButton({ anchor, children, color, hoverColor, hrefLink, icon, sansFont, targetBlank }) {
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

  return anchor ? (
    <StyledLink {...anchorProps} color={color} hoverColor={hoverColor} sansFont={sansFont}>
      {content}
    </StyledLink>
  ) : (
    <StyledButton color={color} hoverColor={hoverColor} sansFont={sansFont}>
      {content}
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
  sansFont: PropTypes.bool,
  targetBlank: PropTypes.bool,
};

OutlineButton.defaultProps = {
  anchor: false,
  children: "",
  color: "var(--light-gray)",
  hoverColor: "var(--light-gray-hover)",
  hrefLink: null,
  icon: null,
  sansFont: false,
  targetBlank: true,
};

export default OutlineButton;
