import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { useEffect, useRef } from "react";
import ScrollReveal from "scrollreveal";
import styled from "styled-components";
import { srConfig } from "../../../config";
import { Card, CardsWrapper, H2, Wrapper } from "../../core";
import { usePrefersReducedMotion } from "../../../hooks";

const Description = styled.div`
  color: var(--fg1);
  font-size: 1.5rem;

  p {
    margin-bottom: 2rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const PostTime = styled.time`
  margin-bottom: 1.5rem;
  color: var(--fg2);
  font-size: 1.4rem;
  text-transform: uppercase;
`;

function Blog() {
  const blogData = useStaticQuery(graphql`
    query BlogPosts {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/blog/" } }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        nodes {
          frontmatter {
            date(fromNow: true)
            title
            url
            thumbnail {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
          }
          html
        }
      }
    }
  `);
  const blogPosts = blogData.allMarkdownRemark.nodes;

  const prefersReducedMotion = usePrefersReducedMotion();

  const titleRef = useRef(null);
  const blogArticlesRef = useRef([]);

  useEffect(() => {
    if (!prefersReducedMotion) {
      ScrollReveal().reveal(titleRef.current, srConfig.popUp);

      const { baseDelay, delayIncrement } = srConfig.cards;
      blogArticlesRef.current.forEach((item, index) => {
        ScrollReveal().reveal(item, srConfig.panFrom("bottom", baseDelay + delayIncrement * index, "30px"));
      });
    }
  }, []);

  return (
    <section id="blog">
      <Wrapper paddingX_lg paddingY>
        <H2 ref={titleRef}>Blog</H2>
        <CardsWrapper>
          {blogPosts.map((blogPost, index) => {
            const { date, title, url, thumbnail } = blogPost.frontmatter;

            return (
              <Card key={index} hrefLink={url} ref={(element) => blogArticlesRef.current.push(element)}>
                <Card.Image image={getImage(thumbnail)} alt={title} />
                <Card.Body>
                  <Card.Title style={{ marginBottom: "1.5rem" }}>{title}</Card.Title>
                  <PostTime>{date}</PostTime>
                  <Description dangerouslySetInnerHTML={{ __html: blogPost.html }} />
                </Card.Body>
              </Card>
            );
          })}
        </CardsWrapper>
      </Wrapper>
    </section>
  );
}

export default Blog;
