export interface ExperienceItem {
    title: string;
    period: string;
    skill: string;
    description: string;
}

export const experiences: ExperienceItem[] = [
    {
        title: "Logística y Toma de Decisiones",
        period: "GESTIÓN & PROCESOS",
        skill: "Optimización de Procesos",
        description: "Gestión operativa basada en la toma de decisiones ante escenarios imprevistos. Resolución de problemas en tiempo real y coordinación de flujos de trabajo dinámicos, priorizando la eficiencia técnica y operativa."
    },
    {
        title: "Soporte Técnico IT (ISP)",
        period: "REDES & CONECTIVIDAD",
        skill: "Troubleshooting de Sistemas",
        description: "Diagnóstico y resolución de fallas en dispositivos y servicios de conectividad para proveedores de internet (ISP). Configuración de hardware y soporte técnico enfocado en garantizar la estabilidad de la red."
    },
    {
        title: "Hardware y Mantenimiento",
        period: "SOPORTE & HARDWARE",
        skill: "Diagnóstico Técnico",
        description: "Reparación, ensamblado y mantenimiento preventivo de equipos de computación. Detección de fallas a nivel de componentes y optimización de rendimiento en sistemas operativos."
    },
    {
        title: "Diseño Visual y Estética UI",
        period: "DISEÑO & UX/UI",
        skill: "Diseño de Interfaces",
        description: "Aplicación de criterios estéticos y de composición en el desarrollo de presentaciones de productos. Mi trayectoria en diseño gráfico complementa el desarrollo Frontend, asegurando interfaces funcionales, prolijas y visualmente equilibradas."
    }
];