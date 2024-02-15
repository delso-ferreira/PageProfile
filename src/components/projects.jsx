import React from 'react';
import '../styles/projects.css';
import projects from '../utils/projects.json';

function Projects() { 
  return (
    <div className="main-container-proj" id='projects'>              
        <div className="card-container">
          {projects.map(project => (
            <div className="card" key={project.id}>
              <img src={project.imageUrl} alt={project.name} />
              <div className="card-content">
                <h3>{project.name}</h3>
                <strong>
                <p>{project.description}</p>
                </strong>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">Ver no GitHub</a>
                <a href={project.youtubeUrl} target="_blank" rel="noopener noreferrer">Live Demo</a>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
}

export default Projects;
