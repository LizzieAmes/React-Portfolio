import React from 'react';
import './Resume.css'; 

const Resume = () => {
    const resumeLink = "https://docs.google.com/document/d/e/2PACX-1vRY0-0VEmWDxDZhOnBiblq7i7MUwPpsVcyLBNknvxj75GKJr1YJtmmhokqmJNedyDJtEYazOMiyufOX/pub";
  
  const frontEndProficiencies = [
    "HTML",
    "CSS",
    "Javascript",
    "React",
    "Bootstrap"
  ];

  const backEndProficiencies = [
    "API's",
    "Node",
    "Express",
    "MySQL, Sequelize",
    "MongoDB, Mongoose",
    "Rest",
    "GraphQL"
  ];

  return (
    <div className="resume-section">
      <h1>Download My Resume ⬇ </h1>
      <a
        href={resumeLink}
        target="_blank"
        rel="noopener noreferrer"
        download="Lizzie_Ames_Resume"
        className="resume-download"
      >
        Elizabeth Ames Resume
      </a>
      <h1>Front-End Proficiencies</h1>
      <ul>
        {frontEndProficiencies.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
      <h1>Back-End Proficiencies</h1>
      <ul>
        {backEndProficiencies.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default Resume;
