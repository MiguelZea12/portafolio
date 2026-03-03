import { useState } from "react";
import { Container, Row, Col, Tab, Nav, Modal } from "react-bootstrap";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import colorSharp2 from "../../assets/img/color-sharp2.png";
import TrackVisibility from 'react-on-screen';
import { X, FileText, Download } from "lucide-react";

// ─── Project screenshot imports ──────────────────────────────────────────────
import billease1 from "../../assets/img/billease/image.png";
import billease2 from "../../assets/img/billease/image1.png";
import planifia1 from "../../assets/img/planifia/planifia1.jpeg";
import planifia2 from "../../assets/img/planifia/planifia2.jpeg";
import lupiopet1 from "../../assets/img/lupiopet/image.png";
import lupiopet2 from "../../assets/img/lupiopet/image2.png";
import empaquetado1 from "../../assets/img/empaquetado/image.png";
import empaquetado2 from "../../assets/img/empaquetado/image1.png";
import cobranza1 from "../../assets/img/cobranza/image.png";
import cobranza2 from "../../assets/img/cobranza/image copy.png";
import novapos1 from "../../assets/img/novaPOS/image.png";
import novapos2 from "../../assets/img/novaPOS/image1.png";

// ─── PDF asset map (webpack resolves these to correct URLs) ──────────────────
const PDF_MAP: Record<string, string> = {
  "diploma-ai.pdf":                        require("../../assets/certificados/diploma-ai.pdf"),
  "diploma-arrays.pdf":                    require("../../assets/certificados/diploma-arrays.pdf"),
  "diploma-basico-javascript.pdf":         require("../../assets/certificados/diploma-basico-javascript.pdf"),
  "diploma-configuracion-windows.pdf":     require("../../assets/certificados/diploma-configuracion-windows.pdf"),
  "diploma-c-plus-plus.pdf":               require("../../assets/certificados/diploma-c-plus-plus.pdf"),
  "diploma-data-viz.pdf":                  require("../../assets/certificados/diploma-data-viz.pdf"),
  "diploma-equipos-agiles.pdf":            require("../../assets/certificados/diploma-equipos-agiles.pdf"),
  "diploma-estadistica-probabilidad.pdf":  require("../../assets/certificados/diploma-estadistica-probabilidad.pdf"),
  "diploma-excel-basico.pdf":              require("../../assets/certificados/diploma-excel-basico.pdf"),
  "diploma-excel-intermedio.pdf":          require("../../assets/certificados/diploma-excel-intermedio.pdf"),
  "diploma-fundamentos-db.pdf":            require("../../assets/certificados/diploma-fundamentos-db.pdf"),
  "diploma-fundamentos-ingenieria-datos.pdf": require("../../assets/certificados/diploma-fundamentos-ingenieria-datos.pdf"),
  "diploma-historias-usuario-scrum.pdf":   require("../../assets/certificados/diploma-historias-usuario-scrum.pdf"),
  "diploma-javascript-fundamentos.pdf":    require("../../assets/certificados/diploma-javascript-fundamentos.pdf"),
  "diploma-javascript-poo.pdf":            require("../../assets/certificados/diploma-javascript-poo.pdf"),
  "diploma-metricas-2min.pdf":             require("../../assets/certificados/diploma-metricas-2min.pdf"),
  "diploma-oop.pdf":                       require("../../assets/certificados/diploma-oop.pdf"),
  "diploma-php.pdf":                       require("../../assets/certificados/diploma-php.pdf"),
  "diploma-python-basico.pdf":             require("../../assets/certificados/diploma-python-basico.pdf"),
  "diploma-python-funciones.pdf":          require("../../assets/certificados/diploma-python-funciones.pdf"),
  "diploma-python-fundamentos.pdf":        require("../../assets/certificados/diploma-python-fundamentos.pdf"),
  "diploma-rol-de-scrum-master.pdf":       require("../../assets/certificados/diploma-rol-de-scrum-master.pdf"),
  "diploma-scrum-master.pdf":              require("../../assets/certificados/diploma-scrum-master.pdf"),
  "diploma-scrum.pdf":                     require("../../assets/certificados/diploma-scrum.pdf"),
  "diploma-typescript-22.pdf":             require("../../assets/certificados/diploma-typescript-22.pdf"),
  "diploma-visualizacion-datos.pdf":       require("../../assets/certificados/diploma-visualizacion-datos.pdf"),
  // Logros & Talleres
  "diploma-hultprize.pdf":                 require("../../assets/certificados/diploma-hultprize.pdf"),
  "diploma-capacitador-viz-datos.pdf":     require("../../assets/certificados/diploma-capacitador-viz-datos.pdf"),
  "diploma-capacitador-depuracion.pdf":    require("../../assets/certificados/diploma-capacitador-depuracion.pdf"),
};

// ─── Certificate data ────────────────────────────────────────────────────────

interface Cert {
  file: string;
  name: string;
  category: string;
  color: string;
}

const CERTS: Cert[] = [
  // Scrum & Ágil
  { file: "diploma-scrum.pdf",                   name: "Scrum",                          category: "Scrum & Ágil",   color: "#7c3aed" },
  { file: "diploma-scrum-master.pdf",             name: "Scrum Master",                   category: "Scrum & Ágil",   color: "#7c3aed" },
  { file: "diploma-rol-de-scrum-master.pdf",      name: "Rol de Scrum Master",            category: "Scrum & Ágil",   color: "#7c3aed" },
  { file: "diploma-historias-usuario-scrum.pdf",  name: "Historias de Usuario",           category: "Scrum & Ágil",   color: "#7c3aed" },
  { file: "diploma-equipos-agiles.pdf",           name: "Equipos Ágiles",                 category: "Scrum & Ágil",   color: "#7c3aed" },
  { file: "diploma-metricas-2min.pdf",            name: "Métricas en 2 Min",              category: "Scrum & Ágil",   color: "#7c3aed" },
  // JavaScript
  { file: "diploma-basico-javascript.pdf",        name: "JavaScript Básico",              category: "JavaScript",     color: "#c9a800" },
  { file: "diploma-javascript-fundamentos.pdf",   name: "JavaScript desde Cero  ",         category: "JavaScript",     color: "#c9a800" },
  { file: "diploma-javascript-poo.pdf",           name: "JavaScript POO",                 category: "JavaScript",     color: "#c9a800" },
  { file: "diploma-arrays.pdf",                   name: "Arrays",                         category: "JavaScript",     color: "#c9a800" },
  // Python
  { file: "diploma-python-basico.pdf",            name: "Python Básico",                  category: "Python",         color: "#3b82f6" },
  { file: "diploma-python-fundamentos.pdf",       name: "Python Fundamentos",             category: "Python",         color: "#3b82f6" },
  { file: "diploma-python-funciones.pdf",         name: "Python Funciones",               category: "Python",         color: "#3b82f6" },
  // TypeScript
  { file: "diploma-typescript-22.pdf",            name: "TypeScript",                     category: "TypeScript",     color: "#06b6d4" },
  // Data & Bases
  { file: "diploma-fundamentos-db.pdf",           name: "Fundamentos de BD",              category: "Data & Bases",   color: "#10b981" },
  { file: "diploma-fundamentos-ingenieria-datos.pdf", name: "Ingeniería de Datos",        category: "Data & Bases",   color: "#10b981" },
  { file: "diploma-data-viz.pdf",                 name: "Data Viz",                       category: "Data & Bases",   color: "#10b981" },
  { file: "diploma-visualizacion-datos.pdf",      name: "Visualización de Datos",         category: "Data & Bases",   color: "#10b981" },
  { file: "diploma-estadistica-probabilidad.pdf", name: "Estadística y Probabilidad",     category: "Data & Bases",   color: "#10b981" },
  // Logros & Talleres
  { file: "diploma-hultprize.pdf",                name: "Hultprize — 2° Lugar",           category: "Logros & Talleres", color: "#f97316" },
  { file: "diploma-capacitador-viz-datos.pdf",    name: "Capacitador: Visualización de Datos — PUCE-M", category: "Logros & Talleres", color: "#f97316" },
  { file: "diploma-capacitador-depuracion.pdf",   name: "Capacitador: Depuración de Datos — PUCE-M",   category: "Logros & Talleres", color: "#f97316" },
  // Otros
  { file: "diploma-ai.pdf",                       name: "Inteligencia Artificial",        category: "Otros",          color: "#6366f1" },
  { file: "diploma-oop.pdf",                      name: "OOP",                            category: "Otros",          color: "#6366f1" },
  { file: "diploma-php.pdf",                      name: "PHP",                            category: "Otros",          color: "#6366f1" },
  { file: "diploma-c-plus-plus.pdf",              name: "C++",                            category: "Otros",          color: "#6366f1" },
  { file: "diploma-excel-basico.pdf",             name: "Excel Básico",                   category: "Otros",          color: "#6366f1" },
  { file: "diploma-excel-intermedio.pdf",         name: "Excel Intermedio",               category: "Otros",          color: "#6366f1" },
  { file: "diploma-configuracion-windows.pdf",    name: "Configuración Windows",          category: "Otros",          color: "#6366f1" },
];

const CATEGORIES = ["Todos", "Logros & Talleres", "Scrum & Ágil", "JavaScript", "Python", "TypeScript", "Data & Bases", "Otros"];

// ─── Component ───────────────────────────────────────────────────────────────

export const Projects = () => {
  const [selectedCert, setSelectedCert] = useState<Cert | null>(null);
  const [activeCategory, setActiveCategory] = useState("Todos");

  const professionalProjects = [
    {
      title: "BillEase",
      description: "Sistema de facturación electrónica completo para la gestión integral de una empresa. Genera comprobantes válidos, administra clientes, productos e inventario, y entrega reportes financieros en tiempo real.",
      accentColor: "#6366f1",
      screenshots: [billease1, billease2],
      technologies: ["PHP", "Laravel", "PostgreSQL", "Docker", "JavaScript", "AWS"],
      demoUrl: "https://billease.pro/",
    },
    {
      title: "Planifia",
      description: "Sistema integral de gestión de citas con notificaciones multi-canal (WhatsApp, SMS, email). Agendamiento inteligente con vista de calendario, recordatorios automáticos y administración de clientes con historial completo.",
      accentColor: "#10b981",
      screenshots: [planifia1, planifia2],
      technologies: ["NestJS", "Next.js", "PostgreSQL", "TypeScript", "Docker", "AWS"],
    },
    {
      title: "Lupio Pet",
      description: "App mobile para cuidado, paseos y entrenamiento de mascotas. DNI virtual, pagos seguros y puente de donaciones a albergues. Conecta con cuidadores, paseadores y entrenadores verificados.",
      accentColor: "#f59e0b",
      screenshots: [lupiopet1, lupiopet2],
      screenshotType: 'mobile' as const,
      technologies: ["React Native", "Expo", "PostgreSQL", "Azure", "NestJS"],
      demoUrl: "https://lupio.pet/",
      appStoreUrl: "https://apps.apple.com/ec/app/lupio-pet/id6755320290",
      playStoreUrl: "https://play.google.com/store/apps/details?id=pet.lupio.app",
    },
    {
      title: "Sistema de Empaquetado",
      description: "Sistema de gestión de inventario con QR integrado. Escanea el contenido de cualquier caja sin abrirla, transfiere stock entre bodegas, rastrea el ciclo de vida de cada producto y gestiona ventas por bodega.",
      accentColor: "#3b82f6",
      screenshots: [empaquetado1, empaquetado2],
      technologies: ["PHP", "XAMPP", "JavaScript", "MySQL"],
    },
    {
      title: "Sistema de Cobranza",
      description: "Plataforma web y móvil para gestión de cobranzas en campo con sincronización híbrida on-premise/cloud. Tracking geoespacial de cobradores, monitoreo en tiempo real e integración con sistema de facturación legacy.",
      accentColor: "#ec4899",
      screenshots: [cobranza1, cobranza2],
      screenshotType: 'mixed' as const,
      technologies: ["React Native", "Next.js", "Vercel", "Firebase", "Google Maps", "WebSockets"],
    },
    {
      title: "NovaPos",
      description: "Sistema de punto de venta web para la gestión completa de un negocio. Emite facturas y notas de crédito electrónicas, administra compras, gastos e ingresos, y ofrece reportes financieros en tiempo real.",
      accentColor: "#0ea5e9",
      screenshots: [novapos1, novapos2],
      technologies: ["Next.js", "NestJS", "PostgreSQL", "TypeScript", "Docker", "AWS"],
    },
  ];

  const filteredCerts = activeCategory === "Todos"
    ? CERTS
    : CERTS.filter(c => c.category === activeCategory);

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col xs={12}>
            <TrackVisibility once>
              {({ isVisible }) =>
              <div className={isVisible ? "reveal-fade" : ""}>
                <h2>Proyectos</h2>
                <p>Proyectos profesionales que reflejan mi experiencia construyendo productos reales: desde sistemas de facturación y gestión de citas hasta apps móviles con integración de pagos y plataformas de cobranza en campo.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Proyectos Profesionales</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Certificaciones</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content>
                    {/* ── Proyectos ── */}
                    <Tab.Pane eventKey="first">
                      <Row className="g-4">
                        {professionalProjects.map((project, index) => (
                          <ProjectCard key={index} {...project} />
                        ))}
                      </Row>
                    </Tab.Pane>

                    {/* ── Certificaciones ── */}
                    <Tab.Pane eventKey="second">
                      {/* Category filter chips */}
                      <div className="cert-filters">
                        {CATEGORIES.map(cat => (
                          <button
                            key={cat}
                            className={`cert-filter-btn${activeCategory === cat ? " active" : ""}`}
                            onClick={() => setActiveCategory(cat)}
                          >
                            {cat}
                          </button>
                        ))}
                      </div>

                      {/* Certificate grid */}
                      <div className="cert-count">
                        {filteredCerts.length} diploma{filteredCerts.length !== 1 ? "s" : ""}
                      </div>
                      <div className="cert-grid">
                        {filteredCerts.map((cert, i) => (
                          <button
                            key={i}
                            className="cert-card"
                            onClick={() => setSelectedCert(cert)}
                            style={{ "--cert-color": cert.color } as React.CSSProperties}
                          >
                            <span className="cert-card-bar" />
                            <FileText size={20} className="cert-icon" />
                            <span className="cert-name">{cert.name}</span>
                            <span className="cert-cat-badge">{cert.category}</span>
                          </button>
                        ))}
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>

      {/* ── PDF Viewer Modal ── */}
      <Modal
        show={!!selectedCert}
        onHide={() => setSelectedCert(null)}
        size="xl"
        centered
        className="cert-modal"
      >
        <div className="cert-modal-content">
          <div className="cert-modal-header">
            <span className="cert-modal-title">{selectedCert?.name}</span>
            <button className="cert-modal-close" onClick={() => setSelectedCert(null)}>
              <X size={20} />
            </button>
          </div>
          <div className="cert-modal-body">
            {selectedCert && PDF_MAP[selectedCert.file] ? (
              <object
                data={PDF_MAP[selectedCert.file]}
                type="application/pdf"
                className="cert-iframe"
              >
                <div className="cert-pdf-fallback">
                  <p>Tu navegador no puede mostrar el PDF directamente.</p>
                  <a href={PDF_MAP[selectedCert.file]} target="_blank" rel="noopener noreferrer" className="btn-cert-download">
                    <Download size={15} /> Abrir diploma
                  </a>
                </div>
              </object>
            ) : (
              <div className="cert-pdf-fallback">
                <p>Este diploma aún no se ha subido.</p>
              </div>
            )}
          </div>
          <div className="cert-modal-footer">
            {selectedCert && PDF_MAP[selectedCert.file] && (
              <a
                href={PDF_MAP[selectedCert.file]}
                download={selectedCert.name + ".pdf"}
                className="btn-cert-download"
              >
                <Download size={15} /> Descargar diploma
              </a>
            )}
          </div>
        </div>
      </Modal>

      <img className="background-image-right" src={colorSharp2} alt="" />
    </section>
  );
}
