import { useEffect, useRef } from "react";
import { graphql, useStaticQuery } from "gatsby";
import ScrollReveal from "scrollreveal";
import styled from "styled-components";
import { srConfig } from "../../../config";
import { Tabs, Wrapper } from "../../core";
import { usePrefersReducedMotion } from "../../../hooks";
import { bp } from "../../../styles";

const Content = styled.div`
  position: relative;
  margin-bottom: 8rem;

  @media ${bp.lg} {
    ${({ theme }) => theme.mixins.paddingX};
    margin: 0 auto 9rem;
    max-width: 90rem;
  }
`;

const CompanyName = styled.span`
  color: var(--light-gray);
`;

const WorkDuration = styled.p`
  color: var(--light-gray);
  font-family: "Ubuntu Mono", var(--font-mono-system);
  font-weight: 300;
  font-size: 1.4rem;

  .remote {
    margin-left: 2rem;
  }

  @media ${bp.lg} {
    font-size: 1.5rem;
  }
`;

const WorkDescription = styled.div`
  ul {
    font-size: 1.5rem;

    @media ${bp.lg} {
      font-size: 1.6rem;
    }

    li {
      padding-left: 3rem;
      line-height: 1.5;

      // Green chevron bullet points
      &::before {
        content: "❯";
        position: absolute;
        left: 0;
        color: var(--lime);
      }

      &:not(:last-child) {
        margin-bottom: 2rem;
      }
    }
  }
`;

function Experience() {
  const data = useStaticQuery(graphql`
    query Experience {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/jobs/" } }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        nodes {
          frontmatter {
            company
            companyShort
            date
            range
            remote
            title
          }
          html
        }
      }
    }
  `);
  const jobs = data.allMarkdownRemark.nodes;

  const prefersReducedMotion = usePrefersReducedMotion();
  const experienceRef = useRef();

  useEffect(() => {
    if (!prefersReducedMotion) {
      ScrollReveal().reveal(experienceRef.current, srConfig.popUp);
    }
  }, []);

  return (
    <section id="experience" ref={experienceRef}>
      <Wrapper paddingY>
        <h2>Experience</h2>
        <Content>
          <Tabs>
            <Tabs.TabList>
              {jobs.map((job, i) => (
                <Tabs.Tab key={i} index={i}>
                  {job.frontmatter.companyShort}
                </Tabs.Tab>
              ))}
            </Tabs.TabList>
            <Tabs.Panels>
              {jobs.map((job, i) => {
                const { company, title, range, remote } = job.frontmatter;

                return (
                  <Tabs.Panel key={i} index={i}>
                    <h3>
                      {title}
                      <CompanyName> @ {company}</CompanyName>
                    </h3>
                    <WorkDuration>
                      {range}
                      {remote === "true" && <span className="remote">&#47;&#47; Remote Work</span>}
                    </WorkDuration>
                    <WorkDescription dangerouslySetInnerHTML={{ __html: job.html }} />
                  </Tabs.Panel>
                );
              })}
            </Tabs.Panels>
          </Tabs>
        </Content>
      </Wrapper>
    </section>
  );
}

export default Experience;
