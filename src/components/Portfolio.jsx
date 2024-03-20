import React from 'react';
import ProjectCard from './ProjectCard';
import './Portfolio.css'; 

const projects = [
    {
        imageUrl: "url-to-project-image",
        githubLink: "https://github.com/LizzieAmes/SVG-Logo-Maker"
    },
    {
        imageUrl: "url-to-project-image",
        githubLink: "https://github.com/LizzieAmes/SVG-Logo-Maker"
    },
    {
        imageUrl: "url-to-project-image",
        githubLink: "https://github.com/LizzieAmes/SVG-Logo-Maker"
    },
    {
        imageUrl: "url-to-project-image",
        githubLink: "https://github.com/LizzieAmes/SVG-Logo-Maker"
    },
    {
        imageUrl: "url-to-project-image",
        githubLink: "https://github.com/LizzieAmes/SVG-Logo-Maker"
    },
    {
        imageUrl: "url-to-project-image",
        githubLink: "https://github.com/LizzieAmes/SVG-Logo-Maker"
    },
    {
        imageUrl: "url-to-project-image",
        githubLink: "https://github.com/LizzieAmes/SVG-Logo-Maker"
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
