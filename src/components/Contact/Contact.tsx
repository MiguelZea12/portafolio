import { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Mail, Linkedin, Github, MapPin } from 'lucide-react';
import TrackVisibility from 'react-on-screen';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const formInitialDetails = {
    name: '',
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

  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;
    setButtonText("Enviando...");
    try {
      await emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID!,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY!
      );
      setFormDetails(formInitialDetails);
      setStatus({ success: true, message: '¡Mensaje enviado! Me pondré en contacto pronto.' });
    } catch {
      setStatus({ success: false, message: 'Algo salió mal. Intenta de nuevo o escríbeme directamente.' });
    } finally {
      setButtonText("Enviar");
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
                <form ref={formRef} onSubmit={handleSubmit}>
                  <input type="hidden" name="title" value="Portafolio Web" />
                  <Row>
                    <Col xs={12} className="px-1">
                      <input type="text" name="name" value={formDetails.name} placeholder="Tu nombre completo" onChange={(e) => onFormUpdate('name', e.target.value)} required />
                    </Col>
                    <Col xs={12} sm={6} className="px-1">
                      <input type="email" name="email" value={formDetails.email} placeholder="Correo Electrónico" onChange={(e) => onFormUpdate('email', e.target.value)} required />
                    </Col>
                    <Col xs={12} sm={6} className="px-1">
                      <input type="tel" name="phone" value={formDetails.phone} placeholder="Teléfono (opcional)" onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                    </Col>
                    <Col xs={12} className="px-1">
                      <textarea rows={6} name="message" value={formDetails.message} placeholder="¿En qué puedo ayudarte?" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
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
