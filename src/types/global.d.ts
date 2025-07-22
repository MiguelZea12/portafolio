// Tipos globales de ejemplo para tu portafolio

declare type Project = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
};

declare type Skill = {
  name: string;
  icon: string;
};

declare type Experience = {
  company: string;
  role: string;
  period: string;
  description: string;
  technologies: string[];
};
