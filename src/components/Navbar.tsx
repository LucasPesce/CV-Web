import { useState, useEffect } from 'react';

const Navbar = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);

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
            <div className="flex items-center justify-between h-20 px-8 md:px-20 lg:px-40">

                <a href="#home" className="text-accent font-bold text-xl tracking-widest hover:text-accentHover transition-colors">
                    LUC.PESCE
                </a>

                {/* --- NAVEGACIÓN Y CONTROLES (ESCRITORIO) --- */}
                <div className="hidden md:flex items-center gap-6">

                    {/* 1. Lista de Enlaces */}
                    <div className="flex items-center gap-6">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-textDim hover:text-accent transition-colors duration-300 text-sm font-semibold uppercase tracking-wider"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* 2. Divisor Visual (Línea vertical) */}
                    <div className="w-px h-6 bg-textDim/30"></div>

                    {/* 3. INTERRUPTOR (TOGGLE) DE TEMA */}
                    <button
                        type="button"
                        aria-label="Alternar tema claro/oscuro"
                        title="Alternar tema"
                        onClick={() => setIsDarkMode(!isDarkMode)}
                        className="relative flex items-center w-14 h-8 p-1 rounded-full transition-all duration-300 focus:outline-none border border-black/5 dark:border-white/10 shadow-inner"
                        style={{ backgroundColor: 'var(--accent)' }}
                    >
                        {/* Círculo Neutro Deslizable */}
                        <div
                            className={`absolute w-6 h-6 rounded-full bg-white shadow-md transition-transform duration-300 ease-in-out ${isDarkMode ? 'translate-x-6' : 'translate-x-0'
                                }`}
                        />

                        {/* Icono Sol (Izquierda) */}
                        <div className={`relative z-10 flex items-center justify-center w-6 h-6 transition-colors duration-300 ${isDarkMode ? 'text-white/80' : 'text-[var(--accent)]'
                            }`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" />
                            </svg>
                        </div>

                        {/* Icono Luna (Derecha) */}
                        <div className={`relative z-10 flex items-center justify-center w-6 h-6 transition-colors duration-300 ${isDarkMode ? 'text-[var(--accent)]' : 'text-white/80'
                            }`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                            </svg>
                        </div>
                    </button>
                </div>

                {/* --- NAVEGACIÓN Y CONTROLES (MÓVIL) --- */}
                <div className="md:hidden flex items-center gap-5">
                    {/* Interruptor simplificado para celular */}
                    <button
                        type="button"
                        aria-label="Alternar tema"
                        onClick={() => setIsDarkMode(!isDarkMode)}
                        className="relative flex items-center w-12 h-6 p-1 rounded-full bg-secondary border border-textDim/20"
                    >
                        <div className={`absolute w-4 h-4 rounded-full bg-accent transition-transform duration-300 ${isDarkMode ? 'translate-x-6' : 'translate-x-0'}`} />
                    </button>

                    <button type="button" aria-label="Abrir menú" className="text-textMain hover:text-accent transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
                    </button>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;