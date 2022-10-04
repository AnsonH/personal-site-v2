import { useEffect, useRef } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { IoLogoGithub } from "react-icons/io";
import { MdOpenInNew } from "react-icons/md";
import { RiNpmjsFill } from "react-icons/ri";
import ScrollReveal from "scrollreveal";
import styled from "styled-components";
import { srConfig } from "../../../config";
import { Card, CardsWrapper, H2, OutlineButton, Wrapper } from "../../core";
import { usePrefersReducedMotion } from "../../../hooks";
import { bp } from "../../../styles";

const FeaturedList = styled.ul`
  margin-bottom: 9rem;
`;

const FeaturedItem = styled.li`
  ${({ theme }) => theme.mixins.flexAlignCenter};
  flex-direction: column;

  &:not(:last-child) {
    margin-bottom: 9rem;
  }

  @media ${bp.lg} {
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    gap: 6rem;
  }
`;

const FeaturedImage = styled.div`
  margin-bottom: 3rem;
  border-radius: 10px;
  overflow: hidden;
  -webkit-mask-image: -webkit-radial-gradient(white, black); // Fix border radius not working on Safari

  @media ${bp.lg} {
    grid-column: 1 / 7;
    margin-bottom: 0;
  }
`;

const ProjectInfo = styled.div`
  @media ${bp.lg} {
    grid-column: 7 / -1;
  }
`;

const Title = styled.h3`
  margin-bottom: 3rem;
  text-align: center;

  @media ${bp.lg} {
    text-align: left;
  }
`;

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

const TechList = styled.ul`
  margin: ${(props) => (props.insideCard ? "0.5rem 0 2rem" : "3.5rem 0 3rem")};
  display: flex;
  color: var(--fg2);
  font-family: "Ubuntu Mono", var(--font-mono-system);
  font-size: 1.5rem;

  li:not(:last-child) {
    margin-right: 3rem;
  }
`;

const BtnLinksWrapper = styled.div`
  display: flex;
  justify-content: center;

  @media ${bp.lg} {
    justify-content: flex-start;
  }

  a:not(:last-child) {
    margin-right: 3rem;
  }
`;

const IconLinksWrapper = styled.div`
  display: flex;
  margin-left: -1rem;
  margin-top: 2rem;

  a:not(:last-child) {
    margin-right: 1rem;
  }
`;

const IconLink = styled.a`
  padding: 0.6rem;
  color: var(--fg0);
  transition: color 150ms var(--easing);

  &:hover,
  &:focus {
    color: var(--light-blue);
  }
`;

function Projects() {
  const projectsData = useStaticQuery(graphql`
    query Projects {
      featured: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/projects/featured/" } }
        sort: { fields: frontmatter___order, order: ASC }
      ) {
        nodes {
          html
          frontmatter {
            demo
            github
            npm
            tech
            title
            thumbnail {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
          }
        }
      }

      others: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/projects/others/" } }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        nodes {
          html
          frontmatter {
            demo
            github
            tech
            title
            thumbnail {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
          }
        }
      }
    }
  `);
  const featuredProjects = projectsData.featured.nodes;
  const otherProjects = projectsData.others.nodes;

  const prefersReducedMotion = usePrefersReducedMotion();

  const titleRef = useRef(null);
  const otherTitleRef = useRef(null);
  const featuredItemsRef = useRef([]);
  const otherItemsRef = useRef([]);

  useEffect(() => {
    if (!prefersReducedMotion) {
      ScrollReveal().reveal(titleRef.current, srConfig.popUp);
      ScrollReveal().reveal(otherTitleRef.current, srConfig.popUp);

      featuredItemsRef.current.forEach((item, index) => {
        const direction = index % 2 === 0 ? "left" : "right";
        ScrollReveal().reveal(item, srConfig.panFrom(direction, 300, "25px"));
      });

      const { baseDelay, delayIncrement } = srConfig.cards;
      otherItemsRef.current.forEach((item, index) => {
        ScrollReveal().reveal(item, srConfig.panFrom("bottom", baseDelay + delayIncrement * index, "30px"));
      });
    }
  }, []);

  return (
    <section id="projects">
      <Wrapper paddingX_lg paddingY>
        <H2 ref={titleRef}>Projects</H2>
        <FeaturedList>
          {featuredProjects.map((project, index) => {
            const { demo, github, npm, tech, title, thumbnail } = project.frontmatter;

            return (
              <FeaturedItem key={index} ref={(element) => featuredItemsRef.current.push(element)}>
                <FeaturedImage>
                  <GatsbyImage image={getImage(thumbnail)} alt={title} />
                </FeaturedImage>
                <ProjectInfo>
                  <Title>{title}</Title>
                  <Description dangerouslySetInnerHTML={{ __html: project.html }} />
                  <TechList>
                    {tech.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </TechList>
                  <BtnLinksWrapper>
                    {github && (
                      <OutlineButton type="anchor" hrefLink={github} icon={<IoLogoGithub fontSize={24} />} sansFont>
                        Source
                      </OutlineButton>
                    )}
                    {demo && (
                      <OutlineButton type="anchor" hrefLink={demo} icon={<MdOpenInNew fontSize={24} />} sansFont>
                        Demo
                      </OutlineButton>
                    )}
                    {npm && (
                      <OutlineButton type="anchor" hrefLink={npm} icon={<RiNpmjsFill fontSize={24} />} sansFont>
                        NPM
                      </OutlineButton>
                    )}
                  </BtnLinksWrapper>
                </ProjectInfo>
              </FeaturedItem>
            );
          })}
        </FeaturedList>

        <H2 hasDecoration={false} ref={otherTitleRef}>
          Other Projects
        </H2>
        <CardsWrapper>
          {otherProjects.map((project, index) => {
            const { demo, github, tech, title, thumbnail } = project.frontmatter;

            return (
              <Card key={index} hrefLink={demo ?? github} ref={(element) => otherItemsRef.current.push(element)}>
                <Card.Image image={getImage(thumbnail)} alt={title} />
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                  <Description dangerouslySetInnerHTML={{ __html: project.html }} />
                </Card.Body>
                <Card.Footer style={{ paddingBottom: "1.4rem" }}>
                  <TechList insideCard>
                    {tech.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </TechList>
                  <IconLinksWrapper>
                    {github && (
                      <IconLink href={github} aria-label="View source" target="_blank" rel="noreferrer">
                        <IoLogoGithub fontSize={24} />
                      </IconLink>
                    )}
                    {demo && (
                      <IconLink href={demo} aria-label="View demo" target="_blank" rel="noreferrer">
                        <MdOpenInNew fontSize={24} />
                      </IconLink>
                    )}
                  </IconLinksWrapper>
                </Card.Footer>
              </Card>
            );
          })}
        </CardsWrapper>
      </Wrapper>
    </section>
  );
}

export default Projects;
