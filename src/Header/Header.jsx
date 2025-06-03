import React from "react";
import "../Header/header.scss";

const Header = ({ onScrollToAbout, onScrollToSkills, onScrollToExperience }) => {
  return (
    <header className="header">
      <div className="logo">EA</div>
      <ul className="nav-list">
        <li className="nav-item" onClick={onScrollToAbout}>
          Home
        </li>
        <li className="nav-item" onClick={onScrollToSkills}>
          Skills
        </li>
        <li className="nav-item" onClick={onScrollToExperience}>
          Experience
        </li>
      </ul>
    </header>
  );
};

export default Header;
