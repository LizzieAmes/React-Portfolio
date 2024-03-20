import React from 'react';
import './Footer.css'; 
import githubLogo from '../assets/images/github.png';

const Footer = () => (
  <footer className="footer">
    <a
      href="https://github.com/LizzieAmes"
      target="_blank"
      rel="noopener noreferrer"
      
    >
      <img src="https://github.com/LizzieAmes/Lizzie-Ames-Professional-Portfolio/blob/main/assets/images/github.png" alt="GitHub" style={{width: '24px', height: '24px'}} />
      GitHub
    </a>
    <a
      href="https://www.linkedin.com/in/elizabeth-ames-2844671a6/"
      target="_blank"
      rel="noopener noreferrer"
    >
      LinkedIn
    </a>
  </footer>
);

export default Footer;
