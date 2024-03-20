import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import profilePicture from '../assets/images/profilepicture.png';

const Header = () => (
  <header className="header">
    <div className="brand-name">
      <img src={profilePicture} alt="Profile Picture" className="profile-picture"/>
    </div>
    <nav className="navigation">
      <Link to="/">About Me</Link>
      <Link to="/portfolio">Portfolio</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/resume">Resume</Link>
    </nav>
  </header>
);

export default Header;
