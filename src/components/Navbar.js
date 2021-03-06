import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faGithub} from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {

  const githubIcon = <FontAwesomeIcon  size="2x" icon={faGithub} />; 
  const linkedinIcon = <FontAwesomeIcon size="2x" icon={faLinkedin} />; 

  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">    
      <div className="container-fluid">
        <a className="name-link" href="#home">IRYNA KYSIL - PORTFOLIO</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <FontAwesomeIcon icon={faBars} style={{ color: "black" }}/>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            
            <li className="nav-item">
              <a className="nav-link" href="#about" onClick={() => {
                // 1 find target element
                // calculate it's top
                // apply offset 140
                // scrollTo new top
              }}>
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">
                Projects
              </a>
            </li>            
            <li className="nav-item">
            <a href="https://github.com/IrynaKysil" >{githubIcon}</a>
            </li>
            <li className="nav-item">
            <a href="https://www.linkedin.com/in/iryna-kysil/" >{linkedinIcon}</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
