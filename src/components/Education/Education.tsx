import { useState } from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import { X } from "lucide-react";
import diplomaTercerNivel from "../../assets/img/diplomadef.jpeg";
import "./education.css";

const DEGREE = {
  file: "diplomadef.jpeg",
  name: "Ingeniero — Título de Tercer Nivel",
  image: diplomaTercerNivel,
};

export const Education = () => {
  const [showDegree, setShowDegree] = useState(false);

  return (
    <section className="education" id="education">
      <Container>
        <Row>
          <Col xs={12}>
            <TrackVisibility once>
              {({ isVisible }) => (
                <div className={isVisible ? "reveal-fade" : ""}>
                  <h2>Formación Académica</h2>
                  <p>
                    Título profesional de tercer nivel obtenido en la{" "}
                    <strong>Pontificia Universidad Católica del Ecuador (PUCE)</strong>, sede
                    Manabí — acredita mi formación como Ingeniero de Software.
                  </p>

                  <div className="degree-showcase">
                    <p className="degree-eyebrow">PUCE · Manabí</p>

                    <button
                      type="button"
                      className="degree-document"
                      onClick={() => setShowDegree(true)}
                      aria-label="Ver título de tercer nivel"
                    >
                      <div className="degree-document-glow" aria-hidden="true" />
                      <div className="degree-document-frame degree-document-frame--photo">
                        <img
                          src={DEGREE.image}
                          alt={DEGREE.name}
                          className="degree-document-preview degree-document-preview--image"
                        />
                      </div>
                    </button>

                    <span className="degree-pill">Título de Tercer Nivel</span>
                    <h3 className="degree-name">Ingeniero de Software</h3>
                    <p className="degree-caption">
                      Pontificia Universidad Católica del Ecuador — certificado oficial de grado.
                    </p>
                    <p className="degree-hint">Clic en el documento para verlo completo</p>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>

      <Modal
        show={showDegree}
        onHide={() => setShowDegree(false)}
        size="xl"
        centered
        className="cert-modal"
      >
        <div className="cert-modal-content">
          <div className="cert-modal-header">
            <span className="cert-modal-title">{DEGREE.name}</span>
            <button className="cert-modal-close" onClick={() => setShowDegree(false)}>
              <X size={20} />
            </button>
          </div>
          <div className="cert-modal-body">
            <img
              src={DEGREE.image}
              alt={DEGREE.name}
              className="cert-iframe cert-modal-image"
            />
          </div>
        </div>
      </Modal>
    </section>
  );
};
