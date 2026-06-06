import { FaReact, FaGitAlt, FaGithub, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiTailwindcss, SiVite, SiScrumalliance } from "react-icons/si";
import { MdDevices, MdOutlineRateReview, MdApi, MdDesignServices } from "react-icons/md";
import { HiSparkles } from "react-icons/hi";
import { TbBrandCSharp } from "react-icons/tb";

// 1. Diccionario de íconos
export const iconMap: Record<string, any> = {
    FaReact, FaGitAlt, FaGithub, FaNodeJs, FaDatabase,
    SiTailwindcss, SiVite, SiScrumalliance,
    MdDevices, MdOutlineRateReview, MdApi, MdDesignServices,
    HiSparkles, TbBrandCSharp
};

// 2. Variables auxiliares para no repetir clases largas en las tarjetas estándar
const titleStyle = "text-textMain font-semibold text-sm md:text-base tracking-wide group-hover:text-accent transition-colors duration-500 text-center";
const smallTitle = "text-textMain font-semibold text-sm group-hover:text-accent";
const smallTitleCenter = "text-textMain font-semibold text-sm group-hover:text-accent text-center";

// 3. Interfaz que soporta todas tus configuraciones visuales
export interface SkillItem {
    name: string;
    icon: string;
    subtitle?: string;
    gridClasses?: string;      // Clases para el contenedor (ej: col-span-2 row-span-2)
    iconClasses?: string;      // Clases extra para el ícono (ej: text-7xl animate-spin-slow)
    titleClasses: string;      // Clases exactas para el título
    subtitleClasses?: string;  // Clases para el subtítulo
}

// 4. Tus datos exactos, con tus clases exactas
export const skillsData: SkillItem[] = [
    {
        name: "React",
        icon: "FaReact",
        subtitle: "Frontend Moderno",
        gridClasses: "col-span-2 row-span-2 bg-secondary/60",
        iconClasses: "text-7xl animate-spin-slow",
        titleClasses: "text-2xl font-bold text-textMain group-hover:text-accent mt-4",
        subtitleClasses: "text-sm text-textDim"
    },
    {
        name: "C# & .NET",
        icon: "TbBrandCSharp",
        gridClasses: "col-span-2",
        titleClasses: titleStyle
    },
    {
        name: "Tailwind CSS",
        icon: "SiTailwindcss",
        gridClasses: "col-span-2",
        titleClasses: titleStyle
    },
    {
        name: "SQL Server & MySQL",
        icon: "FaDatabase",
        gridClasses: "col-span-2",
        titleClasses: titleStyle
    },
    {
        name: "Prompt Engineering",
        icon: "HiSparkles",
        subtitle: "Desarrollo con IA",
        gridClasses: "col-span-2 md:col-span-2 lg:col-span-2 row-span-2",
        iconClasses: "text-6xl mb-4",
        titleClasses: "text-textMain font-semibold text-lg tracking-wide group-hover:text-accent text-center px-4",
        subtitleClasses: "text-xs text-textDim text-center px-4"
    },
    { name: "Node.js", icon: "FaNodeJs", titleClasses: smallTitle },
    { name: "API REST", icon: "MdApi", titleClasses: smallTitle },
    { name: "Vite", icon: "SiVite", titleClasses: smallTitle },
    { name: "Code Review", icon: "MdOutlineRateReview", titleClasses: smallTitleCenter },
    {
        name: "Diseño UX/UI",
        icon: "MdDesignServices",
        gridClasses: "col-span-2",
        titleClasses: titleStyle
    },
    { name: "Responsive", icon: "MdDevices", titleClasses: smallTitle },
    { name: "Git", icon: "FaGitAlt", titleClasses: smallTitle },
    { name: "GitHub", icon: "FaGithub", titleClasses: smallTitle },
    { name: "Scrum", icon: "SiScrumalliance", titleClasses: smallTitle }
];