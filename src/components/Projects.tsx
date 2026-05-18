import { motion, type Variants } from 'framer-motion';
import { FaDesktop, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projectsData, type Project } from '../data/projects';

const Projects = () => {
    const cardStyle = "relative bg-gradient-to-br from-black/5 to-transparent dark:from-white/5 dark:to-transparent backdrop-blur-xl border border-black/10 dark:border-white/10 rounded-2xl p-6 md:p-8 flex flex-col group overflow-hidden shadow-sm transition-all duration-500 hover:border-accent/50 hover:shadow-[0_0_30px_-5px_var(--accent)]";

    const containerVariants: Variants = {
        hidden: {},
        visible: {
            transition: { staggerChildren: 0.1 }
        }
    };

    const cardVariants: Variants = {
        hidden: { opacity: 0, scale: 0.95, x: 20 },
        visible: {
            opacity: 1,
            scale: 1,
            x: 0,
            transition: { type: "spring", stiffness: 80, damping: 18 }
        }
    };

    return (
        // Se mantienen los mismos paddings generales de tu diseño original (px-8 md:px-20 lg:px-32)
        <section id="projects" className="relative py-20 px-8 md:px-20 lg:px-32 bg-backgroundMain overflow-hidden">
            <div className="relative z-10 w-full">

                {/* TÍTULO: Alineado estrictamente a la izquierda para coincidir con la web */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 flex items-center justify-start gap-4"
                >
                    <span className="w-10 h-1.5 bg-accent rounded-full shadow-[0_0_10px_var(--accent)]"></span>
                    <h2 className="text-3xl md:text-4xl font-bold text-textMain uppercase tracking-tight">
                        Proyectos Destacados
                    </h2>
                </motion.div>

                {/* CARRUSEL: */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex overflow-x-auto gap-6 pb-16 pt-4 snap-x snap-mandatory carrusel-proyectos"
                >
                    {projectsData.map((project: Project) => (
                        <motion.div
                            key={project.id}
                            variants={cardVariants}
                            // Las tarjetas mantienen su tamaño fijo para no aplastarse
                            className={`${cardStyle} shrink-0 w-[85vw] md:w-[480px] snap-center`}
                        >
                            {/* Estado / Badge flotante */}
                            <div className={`absolute top-6 right-6 px-3 py-1 text-xs font-mono uppercase rounded-full border opacity-90 transition-all ${project.status === 'PRODUCCIÓN' ? 'bg-secondary dark:bg-black/20 text-textMain border-black/10 dark:border-white/10 group-hover:border-accent/40' : 'bg-accent/10 text-accent border-accent/30 group-hover:border-accent'}`}>
                                {project.status}
                            </div>

                            {/* Título y Subtítulo */}
                            <div className="flex flex-col mt-8 mb-4">
                                <h3 className="text-2xl font-bold text-textMain group-hover:text-accent transition-colors duration-500 leading-tight pr-24">
                                    {project.title}
                                </h3>
                                <p className="text-accent/80 text-sm md:text-base font-semibold mt-2">
                                    {project.subtitle}
                                </p>
                            </div>

                            {/* Descripción */}
                            <p className="text-textDim text-sm md:text-base leading-relaxed text-justify mb-6">
                                {project.description}
                            </p>

                            {/* Etiquetas de Tecnologías */}
                            <div className="flex flex-wrap gap-2 mb-8">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="text-xs font-mono px-3 py-1.5 rounded bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-textDim italic transition-colors duration-300 hover:border-accent/50 hover:text-accent"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Botonera Dinámica */}
                            <div className="mt-auto pt-6 border-t border-black/10 dark:border-white/10 flex flex-wrap gap-4">
                                {project.githubUrl && (
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-sm font-bold text-textMain hover:text-accent transition-colors"
                                    >
                                        <FaGithub className="text-xl" />
                                        Ver Código
                                    </a>
                                )}

                                {project.deployUrl && (
                                    <a
                                        href={project.deployUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-sm font-bold text-textMain hover:text-accent transition-colors"
                                    >
                                        <FaExternalLinkAlt className="text-lg" />
                                        Demo Web
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}

                    {/* Marcador de Proyecto en Desarrollo (Fijo al final) */}
                    <motion.div
                        variants={cardVariants}
                        className={`${cardStyle} shrink-0 w-[85vw] md:w-[480px] snap-center border-dashed opacity-50 hover:opacity-100`}
                    >
                        <div className="flex flex-col items-center justify-center h-full gap-4 text-center text-textDim/70 py-16">
                            <FaDesktop className="text-6xl group-hover:text-accent transition-colors duration-500" />
                            <h3 className="text-xl font-semibold uppercase tracking-tight group-hover:text-textMain transition-colors">
                                Proyecto en Desarrollo
                            </h3>
                            <p className="text-sm font-mono italic animate-pulse">Loading...</p>
                        </div>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
};

export default Projects;