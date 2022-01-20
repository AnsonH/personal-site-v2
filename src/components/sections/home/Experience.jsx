import { useEffect, useRef } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { IoDocumentTextSharp } from "react-icons/io5";
import ScrollReveal from "scrollreveal";
import styled from "styled-components";
import { resumeUrl, srConfig } from "../../../config";
import { H2, OutlineButton, Tabs, Wrapper } from "../../core";
import { usePrefersReducedMotion } from "../../../hooks";
import { bp } from "../../../styles";

const JobsWrapper = styled.div`
  margin-bottom: 9rem;

  @media ${bp.lg} {
    margin: 0 auto 10rem;
    max-width: 86rem;
  }
`;

const CompanyName = styled.span`
  color: var(--fg1);
`;

const WorkDuration = styled.p`
  color: var(--fg1);
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

const ResumeWrapper = styled.div`
  p {
    margin-bottom: 2rem;
    text-align: center;
  }

  // Resume button
  a {
    margin: 0 auto;
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
        <H2>Experience</H2>
        <JobsWrapper>
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
        </JobsWrapper>
        <ResumeWrapper>
          <p>Interested in my full resume?</p>
          <OutlineButton
            type="anchor"
            color="var(--light-blue)"
            hoverColor="var(--light-blue-hover)"
            hrefLink={resumeUrl}
            icon={<IoDocumentTextSharp fontSize={24} />}
          >
            Resume
          </OutlineButton>
        </ResumeWrapper>
      </Wrapper>
    </section>
  );
}

export default Experience;
