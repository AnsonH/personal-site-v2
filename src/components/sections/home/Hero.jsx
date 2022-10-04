import { useState, useEffect, useRef } from "react";
import { FaChevronRight } from "react-icons/fa";
import { MdDesktopMac } from "react-icons/md";
import Typist from "react-typist";
import ScrollReveal from "scrollreveal";
import styled from "styled-components";
import { OutlineButton, Wrapper } from "../../core";
import { usePrefersReducedMotion } from "../../../hooks";
import { bp } from "../../../styles";
import { reactTypistConfig, srConfig } from "../../../config";

const StyledSection = styled.section`
  padding: 4rem 0;
  background: url("./hero_bg.svg") center/100% 100%; // Stretch background to 100% width & height

  @media ${bp.md} {
    min-height: calc(100vh - 5rem);
    display: flex;
    flex-direction: column;
    justify-content: center; // Always vertically center the hero section
  }
`;

const Terminal = styled.div`
  background-color: var(--bg0);
  border: 0.2rem solid #777777;
  border-radius: 10px;

  @media ${bp.lg} {
    margin: 0 9rem;
  }
`;

const TrafficLights = styled.div`
  width: 6.8rem;
  height: 1.5rem;
  margin: 2rem 0 0 2rem;
  background: url("./traffic_lights.svg") center/100% 100%;

  @media ${bp.md} {
    margin-left: 2.5rem;
  }
`;

const TerminalContainer = styled.div`
  padding: 3rem 1.5rem 2rem;

  @media ${bp.md} {
    padding: 5rem 2rem 5rem 3rem;
  }

  @media ${bp.lg} {
    padding: 5rem 3rem;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  margin-bottom: 2rem;
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
`;

const StyledChevron = styled(FaChevronRight)`
  width: 2.4rem;
  height: 2.4rem;
  margin-top: 0.5rem;
  color: var(--lime);

  @media ${bp.md} {
    width: 2.9rem;
    height: 2.9rem;
  }

  @media ${bp.lg} {
    width: 3.2rem;
    height: 3.2rem;
    margin-top: 0.9rem;
    margin-right: 0.8rem;
  }

  @media ${bp.xl} {
    width: 3.8rem;
    height: 3.8rem;
  }
`;

const Title = styled.h1`
  width: 88%;
  margin: 0 0 0 1rem;
  font-size: 3rem;

  @media ${bp.md} {
    width: 93%;
    font-size: 3.5rem;
  }

  @media ${bp.lg} {
    font-size: 4.3rem;
  }

  @media ${bp.xl} {
    font-size: 5rem;
  }
`;

const WavingHand = styled.span`
  margin-left: 0.3rem;
  display: inline-block;
  ${({ theme }) => theme.mixins.disableTextSelection};

  // Credits: https://codepen.io/jakejarvis/pen/pBZWZw
  &:hover {
    animation: ${({ theme }) => theme.animations.heroWavingHand} 1.5s 1; // 1 iteration for 1.5 secs
    cursor: default;
    transform-origin: 70% 70%; // Pivot around bottom-left palm
  }
`;

const Details = styled.div`
  padding: 0 0 0 0.5rem;
  visibility: hidden;

  @media (prefers-reduced-motion: reduce) {
    visibility: visible;
  }

  @media ${bp.md} {
    padding: 0 3.7rem;
  }

  @media ${bp.lg} {
    padding: 0 4.7rem;
  }

  @media ${bp.xl} {
    padding: 0 5.7rem;
  }
`;

const Description = styled.p`
  margin: 4.5rem 0;
  font-size: 1.5rem;

  @media ${bp.lg} {
    font-size: 1.6rem;
  }
`;

const CTA = styled.div`
  display: flex;
  flex-direction: column;

  a:not(:last-child) {
    margin-bottom: 1.5rem;
  }

  @media (min-width: 560px) {
    flex-direction: row;

    a:not(:last-child) {
      margin-right: 4rem;
      margin-bottom: 0;
    }
  }
`;

function Hero() {
  const prefersReducedMotion = usePrefersReducedMotion();

  const [showFirstTitle, setShowFirstTitle] = useState(false);
  const [showSecondTitle, setShowSecondTitle] = useState(false);
  const [showDetails, setShowDetails] = useState(prefersReducedMotion);

  const detailsRef = useRef();

  // Both 1st & 2nd titles are set to have visibility hidden on page load. After the browser downloads JS bundle
  // and the React code start running, we set visibility of 1st title to visible so that the typing animation
  // starts. If we don't do that, the titles will be visible on page load for a split second, then becomes hidden
  // after the browser downloads the JS bundle.
  useEffect(() => {
    setShowFirstTitle(true);

    // Immediately show 2nd title if user prefers reduced motion
    if (prefersReducedMotion) {
      setShowSecondTitle(true);
    }
  }, []);

  useEffect(() => {
    if (!prefersReducedMotion && showDetails) {
      ScrollReveal().reveal(detailsRef.current, srConfig.panFrom("left"));
    }
  }, [showDetails]);

  return (
    <StyledSection>
      <Wrapper>
        <Terminal>
          <TrafficLights />
          <TerminalContainer>
            <TitleContainer visible={showFirstTitle}>
              <StyledChevron aria-hidden />
              <Title aria-label="Hi, I'm Anson">
                {prefersReducedMotion ? (
                  <span>
                    Hi, I&apos;m Anson
                    <span role="img" aria-label="waving hand">
                      👋
                    </span>
                  </span>
                ) : (
                  <Typist
                    {...reactTypistConfig}
                    startDelay={250}
                    onTypingDone={() => setTimeout(() => setShowSecondTitle(true), 300)}
                  >
                    Hi, I&apos;m Anson
                    {/* eslint-disable-next-line */}
                    <WavingHand role="img" aria-label="waving hand">
                      👋
                    </WavingHand>
                  </Typist>
                )}
              </Title>
            </TitleContainer>

            <TitleContainer visible={showSecondTitle}>
              <StyledChevron aria-hidden />
              <Title aria-label="I'm a front-end web developer.">
                {prefersReducedMotion ? (
                  <span>I&apos;m a front-end web developer.</span>
                ) : (
                  <Typist {...reactTypistConfig} startDelay={1500} onTypingDone={() => setShowDetails(true)}>
                    I&apos;m a front-end web developer.
                  </Typist>
                )}
              </Title>
            </TitleContainer>

            <Details ref={detailsRef} visible={prefersReducedMotion}>
              <Description>
                I’m a year 5 student from HKUST who is passionate about building websites with stunning interfaces and
                experiences.
              </Description>
              <CTA>
                <OutlineButton
                  type="anchor"
                  color="var(--orange)"
                  hoverColor="var(--orange-hover)"
                  hrefLink="#projects"
                  icon={<MdDesktopMac fontSize={24} />}
                  targetBlank={false}
                >
                  Projects
                </OutlineButton>
              </CTA>
            </Details>
          </TerminalContainer>
        </Terminal>
      </Wrapper>
    </StyledSection>
  );
}

export default Hero;
