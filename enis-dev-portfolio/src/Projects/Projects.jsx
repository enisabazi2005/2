import React, { useState } from "react";
import "../Projects/projects.scss";
import { motion } from "framer-motion";
import ImageModal from "./ImageModal";

import projectImage from "../assets/dev.avif";
import DarkVault from "../assets/Samira_Hadid-removebg-preview.77d05cd007322c281b1b.png";
import MjekuAi from "../assets/wmremove-transformed.png";
import OurTok from "../assets/Screenshot 2025-05-24 194004.png";
import Coding from "../assets/coding.png";
import dv1 from "../assets/dv1.png";
import dv2 from "../assets/dv2.png";
import dv3 from "../assets/dv3.png";
import dv4 from "../assets/dv4.png";
import dv5 from "../assets/dv5.png";
import dv6 from "../assets/dv6.png";
import dv7 from "../assets/dv7.png";
import dv8 from "../assets/dv8.png";
import dv9 from "../assets/dv9.png";
import dv10 from "../assets/dv10.png";
import dv11 from "../assets/dv11.png";
import dv12 from "../assets/dv12.png";
import dv13 from "../assets/dv13.png";

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const darkVaultImages = [dv1, dv2, dv3, dv4, dv5, dv6, dv7, dv8, dv9, dv10, dv11, dv12, dv13];

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
        Projects<span>{"::latest()->get();"}</span>
      </motion.h2>

      {/* Projects Row */}
      <div className="projects-row">
        {/* Left Column - Image */}
        <div className="projects-image">
          <img src={DarkVault} alt="Vaulter" />
        </div>

        {/* Right Column - Text */}
        <div className="projects-info">
          <h1>Vaulter</h1>
          <p>
            Vaulter is a social media application that offers you a free storage use to store passwords,notes,emails and more...
          </p>
          <p>
            It has the feature of live chat, groups, pro version and more...
          </p>
          <div>
            <h1 onClick={() => setIsModalOpen(true)}>Check some images as preview...</h1>
          </div>
        </div>
      </div>
        <div className="projects-row">
        {/* Left Column - Image */}
        <div className="projects-image">
          <img src={MjekuAi} alt="Mjeku Ai" />
        </div>

        {/* Right Column - Text */}
        <div className="projects-info">
          <h1>Mjeku Ai</h1>
          <p>
            Mjeki Ai is first Ai Agent in Kosovo/Albania that offers healthcare through chat and voice. Try it out.
          </p>
          <a className="project-link-href" href="https://mjeku-ai-frontend.vercel.app/">
              Mjeku Ai Agent
          </a>
        </div>
      </div>
        <div className="projects-row">
        {/* Left Column - Image */}
        <div className="projects-image">
          <img src={OurTok} alt="Vaulter" />
        </div>

        {/* Right Column - Text */}
        <div className="projects-info">
          <h1>OurTok</h1>
          <p>
            OurTook is a social media platform that can be purcashed only for couples, which only them can share photos,videos online. You need purcashe license to access it.
          </p>
          <a className="project-link-href" href="https://ourtok-front .vercel.app">
            OurTok
          </a>
        </div>
      </div>
        <div className="projects-row">
        {/* Left Column - Image */}
        <div className="projects-image">
          <img src={projectImage} alt="cvaio" />
        </div>

        {/* Right Column - Text */}
        <div className="projects-info">
          <h1>Cvaio</h1>
          <p>
            Cvaio is a platform that lets you upload your CV and then you can edit,remove and save the same CV but now updated.
          </p>
          <span>
            It is still in development...
          </span>
        </div>
      </div>
        <div className="projects-row">
        {/* Left Column - Image */}
        <div className="projects-image">
          <img src={Coding} alt="devpulse" />
        </div>

        {/* Right Column - Text */}
        <div className="projects-info">
          <h1>Devpulse</h1>
          <p>
            Devpulse is actually my portfolio as my company that i do services for my clients, check it out
          </p>
          <a className="project-link-href" href="https://pulsedev.vercel.app/">
            DevPulse
          </a>
        </div>
      </div>

      {/* Image Modal */}
      <ImageModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        images={darkVaultImages}
      />
    </section>
  );
};

export default Projects;
