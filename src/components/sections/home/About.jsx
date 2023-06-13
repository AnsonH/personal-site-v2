import { graphql, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { useEffect, useRef } from "react";
import { IoLogoReact, IoLogoSass } from "react-icons/io5";
import { SiGit, SiMui, SiTailwindcss, SiTypescript } from "react-icons/si";
import ScrollReveal from "scrollreveal";
import styled from "styled-components";
import { srConfig } from "../../../config";
import { usePrefersReducedMotion } from "../../../hooks";
import { bp } from "../../../styles";
import { H2, Wrapper } from "../../core";
import { Flutter, NextJs, Python } from "../../icons";

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
  border-radius: 50px;
  overflow: hidden; // Fix border radius not working
  -webkit-mask-image: -webkit-radial-gradient(white, black); // Fix border radius on Safari
  transition: border-radius 250ms var(--easing);

  @media ${bp.lg} {
    width: auto;
    height: auto;
    max-width: 26rem;
  }

  &:hover {
    border-radius: 10px;
  }
`;

const Description = styled.div`
  margin-top: 5rem;

  @media ${bp.lg} {
    margin-top: 0;
  }

  @media ${bp.xl} {
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
      icon: <SiTypescript color="#3178c6" {...skillIconProps} />,
      label: "TypeScript",
    },
    {
      icon: <IoLogoReact color="#00D8FF" {...skillIconProps} />,
      label: "React",
    },
    {
      icon: <NextJs {...skillIconProps} />,
      label: "Next.js",
    },
  ],
  // List 2
  [
    {
      icon: <SiTailwindcss color="#38BDF8" {...skillIconProps} />,
      label: "Tailwind CSS",
    },
    {
      icon: <SiMui color="#007FFF" {...skillIconProps} />,
      label: "Material UI",
    },
    {
      icon: <IoLogoSass color="#CD6799" {...skillIconProps} />,
      label: "Sass",
    },
  ],
  // List 3
  [
    {
      icon: <Flutter {...skillIconProps} />,
      label: "Flutter",
    },
    {
      icon: <Python {...skillIconProps} />,
      label: "Python",
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
        <H2>About Me</H2>
        <Content>
          <ImageWrapper>
            <StaticImage src="../../../images/avatar.jpg" alt="Photo of me" />
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
