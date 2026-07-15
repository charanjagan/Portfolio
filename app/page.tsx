import Nav from "@/components/Nav";
import Banner from "@/components/Banner";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Roles from "@/components/Roles";
import Education from "@/components/Education";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <div id="home">
          <Banner />
          <Hero />
        </div>
        <Skills />
        <Projects />
        <Experience />
        <Roles />
        <Education />
      </main>
      <Footer />
    </>
  );
}
