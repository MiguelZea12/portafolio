// Utilidades para el portafolio
import { useState, useEffect } from 'react';

// Función para scroll suave
export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
};

// Función para detectar si un elemento está visible
export const useOnScreen = (ref: React.RefObject<Element>, threshold: number = 0.1) => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      { threshold }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [ref, threshold]);

  return isIntersecting;
};

// Función para validar formularios
export const validateEmail = (email: string) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export const validateForm = (formData: FormData) => {
  const errors: FormErrors = {};

  if (!formData.name || formData.name.trim().length < 2) {
    errors.name = 'El nombre debe tener al menos 2 caracteres';
  }

  if (!formData.email || !validateEmail(formData.email)) {
    errors.email = 'Por favor ingresa un email válido';
  }

  if (!formData.message || formData.message.trim().length < 10) {
    errors.message = 'El mensaje debe tener al menos 10 caracteres';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

// Función para formatear fechas
export const formatDate = (date: string | number | Date) => {
  return new Intl.DateTimeFormat('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(new Date(date));
};

// Datos del portafolio
export const portfolioData = {
  personalInfo: {
    name: "Alejandro Zea",
    title: "Full Stack Developer",
    email: "alejandro@ejemplo.com",
    phone: "+593 XXX XXX XXX",
    location: "Ecuador",
    bio: "Ingeniero de Software especializado en desarrollo de aplicaciones y sistemas web. Con experiencia en desarrollo web, aplicaciones móviles y proyectos prácticos."
  },
  socialLinks: {
    linkedin: "https://linkedin.com/in/alejandro-zea",
    github: "https://github.com/alejandro-zea",
    twitter: "https://twitter.com/alejandro_zea"
  },
  skills: [
    { name: "React", level: 90, category: "Frontend" },
    { name: "Node.js", level: 85, category: "Backend" },
    { name: "Python", level: 80, category: "Backend" },
    { name: "TypeScript", level: 85, category: "Language" },
    { name: "PostgreSQL", level: 75, category: "Database" },
    { name: "Docker", level: 70, category: "DevOps" }
  ]
};
