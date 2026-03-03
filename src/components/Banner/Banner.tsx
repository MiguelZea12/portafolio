import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../../assets/img/yoGpt.png";
import "./banner.css";
import { ArrowRightCircle, Download } from 'react-bootstrap-icons';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Full Stack Developer", "Backend Developer", "Software Engineer", "Scrum Master" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col xs={12} md={6} xl={7} className="order-2 order-md-1">
            <TrackVisibility once>
              {({ isVisible }) =>
              <div className={isVisible ? "reveal-left" : ""}>
                <span className="tagline">Disponible para nuevas oportunidades</span>
                <h1>{`Hola, soy Alejandro`}</h1>
                <h1><span className="txt-rotate" data-period="1000" data-rotate='[ "Full Stack Developer", "Backend Developer", "Software Engineer", "Scrum Master" ]'><span className="wrap">{text}</span></span></h1>
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
