import React, { useRef } from 'react'
import './App.css'
import Header from './Header/Header';
import About from './About/About';
import Skills from './Skills/Skills';
import Experience from './Experiences/Experiences';
import Projects from './Projects/Projects';
import Footer from './Footer/Footer';

function App() {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);

  const scrollToSection = (section) => {
    section.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Header
        onScrollToAbout={() => scrollToSection(aboutRef)}
        onScrollToSkills={() => scrollToSection(skillsRef)}
        onScrollToExperience={() => scrollToSection(experienceRef)}
      />
      
      {/* Sections */}
      <section ref={aboutRef} id="about">
        <About />
      </section>

      <section ref={skillsRef} id="skills">
        <Skills />
      </section>

      <section ref={experienceRef} id="experience">
        <Experience />
      </section>
      <div>
        <Projects />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App
