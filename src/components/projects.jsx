import React from 'react';
import '../styles/projects.css';
import projects from '../utils/projects';

function Projects() { 
  return (
    <div className="main-container-proj" id='projects'>              
        <div className="card-container">
          {projects.map(project => (
            <div className=" card" key={project.id}>
              {/* <img src={project.imageUrl} alt={project.name}/> */}
              <div className="card-content">
                <div className='card-info'>
                <h3>{project.name}</h3>                
                <p>{project.description}</p> 
                </div>
                <div className='card-projects-links'>               
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">Ver no GitHub</a>
                <a href={project.youtubeUrl} target="_blank" rel="noopener noreferrer">Live Demo</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
}

export default Projects;
