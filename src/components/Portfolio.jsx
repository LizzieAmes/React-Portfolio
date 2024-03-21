import React from 'react';
import ProjectCard from './ProjectCard';
import './Portfolio.css';
import theGreenHill from '../assets/images/thegreenhill.png';
import svgImage from '../assets/images/svg.png';
import socialMedia from '../assets/images/socialmedia.png';
import readMe from '../assets/images/README.png';
import noteTaker from '../assets/images/note-taker.png';
import eCommerce from '../assets/images/ecommerce.png';
import weatherApp from '../assets/images/weatherApp.png';

const projects = [
  {
    imageUrl: theGreenHill,
    githubLink:
      'https://github.com/ryandarton/the-green-hill-ecommerce-admin-portal',
    title: 'The Green Hill',
  },
  {
    imageUrl: svgImage,
    githubLink: 'https://github.com/LizzieAmes/SVG-Logo-Maker',
    title: 'SVG Logo Maker',
  },
  {
    imageUrl: socialMedia,
    githubLink: 'https://github.com/LizzieAmes/NoSQL-Social-Network-API-Maker',
    title: 'NoSQL Social Network API',
  },
  {
    imageUrl: readMe,
    githubLink: 'https://github.com/LizzieAmes/Professional-README-Generator',
    title: 'README Generator',
  },
  {
    imageUrl: noteTaker,
    githubLink: 'https://github.com/LizzieAmes/Express.js-Note-Taker',
    title: 'Express.js Note Taker App',
  },
  {
    imageUrl: eCommerce,
    githubLink:
      'https://github.com/LizzieAmes/Object-Relational-Mapping-ORM-Challenge-E-commerce-Back-End',
    title: 'ORM E-Commerce Back-End',
  },
  {
    imageUrl: weatherApp,
    githubLink: 'https://github.com/LizzieAmes/Weather-App',
    title: 'Weather App API',
  },
];

const Portfolio = () => {
  return (
    <div className="portfolio">
      <h1>My Work</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            imageUrl={project.imageUrl}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
