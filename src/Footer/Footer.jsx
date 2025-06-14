import React from "react";
import "../Footer/footer.scss";

// LinkedIn logo image (replace with your actual image path)
import linkedinLogo from "../assets/linkedin-logo.webp";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-text">
        <h2>Let's Connect</h2>
      </div>

      <p className="footer-info">
        I'll keep you updated with projects/thoughts.
      </p>
      <p className="footer-info">
        You can find me on LinkedIn.
      </p>
      {/* LinkedIn link and logo */}
      <a href="https://www.linkedin.com/in/enis-abazi-9a7097241/" target="_blank" rel="noopener noreferrer">
        <img src={linkedinLogo} alt="LinkedIn" className="linkedin-logo" />
      </a>
    </footer>
  );
};

export default Footer;
