import { motion, type Variants } from 'framer-motion';
import { FaDesktop, FaGithub } from "react-icons/fa"; 

const Projects = () => {
    // Estilos base de la tarjeta principal
    const cardStyle = "relative bg-gradient-to-br from-black/5 to-transparent dark:from-white/5 dark:to-transparent backdrop-blur-xl border border-black/10 dark:border-white/10 rounded-2xl p-6 flex flex-col gap-4 group overflow-hidden shadow-sm md:transition-all md:duration-500 md:hover:border-accent/50 md:hover:shadow-[0_0_30px_-5px_var(--accent)]";

    const gridVariants: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.1 
            }
        }
    };

    const cardVariants: Variants = {
        hidden: { opacity: 0, scale: 0.9, y: 20 },
        visible: { 
            opacity: 1, 
            scale: 1, 
            y: 0,
            transition: { 
                type: "spring", 
                stiffness: 80, 
                damping: 18 
            }
        }
    };

    const projectsData = [
        {
            title: "CAFE PUNTOS",
            subtitle: "Fidelización Gastronómica",
            status: "Conceptual (MVP Planificado)",
            tags: ["C# .NET", "MS SQL Server", "Arquitectura Transaccional"],
            description: "Arquitectura backend diseñada para automatizar la fidelización de clientes en el rubro gastronómico. El modelo incluye lógica transaccional para la asignación de puntos por volumen de compra, validación de recompensas y la estructuración de la base de datos relacional para garantizar la integridad transaccional.",
            github: "#architecture", 
        },
    ];

    return (
        <section id="projects" className="relative py-20 px-8 md:px-20 lg:px-32 bg-backgroundMain overflow-hidden">
            
            <div className="relative z-10">
                {/* Título de la sección */}
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 flex flex-col md:flex-row items-center justify-center md:justify-start gap-2 md:gap-4"
                >
                    <span className="hidden md:block w-10 h-1.5 bg-accent rounded-full shadow-[0_0_10px_var(--accent)]"></span>
                    <h2 className="text-3xl md:text-4xl font-bold text-textMain text-center md:text-left">
                        Proyectos Destacados
                    </h2>
                    <span className="md:hidden w-16 h-1.5 bg-accent rounded-full shadow-[0_0_10px_var(--accent)] mt-1"></span>
                </motion.div>

                {/* Grid de Proyectos */}
                <motion.div 
                    variants={gridVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl"
                >
                    {projectsData.map((project, index) => (
                        <motion.div 
                            key={index} 
                            variants={cardVariants}
                            className={`${cardStyle} col-span-1 md:col-span-1`}
                        >
                            {/* Estado / Badge */}
                            <div className="absolute top-5 right-5 bg-secondary dark:bg-black/20 text-textMain px-3 py-1 text-xs font-mono uppercase rounded-full border border-black/5 dark:border-white/5 opacity-80 group-hover:opacity-100 group-hover:border-accent/40 transition-all">
                                {project.status}
                            </div>

                            {/* Título y Subtítulo */}
                            <div className="flex flex-col mt-4 mb-2">
                                <h3 className="text-2xl font-bold text-textMain group-hover:text-accent transition-colors duration-500 leading-tight">
                                    {project.title}
                                </h3>
                                <p className="text-textDim text-sm md:text-base font-medium mt-1">
                                    {project.subtitle}
                                </p>
                            </div>

                            {/* Descripción */}
                            <p className="text-textDim text-sm md:text-base leading-relaxed text-justify px-1">
                                {project.description}
                            </p>
                            
                            {/* Etiquetas de Tecnologías (Centralizadas) */}
                            <div className="flex flex-wrap justify-center gap-2 pt-4 pb-4">
                                {project.tags.map((tag) => (
                                    <span 
                                        key={tag} 
                                        className="text-xs font-mono px-3 py-1 rounded bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-textDim italic transition-colors duration-300 group-hover:border-accent/50 group-hover:text-accent"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Botón GitHub (Más ancho y centralizado) */}
                            <div className="mt-auto flex justify-center w-full pt-2">
                                <motion.a 
                                    href={project.github} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.02 }} 
                                    whileTap={{ scale: 0.98 }}
                                    className="
                                        flex items-center justify-center gap-3 
                                        w-full max-w-[280px] py-3 
                                        rounded-xl border border-black/10 dark:border-white/10 
                                        text-sm font-bold text-textMain 
                                        bg-black/5 dark:bg-white/5 
                                        hover:border-accent/50 hover:bg-accent/10 hover:text-accent 
                                        hover:shadow-[0_0_20px_-5px_var(--accent)]
                                        transition-all duration-300 shadow-sm
                                    "
                                >
                                    <FaGithub className="text-xl" />
                                    GitHub
                                </motion.a>
                            </div>
                        </motion.div>
                    ))}

                    {/* Marcador de Posición (Proyecto en Desarrollo) */}
                    <motion.div 
                        variants={cardVariants}
                        className={`${cardStyle} col-span-1 md:col-span-1 border-dashed opacity-40`}
                    >
                        <div className="flex flex-col items-center justify-center h-full gap-4 text-center text-textDim/70 py-12">
                            <FaDesktop className="text-6xl" />
                            <h3 className="text-xl font-semibold uppercase tracking-tight">
                                Proyecto en Desarrollo
                            </h3>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;