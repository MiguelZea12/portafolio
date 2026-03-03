import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';
import { Briefcase, Calendar } from 'lucide-react';
import "./experience.css";

export const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Altiorem S.A.S",
      date: "Agosto 2025 – Actualidad",
      description: "Desarrollo de soluciones de software a medida como profesional independiente en modalidad remota. Diseño e implementación de arquitecturas escalables con contenedores y orquestación en Kubernetes. Integración de APIs REST, gestión de bases de datos y despliegues en entornos cloud.",
      isRecent: true,
      techs: ["Kubernetes", "PostgreSQL", "Docker", "AWS", "React", "TypeScript", "NestJS", "Git"]
    },
    {
      title: "Desarrollador Full Stack",
      company: "AFIFSYSTEMS S.A.S",
      date: "Julio 2023 – Agosto 2025",
      description: "Desarrollo de soluciones de software a medida con arquitectura de microservicios. Implementación y optimización mejorando la escalabilidad y mantenibilidad del sistema. Gestión de pipelines CI/CD en BitBucket, orquestación con Kubernetes y uso de Docker con servicios AWS para soluciones robustas en la nube.",
      techs: ["Kubernetes", "AWS", "Docker", "CI/CD", "React", "NestJS", "NextJS", "TypeScript", "PHP", "PostgreSQL"]
    },
    {
      title: "Desarrollador Full Stack",
      company: "Robert Ponce Company S.A.S",
      date: "Agosto 2024 – Septiembre 2024",
      description: "Desarrollé una aplicación con arquitectura de microservicios que integra la API de OpenAI para comparación inteligente de proformas mediante análisis avanzado de imágenes. Implementación de pipelines de procesamiento con NestJS y Kubernetes para optimizar procesos empresariales en producción.",
      techs: ["Kubernetes", "PHP", "PostgreSQL", "JavaScript", "Laravel", "NestJS", "OpenAI API"]
    },
    {
      title: "Desarrollador Full Stack",
      company: "Prefectura de Manabí",
      date: "Febrero 2024 – Abril 2024",
      description: "Contribuí al desarrollo de una plataforma de reserva de comidas que mejoraba el control organizativo del comedor empresarial. CRUD completo para gestión de periodos, comidas y horarios con interfaz de usuario intuitiva.",
      techs: ["Python", "Flask", "PostgreSQL", "React", "Git"]
    }
  ];

  return (
    <section className="experience" id="experience">
      <Container>
        <TrackVisibility once>
          {({ isVisible }) => (
            <div className={isVisible ? "reveal-up" : ""}>
              <h2 className="experience-title">Experiencia Profesional</h2>

              <div className="timeline-centered">
                {experiences.map((exp, index) => (
                  <div key={index} className={`tl-item ${index % 2 === 0 ? 'tl-left' : 'tl-right'}`}>
                    <div className="tl-dot">
                      <Briefcase size={14} />
                    </div>
                    <div className="tl-card">
                      <div className="tl-card-header">
                        <div>
                          <h3 className="tl-title">{exp.title}</h3>
                          <span className="tl-company">{exp.company}</span>
                        </div>
                        {exp.isRecent && <span className="tl-badge">Actual</span>}
                      </div>
                      <div className="tl-date">
                        <Calendar size={13} />
                        <span>{exp.date}</span>
                      </div>
                      <p className="tl-description">{exp.description}</p>
                      {exp.techs && (
                        <div className="tl-techs">
                          {exp.techs.map((tech, ti) => (
                            <span key={ti} className="tech-badge">{tech}</span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </TrackVisibility>
      </Container>
    </section>
  );
};
