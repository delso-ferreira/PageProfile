import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { FaSun, FaMoon, FaLinkedinIn, FaGithub } from "react-icons/fa";
import getId from '../utils/getId';
import '../styles/header.css';

function Header() {
  const [mode, setMode] = useState("light");

  const onModeSwitch = () => {
    setMode(prevMode => (prevMode === "light" ? "dark" : "light"));
  };

  const handleClick = (id) => {
    getId(id);
  }


  const updateMode = () => {
    const body = document.querySelector("body");
    body.setAttribute("mode-theme", mode);
  };

   useEffect(() => {
    updateMode();
  }, [mode]);

  return (
    <div className='main-container-header'>
    <Navbar border="transparent" bg={mode === "light" ? "light" : "dark"} variant={mode === "light" ? "light" : "dark"} expand="lg">
      <Container>        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => handleClick('about')} >Sobre</Nav.Link>
            <Nav.Link onClick={() => handleClick('skills')} >Habilidades</Nav.Link>
            <Nav.Link onClick={() => handleClick('projects')}>Projetos</Nav.Link>
            <Nav.Link onClick={() => handleClick('contact')} >Contato</Nav.Link>          
          </Nav>
          <div className='btn-header-contact'>
          <Button className='btn-header-github' variant='outline-primary' href="https://github.com/delso-ferreira" target="_blank">
            <FaGithub />
          </Button>
          <Button className='btn-header-lnk' variant='outline-primary' href="https://www.linkedin.com/in/delsoferreira" target="_blank">
            <FaLinkedinIn />
          </Button>
          </div>  
          <Button className='btn-header-toogle' variant="outline-primary" onClick={onModeSwitch}>
            {mode === "light" ? <FaMoon /> : <FaSun />}
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
  );
}

export default Header;