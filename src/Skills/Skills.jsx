import React from "react";
import "../Skills/skills.scss";
import {motion} from "framer-motion"

import reactLogo from "../assets/react-logo-removebg-preview.png";
import tsLogo from "../assets/typescript-logo-removebg-preview.png";
import laravelLogo from "../assets/laravel-logo-removebg-preview.png";
import sqlLogo from "../assets/mysql-logo-removebg-preview.png";
import databaseLogo from "../assets/php-logo-removebg-preview.png";
import sass from "../assets/Sass_Logo_Color.svg-removebg-preview.png";


const Skills = () => {
    return (
      <section className="skills">
        {/* Title */}
        <motion.h2
          className="skills-title"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.8 }}
        >
          <span className="property">def</span> returnSkills();
        </motion.h2>
  
        {/* Description */}
        <motion.p
          className="skills-description"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Highly skilled in <span className="property">HTML, CSS, SCSS, JavaScript, ReactJS, TypeScript, Laravel, Filament, MySQL</span>
        </motion.p>
  
        {/* Skills Grid */}
        <div className="skills-grid">
          {[reactLogo, tsLogo, laravelLogo, sqlLogo, databaseLogo, sass].map((logo, index) => (
            <motion.div
              key={index}
              className="skill-box"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <img src={logo} alt="Skill Logo" />
            </motion.div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Skills;