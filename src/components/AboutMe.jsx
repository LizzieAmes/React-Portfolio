import React from 'react';
import './AboutMe.css';
import { Link } from 'react-router-dom';

const AboutMe = () => {
  return (
    <div className="about-me">
      <div className="text-container">
        <h1>Hi, my name is</h1>
        <h2>Lizzie Ames</h2>
        <h3>Full Stack Developer🪐</h3>
        <p>
          Welcome to my portfolio! I'm a passionate web developer with
          experience in building web applications from the ground up. I love
          tackling challenges and learning new technologies.
        </p>
        <Link to="/contact" className="contact-me-button">
          Contact Me
        </Link>
      </div>
    </div>
  );
};

export default AboutMe;
