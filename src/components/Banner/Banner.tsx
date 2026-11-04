import { useState, useEffect, useCallback } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../../assets/img/yodef.jpeg";
// @ts-ignore
import "./banner.css";
import { ArrowRightCircle, Download } from 'react-bootstrap-icons';
import TrackVisibility from 'react-on-screen';

const TO_ROTATE = [
  "Full Stack Developer",
  "Backend Developer",
  "Ingeniero de Software",
  "Scrum Master",
] as const;
const PERIOD = 2000;

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  const tick = useCallback(() => {
    const i = loopNum % TO_ROTATE.length;
    const fullText = TO_ROTATE[i];
    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(PERIOD);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum((n) => n + 1);
      setDelta(500);
    }
  }, [loopNum, isDeleting, text]);

  useEffect(() => {
    const ticker = setInterval(tick, delta);
    return () => clearInterval(ticker);
  }, [text, delta, tick]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col xs={12} md={6} xl={7} className="order-2 order-md-1">
            <TrackVisibility once>
              {({ isVisible }) =>
              <div className={isVisible ? "reveal-left" : ""}>
                <span className="tagline">Disponible para nuevas oportunidades</span>
                <h1>{`Alejandro Zea`}</h1>
                <h1><span className="txt-rotate" data-period="1000" data-rotate='[ "Full Stack Developer", "Backend Developer", "Ingeniero de Software", "Scrum Master" ]'><span className="wrap">{text}</span></span></h1>
                  <p>Ingeniero de Software especializado en arquitectura de aplicaciones web y sistemas escalables. Experto en desarrollo Full Stack con NestJS, React y PostgreSQL. Certificado como Scrum Master con experiencia liderando equipos en entornos ágiles.</p>
                  <div className="banner-cta">
                    <button onClick={() => window.location.href='#connect'} className="btn-connect">
                      Conectemos <ArrowRightCircle size={22} />
                    </button>
                    <a href="/cv-alejandro-zea.pdf" download="CV-Alejandro-Zea.pdf" className="btn-cv">
                      Descargar CV <Download size={18} />
                    </a>
                  </div>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5} className="order-1 order-md-2 text-center">
            <TrackVisibility once>
              {({ isVisible }) =>
                <div className={isVisible ? "reveal-right" : ""}>
                  <div className="banner-img-wrapper">
                    <img src={headerImg} alt="Alejandro Zea - Full Stack Developer"/>
                  </div>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
