import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/billieaseApp.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "BillEase",
      description: "Aplicación web para gestión de gastos personales con dashboard interactivo y análisis financiero.",
      imgUrl: projImg1,
      technologies: ["React", "Node.js", "MongoDB"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Planifia",
      description: "Sistema de planificación y gestión de tareas empresariales con funcionalidades colaborativas.",
      imgUrl: projImg2,
      technologies: ["Vue.js", "Express", "PostgreSQL"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Sistema Médico PUCEM",
      description: "Backend robusto para sistema de gestión hospitalaria con APIs RESTful y autenticación segura.",
      imgUrl: projImg3,
      technologies: ["NestJS", "TypeScript", "PostgreSQL"],
      demoUrl: "#",
      githubUrl: "#"
    },
  ];

  const projectsPersonal = [
    {
      title: "Utrace",
      description: "Aplicación de seguimiento de productos y logística con geolocalización en tiempo real.",
      imgUrl: projImg1,
      technologies: ["React Native", "Firebase", "Google Maps API"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "ParkingEye",
      description: "Sistema inteligente de gestión de estacionamientos con reconocimiento de placas vehiculares.",
      imgUrl: projImg2,
      technologies: ["Python", "OpenCV", "Flask", "SQLite"],
      demoUrl: "#",
      githubUrl: "#"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Proyectos</h2>
                <p>Aquí puedes explorar algunos de mis proyectos más destacados, desde aplicaciones web completas hasta sistemas backend robustos. Cada proyecto refleja mi compromiso con el código limpio, la innovación y la solución de problemas reales a través de la tecnología.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Proyectos Profesionales</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Proyectos Personales</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Certificaciones</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projectsPersonal.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <div className="certifications-content">
                        <h3>Certificaciones y Formación</h3>
                        <div className="certification-item">
                          <h4>🏆 Certificación Scrum Master - Platzi</h4>
                          <p>Metodologías ágiles, liderazgo de equipos y gestión de proyectos de software.</p>
                        </div>
                        <div className="certification-item">
                          <h4>💻 Ingeniería de Software</h4>
                          <p>Sólida base en algoritmos, estructuras de datos y patrones de diseño.</p>
                        </div>
                        <div className="certification-item">
                          <h4>📊 Formación en Ingeniería de Datos</h4>
                          <p>Actualmente expandiendo habilidades en análisis de datos y pipeline de datos.</p>
                        </div>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
