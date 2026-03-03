import { Col } from "react-bootstrap";
import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  imgUrl?: string;
  screenshots?: string[];
  screenshotType?: 'desktop' | 'mobile' | 'mixed';
  accentColor?: string;
  technologies?: string[];
  demoUrl?: string;
  githubUrl?: string;
  appStoreUrl?: string;
  playStoreUrl?: string;
}

export const ProjectCard = ({
  title,
  description,
  imgUrl,
  screenshots,
  screenshotType = 'desktop' as 'desktop' | 'mobile' | 'mixed',
  accentColor = "#6366f1",
  technologies,
  demoUrl,
  githubUrl,
  appStoreUrl,
  playStoreUrl,
}: ProjectCardProps) => {
  const initial = title.charAt(0).toUpperCase();

  return (
    <Col xs={12} sm={6} md={4} className="project-card-col">
      <div className="proj-card">
        {/* Image area */}
        <div className={`proj-img-area${screenshots && screenshots.length > 0 ? ` proj-img-area--${screenshotType}` : ''}`}>
          {screenshots && screenshots.length > 0 ? (
            <div
              className={`proj-screenshots proj-screenshots--${screenshotType}`}
              style={{ background: `linear-gradient(135deg, ${accentColor}55 0%, ${accentColor}22 100%)` }}
            >
              {screenshots.slice(0, 2).map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`${title} screenshot ${i + 1}`}
                  className={`proj-screenshot-item proj-screenshot-${i}`}
                />
              ))}
            </div>
          ) : imgUrl ? (
            <img src={imgUrl} alt={title} className="proj-img" />
          ) : (
            <div
              className="proj-img-placeholder"
              style={{
                background: `linear-gradient(135deg, ${accentColor}33 0%, ${accentColor}11 100%)`,
                borderBottom: `3px solid ${accentColor}`,
              }}
            >
              <span className="proj-placeholder-initial" style={{ color: accentColor }}>
                {initial}
              </span>
              <span className="proj-placeholder-label">{title}</span>
            </div>
          )}
        </div>

        {/* Card body */}
        <div className="proj-body">
          <h4 className="proj-title">{title}</h4>
          <p className="proj-description">{description}</p>

          {technologies && technologies.length > 0 && (
            <div className="project-technologies">
              {technologies.map((tech, index) => (
                <span key={index} className="tech-badge">{tech}</span>
              ))}
            </div>
          )}

          <div className="project-links">
            {demoUrl && (
              <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="project-link demo-link">
                <ExternalLink size={15} />
                Ver sitio
              </a>
            )}
            {appStoreUrl && (
              <a href={appStoreUrl} target="_blank" rel="noopener noreferrer" className="project-link appstore-link">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                App Store
              </a>
            )}
            {playStoreUrl && (
              <a href={playStoreUrl} target="_blank" rel="noopener noreferrer" className="project-link playstore-link">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                Play Store
              </a>
            )}
            {githubUrl && (
              <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="project-link github-link">
                <Github size={15} />
                Código
              </a>
            )}
          </div>
        </div>
      </div>
    </Col>
  );
}
