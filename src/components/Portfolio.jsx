import React from 'react';
import ProjectCard from './ProjectCard';
import './Portfolio.css'; 

const projects = [
    {
        imageUrl: "https://drive.google.com/uc?export=view&id=1Cr5mKjcfE0V1C4t5-xdBoU-jbZOB9bUQ",
        githubLink: "https://github.com/LizzieAmes/SVG-Logo-Maker"
    },
    {
        imageUrl: "https://drive.google.com/file/d/1Cr5mKjcfE0V1C4t5-xdBoU-jbZOB9bUQ/view?usp=sharing",
        githubLink: "https://github.com/LizzieAmes/NoSQL-Social-Network-API-Maker"
    },
    {
        imageUrl: "https://github.com/LizzieAmes/Lizzie-Ames-Professional-Portfolio/blob/main/assets/images/github.png",
        githubLink: "https://github.com/LizzieAmes/Professional-README-Generator"
    },
    {
        imageUrl: "url-to-project-image",
        githubLink: "https://github.com/LizzieAmes/Express.js-Note-Taker"
    },
    {
        imageUrl: "url-to-project-image",
        githubLink: "https://github.com/LizzieAmes/Object-Relational-Mapping-ORM-Challenge-E-commerce-Back-End"
    },
    {
        imageUrl: "url-to-project-image",
        githubLink: "https://github.com/LizzieAmes/Weather-App"
    },
    {
        imageUrl: "url-to-project-image",
        githubLink: "https://github.com/LizzieAmes/Coding-Quiz"
    },
];

const Portfolio = () => {
  return (
    <div className="portfolio">
      <h1>My Portfolio</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
