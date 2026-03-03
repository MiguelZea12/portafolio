import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Mail, Linkedin, Github, MapPin } from 'lucide-react';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Enviar');
  const [status, setStatus] = useState<{ success?: boolean; message?: string }>({});

  const onFormUpdate = (category: string, value: string) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setButtonText("Enviando...");
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code === 200) {
      setStatus({ success: true, message: 'Message sent successfully' });
    } else {
      setStatus({ success: false, message: 'Something went wrong, please try again later.' });
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-stretch g-4">
          <Col xs={12} md={6}>
            <TrackVisibility once>
              {({ isVisible }) =>
                <div className={`contact-info-card ${isVisible ? "reveal-left" : ""}`}>
                  <div className="contact-avatar">AZ</div>
                  <h3 className="contact-name">Alejandro Zea</h3>
                  <p className="contact-role">Full Stack Developer · Scrum Master Certificado</p>
                  <p className="contact-bio">
                    Disponible para proyectos freelance, colaboraciones y oportunidades laborales.
                    No dudes en escribirme — siempre estoy dispuesto a explorar nuevas ideas y desafíos.
                  </p>
                  <div className="contact-links">
                    <a href="mailto:alejandrozea79@gmail.com" className="contact-link-item">
                      <Mail size={18} />
                      <span>alejandrozea79@gmail.com</span>
                    </a>
                    <a href="https://www.linkedin.com/in/miguel-zea-39828b252/" target="_blank" rel="noopener noreferrer" className="contact-link-item">
                      <Linkedin size={18} />
                      <span>linkedin.com/in/miguel-zea</span>
                    </a>
                    <a href="https://github.com/MiguelZea12" target="_blank" rel="noopener noreferrer" className="contact-link-item">
                      <Github size={18} />
                      <span>github.com/MiguelZea12</span>
                    </a>
                    <div className="contact-link-item">
                      <MapPin size={18} />
                      <span>Manabí, Ecuador</span>
                    </div>
                  </div>
                </div>
              }
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6}>
            <TrackVisibility once>
              {({ isVisible }) =>
                <div className={`contact-form-wrapper ${isVisible ? "reveal-fade" : ""}`}>
                <h2>Ponte en contacto</h2>
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col xs={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.firstName} placeholder="Nombres" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                    </Col>
                    <Col xs={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.lastName} placeholder="Apellidos" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                    </Col>
                    <Col xs={12} sm={6} className="px-1">
                      <input type="email" value={formDetails.email} placeholder="Correo Electrónico" onChange={(e) => onFormUpdate('email', e.target.value)} />
                    </Col>
                    <Col xs={12} sm={6} className="px-1">
                      <input type="tel" value={formDetails.phone} placeholder="Teléfono" onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                    </Col>
                    <Col xs={12} className="px-1">
                      <textarea rows={6} value={formDetails.message} placeholder="¿En qué puedo ayudarte?" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                      <button type="submit"><span>{buttonText}</span></button>
                    </Col>
                    {
                      status.message &&
                      <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    }
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
