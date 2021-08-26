import { IoLogoGithub, IoLogoLinkedin, IoLogoStackoverflow } from "react-icons/io5";
import styled from "styled-components";
import { repoLink, socialLinks } from "../../config";
import { ScrollToTop, Wrapper } from "../core";

const FooterWrapper = styled(Wrapper)`
  ${({ theme }) => theme.mixins.flexAlignCenter};
  flex-direction: column;

  padding-top: 3rem;
  padding-bottom: 3rem;
`;

const SocialLinks = styled.ul`
  margin-bottom: 3rem;
  ${({ theme }) => theme.mixins.flexAlignCenter};

  li:not(:last-child) {
    margin-right: 1.5rem;
  }
`;

const SocialLink = styled.a`
  padding: 1.2rem;
  display: flex;
  background-color: var(--dark-gray);
  color: var(--white);
  font-size: 2.2rem; // Icon size
  transform: scale(1);
  transition: all 250ms var(--easing);

  &:hover,
  &:focus {
    background-color: ${(props) => props.hoverColor};
    transform: scale(1.1);
  }
`;

const ScrollToTopWrapper = styled.div`
  margin-bottom: 2.5rem;
`;

const ViewSourceLink = styled.a`
  font-size: 1.4rem;
`;

const getSocialIcon = (title) => {
  switch (title) {
    case "GitHub":
      return <IoLogoGithub aria-hidden />;
    case "Stack Overflow":
      return <IoLogoStackoverflow aria-hidden />;
    case "LinkedIn":
      return <IoLogoLinkedin aria-hidden />;
    default:
      return null;
  }
};

function Footer() {
  return (
    <footer>
      <FooterWrapper paddingX_lg>
        <SocialLinks>
          {socialLinks.map((item, index) => (
            <li key={index}>
              <SocialLink
                href={item.url}
                hoverColor={item.hoverColor}
                rel="noreferrer"
                target="_blank"
                aria-label={item.title}
              >
                {getSocialIcon(item.title)}
              </SocialLink>
            </li>
          ))}
        </SocialLinks>

        <ScrollToTopWrapper>
          <ScrollToTop />
        </ScrollToTopWrapper>

        <ViewSourceLink className="text-link" href={repoLink} target="_blank" rel="noreferrer">
          View Source on GitHub
        </ViewSourceLink>
      </FooterWrapper>
    </footer>
  );
}

export default Footer;
