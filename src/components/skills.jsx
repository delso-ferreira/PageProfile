import React from "react";
import '../styles/skills.css';

function Skills() {
  return (
    <div className="main-container-skills" id='skills'>            
        <   div className="skills-quadrant-1">
          <h2>Frontend</h2>
          <div className="ul-list">
          <ul className=" skills-front">            
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Typescript</li>
            <li>React</li>
            <li>Redux</li>
            <li>Bootstrap</li>
            <li>Vite</li>            
          </ul>
          </div>
        </div>
        <div className="skills-quadrant-2">
          <h2>Backend</h2>
          <ul className="skills-back">           
            <li>Node</li>
            <li>Python</li>
            <li>C#</li>
            <li>Express</li>
            <li>MySQL</li>
            <li>RESTful API</li>
            <li>JWT</li>            
            
          </ul>
        </div>
        <div className="skills-quadrant-3">
          <h2>Tools</h2>
          <ul className="skills-tools">
            
            <li>Sequelize</li>
            <li>Docker</li>
            <li>Git</li>            
            <li>Jest</li>
            <li>AWS</li>            
            
          </ul>
        </div>
      </div>    
  );
}

export default Skills;
