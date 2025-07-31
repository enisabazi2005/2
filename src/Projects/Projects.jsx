import React, { useState } from "react";
import "../Projects/projects.scss";
import { motion } from "framer-motion";
import ImageModal from "./ImageModal";

import DarkVault from "../assets/Samira_Hadid-removebg-preview.77d05cd007322c281b1b.png";
import MjekuAi from "../assets/wmremove-transformed.png";
import OurTok from "../assets/Screenshot 2025-05-24 194004.png";
import Coding from "../assets/coding.png";
import projectImage from "../assets/dev.avif";
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

import recipeAiImage from "../assets/3.png"; 
import snapFitImage from "../assets/4.png"; 
import wifiKosovaImage from "../assets/5.png"; 
import novaTutorImage from "../assets/6.png"; 

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const darkVaultImages = [dv1, dv2, dv3, dv4, dv5, dv6, dv7, dv8, dv9, dv10, dv11, dv12, dv13];

  const projects = [
    {
      id: 1,
      title: "Vaulter",
      description: "Vaulter is a social media application that offers you a free storage use to store passwords, notes, emails and more. It has the feature of live chat, groups, pro version and more.",
      image: DarkVault,
      link: null,
      isUpcoming: false,
      hasGallery: true
    },
    {
      id: 2,
      title: "RecipeAI",
      description: "RecipeAI is an AI-powered tool that with upload of 1 ingredient you get a lot of recipes in seconds, saving you time from searching and watching endless boring videos.",
      image: recipeAiImage,
      link: "https://ai-recipe.vercel.app/",
      isUpcoming: false,
      hasGallery: false
    },
    {
      id: 3,
      title: "Mjeku Ai",
      description: "Mjeki Ai is first Ai Agent in Kosovo/Albania that offers healthcare through chat and voice. Try it out.",
      image: MjekuAi,
      link: "https://mjeku-ai-frontend.vercel.app/",
      isUpcoming: false,
      hasGallery: false
    },
    {
      id: 4,
      title: "SnapFit",
      description: "Upcoming project for virtual clothing - upload a photo of yourself and you can wear different kind of clothes virtually with real-life lookalike 100% accuracy.",
      image: snapFitImage,
      link: null,
      isUpcoming: true,
      hasGallery: false
    },
    {
      id: 5,
      title: "WifiKosovaMap",
      description: "A tool for finding WiFi passwords in Kosovo. Users can save passwords of different WiFi's they know, and others can see them. Locate yourself to see nearby WiFi passwords saved by other users.",
      image: wifiKosovaImage,
      link: "https://wifikosovamap.online/",
      isUpcoming: false,
      hasGallery: false
    },
    {
      id: 6,
      title: "OurTok",
      description: "OurTok is a social media platform exclusively for couples to share photos and videos. Requires purchase of a license to access.",
      image: OurTok,
      link: "https://ourtok-front.vercel.app",
      isUpcoming: false,
      hasGallery: false
    },
    {
      id: 7,
      title: "FoljeAi",
      description: "Upcoming AI service to generate phone numbers with AI-powered brains that can be trained, customized, and placed in local businesses to provide 24/7 assistance instead of traditional 9-5 support.",
      image: projectImage,
      link: null,
      isUpcoming: true,
      hasGallery: false
    },
    {
      id: 8,
      title: "Cvaio",
      description: "Cvaio is a platform that lets you upload your CV and then edit, remove and save updated versions. Still in development.",
      image: projectImage,
      link: null,
      isUpcoming: false,
      hasGallery: false
    },
    {
      id: 9,
      title: "NovaTutor",
      description: "An AI bot with GPT-3.5 trained to read images containing code (which typically isn't possible with 3.5) along with many other modifications.",
      image: novaTutorImage,
      link: "https://novatutor.vercel.app/",
      isUpcoming: false,
      hasGallery: false
    },
    {
      id: 10,
      title: "Devpulse",
      description: "My portfolio/company offering services to clients. Showcases my development work and services.",
      image: Coding,
      link: "https://pulsedev.vercel.app/",
      isUpcoming: false,
      hasGallery: false
    }
  ];

  return (
    <section className="projects" id="projects">
      <motion.h2
        className="projects-title"
        initial={{ opacity: 0, scale: 3.77 }}
        whileInView={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 3.77 }}
        transition={{ duration: 1 }}
      >
        My <span>Projects</span>
      </motion.h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <motion.div 
            className="project-card"
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: project.id * 0.1 }}
            whileHover={{ scale: 1.03 }}
          >
            <div className="project-image">
              <img src={project.image} alt={project.title} />
              {project.isUpcoming && <div className="upcoming-badge">Coming Soon</div>}
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              
              <div className="project-links">
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                    Visit Project
                  </a>
                )}
                {project.hasGallery && (
                  <button className="gallery-button" onClick={() => setIsModalOpen(true)}>
                    View Gallery
                  </button>
                )}
                {!project.link && !project.hasGallery && !project.isUpcoming && (
                  <span className="project-status">In Development</span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <ImageModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        images={darkVaultImages}
      />
    </section>
  );
};

export default Projects;