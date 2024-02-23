import React from "react";
import Header from "./components/Header";
import About from "./components/about";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Contact from "./components/contact";
import Footer from "./components/footer";
 import './styles/themes/dark-theme.css';
import './styles/themes/light-theme.css'; 


class App extends React.Component{

  render() {
    return (
      <>
        <Header/>        
        <About/>
        <Skills />
        <Projects />
        <Contact />
         <Footer /> 
      </>
    );
  }
}

export default App;