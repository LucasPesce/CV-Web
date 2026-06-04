import { useRef } from 'react';
import { motion, type Variants } from 'framer-motion';
import { FaDesktop, FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { projectsData, type Project } from '../data/projects';

/**
 * Componente Projects (Carrusel de Proyectos)
 * Gestiona la visualización de proyectos mediante un carrusel horizontal con navegación táctil.
 * Utiliza useRef para el control manual de scroll y Framer Motion para animaciones de entrada.
 */
const Projects = () => {
    // ==========================================
    // LÓGICA DE NAVEGACIÓN
    // ==========================================
    const carouselRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (carouselRef.current) {
            const scrollAmount = direction === 'left' ? -400 : 400;
            carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    // ==========================================
    // ESTILOS Y ANIMACIONES
    // ==========================================
    const cardStyle = "relative bg-gradient-to-br from-black/5 to-transparent dark:from-white/5 dark:to-transparent backdrop-blur-xl border border-black/10 dark:border-white/10 rounded-2xl p-6 md:p-8 flex flex-col group overflow-hidden shadow-sm transition-all duration-500 hover:border-accent/50 hover:shadow-[0_0_30px_-5px_var(--accent)]";

    const containerVariants: Variants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.1 } }
    };

    const cardVariants: Variants = {
        hidden: { opacity: 0, scale: 0.95, x: 20 },
        visible: {
            opacity: 1, scale: 1, x: 0,
            transition: { type: "spring", stiffness: 80, damping: 18 }
        }
    };

    // ==========================================
    // RENDERIZADO
    // ==========================================
    return (
        <section id="projects" className="relative py-20 px-8 md:px-20 lg:px-32 bg-backgroundMain overflow-hidden">
            <div className="relative z-10 w-full">
                
                {/* CABECERA */}
                <div className="mb-12 flex flex-col md:flex-row items-center justify-start gap-8 md:gap-12">
                    
                    {/* Contenedor del título con lógica responsiva para la línea */}
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }} 
                        whileInView={{ opacity: 1, x: 0 }} 
                        viewport={{ once: true }} 
                        className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-2 md:gap-4 w-full md:w-auto"
                    >
                        {/* Línea lateral (solo PC) */}
                        <span className="hidden md:block w-10 h-1.5 bg-accent rounded-full shadow-[0_0_10px_var(--accent)]"></span>
                        
                        <h2 className="text-3xl md:text-4xl font-bold text-textMain uppercase tracking-tight whitespace-nowrap text-center md:text-left">
                            Proyectos Destacados
                        </h2>
                        
                        {/* Línea inferior (solo móvil) */}
                        <span className="md:hidden w-16 h-1.5 bg-accent rounded-full shadow-[0_0_10px_var(--accent)] mt-1"></span>
                    </motion.div>

                    {/* Botones de navegación (Alineados junto al título en PC) */}
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }} 
                        whileInView={{ opacity: 1, x: 0 }} 
                        viewport={{ once: true }} 
                        className="hidden md:flex gap-3"
                    >
                        <button 
                            onClick={() => scroll('left')} 
                            aria-label="Izquierda" 
                            className="p-3 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 text-textDim hover:text-accent hover:border-accent/50 transition-all"
                        >
                            <FaChevronLeft />
                        </button>
                        <button 
                            onClick={() => scroll('right')} 
                            aria-label="Derecha" 
                            className="p-3 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 text-textDim hover:text-accent hover:border-accent/50 transition-all"
                        >
                            <FaChevronRight />
                        </button>
                    </motion.div>
                </div>

                {/* CARRUSEL */}
                <motion.div
                    ref={carouselRef}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex items-start md:items-stretch overflow-x-auto gap-6 pb-12 pt-4 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                >
                    {projectsData.map((project: Project) => (
                        <motion.div
                            key={project.id}
                            variants={cardVariants}
                            // 'snap-start' permite que la tarjeta se alinee a la izquierda, forzando a que la siguiente se asome
                            className={`${cardStyle} shrink-0 w-[75vw] md:w-[480px] snap-start`}
                        >
                            {/* Badge de estado */}
                            <div className={`absolute top-6 right-6 px-3 py-1 text-xs font-mono uppercase rounded-full border opacity-90 ${project.status === 'PRODUCCIÓN' ? 'bg-secondary dark:bg-black/20 border-black/10' : 'bg-accent/10 text-accent border-accent/30'}`}>
                                {project.status}
                            </div>

                            {/* Info del proyecto */}
                            <div className="flex flex-col mt-8 mb-4">
                                <h3 className="text-2xl font-bold text-textMain group-hover:text-accent transition-colors leading-tight pr-24">{project.title}</h3>
                                <p className="text-accent/80 text-sm md:text-base font-semibold mt-2">{project.subtitle}</p>
                            </div>

                            <p className="text-textDim text-sm md:text-base leading-relaxed text-justify mb-6">{project.description}</p>

                            <div className="flex flex-wrap gap-2 mb-8">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="text-xs font-mono px-3 py-1.5 rounded bg-black/5 dark:bg-white/5 border border-black/10 text-textDim italic">{tag}</span>
                                ))}
                            </div>

                            {/* Links */}
                            <div className="mt-auto pt-6 border-t border-black/10 dark:border-white/10 flex flex-wrap gap-4">
                                {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold text-textMain hover:text-accent"><FaGithub className="text-xl" /> Ver Código</a>}
                                {project.deployUrl && <a href={project.deployUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold text-textMain hover:text-accent"><FaExternalLinkAlt className="text-lg" /> Demo Web</a>}
                            </div>
                        </motion.div>
                    ))}

                    {/* Placeholder Proyecto en Desarrollo */}
                    <motion.div variants={cardVariants} className={`${cardStyle} shrink-0 w-[75vw] md:w-[480px] snap-start border-dashed opacity-50 hover:opacity-100`}>
                        <div className="flex flex-col items-center justify-center h-full gap-4 text-center text-textDim/70 py-16">
                            <FaDesktop className="text-6xl" />
                            <h3 className="text-xl font-semibold uppercase tracking-tight">Proyecto en Desarrollo</h3>
                            <p className="text-sm font-mono italic">Loading...</p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;