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
    const skillIcons = {
      JavaScript: (
        <svg viewBox="0 0 448 512" fill="#F7DF1E">
          <path d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"/>
        </svg>
      ),
      HTML5: (
        <svg viewBox="0 0 384 512">
          <path fill="#E34F26" d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H166.2l-4-50.6h176.4l-4.1-51.8z"/>
        </svg>
      ),
      PostgreSQL: (
        <svg viewBox="0 0 512 512">
          <path fill="#336791" d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM256 336c-44.13 0-80-35.89-80-80s35.87-80 80-80s80 35.89 80 80S300.1 336 256 336zM256 208c-26.47 0-48 21.53-48 48s21.53 48 48 48s48-21.53 48-48S282.5 208 256 208z"/>
        </svg>
      ),
      MongoDB: (
        <svg viewBox="0 0 448 512">
          <path fill="#47A248" d="M448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zM224 96c-8.8 0-16 7.2-16 16v16h-32c-8.8 0-16 7.2-16 16s7.2 16 16 16h32v128c0 8.8 7.2 16 16 16s16-7.2 16-16V160h32c8.8 0 16-7.2 16-16s-7.2-16-16-16h-32v-16c0-8.8-7.2-16-16-16zm0 320c-44.2 0-80-35.8-80-80s35.8-80 80-80s80 35.8 80 80s-35.8 80-80 80zm0-128c-26.5 0-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48s-21.5-48-48-48z"/>
        </svg>
      ),
      APIs: (
        <svg viewBox="0 0 640 512">
          <path fill="#FF6B6B" d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6S177.2 185 167 199.4l-1.1 1.6C206.5 258 202 310.9 229 337.9c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 254 438 201.1 411 174.1c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"/>
        </svg>
      ),
      AI: (
        <svg viewBox="0 0 640 512">
          <path fill="#00A8E8" d="M320 0c17.7 0 32 14.3 32 32V96H472c39.8 0 72 32.2 72 72V440c0 39.8-32.2 72-72 72H168c-39.8 0-72-32.2-72-72V168c0-39.8 32.2-72 72-72H288V32c0-17.7 14.3-32 32-32zM208 384c-8.8 0-16-7.2-16-16s7.2-16 16-16s16 7.2 16 16s-7.2 16-16 16zm128 0c-8.8 0-16-7.2-16-16s7.2-16 16-16s16 7.2 16 16s-7.2 16-16 16zm128 0c-8.8 0-16-7.2-16-16s7.2-16 16-16s16 7.2 16 16s-7.2 16-16 16zM264 256c0-22.1-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40s40-17.9 40-40zm152 40c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z"/>
        </svg>
      ),
      NodeJS: (
        <svg viewBox="0 0 448 512">
          <path fill="#339933" d="M224 508c-6.7 0-13.5-1.8-19.4-5.2l-69.8-40.5c-13.5-7.8-20.8-23.3-18.3-39c2.5-15.7 15.1-27.7 30.9-30.2c15.7-2.5 30.7 5.3 38.5 18.8l69.8 40.5c3.6 2.1 8.1 2.1 11.7 0l69.8-40.5c7.8-13.5 22.8-21.3 38.5-18.8c15.7 2.5 28.4 14.5 30.9 30.2c2.5 15.7-4.8 31.2-18.3 39l-69.8 40.5c-5.9 3.4-12.7 5.2-19.4 5.2zM81.7 421.3l-69.8-40.5c-13.5-7.8-20.8-23.3-18.3-39c2.5-15.7 15.1-27.7 30.9-30.2c15.7-2.5 30.7 5.3 38.5 18.8l69.8 40.5c3.6 2.1 8.1 2.1 11.7 0l69.8-40.5c7.8-13.5 22.8-21.3 38.5-18.8c15.7 2.5 28.4 14.5 30.9 30.2c2.5 15.7-4.8 31.2-18.3 39l-69.8 40.5c-5.9 3.4-12.7 5.2-19.4 5.2s-13.5-1.8-19.4-5.2zM19.4 341.3c-5.9-3.4-10.6-8.4-13.5-14.5c-2.9-6.1-3.7-12.9-2.3-19.4c2.5-15.7 15.1-27.7 30.9-30.2c15.7-2.5 30.7 5.3 38.5 18.8l69.8 40.5c3.6 2.1 8.1 2.1 11.7 0l69.8-40.5c7.8-13.5 22.8-21.3 38.5-18.8c15.7 2.5 28.4 14.5 30.9 30.2c2.5 15.7-4.8 31.2-18.3 39l-69.8 40.5c-5.9 3.4-12.7 5.2-19.4 5.2s-13.5-1.8-19.4-5.2L19.4 341.3zM224 0c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V32c0-17.7 14.3-32 32-32z"/>
        </svg>
      ),
      CSS3: (
        <svg viewBox="0 0 384 512">
          <path fill="#1572B6" d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H166.2l-4-50.6h176.4l-4.1-51.8z"/>
        </svg>
      ),
      NextJS: (
        <svg viewBox="0 0 180 180" fill="currentColor">
          <mask id="mask0_408_139" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
            <circle cx="90" cy="90" r="87" fill="black" stroke="white" strokeWidth="6"/>
          </mask>
          <g mask="url(#mask0_408_139)">
            <circle cx="90" cy="90" r="87" fill="black" stroke="white" strokeWidth="6"/>
            <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="url(#paint0_linear_408_139)"/>
            <rect x="115" y="54" width="12" height="72" fill="url(#paint1_linear_408_139)"/>
          </g>
          <defs>
            <linearGradient id="paint0_linear_408_139" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
              <stop stopColor="white"/>
              <stop offset="1" stopColor="white" stopOpacity="0"/>
            </linearGradient>
            <linearGradient id="paint1_linear_408_139" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse">
              <stop stopColor="white"/>
              <stop offset="1" stopColor="white" stopOpacity="0"/>
            </linearGradient>
          </defs>
        </svg>
      )
    };

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
              { name: 'Sass', logo: sass },
              { name: 'JavaScript', logo: skillIcons.JavaScript },
              { name: 'HTML5', logo: skillIcons.HTML5 },
              { name: 'PostgreSQL', logo: skillIcons.PostgreSQL },
              { name: 'MongoDB', logo: skillIcons.MongoDB },
              { name: 'APIs', logo: skillIcons.APIs },
              { name: 'AI', logo: skillIcons.AI },
              { name: 'Node.js', logo: skillIcons.NodeJS },
              { name: 'CSS3', logo: skillIcons.CSS3 },
              { name: 'Next.js', logo: skillIcons.NextJS }
            ].map((skill, index) => (
              <motion.div
                key={index}
                className="skill-box"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {typeof skill.logo === 'string' ? (
                  <img src={skill.logo} alt={skill.name} />
                ) : (
                  <div className="skill-icon">{skill.logo}</div>
                )}
                <span className="skill-name">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Skills;