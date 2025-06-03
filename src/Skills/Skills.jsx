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
        <div className="skills-content">
          <h2 className="skills-title">My Skills</h2>
          <p className="skills-description">
            Highly skilled in modern web technologies and frameworks, with a focus on creating
            responsive and user-friendly applications.
          </p>
  
          <div className="skills-grid">
            {[
              { name: 'React', logo: reactLogo },
              { name: 'TypeScript', logo: tsLogo },
              { name: 'Laravel', logo: laravelLogo },
              { name: 'MySQL', logo: sqlLogo },
              { name: 'PHP', logo: databaseLogo },
              { name: 'Sass', logo: sass }
            ].map((skill, index) => (
              <motion.div
                key={index}
                className="skill-box"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <img src={skill.logo} alt={skill.name} />
                <span className="skill-name">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Skills;