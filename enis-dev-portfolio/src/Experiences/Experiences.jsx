import React from "react";
import { motion } from "framer-motion";
import "../Experiences/experiences.scss";

import company1Logo from "../assets/675d7085d053b8fc1be7f6ceeb7e5adf_upload-1-removebg-preview.png";
import company2Logo from "../assets/images-removebg-preview.png";

const Experience = () => {
  return (
    <section className="experience">
      <motion.h2
        className="experience-title"
        initial={{ opacity: 0, scale: 3.77 }}
        whileInView={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 3.77 }}
        transition={{ duration: 1 }}
      >
        experiences<span className="property">::after</span>
      </motion.h2>

      <motion.p
        className="experience-description"
        initial={{ opacity: 0, scale: 3.77 }}
        whileInView={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 3.77 }}
        transition={{ duration: 1 }}
      >
        Gained an incredible amount of experience on all jobs listed below on
        how to communicate with <span>international clients</span>, work in a team,
        and I even got the chance to <span>lead a team of interns</span> and with
        programming standards overall.
      </motion.p>

      <div className="experience-list">
        <div className="experience-row">
          <div className="experience-item">
            <div className="company-logo">
              <img src={company1Logo} alt="Company 1" />
            </div>
            <div className="company-name">
              <h1>Starlabs LLC</h1>
            </div>
            <div className="job-dates">
              <p>2024 - </p>
            </div>
          </div>
        </div>
        <div className="experience-row">
          <div className="experience-item">
            <div className="company-logo">
              <img src={company2Logo} alt="Company 2" />
            </div>
            <div className="company-name">
              <h1>Innovation Academy</h1>
            </div>
            <div className="job-dates">
              <p>2021 - 2023</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
