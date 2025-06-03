import React from "react";
import "../About/about.scss";
import profileImage from  "../assets/enis-removebg-preview.png";

const About = () => {
    const handleContactEnis = () => { 
        window.location.href = 'https://www.linkedin.com/in/enis-abazi-9a7097241/';
    };
    return (
      <section className="about">
        <div className="about-content">
          {/* Left Column */}
          <div className="about-text">
            <h2 className="about-title">Enis Abazi</h2>
            <h3 className="about-subtitle">Full Stack Developer</h3>
            <p className="about-description">
              I am an experienced software developer with nearly two years of professional experience in web development.
              In my free time, I contemplate my existential dread and code random projects.
            </p>
            <button className="contact-button" onClick={handleContactEnis}>
              Connect with me
            </button>
          </div>
    
          {/* Right Column */}
          <div className="about-image">
            <img src={profileImage} alt="Enis" />
          </div>
        </div>
      </section>
    );
  };
  
  export default About;