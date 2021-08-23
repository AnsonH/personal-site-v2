import { MdHome } from "react-icons/md";
import styled from "styled-components";
import { Layout } from "../components";
import { OutlineButton } from "../components/core";

const Content = styled.div`
  min-height: calc(100vh - 5rem); // 5rem is height of <Header />
  padding-bottom: 5rem; // Offset 5rem for header height
  ${({ theme }) => theme.mixins.flexAlignCenter};
  justify-content: center;
  flex-direction: column;
`;

const StyledH1 = styled.h1`
  margin: 0;
  color: var(--red);
  line-height: 1;
  // 12rem for viewport width<=480px , 12~20rem for 480~1080px, 20rem for >=1080px
  font-size: clamp(12rem, 5.6rem + 13.33vw, 20rem);
`;

const StyledH2 = styled.h2`
  margin: 0;
  line-height: 1;
  // 3.5rem for viewport width<=480px, 3.5rem~5.5rem for 480~1080px, 5.5rem for >=1080px
  font-size: clamp(3.5rem, 1.9rem + 3.33vw, 5.5rem);
`;

const Subtitle = styled.p`
  margin: 6rem 2.5rem 3rem;
  color: var(--white);
  text-align: center;
  // 1.5rem for viewport width<480px, 1.5~1.8rem for 480~1080px, 1.8rem for >=1080px
  font-size: clamp(1.5rem, 1.26rem + 0.5vw, 1.8rem);
`;

function NotFoundPage() {
  return (
    <Layout>
      <Content>
        <StyledH1>404</StyledH1>
        <StyledH2>Page not found</StyledH2>
        <Subtitle>The page you&apos;re looking for does not exist &#x1F641;</Subtitle>
        <OutlineButton
          link
          to="/"
          color="var(--light-blue)"
          hoverColor="var(--light-blue-hover)"
          icon={<MdHome fontSize={24} />}
        >
          Go Home
        </OutlineButton>
      </Content>
    </Layout>
  );
}

export default NotFoundPage;
