import { motion, type Variants } from 'framer-motion';
import { educationData, languagesData } from '../data/education';

/**
 * Componente Education (Formación Académica)
 * Renderiza una línea de tiempo animada con la trayectoria educativa del perfil.
 * Incluye un footer secundario dinámico para la sección de Idiomas.
 */
const Education = () => {
    
    // ==========================================
    // CONFIGURACIÓN DE ANIMACIONES (VARIANTS)
    // ==========================================

    // Variante padre: Controla la cascada de animaciones de la lista completa.
    const listVariants: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 1.5, // Tiempo entre la aparición de cada ítem
                delayChildren: 0.5    // Retraso inicial antes de empezar a mostrar los ítems
            }
        }
    };

    // Variante para cada ítem individual de la línea de tiempo.
    const itemVariants: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.4
            }
        }
    };

    // Variante para los puntos indicadores (dots) en la línea: Efecto rebote (spring).
    const dotWrapperVariants: Variants = {
        hidden: { scale: 0, opacity: 0 },
        visible: { 
            scale: 1, 
            opacity: 1, 
            transition: { type: "spring", stiffness: 300, damping: 20 } 
        }
    };

    // Variante para el contenido de texto: Deslizamiento desde la izquierda.
    const contentVariants: Variants = {
        hidden: { opacity: 0, x: -40 },
        visible: { 
            opacity: 1, 
            x: 0, 
            transition: { duration: 0.8, ease: "easeOut" } 
        }
    };

    // ==========================================
    // RENDERIZADO DEL COMPONENTE
    // ==========================================
    return (
        <section id="education" className="py-20 px-8 md:px-20 lg:px-32">
            
            {/* ENCABEZADO DE LA SECCIÓN */}
            <motion.div 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16 flex flex-col md:flex-row items-center justify-center md:justify-start gap-2 md:gap-4"
            >
                <span className="hidden md:block w-10 h-1.5 bg-accent rounded-full shadow-[0_0_10px_var(--accent)]"></span>
                <h2 className="text-3xl md:text-4xl font-bold text-textMain text-center md:text-left">
                    Formación Académica
                </h2>
                <span className="md:hidden w-16 h-1.5 bg-accent rounded-full shadow-[0_0_10px_var(--accent)] mt-1"></span>
            </motion.div>

            {/* CONTENEDOR PRINCIPAL: LÍNEA DE TIEMPO */}
            <div className="max-w-4xl relative ml-4 md:ml-0 pl-8 mb-12">
                
                {/* Eje vertical de la línea de tiempo (Se "dibuja" hacia abajo) */}
                <motion.div 
                    initial={{ height: 0 }}
                    whileInView={{ height: "100%" }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 4.5, ease: "linear" }}
                    className="absolute left-0 top-0 w-[2px] bg-blue-200 dark:bg-accent/20"
                ></motion.div>

                {/* Lista de instituciones iterando sobre educationData */}
                <motion.div 
                    variants={listVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="space-y-12"
                >
                    {educationData.map((item, index) => (
                        <motion.div key={index} variants={itemVariants} className="relative">
                            
                            {/* Punto indicador en la línea de tiempo */}
                            <motion.div 
                                variants={dotWrapperVariants} 
                                className="absolute -left-[39px] top-1"
                            >
                                <motion.span 
                                    className={`block w-4 h-4 rounded-full bg-accent ${item.isCurrent ? 'shadow-[0_0_10px_var(--accent)]' : ''}`}
                                    // Efecto de pulso infinito para mantener la tarjeta dinámica
                                    animate={{
                                        scale: [1, 1.3, 1],
                                        opacity: [0.6, 1, 0.6]
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: index * 0.2
                                    }}
                                ></motion.span>
                            </motion.div>
                            
                            {/* Contenido de la tarjeta de educación */}
                            <motion.div variants={contentVariants} className="flex flex-col gap-1">
                                <h3 className="text-xl md:text-2xl font-bold text-textMain leading-tight">
                                    {item.title}
                                </h3>
                                <p className="text-accent font-medium">
                                    {item.institution}
                                </p>                                
                                <p className="text-textDim text-sm md:text-base mt-4 text-justify leading-relaxed max-w-2xl">
                                    {item.description}
                                </p>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* SECCIÓN SECUNDARIA: IDIOMAS */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }} 
                viewport={{ once: true, margin: "-50px" }}
                className="max-w-4xl pt-8 border-t border-black/5 dark:border-white/5"
            >
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                    <h4 className="text-lg font-bold text-textMain uppercase tracking-widest">Idiomas</h4>
                    <div className="flex items-center gap-3">
                        <span className="h-px w-8 bg-accent/50 hidden md:block"></span>
                        
                        {/* Iteración sobre languagesData para mantener escalabilidad */}
                        {languagesData.map((lang, index) => (
                            <p key={index} className="text-textDim text-sm md:text-base">
                                {lang.language} <span className="text-accent font-semibold ml-2">{lang.level}</span> 
                                <span className="text-textDim/60 ml-1">{lang.description}</span>
                            </p>
                        ))}

                    </div>
                </div>
            </motion.div>

        </section>
    );
};

export default Education;