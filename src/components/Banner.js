import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/zea.png";
import "../css/banner/banner.css";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
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
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeInLeft" : ""}>
                <span className="tagline">Bienvenido a mi Portafolio</span>
                <h1>{`Hola, yo soy Alejandro`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Full Stack Developer", "Backend Developer", "Software Engineer", "Scrum Master" ]'><span className="wrap">{text}</span></span></h1>
                  <p>Ingeniero de Software especializado en desarrollo de aplicaciones y sistemas web. Con experiencia en desarrollo web, aplicaciones móviles y proyectos prácticos. Certificado como Scrum Master por Platzi, con experiencia liderando equipos. Actualmente enfocado en ampliar mis habilidades como Ingeniero de Datos.</p>
                  <button onClick={() => window.location.href='#contact'} className="btn-connect">
                    Conectemos <ArrowRightCircle size={25} />
                  </button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5} className="order-1 order-md-2 text-center">
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeInRight" : ""}>
                  <img src={headerImg} alt="Alejandro Zea - Full Stack Developer"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
