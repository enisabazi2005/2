import React from "react";
import "../Header/header.scss";

const Header = ({ onScrollToAbout, onScrollToSkills, onScrollToExperience }) => {
  return (
    <header className="header">
      <ul className="nav-list">
        <li className="nav-item" onClick={onScrollToAbout}>
          .home()
        </li>
        <li className="nav-item" onClick={onScrollToSkills}>
          .skills()
        </li>
        <li className="nav-item" onClick={onScrollToExperience}>
          .posts()
        </li>
      </ul>
    </header>
  );
};

export default Header;
