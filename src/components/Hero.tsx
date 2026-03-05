import { resumeData } from '../data/resume.ts';
import { FaLinkedin, FaFileDownload, FaGithub, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Hero = () => {
    const { header, summary } = resumeData;

    // Preparamos los textos
    const nameText = `${header.name}.`;
    const roleText = `${header.role}.`;

    // MATEMÁTICA DE ANIMACIÓN
    const typingSpeed = 0.05;
    const h1Duration = nameText.length * typingSpeed;
    const h2Delay = h1Duration + 0.2;
    const h2Duration = roleText.length * typingSpeed;
    const finalDelay = h2Delay + h2Duration;

    const typingLetter = {
        hidden: { opacity: 0, display: "none" },
        visible: { opacity: 1, display: "inline-block" }
    };

    // Función mágica para agrupar letras en palabras y evitar que se rompan a la mitad
    const renderTypingText = (text: string) => {
        return text.split(" ").map((word, wordIndex, array) => (
            <span key={wordIndex} className="inline-block whitespace-nowrap">
                {Array.from(word).map((char, charIndex) => (
                    <motion.span key={charIndex} variants={typingLetter}>
                        {char}
                    </motion.span>
                ))}
                {/* Agregamos el espacio animado después de cada palabra, excepto en la última */}
                {wordIndex !== array.length - 1 && (
                    <motion.span variants={typingLetter}>&nbsp;</motion.span>
                )}
            </span>
        ));
    };

    return (
        <section id="home" className="min-h-[80vh] flex flex-col justify-center items-center md:items-start px-8 md:px-20 lg:px-32 bg-primary pt-28 md:pt-32 pb-12 overflow-hidden">

            {/* Título Principal */}
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

            {/* Subtítulo */}
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

            {/* Párrafo y Botones */}
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
                className="w-full flex flex-col items-center md:items-start"            >
                <p className="text-textDim text-lg md:text-xl max-w-2xl mb-10 leading-relaxed text-justify">
                    {summary}
                </p>

                {/* BOTONERA RESPONSIVA: Íconos en móvil, texto completo en escritorio */}
                <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-4 w-full mt-4">
                    <a
                        href={`mailto:${header.email}`}
                        className="w-12 h-12 md:w-auto md:h-auto md:px-8 md:py-3 border-2 border-accent text-accent font-semibold rounded hover:bg-accent hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
                        aria-label="Email"
                    >
                        <FaEnvelope className="text-xl md:text-base" />
                        <span className="hidden md:inline">Email</span>
                    </a>
                    <a
                        href={header.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 md:w-auto md:h-auto md:px-8 md:py-3 border-2 border-accent text-accent font-semibold rounded hover:bg-accent hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
                        aria-label="WhatsApp"
                    >
                        <FaWhatsapp className="text-xl md:text-base" />
                        <span className="hidden md:inline">WhatsApp</span>
                    </a>
                    <a
                        href={`https://${header.github}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 md:w-auto md:h-auto md:px-8 md:py-3 border-2 border-accent text-accent font-semibold rounded hover:bg-accent hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
                        aria-label="GitHub"
                    >
                        <FaGithub className="text-xl md:text-base" />
                        <span className="hidden md:inline">GitHub</span>
                    </a>

                    <a
                        href="/CV-Simple.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 md:w-auto md:h-auto md:px-8 md:py-3 border-2 border-accent text-accent font-semibold rounded hover:bg-accent hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
                        aria-label="CV"
                    >
                        <FaFileDownload className="text-xl md:text-base" />
                        <span className="hidden md:inline">CV</span>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/lucaspesce/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 md:w-auto md:h-auto md:px-8 md:py-3 border-2 border-accent text-accent font-semibold rounded hover:bg-accent hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin className="text-xl md:text-base" />
                        <span className="hidden md:inline">LinkedIn</span>
                    </a>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;