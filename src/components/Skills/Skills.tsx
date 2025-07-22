import React from "react";
// import '../../css/skills/skills.css'; // Eliminado: ahora usamos el CSS modularizado local
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../../assets/img/color-sharp.png"
import react from "../../assets/img/react.png";
import python from "../../assets/img/python.png";
import flask from "../../assets/img/flask1.png";
import nest from "../../assets/img/nest.png";
import next from "../../assets/img/next.png";
import typescript from "../../assets/img/typescript.png";
import php from "../../assets/img/php1.png";
import postgres from "../../assets/img/postgres.png";
import docker from "../../assets/img/docker.png";

// Importa el archivo CSS
import "./skills.css";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Tecnologias</h2>
                        <p className="text-skills">En mi trayectoria profesional, he adoptado un enfoque dinámico hacia el aprendizaje y la aplicación de tecnologías emergentes. Mi constante exploración de herramientas, frameworks y lenguajes me permite desarrollar soluciones modernas y eficientes. A continuación, te presento algunas de las tecnologías con las que trabajo</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={python} alt="Image" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={flask} alt="Image" />
                                <h5>Flask</h5>
                            </div>
                            <div className="item">
                                <img src={react} alt="Image" />
                                <h5>ReactJs</h5>
                            </div>
                            <div className="item">
                                <img src={nest} alt="Image" />
                                <h5>NestJs</h5>
                            </div>
                            <div className="item">
                                <img src={next} alt="Image" />
                                <h5>NextJs</h5>
                            </div>
                            <div className="item">
                                <img src={typescript} alt="Image" />
                                <h5>Typescript</h5>
                            </div>
                            <div className="item">
                                <img src={php} alt="Image" />
                                <h5>PHP</h5>
                            </div>
                            <div className="item">
                                <img src={postgres} alt="Image" />
                                <h5>Postgres</h5>
                            </div>
                            <div className="item">
                                <img src={docker} alt="Image" />
                                <h5>Docker</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}