import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ imageUrl, githubLink }) => {
  return (
    <div className="project-card">
      <a href={githubLink} target="_blank" rel="noopener noreferrer">
        <img src={imageUrl} alt="Project" />
      </a>
    </div>
  );
};

export default ProjectCard;

