import React from "react";
import "../Footer/footer.scss";

// LinkedIn logo image (replace with your actual image path)
import linkedinLogo from "../assets/linkedin-logo.webp";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Title with var_dump and $footer */}
      <div className="footer-text">
        <span className="footer-var-dump">var_dump(<span>$footer</span>)</span>
        <span className="footer-value"></span>
      </div>

      {/* Paragraph with additional info */}
      <p className="footer-info">
        I'll keep you updated with projects/thoughts.
      </p>
      <p className="footer-info">
      You can stalk me there.
      </p>
      {/* LinkedIn link and logo */}
      <a href="https://www.linkedin.com/in/enis-abazi-9a7097241/" target="_blank" rel="noopener noreferrer">
        <img src={linkedinLogo} alt="LinkedIn" className="linkedin-logo" />
      </a>
    <strong className="strong">
      die;
    </strong>
    </footer>
  );
};

export default Footer;
