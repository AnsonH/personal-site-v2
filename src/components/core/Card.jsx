import { GatsbyImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";
import { createContext, forwardRef, useContext } from "react";
import styled, { css } from "styled-components";

/* Please wrap <Card /> with <CardsWrapper />.
 *
 * Example Usage:
 *
 * <Card hrefLink="https://www.google.com">
 *   <Card.Image image={...} alt={...} />
 *   <Card.Body>
 *     <Card.Title>Google</Card.Title>
 *     <p>Google is a search engine</p>
 *   </Card.Body>
 *   <Card.Footer>
 *     <button>Click Me</button>
 *   </Card.Footer>
 * </Card>
 */

///// Styles /////

const bgColor = css`
  background-color: var(--bg1);
`;

const hoverStyles = css`
  &:hover,
  &:focus-within {
    transform: translateY(-5px);

    .card-root {
      background-color: var(--bg2);
    }

    .card-title a {
      color: var(--light-blue);
    }
  }
`;

const StyledCard = styled.li`
  border-radius: 5px;
  overflow: hidden;
  transition: all 300ms var(--easing);

  .card-root {
    height: 100%;
    position: relative; // ONLY position card root such that a::before can cover whole card
    display: flex;
    flex-direction: column;
    ${bgColor}
    transition: inherit;
  }

  .card-title {
    margin-bottom: 2rem;
    transition: inherit;

    a {
      position: static;
      color: var(--fg0);
      transition: inherit;

      // Cover the entire card
      &::before {
        content: "";
        width: 100%;
        height: 100%;
        display: block;
        position: absolute;
        top: 0;
        left: 0;
      }
    }
  }

  ${(props) => props.isAnchor && hoverStyles}
`;

///// Components /////

const CardContext = createContext(); // Stores props.hrefLink

const Card = forwardRef((props, ref) => {
  const { children, hrefLink } = props;
  const data = { hrefLink };

  // NOTE: We use `div.card-root` instead of `a.card-root` if `hrefLink` is not undefined
  // This is because card body may contain anchors, which will cause illegal nesting of <a> inside <a>
  return (
    <StyledCard ref={ref} isAnchor={hrefLink !== undefined}>
      <div className="card-root">
        <CardContext.Provider value={data}>{children}</CardContext.Provider>
      </div>
    </StyledCard>
  );
});
Card.displayName = "Card";

function Image({ image, alt }) {
  return <GatsbyImage image={image} alt={alt} />;
}

function Title({ children }) {
  const { hrefLink } = useContext(CardContext);

  const inner = hrefLink ? (
    <a href={hrefLink} target="_blank" rel="noreferrer">
      {children}
    </a>
  ) : (
    children
  );

  return <h3 className="card-title">{inner}</h3>;
}

const Body = styled.div`
  padding: 2rem;
  flex: 1; // Stretch body to fill remaining height
  transition: all 300ms var(--easing);
`;

const Footer = styled.div`
  padding: 0 2rem 2rem;
`;

///// Dot Notation /////

Card.Image = Image;
Card.Title = Title;
Card.Body = Body;
Card.Footer = Footer;

///// PropTypes /////
Card.propTypes = {
  children: PropTypes.node,
  hrefLink: PropTypes.string,
};

Image.propTypes = {
  image: PropTypes.any,
  alt: PropTypes.string,
};

Title.propTypes = {
  children: PropTypes.string,
};

export default Card;
