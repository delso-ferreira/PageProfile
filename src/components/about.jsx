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
        <div bg={mode === "light" ? "light" : "dark"} variant={mode === "light" ? "light" : "dark"} className="main-container-about" id="about">
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
                        Desenvolvedor web fullstack.
                    </p>
                    <p className="about-text">
                    Dedicado a encontrar soluções inovadoras para problemas complexos
                    </p>
                    <div className="about-cv">
                        <Button className='bnt-header-download'>
                            Download CV
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
