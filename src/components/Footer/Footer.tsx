import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../../assets/img/nav-icon1.svg";
import navIcon3 from "../../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center justify-content-between py-4">
          <Col xs={12} sm={4} className="text-center text-sm-start mb-3 mb-sm-0">
            <span className="navbar-logo-text">ZEA</span>
          </Col>
          <Col xs={12} sm={4} className="text-center mb-3 mb-sm-0">
            <p className="footer-copy">
              &copy; {new Date().getFullYear()} Alejandro Zea. Todos los derechos reservados.
            </p>
          </Col>
          <Col xs={12} sm={4} className="text-center text-sm-end">
            <div className="social-icon justify-content-center justify-content-sm-end">
              <a href="https://www.linkedin.com/in/miguel-zea-39828b252/" target="_blank" rel="noopener noreferrer">
                <img src={navIcon1} alt="LinkedIn" />
              </a>
              <a href="https://www.instagram.com/alejandro__zea/" target="_blank" rel="noopener noreferrer">
                <img src={navIcon3} alt="Instagram" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
