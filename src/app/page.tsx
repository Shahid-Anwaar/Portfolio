import PortfolioHeader from '../components/PortfolioSections/PortfolioHeader';
import Hero from '../components/PortfolioSections/Hero';
import About from '../components/PortfolioSections/About';
import Skills from '../components/PortfolioSections/Skills';
import Education from '../components/PortfolioSections/Education';
import Projects from '../components/PortfolioSections/Projects';
import Experience from '../components/PortfolioSections/Experience';
import ApiShowcase from '../components/PortfolioSections/ApiShowcase';
import Contact from '../components/PortfolioSections/Contact';

export default function Home() {
  return (
    <>
      <PortfolioHeader />
      <Hero />
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="education">
        <Education />
      </div>
      <div id="projects" >
        <Projects />
      </div>
      <div id="experience" >
        <Experience />
      </div>
      <ApiShowcase />
      <div id="contact" >
        <Contact />
      </div>
    </>
  );
}
