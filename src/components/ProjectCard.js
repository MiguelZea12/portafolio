import { Col } from "react-bootstrap";
import { Github, ExternalLink } from "lucide-react";

export const ProjectCard = ({ title, description, imgUrl, technologies, demoUrl, githubUrl }) => {
  return (
    <Col size={12} sm={6} md={4} className="project-card-col">
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <p>{description}</p>
          {technologies && (
            <div className="project-technologies">
              {technologies.map((tech, index) => (
                <span key={index} className="tech-badge">{tech}</span>
              ))}
            </div>
          )}
          <div className="project-links">
            {demoUrl && (
              <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="project-link demo-link">
                <ExternalLink size={18} />
                Demo
              </a>
            )}
            {githubUrl && (
              <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="project-link github-link">
                <Github size={18} />
                Código
              </a>
            )}
          </div>
        </div>
      </div>
    </Col>
  )
}
