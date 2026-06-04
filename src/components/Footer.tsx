import { resumeData } from '../data/resume.ts';
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

/**
 * Componente Footer (Pie de Página)
 * Renderiza la firma de derechos de autor y los enlaces dinámicos de contacto/redes.
 * Los datos se consumen desde la capa de datos estática (resumeData).
 */
const Footer = () => {
    // ==========================================
    // OBTENCIÓN DE DATOS Y ESTADOS
    // ==========================================
    const { header } = resumeData;
    
    // Generación dinámica del año actual para el copyright
    const currentYear = new Date().getFullYear();

    // ==========================================
    // RENDERIZADO DEL COMPONENTE
    // ==========================================
    return (
        <footer className="w-full bg-primary px-8 md:px-20 lg:px-32 pb-8 pt-12">
            
            {/* * ESTILOS LOCALES: Animación de Latido
              * Nota de mantenimiento: A futuro, este bloque @keyframes y su clase 
              * se pueden trasladar al archivo global (ej. index.css) para mantener 
              * el archivo .tsx enfocado 100% en la estructura UI.
              */}
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

            {/* CONTENEDOR PRINCIPAL */}
            <div className="border-t border-black/10 dark:border-white/5 pt-8 flex flex-col items-center justify-center gap-6">
                
                {/* Copyright dinámico */}
                <div className="text-textDim text-sm font-medium text-center">
                    &copy; {currentYear} Luc Pesce. Todos los derechos reservados.
                </div>

                {/* BOTONERA DE REDES SOCIALES Y CONTACTO */}
                <div className="flex items-center gap-6">
                    
                    {/* Botón de Email */}
                    <a 
                        href={`mailto:${header.email}`} 
                        className="text-textDim hover:text-accent transition-colors duration-300 text-xl hover:-translate-y-1 transform inline-block"
                        aria-label="Enviar correo electrónico"
                    >
                        <FaEnvelope />
                    </a>
                    
                    {/* Botón Destacado de WhatsApp (Aplica la animación CSS local) */}
                    <a 
                        href={header.whatsapp} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-textDim text-xl animate-latido hover:-translate-y-1 transform inline-block"
                        aria-label="Contactar por WhatsApp"
                    >
                        <FaWhatsapp />
                    </a>

                    {/* Botón de GitHub */}
                    <a 
                        href={`https://${header.github}`} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-textDim hover:text-accent transition-colors duration-300 text-xl hover:-translate-y-1 transform inline-block"
                        aria-label="Perfil de GitHub"
                    >
                        <FaGithub />
                    </a>

                    {/* Botón de LinkedIn */}
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