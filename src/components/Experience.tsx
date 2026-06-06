import { motion, type Variants } from 'framer-motion';
import { experiences } from '../data/experience'; // Importamos los datos centralizados

/**
 * Componente Experience (Experiencia Profesional Complementaria)
 * Renderiza la grilla consumiendo datos desde 'src/data/experience.ts'.
 */
const Experience = () => {
    
    // ==========================================
    // CONFIGURACIÓN DE ANIMACIONES
    // ==========================================
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 15 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 0.4, ease: "easeOut" } 
        }
    };

    // ==========================================
    // RENDERIZADO
    // ==========================================
    return (
        <section id="experience" className="py-20 px-8 md:px-20 lg:px-32">

            {/* ENCABEZADO */}
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mb-16 flex flex-col md:flex-row items-center justify-center md:justify-start gap-2 md:gap-4"
            >
                <span className="hidden md:block w-10 h-1.5 bg-accent rounded-full shadow-[0_0_10px_var(--accent)]"></span>
                <h2 className="text-3xl md:text-4xl font-bold text-textMain text-center md:text-left uppercase tracking-tight">
                    Experiencia Profesional
                </h2>
                <span className="md:hidden w-16 h-1.5 bg-accent rounded-full shadow-[0_0_10px_var(--accent)] mt-1"></span>
            </motion.div>

            {/* GRILLA DE EXPERIENCIAS */}
            <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl"
            >
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        variants={cardVariants}
                        className="group relative p-8 rounded-2xl transition-all duration-300 bg-slate-200/70 border border-slate-300 shadow-sm dark:bg-white/5 dark:border-white/10 dark:shadow-none hover:border-accent/50 hover:shadow-md dark:hover:border-accent/50"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="text-xl font-bold text-textMain group-hover:text-accent transition-colors">
                                    {exp.title}
                                </h3>
                                <p className="text-accent text-sm font-medium">
                                    {exp.skill}
                                </p>
                            </div>
                            <span className="text-textDim text-[10px] font-mono uppercase bg-slate-300 dark:bg-white/10 px-2 py-1 rounded text-slate-700 dark:text-textDim">
                                {exp.period}
                            </span>
                        </div>

                        <p className="text-textDim text-sm md:text-base leading-relaxed text-justify">
                            {exp.description}
                        </p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Experience;
