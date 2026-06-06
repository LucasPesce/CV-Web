import { motion, type Variants } from 'framer-motion';
import { skillsData, iconMap } from '../data/skills';

/**
 * Componente Skills (Habilidades Técnicas)
 * Renderiza una grilla tipo Bento consumiendo los datos estáticos,
 * preservando las clases y layouts individuales de cada tarjeta.
 */
const Skills = () => {
    
    // ==========================================
    // CLASES BASE COMUNES
    // ==========================================
    const cardBaseStyle = "relative bg-gradient-to-br from-black/5 to-transparent dark:from-white/5 dark:to-transparent backdrop-blur-xl border border-black/10 dark:border-white/10 rounded-2xl p-5 flex flex-col items-center justify-center gap-3 md:transition-all md:duration-500 md:hover:border-accent/50 md:hover:shadow-[0_0_30px_-5px_var(--accent)] group overflow-hidden shadow-sm";
    const iconBaseStyle = "text-4xl text-textDim group-hover:text-accent transition-all duration-500 group-hover:scale-110";

    // ==========================================
    // CONFIGURACIÓN DE ANIMACIONES
    // ==========================================
    const gridVariants: Variants = {
        hidden: {},
        visible: {
            transition: { staggerChildren: 0.08 }
        }
    };

    const cardVariants: Variants = {
        hidden: { opacity: 0, scale: 0.8, y: 20 },
        visible: { 
            opacity: 1, scale: 1, y: 0,
            transition: { type: "spring", stiffness: 80, damping: 15 }
        }
    };

    // ==========================================
    // RENDERIZADO
    // ==========================================
    return (
        <section id="skills" className="relative py-20 px-8 md:px-20 lg:px-32 bg-backgroundMain overflow-hidden">
            
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
                        Habilidades Técnicas
                    </h2>
                    <span className="md:hidden w-16 h-1.5 bg-accent rounded-full shadow-[0_0_10px_var(--accent)] mt-1"></span>
                </motion.div>

                {/* --- BENTO GRID ANIMADO --- */}
                <motion.div 
                    variants={gridVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4 auto-rows-[110px] md:auto-rows-[140px]"
                >
                    {skillsData.map((skill, index) => {
                        const IconComponent = iconMap[skill.icon];
                        
                        return (
                            <motion.div 
                                key={index} 
                                variants={cardVariants} 
                                // Combinamos la base + las clases específicas (col-span, fondos, etc.)
                                className={`${cardBaseStyle} ${skill.gridClasses || ""}`.trim()}
                            >
                                {/* Ícono con sus clases específicas si las tiene (ej: animate-spin) */}
                                <IconComponent className={`${iconBaseStyle} ${skill.iconClasses || ""}`.trim()} />
                                
                                <h3 className={skill.titleClasses}>
                                    {skill.name}
                                </h3>
                                
                                {/* Renderizado condicional del subtítulo */}
                                {skill.subtitle && (
                                    <p className={skill.subtitleClasses}>
                                        {skill.subtitle}
                                    </p>
                                )}
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;