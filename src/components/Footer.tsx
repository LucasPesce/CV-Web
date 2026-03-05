import { resumeData } from '../data/resume.ts';
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
    const { header } = resumeData;
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-primary px-8 md:px-20 lg:px-32 pb-8 pt-12">
            
            <style>
                {`
                    @keyframes latidoColor {
                        0%, 100% { 
                            transform: scale(1); 
                            /* Al no definir color acá, el navegador usa text-textDim automáticamente */
                        }
                        15% { 
                            transform: scale(1.2); 
                            color: var(--accent); 
                        }
                        25% { 
                            transform: scale(1); 
                            color: var(--accent); 
                        }
                        35% { 
                            transform: scale(1.2); 
                            color: var(--accent); 
                        }
                        50% { 
                            transform: scale(1); 
                            /* Vuelve a la normalidad heredando el color base */
                        }
                    }
                    .animate-latido {
                        animation: latidoColor 2s infinite ease-in-out;
                    }
                `}
            </style>

            <div className="border-t border-black/10 dark:border-white/5 pt-8 flex flex-col items-center justify-center gap-6">
                
                <div className="text-textDim text-sm font-medium text-center">
                    &copy; {currentYear} Luc. Todos los derechos reservados.
                </div>

                <div className="flex items-center gap-6">
                    <a 
                        href={`mailto:${header.email}`} 
                        className="text-textDim hover:text-accent transition-colors duration-300 text-xl hover:-translate-y-1 transform inline-block"
                        aria-label="Enviar correo electrónico"
                    >
                        <FaEnvelope />
                    </a>
                    
                    {/* --- Ícono Destacado: Mismas clases base que el resto + animate-latido --- */}
                    <a 
                        href={header.whatsapp} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-textDim text-xl animate-latido hover:-translate-y-1 transform inline-block"
                        aria-label="Contactar por WhatsApp"
                    >
                        <FaWhatsapp />
                    </a>

                    <a 
                        href={`https://${header.github}`} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-textDim hover:text-accent transition-colors duration-300 text-xl hover:-translate-y-1 transform inline-block"
                        aria-label="Perfil de GitHub"
                    >
                        <FaGithub />
                    </a>
                    <a 
                        href="https://www.linkedin.com/in/lucaspesce/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-textDim hover:text-accent transition-colors duration-300 text-xl hover:-translate-y-1 transform inline-block"
                        aria-label="Perfil de LinkedIn"
                    >
                        <FaLinkedin />
                    </a>
                </div>

            </div>
        </footer>
    );
};

export default Footer;