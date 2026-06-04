import { resumeData } from '../data/resume.ts';
import { FaLinkedin, FaFileDownload, FaGithub, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';
import miCV from '../../public/CV.pdf';

/**
 * Componente Hero (Sección Principal / Portada)
 * Es la primera impresión del portfolio. Renderiza el nombre y rol con un efecto de máquina de escribir,
 * seguido de un resumen profesional y una botonera dinámica de contacto/descarga.
 */
const Hero = () => {
    // ==========================================
    // DATOS DE LA SECCIÓN
    // ==========================================
    const { header, summary } = resumeData;

    // Se añaden puntos finales a los textos para el efecto visual de escritura
    const nameText = `${header.name}.`;
    const roleText = `${header.role}.`;

    // ==========================================
    // CONFIGURACIÓN DE ANIMACIONES (EFECTO TYPEWRITER)
    // ==========================================
    const typingSpeed = 0.05; // Velocidad de escritura por letra (en segundos)
    
    // Cálculos matemáticos para encadenar las animaciones sin que se superpongan:
    const h1Duration = nameText.length * typingSpeed; // Tiempo total que tarda el Nombre
    const h2Delay = h1Duration + 0.2; // El Rol empieza a escribirse después del Nombre + 0.2s de pausa
    const h2Duration = roleText.length * typingSpeed; // Tiempo total que tarda el Rol
    const finalDelay = h2Delay + h2Duration; // El párrafo y los botones aparecen al final

    // Variante individual para cada letra (aparece de forma instantánea)
    const typingLetter = {
        hidden: { opacity: 0, display: "none" },
        visible: { opacity: 1, display: "inline-block" }
    };

    /**
     * Función Helper: renderTypingText
     * Toma un string, lo divide en palabras y luego en letras.
     * Envuelve cada letra en un span animado para lograr el efecto de máquina de escribir 
     * preservando correctamente los espacios entre palabras para que no se rompan por el flex/wrap.
     */
    const renderTypingText = (text: string) => {
        return text.split(" ").map((word, wordIndex, array) => (
            <span key={wordIndex} className="inline-block whitespace-nowrap">
                {Array.from(word).map((char, charIndex) => (
                    <motion.span key={charIndex} variants={typingLetter}>
                        {char}
                    </motion.span>
                ))}
                {/* Agrega un espacio en blanco después de cada palabra, excepto la última */}
                {wordIndex !== array.length - 1 && (
                    <motion.span variants={typingLetter}>&nbsp;</motion.span>
                )}
            </span>
        ));
    };

    // ==========================================
    // CONFIGURACIÓN DE BOTONERA
    // ==========================================
    
    // Arreglo de datos para generar los botones dinámicamente y no repetir código (Principios DRY)
    const actionButtons = [
        { id: 'email', label: 'Email', icon: FaEnvelope, href: `mailto:${header.email}`, target: '_self' },
        { id: 'whatsapp', label: 'WhatsApp', icon: FaWhatsapp, href: header.whatsapp, target: '_blank' },
        { id: 'github', label: 'GitHub', icon: FaGithub, href: `https://${header.github}`, target: '_blank' },
        { id: 'cv', label: 'CV', icon: FaFileDownload, href: miCV, target: '_blank' },
        { id: 'linkedin', label: 'LinkedIn', icon: FaLinkedin, href: "https://www.linkedin.com/in/lucaspesce/", target: '_blank' }
    ];

    // Clases CSS base para todos los botones: Fusión de diseño responsivo + estilo de tarjeta hover
    const buttonClass = "flex items-center justify-center gap-2 w-12 h-12 md:w-auto md:h-auto md:px-8 md:py-3 rounded-xl border border-black/10 dark:border-white/10 text-sm font-bold text-textMain bg-black/5 dark:bg-white/5 hover:border-accent/50 hover:bg-accent/10 hover:text-accent hover:shadow-[0_0_20px_-5px_var(--accent)] transition-all duration-300 shadow-sm";

    // ==========================================
    // RENDERIZADO DEL COMPONENTE
    // ==========================================
    return (
        <section id="home" className="min-h-[80vh] flex flex-col justify-center items-center md:items-start px-8 md:px-20 lg:px-32 bg-primary pt-28 md:pt-32 pb-12 overflow-hidden">

            {/* Título Principal (Nombre) */}
            <motion.h1
                className="text-5xl md:text-7xl font-bold text-textMain mb-4 tracking-tight flex flex-wrap justify-center md:justify-start text-center md:text-left gap-y-2 w-full"
                variants={{
                    hidden: { opacity: 1 },
                    visible: { opacity: 1, transition: { staggerChildren: typingSpeed } }
                }}
                initial="hidden"
                animate="visible"
            >
                {renderTypingText(nameText)}
            </motion.h1>

            {/* Subtítulo (Rol Profesional) */}
            <motion.h2
                className="text-4xl md:text-6xl font-bold text-textDim mb-6 tracking-tight flex flex-wrap justify-center md:justify-start text-center md:text-left gap-y-2 w-full"
                variants={{
                    hidden: { opacity: 1 },
                    visible: {
                        opacity: 1,
                        transition: { staggerChildren: typingSpeed, delayChildren: h2Delay }
                    }
                }}
                initial="hidden"
                animate="visible"
            >
                {renderTypingText(roleText)}
            </motion.h2>

            {/* Párrafo Descriptivo y Botonera (Aparecen al finalizar los textos) */}
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: {
                        opacity: 1,
                        y: 0,
                        transition: { delay: finalDelay, duration: 0.8 }
                    }
                }}
                initial="hidden"
                animate="visible"
                className="w-full flex flex-col items-center md:items-start"            
            >
                {/* Resumen extraído de resumeData */}
                <p className="text-textDim text-lg md:text-xl max-w-2xl mb-10 leading-relaxed text-justify">
                    {summary}
                </p>

                {/* Grid Responsivo de Botones */}
                <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-4 w-full mt-4">
                    {actionButtons.map((btn) => (
                        <motion.a
                            key={btn.id}
                            href={btn.href}
                            target={btn.target}
                            rel={btn.target === '_blank' ? "noopener noreferrer" : undefined}
                            aria-label={btn.label}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={buttonClass}
                        >
                            {/* Lógica condicional específica para el botón CV: 
                                En celulares muestra las letras "CV" estilizadas, en PC muestra el ícono nativo */}
                            {btn.id === 'cv' ? (
                                <>
                                    <span className="md:hidden font-black text-[11px] border-2 border-current px-1 rounded-md leading-none py-0.5 tracking-tighter">
                                        CV
                                    </span>
                                    <btn.icon className="hidden md:block text-base" />
                                </>
                            ) : (
                                <btn.icon className="text-xl md:text-base" />
                            )}
                            
                            {/* La etiqueta de texto se oculta en celulares para mantener los botones cuadrados */}
                            <span className="hidden md:inline">{btn.label}</span>
                        </motion.a>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;