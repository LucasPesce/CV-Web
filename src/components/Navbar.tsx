import { useState, useEffect } from 'react';

const Navbar = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Nuevo estado para el menú móvil

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    const navLinks = [
        { name: 'Inicio', href: '#home' },
        { name: 'Habilidades', href: '#skills' },
        { name: 'Proyectos', href: '#projects' },
        { name: 'Sobre Mí', href: '#about' },
        { name: 'Formación', href: '#education' },
    ];

    return (
        <nav className="fixed w-full top-0 z-50 bg-primary/80 backdrop-blur-md border-b border-secondary transition-colors duration-300">
            {/* Contenedor principal alineado con el resto de la web */}
            <div className="flex items-center justify-between h-20 px-8 md:px-20 lg:px-32">

                {/* LOGO */}
                <a href="#home" className="text-accent font-bold text-xl tracking-widest hover:text-accentHover transition-colors z-50">
                    LUC.PESCE
                </a>

                {/* --- CONTENEDOR DERECHO (ENLACES + CONTROLES) --- */}
                <div className="flex items-center gap-4 md:gap-6">

                    {/* 1. Lista de Enlaces (SOLO ESCRITORIO) */}
                    <div className="hidden md:flex items-center gap-6">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-textDim hover:text-accent transition-colors duration-300 text-sm font-semibold uppercase tracking-wider"
                            >
                                {link.name}
                            </a>
                        ))}
                        {/* Divisor Visual */}
                        <div className="w-px h-6 bg-textDim/30"></div>
                    </div>

                    {/* 2. INTERRUPTOR DE TEMA UNIFICADO (VISIBLE SIEMPRE) */}
                    <button
                        type="button"
                        aria-label="Alternar tema claro/oscuro"
                        title="Alternar tema"
                        onClick={() => setIsDarkMode(!isDarkMode)}
                        className="relative flex items-center w-14 h-8 p-1 rounded-full transition-all duration-300 focus:outline-none border border-black/5 dark:border-white/10 shadow-inner z-50"
                        style={{ backgroundColor: 'var(--accent)' }}
                    >
                        {/* Círculo Neutro Deslizable */}
                        <div
                            className={`absolute w-6 h-6 rounded-full bg-white shadow-md transition-transform duration-300 ease-in-out ${
                                isDarkMode ? 'translate-x-6' : 'translate-x-0'
                            }`}
                        />
                        {/* Icono Sol */}
                        <div className={`relative z-10 flex items-center justify-center w-6 h-6 transition-colors duration-300 ${isDarkMode ? 'text-white/80' : 'text-[var(--accent)]'}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" />
                            </svg>
                        </div>
                        {/* Icono Luna */}
                        <div className={`relative z-10 flex items-center justify-center w-6 h-6 transition-colors duration-300 ${isDarkMode ? 'text-[var(--accent)]' : 'text-white/80'}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                            </svg>
                        </div>
                    </button>

                    {/* 3. BOTÓN HAMBURGUESA (SOLO MÓVIL) */}
                    <button 
                        type="button" 
                        aria-label="Abrir menú" 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden text-textMain hover:text-accent transition-colors z-50 focus:outline-none"
                    >
                        {isMenuOpen ? (
                            // Icono "X" cuando está abierto
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        ) : (
                            // Icono "Hamburguesa" cuando está cerrado
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
                        )}
                    </button>
                </div>
            </div>

            {/* --- MENÚ DESPLEGABLE (MÓVIL) --- */}
            {/* Usamos max-h (max-height) para lograr un efecto de acordeón suave con CSS puro */}
            <div 
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-primary/95 backdrop-blur-md border-b border-secondary shadow-xl ${
                    isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 border-transparent'
                }`}
            >
                <div className="flex flex-col items-center gap-6 py-6">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            // Cerramos el menú al hacer clic en un enlace
                            onClick={() => setIsMenuOpen(false)}
                            className="text-textDim hover:text-accent transition-colors duration-300 text-sm font-bold uppercase tracking-widest"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;