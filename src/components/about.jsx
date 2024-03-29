import React, { useState, useEffect } from "react";
import '../styles/about.css';
import { Button } from 'react-bootstrap';

function About() {
    const [mode, setMode] = useState("light");

    useEffect(() => {
        const body = document.querySelector("body");
        setMode(body.getAttribute("mode-theme") || "light");
    }, []);

    return (
        <div className= "main-container-about" id="about" bg={mode === "light" ? "light" : "dark"} variant={mode === "light" ? "light" : "dark"}>
            <div className="full-page-section">
                <div className="about-intro">
                    <div className='about-name-container'>
                        <p className='about-name-start'>
                            Olá, eu sou o
                        </p>
                        <p className="about-name">
                            Delso
                        </p>
                    </div>
                    <p className="about-fs">
                        Desenvolvedor web fullstack
                    </p>
                    <p className="about-text">
                        Dedicado a encontrar soluções inovadoras para problemas complexos
                    </p>
                    <div className="about-cv">
                        <a href="https://drive.google.com/file/d/1A62dXx_uOfgLFtzyOu9rgrk50svRvnNf/view?usp=drive_link" download='ResumeOfficial.pdf' target="blank">
                            <Button className='bnt-header-download'>
                                Download CV
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default About;
