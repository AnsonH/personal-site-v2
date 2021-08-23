import { useEffect, useRef, useState } from "react";
import { MdContentCopy, MdMailOutline } from "react-icons/md";
import { CSSTransition } from "react-transition-group";
import ScrollReveal from "scrollreveal";
import styled from "styled-components";
import { email, srConfig } from "../../../config";
import { Alert, OutlineButton, Wrapper } from "../../core";
import { usePrefersReducedMotion } from "../../../hooks";
import { bp } from "../../../styles";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Message = styled.p`
  margin-bottom: 5rem;
  text-align: center;

  @media ${bp.lg} {
    max-width: 60rem;
  }
`;

const CopyMailButton = styled.button`
  margin-top: 2rem;
  padding: 0.5rem 0.8rem;
  display: flex;
  align-items: center;
  color: var(--light-gray);
  transition: all 200ms var(--easing);

  &:hover,
  &:focus {
    color: var(--orange);
  }

  .copy-btn-text {
    margin-left: 1.2rem;
    font-family: "Ubuntu", var(--font-sans-system);
    font-size: 1.5rem;
    text-decoration: underline;
  }
`;

const AlertWrapper = styled.div`
  height: 4.5rem;
  margin-top: 1rem;
`;

function Contact() {
  const [showCopySuccess, setShowCopySuccess] = useState(false);
  const [showCopyFail, setShowCopyFail] = useState(false);

  const prefersReducedMotion = usePrefersReducedMotion();
  const contactRef = useRef();

  useEffect(() => {
    if (!prefersReducedMotion) {
      ScrollReveal().reveal(contactRef.current, srConfig.popUp);
    }
  }, []);

  const handleCopyBtnClick = () => {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        setShowCopySuccess(true);
        setTimeout(() => setShowCopySuccess(false), 2000);
      })
      .catch(() => {
        setShowCopyFail(true);
        setTimeout(() => setShowCopyFail(false), 2000);
      });
  };

  return (
    <section id="contact" ref={contactRef}>
      <Wrapper paddingX_lg paddingY>
        <h2>Contact Me</h2>
        <Content>
          <Message>
            Thank you for visiting my site! If you’re looking for a front-end developer, have a question or want to say
            hi, feel free to shoot me an email!
          </Message>

          <OutlineButton
            anchor
            color="var(--orange)"
            hoverColor="var(--orange-hover)"
            hrefLink={`mailto:${email}`}
            icon={<MdMailOutline fontSize={24} />}
          >
            Get in Touch
          </OutlineButton>
          <CopyMailButton onClick={handleCopyBtnClick}>
            <MdContentCopy fontSize={24} aria-hidden />
            <span className="copy-btn-text">Copy Email Address</span>
          </CopyMailButton>

          <AlertWrapper>
            <CSSTransition in={showCopySuccess} classNames="zoom-in" timeout={250} unmountOnExit>
              <Alert variant="success">Copied to clipboard</Alert>
            </CSSTransition>
            <CSSTransition in={showCopyFail} classNames="zoom-in" timeout={250} unmountOnExit>
              <Alert variant="error">Copy failed. Try again!</Alert>
            </CSSTransition>
          </AlertWrapper>
        </Content>
      </Wrapper>
    </section>
  );
}

export default Contact;
