import { About, Blog, Contact, Experience, Hero, Layout, Projects } from "../components";

export default function Home() {
  return (
    <Layout>
      <div id="home">
        <Hero />
        <About />
        <Experience />
        <Blog />
        <Projects />
        <Contact />
      </div>
    </Layout>
  );
}
