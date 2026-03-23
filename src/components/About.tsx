import { motion, type Variants } from 'framer-motion';
import meImg from '../assets/me.png';

const About = () => {
    // Imagen desde la izquierda
    const imageVariants: Variants = {
        hidden: { opacity: 0, x: -50, scale: 0.95 },
        visible: { 
            opacity: 1, 
            x: 0, 
            scale: 1,
            transition: { duration: 0.8, ease: "easeOut" } 
        }
    };

    // Texto desde la derecha
    const textVariants: Variants = {
        hidden: { opacity: 0, x: 50 },
        visible: { 
            opacity: 1, 
            x: 0, 
            transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } 
        }
    };

    return (
        <section id="about" className="relative py-20 px-8 md:px-20 lg:px-32 overflow-hidden">

            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mb-16 flex flex-col md:flex-row items-center justify-center md:justify-start gap-2 md:gap-4"
            >
                <span className="hidden md:block w-10 h-1.5 bg-accent rounded-full shadow-[0_0_10px_var(--accent)]"></span>
                <h2 className="text-3xl md:text-4xl font-bold text-textMain text-center md:text-left">
                    Sobre Mí
                </h2>
                <span className="md:hidden w-16 h-1.5 bg-accent rounded-full shadow-[0_0_10px_var(--accent)] mt-1"></span>
            </motion.div>

            <div className="flex flex-col md:flex-row items-start gap-12 lg:gap-20">

                {/* Columna Imagen (Izquierda) */}
                <motion.div 
                    variants={imageVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="w-full md:w-auto flex justify-center md:justify-start shrink-0"
                >
                    <img
                        src={meImg}
                        alt="Luc - Analista en Sistemas"
                        className="w-64 md:w-80 h-auto rounded-2xl object-cover grayscale transition-all duration-700 hover:grayscale-0 border border-black/5 dark:border-white/5 shadow-xl"
                    />
                </motion.div>

                {/* Columna Texto (Derecha) */}
                <motion.div 
                    variants={textVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="w-full flex-1"
                >
                    <div className="space-y-8 text-textDim leading-relaxed text-lg md:text-xl font-light">
                        
                        <p className="text-justify">
                            Próximo a graduarme como <span className="font-bold text-textMain">Analista en Sistemas</span>, mi formación me brindó el marco teórico sobre desarrollo y bases de datos, encontrando mi vocación en el <span className="font-bold text-textMain">Frontend</span>. Me adapto a las nuevas tecnologías, utilizando la <span className="font-bold text-textMain">Inteligencia Artificial</span> como un aliado estratégico para optimizar el flujo de trabajo, permitiéndome enfocar los esfuerzos en la lógica, el diseño y una implementación robusta.
                        </p>

                        <div className="border-t border-black/10 dark:border-white/5 w-1/4"></div>

                        <p className="text-justify">
                            Complemento mi perfil técnico con una mentalidad orientada a la disciplina y la resolución de problemas. Mi interés por la filosofía y la psicología me permite abordar el desarrollo de software con una visión más integral, entendiendo que detrás de cada línea de código hay una solución para personas reales.
                        </p>

                        {/* Etiquetas Técnicas en Español */}
                        <div className="flex flex-wrap gap-2 pt-2">
                            {['React', 'TypeScript', 'SQL', 'Diseño UI', 'C# .NET', 'IA'].map((tag) => (
                                <span key={tag} className="text-xs font-mono px-3 py-1 rounded bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-textDim italic">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default About;