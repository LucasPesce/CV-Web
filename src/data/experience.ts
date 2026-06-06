// Interfaz que define la estructura estricta de cada experiencia
export interface ExperienceItem {
  title: string;
  skill: string;
  period: string; // Se utiliza para el tag superior derecho (ej: GESTIÓN & PROCESOS)
  description: string;
}

// Array de datos centralizado con tu información real
export const experiences: ExperienceItem[] = [
  {
    title: "Desarrollo de Software Freelance",
    skill: "Soluciones Full-Stack & Arquitectura",
    period: "DESARROLLO & PRODUCTO",
    description:
      "Desarrollo y mantenimiento de soluciones de software a medida, adaptándome a los requerimientos técnicos y funcionales específicos de cada cliente. Gestiono desde la arquitectura y lógica de datos hasta la interfaz de usuario.",
  },
  {
    title: "Soporte Técnico IT (ISP)",
    skill: "Troubleshooting de Sistemas",
    period: "REDES & CONECTIVIDAD",
    description:
      "Diagnóstico y resolución de fallas en dispositivos y servicios de conectividad para proveedores de internet (ISP). Configuración de hardware y soporte técnico enfocado en garantizar la estabilidad de la red.",
  },
  {
    title: "Hardware y Mantenimiento",
    skill: "Diagnóstico Técnico",
    period: "SOPORTE & HARDWARE",
    description:
      "Reparación, ensamblado y mantenimiento preventivo de equipos de computación. Detección de fallas a nivel de componentes y optimización de rendimiento en sistemas operativos.",
  },
  {
    title: "Logística y Toma de Decisiones",
    skill: "Optimización de Procesos",
    period: "GESTIÓN & PROCESOS",
    description:
      "Gestión operativa basada en la toma de decisiones ante escenarios imprevistos. Resolución de problemas en tiempo real y coordinación de flujos de trabajo dinámicos, priorizando la eficiencia técnica y operativa.",
  },
];
