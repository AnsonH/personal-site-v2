import { useEffect, useRef } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { IoLogoGithub } from "react-icons/io";
import { MdOpenInNew } from "react-icons/md";
import { RiNpmjsFill } from "react-icons/ri";
import ScrollReveal from "scrollreveal";
import styled from "styled-components";
import { srConfig } from "../../../config";
import { OutlineButton, Wrapper } from "../../core";
import { usePrefersReducedMotion } from "../../../hooks";
import { bp } from "../../../styles";

const ProjectItem = styled.li`
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

const ProjectImage = styled.div`
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
  font-size: 1.5rem;

  p {
    margin-bottom: 2rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const TechList = styled.ul`
  margin: 4.5rem 0 3rem;
  display: flex;
  font-family: "Ubuntu Mono", var(--font-mono-system);
  font-size: 1.5rem;

  li:not(:last-child) {
    margin-right: 3rem;
  }
`;

const LinksWrapper = styled.div`
  display: flex;
  justify-content: center;

  @media ${bp.lg} {
    justify-content: flex-start;
  }

  a:not(:last-child) {
    margin-right: 3rem;
  }
`;

function Projects() {
  const data = useStaticQuery(graphql`
    query Projects {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/projects/" } }
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
    }
  `);
  const projects = data.allMarkdownRemark.nodes;

  const prefersReducedMotion = usePrefersReducedMotion();

  const titleRef = useRef();
  const projectItemsRef = useRef([]);

  useEffect(() => {
    if (!prefersReducedMotion) {
      ScrollReveal().reveal(titleRef.current, srConfig.popUp);

      projectItemsRef.current.forEach((item, index) => {
        const direction = index % 2 === 0 ? "left" : "right";
        ScrollReveal().reveal(item, srConfig.panFrom(direction, 300, "25px"));
      });
    }
  }, []);

  return (
    <section id="projects">
      <Wrapper paddingX_lg paddingY>
        <h2 ref={titleRef}>Projects</h2>
        <ul>
          {projects.map((project, index) => {
            const { demo, github, npm, tech, title, thumbnail } = project.frontmatter;

            return (
              <ProjectItem key={index} ref={(element) => projectItemsRef.current.push(element)}>
                <ProjectImage>
                  <GatsbyImage image={getImage(thumbnail)} alt={title} />
                </ProjectImage>

                <ProjectInfo>
                  <Title>{title}</Title>
                  <Description dangerouslySetInnerHTML={{ __html: project.html }} />
                  <TechList>
                    {tech.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </TechList>
                  <LinksWrapper>
                    {github ? (
                      <OutlineButton type="anchor" hrefLink={github} icon={<IoLogoGithub fontSize={24} />} sansFont>
                        Source
                      </OutlineButton>
                    ) : null}
                    {demo ? (
                      <OutlineButton type="anchor" hrefLink={demo} icon={<MdOpenInNew fontSize={24} />} sansFont>
                        Demo
                      </OutlineButton>
                    ) : null}
                    {npm ? (
                      <OutlineButton type="anchor" hrefLink={npm} icon={<RiNpmjsFill fontSize={24} />} sansFont>
                        NPM
                      </OutlineButton>
                    ) : null}
                  </LinksWrapper>
                </ProjectInfo>
              </ProjectItem>
            );
          })}
        </ul>
      </Wrapper>
    </section>
  );
}

export default Projects;
