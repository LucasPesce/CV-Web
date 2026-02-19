// 1. Definimos la estructura de los datos para TypeScript
export interface SocialLink {
  name: string;
  url: string;
}

export interface Header {
  name: string;
  role: string;
  location: string;
  email: string;
  whatsapp: string;
  github: string;
  phone: string;
  social: SocialLink[];
}

export interface SkillCategory {
  name: string;
  items: string[];
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface Education {
  degree: string;
  institution: string;
  status: string;
  year: string;
}

export interface ResumeData {
  header: Header;
  summary: string;
  skills: SkillCategory[];
  experience: Experience[];
  education: Education[];
}

// 2. Exportamos tu información real
export const resumeData: ResumeData = {
  header: {
    name: "Luc Pesce",
    role: "Analista en Sistemas | Full-Stack Developer",
    location: "Córdoba Capital",
    email: "luc.pesce.dev@gmail.com", 
    whatsapp: "https://wa.me/3518019316", 
    github: "github.com/LucasPesce",
    phone: "+54 9 351 801-9316",
    social: []
  },
  summary: " Analista en Sistemas y Desarrollador Full Stack. Disfruto creando interfaces atractivas en el Frontend sin descuidar la lógica estructurada del Backend. Mis experiencias laborales previas, me permiten tener una visión integral: Programo pensando tanto en la experiencia del usuario como en las necesidades operativas del negocio.",
  skills: [
    { name: "Frontend", items: ["React", "JavaScript (ES6+)", "TypeScript", "Tailwind CSS", "HTML5 & CSS3"] },
    { name: "Backend", items: ["C# .NET", "Node.js (Express)"] },
    { name: "Bases de Datos", items: ["SQL Server", "MySQL", "PostgreSQL"] },
    { name: "Herramientas", items: ["Git/GitHub", "VS Code", "Atención al Cliente IT"] }
  ],
  experience: [
    {
      id: 1,
      role: "Soporte Técnico IT (Help Desk)",
      company: "Konecta",
      period: "2024",
      description: "Resolución de incidencias técnicas y gestión del ciclo de vida de tickets. Soporte remoto enfocado en optimizar tiempos de respuesta y garantizar la satisfacción del usuario final.",
    },
    {
      id: 2,
      role: "Gestión Operativa, Logística y Ventas",
      company: "Freckles Coffee / Panadería Acapulco",
      period: "2021 - Presente",
      description: "Coordinación logística, gestión de inventario y análisis de métricas de ventas. Optimización de procesos operativos y estrategias de precios basadas en análisis de costos.",
    },
    {
      id: 3,
      role: "Analista de Mercados Financieros (Trading)",
      company: "Independiente",
      period: "2020 - Presente",
      description: "Análisis técnico de grandes volúmenes de datos para la toma de decisiones. Resolución de problemas bajo presión y ajuste de estrategias operativas en tiempo real.",
    },
    {
      id: 4,
      role: "Soporte Técnico Hardware & Software",
      company: "Freelance",
      period: "2014 - Presente",
      description: "Diagnóstico, armado y mantenimiento de equipos informáticos. Consultoría y optimización de recursos para clientes finales.",
    }
  ],
  education: [
    {
      degree: "Analista de Sistemas",
      institution: "Colegio Universitario IES",
      status: "En curso (Avanzado)",
      year: "2022 - Presente"
    }
  ]
};