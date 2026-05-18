export interface Project {
  id: string;
  title: string;
  subtitle: string;
  status: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  deployUrl?: string;
}

export const projectsData: Project[] = [
  {
    id: "portfolio-web",
    title: "CV-Web Portfolio",
    subtitle: "Marca Personal & SPA",
    status: "Producción",
    description:
      "Desarrollo de portafolio web interactivo basado en la filosofía de diseño modular y Single Page Application (SPA). Optimización de rendimiento, animaciones fluidas y maquetación responsiva avanzada.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/LucasPesce/CV-Web",
  },
  {
    id: "taxpro-gestion-fiscal",
    title: "TaxPro: Sistema de Gestión Fiscal",
    subtitle: "Aplicación Web Full-Stack (React & Node.js)",
    status: "En Desarrollo",
    description:
      "Aplicación web que simplifica la contabilidad de una empresa. Permite cargar las facturas de Compras y Ventas descargadas de la web fiscal oficial, y el sistema automáticamente revisa la integridad de los registros y verifica si hay errores, si faltan facturas en la numeración y lo ordena automáticamente. Además, tiene un sistema de seguridad donde cada empleado según su rol, solo puede acceder a los módulos que le fueron asignados y hacer las tareas que le corresponde.",
    tags: [
      "Análisis Funcional",
      "UML",
      "SQL",
      "Documentación Técnica",
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "Prisma",
      "Seguridad (RBAC)",
      "Auditoría",
    ],
    githubUrl: "https://github.com/LucasPesce/TaxPro-TaxCalculator",
  },
];
