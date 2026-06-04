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
  {
    id: "novel-asistente-literario",
    title: "Novel: Asistente Literario de IA",
    subtitle: "Aplicación Web Local-First con Sincronización Cloud",
    status: "En Desarrollo",
    description:
      "Asistente de escritura y diseño de tramas literarias potenciado por Inteligencia Artificial (Gemini). A partir del análisis secuencial de los capítulos, el sistema extrae de forma automática personajes, lugares y elementos de lore para consolidar una Biblia de Mundo dinámica. Cuenta con un motor de almacenamiento híbrido (Local-First mediante File System Access API para guardar archivos directamente en la PC del usuario y sincronización con Google Drive y Firebase), un gráfico estelar de relaciones interactivo renderizado mediante simulaciones de fuerzas físicas de D3.js y un canal de chat conversacional continuo con contexto de la obra. Integra la arquitectura de seguridad BYOK (Bring Your Own Key) para resguardar la privacidad y los costos de las claves de IA a nivel de cliente.",
    tags: [
      "Análisis Funcional",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "Integración de IA (Gemini)",
      "Local-First (FSA API)",
      "IndexedDB",
      "Sincronización (Google Drive)",
      "Seguridad (BYOK)",
      "Físicas 2D (D3.js)",
      "Procesamiento DOCX (Mammoth)",
    ],
    githubUrl: "https://github.com/LucasPesce/Novel-asistente-literario-con-Gemini",
  },
];
