// src/data/education.ts

export interface EducationItem {
    title: string;
    institution: string;
    description: string;
    isCurrent: boolean;
}

export interface LanguageItem {
    language: string;
    level: string;
    description: string;
}

export const educationData: EducationItem[] = [
    {
        title: "Analista en Sistemas",
        institution: "Colegio Universitario IES Siglo 21",
        description: "Formación técnica con un fuerte enfoque académico en Estructuras de Datos y Programación Orientada a Objetos (C#). Especialización en el diseño y administración de bases de datos con MS SQL Server, abarcando desde consultas avanzadas hasta la gestión de seguridad y backups. Sólidos fundamentos en desarrollo web y resolución de problemas mediante lógica aplicada.",
        isCurrent: true 
    },
    {
        title: "Especialización en Desarrollo Front-end",
        institution: "Alura Latam & Ticmas",
        description: "Formación intensiva de más de 300 horas cubriendo React, JavaScript ES6+, maquetación avanzada y optimización de interfaces responsivas.",
        isCurrent: false
    },
    {
        title: "Datos y Lógica de Programación",
        institution: "Alura Latam & Argentina Programa",
        description: "Capacitación en procesamiento de datos con Python, diseño de bases de datos relacionales con MySQL y fundamentos de lógica algorítmica.",
        isCurrent: false
    }
];

export const languagesData: LanguageItem[] = [
    {
        language: "Inglés",
        level: "Nivel A2",
        description: "(Básico - Intermedio)"
    }
];