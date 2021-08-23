import { useEffect, useRef } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { IoLogoJavascript, IoLogoReact, IoLogoSass } from "react-icons/io5";
import { SiGit, SiLaravel, SiPhp } from "react-icons/si";
import ScrollReveal from "scrollreveal";
import styled from "styled-components";
import { srConfig } from "../../../config";
import { Wrapper } from "../../core";
import { usePrefersReducedMotion } from "../../../hooks";
import { Gatsby, Html, Python } from "../../icons";
import { bp } from "../../../styles";

const Content = styled.div`
  ${({ theme }) => theme.mixins.flexAlignCenter};
  flex-direction: column;

  @media ${bp.lg} {
    display: grid;
    grid-template-columns: 1fr 2fr;
    column-gap: 7rem;
  }

  @media ${bp.xl} {
    grid-template-columns: 1fr 3fr;
  }
`;

const ImageWrapper = styled.div`
  width: 65%;
  height: 65%;
  max-width: 24rem;
  border-radius: 5rem;
  overflow: hidden; // Fix border radius not working
  -webkit-mask-image: -webkit-radial-gradient(white, black); // Fix border radius on Safari
  transition: border-radius 250ms var(--easing);

  @media ${bp.lg} {
    width: auto;
    height: auto;
    max-width: 26rem;
  }

  &:hover {
    border-radius: 1rem;
  }
`;

const Description = styled.div`
  margin-top: 5rem;

  @media ${bp.lg} {
    margin-top: 0;
    font-size: 1.8rem;
  }

  div > p:last-child {
    margin-bottom: 4rem;
  }
`;

const Skills = styled.div`
  max-width: 70rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 2rem;
  row-gap: 3.5rem;
  font-size: 1.5rem;

  @media (min-width: 620px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${bp.lg} {
    font-size: 1.6rem;
  }

  li {
    ${({ theme }) => theme.mixins.flexAlignCenter};

    &:not(:last-child) {
      margin-bottom: 0.8rem;
    }
  }

  svg {
    margin-right: 1rem;
  }
`;

const skillIconProps = {
  fontSize: 25,
  "aria-hidden": true,
};

const skills = [
  // List 1
  [
    {
      icon: <Html {...skillIconProps} />,
      label: "HTML & CSS",
    },
    {
      icon: <IoLogoSass color="#CD6799" {...skillIconProps} />,
      label: "Sass",
    },
    {
      icon: <IoLogoJavascript color="#F7DF1E" {...skillIconProps} />,
      label: "Javascript (ES6+)",
    },
  ],
  // List 2
  [
    {
      icon: <IoLogoReact color="#00D8FF" {...skillIconProps} />,
      label: "React",
    },
    {
      icon: <Gatsby {...skillIconProps} />,
      label: "Gatsby",
    },
    {
      icon: <Python {...skillIconProps} />,
      label: "Python",
    },
  ],
  // List 3
  [
    {
      icon: <SiPhp color="#777BB3" {...skillIconProps} />,
      label: "PHP",
    },
    {
      icon: <SiLaravel color="#FF2D20" {...skillIconProps} />,
      label: "Laravel",
    },
    {
      icon: <SiGit color="#DE4C36" {...skillIconProps} />,
      label: "Git & GitHub",
    },
  ],
];

function About() {
  const data = useStaticQuery(graphql`
    query AboutMe {
      markdownRemark(fileAbsolutePath: {regex: "/about\\.md/"}) {
        html
      }
    }
  `);
  const descriptionHtml = data.markdownRemark.html;

  const prefersReducedMotion = usePrefersReducedMotion();
  const aboutRef = useRef();

  useEffect(() => {
    if (!prefersReducedMotion) {
      ScrollReveal().reveal(aboutRef.current, srConfig.popUp);
    }
  }, []);

  return (
    <section id="about" ref={aboutRef}>
      <Wrapper paddingX_lg paddingY>
        <h2>About Me</h2>
        <Content>
          <ImageWrapper>
            <StaticImage src="../../../images/me.png" alt="Photo of me" />
          </ImageWrapper>

          <Description>
            <div dangerouslySetInnerHTML={{ __html: descriptionHtml }} />
            <Skills>
              {skills.map((skillCol, colIndex) => (
                <ul key={colIndex}>
                  {skillCol.map((skill, skillIndex) => (
                    <li key={skillIndex}>
                      {skill.icon}
                      {skill.label}
                    </li>
                  ))}
                </ul>
              ))}
            </Skills>
          </Description>
        </Content>
      </Wrapper>
    </section>
  );
}

export default About;
