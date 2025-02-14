import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';
import 'animate.css';
import "../css/experience/experience.css";

export const Experience = () => {
  const experiences = [
    {
      title: "Desarrollador Full Stack – AFIFSYSTEMS",
      date: "Julio 2023 – Actualidad",
      description: "Desarrollo de soluciones de software a medida. Implementación y optimización de una arquitectura de microservicios, mejorando la escalabilidad y mantenibilidad del sistema. Experiencia en la gestión de pipelines CI/CD utilizando BitBucket, asegurando procesos de despliegue eficientes y sin problemas. Uso de Docker para la contenerización y aprovechamiento de servicios de AWS para soluciones robustas en la nube.",
      isRecent: true,
      techs: ["AWS", "Docker", "CI/CD", "Microservicios", "React", "NestJs", "NextJs", "Typescript", "PHP", "postgreSQL"] 
    },
    {
      title: "Desarrollador Full Stack – ROBERT PONCE COMPANY",
      date: "Agosto 2024 – Septiembre 2024",
      description: "Desarrollé una aplicación que utiliza la API de OpenAI para la comparación de proformas mediante el análisis de imágenes. Aprendí sobre la API de OpenAI y su integración en proyectos con NestJS.",
      techs: ["PHP", "PostgreSQL", "Javascript", "Laravel"]
    },
    {
      title: "Desarrollador Frontend – GOBIERNO PROVINCIAL DE MANABI",
      date: "Febrero 2024 – Abril 2024",
      description: "Contribuí al desarrollo de una plataforma de reserva de comidas que mejoraba el control organizativo, permitiendo a los usuarios reservar comidas para el comedor de la empresa. Mis responsabilidades incluyeron la implementación de CRUD para la gestión de periodos, comidas y horarios en la sección de administración. También colaboré en el desarrollo de la interfaz de usuario principal para las reservas de comida.",
      techs: ["Python", "Flask", "PostgreSQL", "Microservicios", "React", "GIT"]
    }
  ];

  return (
    <section className="experience" id="experience">
      <Container>
        <Row>
          <Col xs={12} md={10} lg={8} className="mx-auto">
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeInUp" : ""}>
                  <h2>Experiencia Profesional</h2>
                  <ul className="timeline">
                    {experiences.map((exp, index) => (
                      <li key={index} className="timeline-item">
                      <div className="timeline-content">
                        <div className="timeline-header">
                          <h3>
                            {exp.title}
                            {exp.isRecent && <span className="recent-badge">Actual</span>}
                          </h3>
                          <span className="timeline-date">{exp.date}</span>
                        </div>
                        <p className="timeline-description">{exp.description}</p>
                        {exp.techs && (
                          <div className="tech-badges">
                            {exp.techs.map((tech, techIndex) => (
                              <span key={techIndex} className="tech-badge">{tech}</span>
                            ))}
                          </div>
                        )}
                      </div>
                    </li>
                    ))}
                  </ul>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
