import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

import navIcon1 from '../../assets/img/nav-icon1.svg';
import navIcon3 from '../../assets/img/nav-icon3.svg';
import { Github, Sun, Moon, Download } from 'lucide-react';
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from "react-router-dom";
import { useTheme } from '../../contexts/ThemeContext';

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState<string>('home');
  const [scrolled, setScrolled] = useState<boolean>(false);
  const { darkMode, toggleDarkMode } = useTheme();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value: string) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/" className="navbar-logo-text">
            ZEA
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Inicio</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Tecnologías</Nav.Link>
              <Nav.Link href="#experience" className={activeLink === 'experience' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('experience')}>Experiencia</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Proyectos</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <button
                className="theme-toggle"
                onClick={(e) => {
                  const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
                  const cx = Math.round(rect.left + rect.width / 2);
                  const cy = Math.round(rect.top + rect.height / 2);
                  toggleDarkMode(cx, cy);
                }}
                title={darkMode ? 'Modo claro' : 'Modo oscuro'}
                aria-label="toggle theme"
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/miguel-zea-39828b252/" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="LinkedIn" /></a>
                <a href="https://www.instagram.com/alejandro__zea/" target="_blank" rel="noopener noreferrer"><img src={navIcon3} alt="Instagram" /></a>
                <a href="https://github.com/MiguelZea12" target="_blank" rel="noopener noreferrer" className="github-nav-icon">
                  <Github size={18} />
                </a>
              </div>
              <a href="/cv-alejandro-zea.pdf" download="CV-Alejandro-Zea.pdf" className="btn-cv-nav">
                <Download size={15} />
                <span>CV</span>
              </a>
              <HashLink to='#connect'>
                <button className="vvd"><span>Contacto</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
