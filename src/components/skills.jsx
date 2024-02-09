import React from "react";
import '../styles/skills.css';

function Skills() {
  return (
    <div className="main-container-skills" id='skills'>      
      <div className="full-page-section-skills">
        <   div className="skills-quadrant-1">
          <h2>Frontend</h2>
          <ul className=" skills-front">
            <strong>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Typescript</li>
            <li>React</li>
            <li>Redux</li>
            <li>Bootstrap</li>
            <li>Vite</li>
            </strong>            
          </ul>
        </div>
        <div className="skills-quadrant-2">
          <h2>Backend</h2>
          <ul className="skills-back">
            <strong>
            <li>Node</li>
            <li>Python</li>
            <li>Express</li>
            <li>MySQL</li>
            <li>RESTful API</li>
            <li>JWT</li>            
            </strong>            
          </ul>
        </div>
        <div className="skills-quadrant-3">
          <h2>Tools</h2>
          <ul className="skills-tools">
            <strong>
            <li>Sequelize</li>
            <li>Docker</li>
            <li>Git</li>            
            <li>Jest</li>
            <li>AWS</li>            
            </strong>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;
