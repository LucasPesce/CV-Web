import { FaReact, FaGitAlt, FaGithub, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiTailwindcss, SiVite, SiScrumalliance } from "react-icons/si";
import { MdDevices, MdOutlineRateReview, MdApi, MdDesignServices } from "react-icons/md";
import { HiSparkles } from "react-icons/hi";
import { TbBrandCSharp } from "react-icons/tb";

const Skills = () => {
    // Estilo Card: Mantenemos el hover sutil para PC, pero en móvil es una tarjeta estática elegante
    const cardStyle = "relative bg-gradient-to-br from-black/5 to-transparent dark:from-white/5 dark:to-transparent backdrop-blur-xl border border-black/10 dark:border-white/10 rounded-2xl p-5 flex flex-col items-center justify-center gap-3 md:transition-all md:duration-500 md:hover:border-accent/50 md:hover:shadow-[0_0_30px_-5px_var(--accent)] group overflow-hidden shadow-sm";

    const iconStyle = "text-4xl text-textDim group-hover:text-accent transition-all duration-500 group-hover:scale-110";
    const titleStyle = "text-textMain font-semibold text-sm md:text-base tracking-wide group-hover:text-accent transition-colors duration-500 text-center";

    return (
        <section id="skills" className="relative py-20 px-8 md:px-20 lg:px-32 overflow-hidden">
            
            {/* ORBE DE LUZ AMBIENTAL */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-accent/30 dark:bg-accent/15 blur-[100px] md:blur-[120px] rounded-full pointer-events-none z-0"></div>

            <div className="relative z-10">
                {/* Título de la sección responsivo */}
                <div className="mb-16 flex flex-col md:flex-row items-center justify-center md:justify-start gap-2 md:gap-4">
                    <span className="hidden md:block w-10 h-1.5 bg-accent rounded-full shadow-[0_0_10px_var(--accent)]"></span>
                    <h2 className="text-3xl md:text-4xl font-bold text-textMain text-center md:text-left">
                        Habilidades Técnicas
                    </h2>
                    <span className="md:hidden w-16 h-1.5 bg-accent rounded-full shadow-[0_0_10px_var(--accent)] mt-1"></span>
                </div>

                {/* --- BENTO GRID ESTÁTICO Y LIMPIO --- */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4 auto-rows-[110px] md:auto-rows-[140px]">
                    
                    <div className={`${cardStyle} col-span-2 row-span-2 bg-secondary/60`}>
                        <FaReact className={`${iconStyle} text-7xl animate-spin-slow`} />
                        <h3 className="text-2xl font-bold text-textMain group-hover:text-accent mt-4">React</h3>
                        <p className="text-sm text-textDim">Frontend Moderno</p>
                    </div>

                    <div className={`${cardStyle} col-span-2`}>
                        <TbBrandCSharp className={iconStyle} />
                        <h3 className={titleStyle}>C# & .NET</h3>
                    </div>

                    <div className={`${cardStyle} col-span-2`}>
                        <SiTailwindcss className={iconStyle} />
                        <h3 className={titleStyle}>Tailwind CSS</h3>
                    </div>

                    <div className={`${cardStyle} col-span-2`}>
                        <FaDatabase className={iconStyle} />
                        <h3 className={titleStyle}>SQL Server & MySQL</h3>
                    </div>

                    <div className={`${cardStyle} col-span-2 md:col-span-2 lg:col-span-2 row-span-2`}>
                        <HiSparkles className={`${iconStyle} text-6xl mb-4`} />
                        <h3 className="text-textMain font-semibold text-lg tracking-wide group-hover:text-accent text-center">Prompt Engineering</h3>
                        <p className="text-xs text-textDim text-center px-4">Desarrollo con IA</p>
                    </div>

                    <div className={cardStyle}><FaNodeJs className={iconStyle} /><h3 className="text-textMain font-semibold text-sm group-hover:text-accent">Node.js</h3></div>
                    <div className={cardStyle}><MdApi className={iconStyle} /><h3 className="text-textMain font-semibold text-sm group-hover:text-accent">APIs REST</h3></div>
                    <div className={cardStyle}><SiVite className={iconStyle} /><h3 className="text-textMain font-semibold text-sm group-hover:text-accent">Vite</h3></div>
                    <div className={cardStyle}><MdOutlineRateReview className={iconStyle} /><h3 className="text-textMain font-semibold text-sm group-hover:text-accent text-center">Code Review</h3></div>
                    
                    <div className={`${cardStyle} col-span-2`}>
                        <MdDesignServices className={iconStyle} />
                        <h3 className={titleStyle}>Diseño de Interfaces (UI)</h3>
                    </div>

                    <div className={cardStyle}><MdDevices className={iconStyle} /><h3 className="text-textMain font-semibold text-sm group-hover:text-accent">Responsive</h3></div>
                    <div className={cardStyle}><FaGitAlt className={iconStyle} /><h3 className="text-textMain font-semibold text-sm group-hover:text-accent">Git</h3></div>
                    <div className={cardStyle}><FaGithub className={iconStyle} /><h3 className="text-textMain font-semibold text-sm group-hover:text-accent">GitHub</h3></div>
                    <div className={cardStyle}><SiScrumalliance className={iconStyle} /><h3 className="text-textMain font-semibold text-sm group-hover:text-accent">Scrum</h3></div>
                </div>
            </div>
        </section>
    );
};

export default Skills;