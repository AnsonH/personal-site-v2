import { useState } from "react";
import styled from "styled-components";
import { FaChevronRight } from "react-icons/fa";
import { MdMailOutline, MdFileDownload } from "react-icons/md";
import Typist from "react-typist";
import OutlineButton from "../../core/OutlineButton";
import { bp } from "../../../styles";
import { email, resumeUrl, reactTypistConfig } from "../../../config";

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
  background-color: var(--black);
  border: 0.2rem solid var(--gray);
  border-radius: 1rem;

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
  visibility: ${(props) => (props.hidden ? "hidden" : "visible")};
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

const Content = styled.div`
  padding: 0 0 0 0.5rem;

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
  margin: 4.5rem 0 3.5rem;
  font-size: 1.6rem;
`;

const CTA = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 540px) {
    flex-direction: row;

    a:not(:last-child) {
      margin-right: 4rem;
    }
  }
`;

function Hero() {
  const [showSecondTitle, setShowSecondTitle] = useState(false);

  return (
    <StyledSection>
      <div className="container">
        <Terminal>
          <TrafficLights />
          <TerminalContainer>
            <TitleContainer>
              <StyledChevron aria-hidden="true" />
              <Title>
                <Typist
                  {...reactTypistConfig}
                  startDelay={500}
                  onTypingDone={() => setTimeout(() => setShowSecondTitle(true), 350)}
                >
                  Hi, I&apos;m Anson<WavingHand>👋</WavingHand>
                </Typist>
              </Title>
            </TitleContainer>

            <TitleContainer hidden={!showSecondTitle}>
              <StyledChevron aria-hidden="true" />
              <Title>
                <Typist {...reactTypistConfig} startDelay={1800}>
                  I&apos;m a front-end web developer.
                </Typist>
              </Title>
            </TitleContainer>

            <Content>
              <Description>
                I’m a year 4 student from HKUST who is passionate about building websites with stunning interfaces and
                experiences.
              </Description>
              <CTA>
                <OutlineButton
                  anchor
                  color="var(--orange)"
                  hoverColor="var(--orange-hover)"
                  hrefLink={`mailto:${email}`}
                  icon={<MdMailOutline fontSize={24} />}
                >
                  Get in Touch
                </OutlineButton>
                <OutlineButton
                  anchor
                  color="var(--light-blue)"
                  hoverColor="var(--light-blue-hover)"
                  hrefLink={resumeUrl}
                  icon={<MdFileDownload fontSize={24} />}
                >
                  Resume
                </OutlineButton>
              </CTA>
            </Content>
          </TerminalContainer>
        </Terminal>
      </div>
    </StyledSection>
  );
}

export default Hero;
