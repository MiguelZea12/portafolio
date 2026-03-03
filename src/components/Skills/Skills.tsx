import React from "react";
import react from "../../assets/img/react.png";
import python from "../../assets/img/python.png";
import flask from "../../assets/img/flask1.png";
import nest from "../../assets/img/nest.png";
import next from "../../assets/img/next.png";
import typescript from "../../assets/img/typescript.png";
import php from "../../assets/img/php1.png";
import postgres from "../../assets/img/postgres.png";
import docker from "../../assets/img/docker.png";
import "./skills.css";

type Skill = {
  name: string;
  img?: string;
  initial?: string;
  color?: string;
};

type SkillCategory = {
  name: string;
  skills: Skill[];
};

const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      { name: "React",      img: react },
      { name: "Next.js",    img: next },
      { name: "TypeScript", img: typescript },
      { name: "Angular",    initial: "NG",   color: "#dd0031" },
      { name: "JavaScript", initial: "JS",  color: "#c9a800" },
      { name: "HTML / CSS", initial: "HTML", color: "#E44D26" },
    ]
  },
  {
    name: "Backend",
    skills: [
      { name: "NestJS",  img: nest },
      { name: "Python",  img: python },
      { name: "Flask",   img: flask },
      { name: "PHP",     img: php },
      { name: "Laravel", initial: "LV",  color: "#FF2D20" },
      { name: "Node.js", initial: "Node", color: "#339933" },
    ]
  },
  {
    name: "Base de Datos",
    skills: [
      { name: "PostgreSQL", img: postgres },
      { name: "MongoDB",    initial: "MDB", color: "#47A248" },
      { name: "MySQL",      initial: "SQL", color: "#00758F" },
    ]
  },
  {
    name: "DevOps & Cloud",
    skills: [
      { name: "Docker",      img: docker },
      { name: "Kubernetes",  initial: "K8s", color: "#326CE5" },
      { name: "AWS",         initial: "AWS", color: "#FF9900" },
      { name: "CI/CD",       initial: "CI",  color: "#0052CC" },
      { name: "Git",         initial: "Git", color: "#F05033" },
      { name: "BitBucket",   initial: "BB",  color: "#0052CC" },
    ]
  }
];

const SkillCard = ({ skill }: { skill: Skill }) => (
  <div className="skill-card">
    <div className="skill-card-icon">
      {skill.img
        ? <img src={skill.img} alt={skill.name} />
        : <span className="skill-initial" style={{ background: skill.color ?? 'var(--accent)' }}>
            {skill.initial}
          </span>
      }
    </div>
    <span className="skill-card-name">{skill.name}</span>
  </div>
);

export const Skills = () => {
  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx">
              <h2>Tecnologías</h2>
              <p className="text-skills">
                En mi trayectoria profesional he adoptado un enfoque dinámico hacia el aprendizaje
                y aplicación de tecnologías modernas. A continuación las herramientas con las que trabajo a diario.
              </p>

              <div className="skill-categories">
                {skillCategories.map((cat, ci) => (
                  <div key={ci} className="skill-category">
                    <h4 className="skill-category-title">{cat.name}</h4>
                    <div className="skill-cards-row">
                      {cat.skills.map((skill, si) => (
                        <SkillCard key={si} skill={skill} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};