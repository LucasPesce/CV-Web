import { resumeData } from '../data/resume.ts';
import { FaLinkedin, FaFileDownload } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Hero = () => {
    const { header, summary } = resumeData;

    // Preparamos los textos
    const nameText = `${header.name}.`;
    const roleText = `${header.role}.`;

    // MATEMÁTICA DE ANIMACIÓN (Coreografía perfecta)
    const typingSpeed = 0.05; // Velocidad de cada letra
    const h1Duration = nameText.length * typingSpeed; // Cuánto tarda el título
    const h2Delay = h1Duration + 0.2; // Pausa de 0.2s antes de arrancar el subtítulo
    const h2Duration = roleText.length * typingSpeed; // Cuánto tarda el subtítulo
    const finalDelay = h2Delay + h2Duration; // El momento exacto donde cae la última letra

    // Variantes
    const typingLetter = {
        hidden: { opacity: 0, display: "none" },
        visible: { opacity: 1, display: "inline-block" }
    };

    return (
        <section className="min-h-[80vh] flex flex-col justify-center items-start px-8 md:px-20 lg:px-32 bg-primary">
            
            {/* Título Principal */}
            <motion.h1 
                className="text-5xl md:text-7xl font-bold text-textMain mb-4 tracking-tight flex flex-wrap"
                variants={{
                    hidden: { opacity: 1 },
                    visible: { opacity: 1, transition: { staggerChildren: typingSpeed } }
                }}
                initial="hidden"
                animate="visible"
            >
                {Array.from(nameText).map((char, index) => (
                    <motion.span key={index} variants={typingLetter}>
                        {char === " " ? "\u00A0" : char}
                    </motion.span>
                ))}
            </motion.h1>

            {/* Subtítulo (Arranca cuando termina el H1) */}
            <motion.h2 
                className="text-4xl md:text-6xl font-bold text-textDim mb-6 tracking-tight flex flex-wrap"
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
                {Array.from(roleText).map((char, index) => (
                    <motion.span key={index} variants={typingLetter}>
                        {char === " " ? "\u00A0" : char}
                    </motion.span>
                ))}
            </motion.h2>

            {/* Párrafo y Botones (Aparecen calculados al milímetro con finalDelay) */}
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
            >
                <p className="text-textDim text-lg md:text-xl max-w-2xl mb-10 leading-relaxed text-justify">
                    {summary}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
                    <a
                        href={`mailto:${header.email}`}
                        className="px-8 py-3 border-2 border-accent text-accent font-semibold rounded hover:bg-accent hover:text-white transition-all duration-300 text-center"
                    >
                        Email
                    </a>
                    <a
                        href={header.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3 border-2 border-accent text-accent font-semibold rounded hover:bg-accent hover:text-white transition-all duration-300 text-center"
                    >
                        WhatsApp
                    </a>
                    <a
                        href={`https://${header.github}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3 border-2 border-accent text-accent font-semibold rounded hover:bg-accent hover:text-white transition-all duration-300 text-center"
                    >
                        GitHub
                    </a>
                    
                    <a
                        href="/CV-Simple.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3 border-2 border-accent text-accent font-semibold rounded hover:bg-accent hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
                    >
                        <FaFileDownload /> CV
                    </a>
                    <a
                        href="https://linkedin.com/in/lucas-baquero-lazcano" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3 border-2 border-accent text-accent font-semibold rounded hover:bg-accent hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
                    >
                        <FaLinkedin /> LinkedIn
                    </a>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;