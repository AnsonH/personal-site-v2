import { About, Contact, Experience, Hero, Layout, Projects } from "../components";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </Layout>
  );
}
