import React from "react";
import "../Projects/projects.scss";
import {motion} from "framer-motion";

import projectImage from "../assets/dev.avif";

const Projects = () => {
    return (
      <section className="projects">
        {/* Title */}
        <motion.h2
          className="projects-title"
          initial={{ opacity: 0, scale: 3.77 }}
          whileInView={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 3.77 }}
          transition={{ duration: 1 }}
        >
Projects<span>{'::latest()->get();'}</span>
</motion.h2>
  
        {/* Projects Row */}
        <div className="projects-row">
          {/* Left Column - Image */}
          <div className="projects-image">
            <img src={projectImage} alt="Upcoming Big Projects" />
          </div>
  
          {/* Right Column - Text */}
          <div className="projects-info">
            <h1>Upcoming Big Projects</h1>
            <p>
              There are a lot of big projects coming up that are with backend and
              frontend. Be patient.
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default Projects;

