import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';
import 'animate.css';
import "../css/experience/experience.css";

export const Experience = () => {
  const experiences = [
    {
      title: "Desarrollador Full Stack",
      company: "AFIFSYSTEMS",
      date: "Julio 2023 – Actualidad",
      description: "Desarrollo de soluciones de software a medida con arquitectura de microservicios. Implementación y optimización mejorando la escalabilidad y mantenibilidad del sistema. Gestión de pipelines CI/CD utilizando BitBucket, asegurando procesos de despliegue eficientes. Uso de Docker para contenerización y aprovechamiento de servicios AWS para soluciones robustas en la nube.",
      isRecent: true,
      techs: ["AWS", "Docker", "CI/CD", "Microservicios", "React", "NestJs", "NextJs", "TypeScript", "PHP", "PostgreSQL"] 
    },
    {
      title: "Desarrollador Full Stack",
      company: "ROBERT PONCE COMPANY",
      date: "Agosto 2024 – Septiembre 2024",
      description: "Desarrollé una aplicación innovadora que utiliza la API de OpenAI para la comparación inteligente de proformas mediante análisis avanzado de imágenes. Integración completa de IA con NestJS para optimizar procesos empresariales.",
      techs: ["PHP", "PostgreSQL", "JavaScript", "Laravel", "OpenAI API"]
    },
    {
      title: "Desarrollador Frontend",
      company: "GOBIERNO PROVINCIAL DE MANABÍ",
      date: "Febrero 2024 – Abril 2024",
      description: "Contribuí al desarrollo de una plataforma de reserva de comidas que mejoraba el control organizativo del comedor empresarial. Implementación de CRUD completo para gestión de periodos, comidas y horarios. Desarrollo de interfaz de usuario intuitiva para las reservas.",
      techs: ["Python", "Flask", "PostgreSQL", "Microservicios", "React", "Git"]
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
                              {exp.company && <><br/><span style={{fontSize: '18px', color: '#AA367C', fontWeight: '600'}}>{exp.company}</span></>}
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
