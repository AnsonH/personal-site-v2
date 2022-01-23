import { GatsbyImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

/* Please wrap <Card /> with <CardsWrapper />.
 *
 * Example Usage:
 *
 * <Card>
 *   <Card.Image src="./foo.png" />
 *   <Card.Body>
 *     <h3>Title</h3>
 *     <p>This is my project.</p>
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

const StyledCard = styled.li`
  border-radius: 5px;
  overflow: hidden;
  transition: all 300ms var(--easing);

  .card-root {
    height: 100%;
    display: flex;
    flex-direction: column;
    ${bgColor}
    transition: inherit;
  }

  &:hover,
  &:focus-within {
    transform: translateY(-5px);

    .card-root {
      background-color: var(--bg2);
    }
  }
`;

///// Components /////

function Card({ children, hrefLink }) {
  return hrefLink ? (
    <StyledCard>
      <a href={hrefLink} className="card-root" target="_blank" rel="noreferrer">
        {children}
      </a>
    </StyledCard>
  ) : (
    <StyledCard>
      <div className="card-root">{children}</div>
    </StyledCard>
  );
}

function Image({ image, alt }) {
  return <GatsbyImage image={image} alt={alt} />;
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

export default Card;
