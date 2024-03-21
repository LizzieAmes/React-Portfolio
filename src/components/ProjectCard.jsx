import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ imageUrl, githubLink, title }) => {
  return (
    <div className="project-card">
      <a href={githubLink} target="_blank" rel="noopener noreferrer">
        <img src={imageUrl} alt={title} />
        <div className="project-title">{title}</div>
      </a>
    </div>
  );
};

export default ProjectCard;

