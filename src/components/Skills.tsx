import { FaReact, FaGitAlt, FaGithub, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiTailwindcss, SiVite, SiScrumalliance } from "react-icons/si";
import { MdDevices, MdOutlineRateReview, MdApi, MdDesignServices } from "react-icons/md";
import { HiSparkles } from "react-icons/hi";
import { TbBrandCSharp } from "react-icons/tb";

const Skills = () => {
    // Estilo Card 
    const cardStyle = "relative bg-gradient-to-br from-black/5 to-transparent dark:from-white/5 dark:to-transparent backdrop-blur-xl border border-black/10 dark:border-white/10 rounded-2xl p-5 flex flex-col items-center justify-center gap-3 transition-all duration-500 hover:border-accent/50 hover:shadow-[0_0_30px_-5px_var(--accent)] group overflow-hidden shadow-sm";

    // Estilo Iconos
    const iconStyle = "text-4xl text-textDim group-hover:text-accent transition-all duration-500 group-hover:scale-110";

    // Estilo Titulos
    const titleStyle = "text-textMain font-semibold text-sm md:text-base tracking-wide group-hover:text-accent transition-colors duration-500 text-center";

    return (
        <section id="skills" className="relative py-20 px-8 md:px-20 lg:px-32 overflow-hidden">

            {/* ORBE DE LUZ AMBIENTAL */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-accent/30 dark:bg-accent/15 blur-[100px] md:blur-[120px] rounded-full pointer-events-none z-0 transition-colors duration-700"></div>
            
            <div className="relative z-10">

                {/* Título de la sección */}
                <div className="mb-16 flex items-center justify-start gap-4">
                    <span className="w-10 h-1.5 bg-accent rounded-full shadow-[0_0_10px_var(--accent)]"></span>
                    <h2 className="text-3xl md:text-4xl font-bold text-textMain">
                        Habilidades Técnicas
                    </h2>
                </div>

                {/* --- BENTO GRID  --- */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 auto-rows-[160px]">

                    {/* REACT (2x2) */}
                    <div className={`${cardStyle} col-span-2 row-span-2 bg-secondary/60`}>
                        <FaReact className={`${iconStyle} text-7xl animate-spin-slow`} />
                        <h3 className="text-2xl font-bold text-textMain group-hover:text-accent transition-colors mt-4">React</h3>
                        <p className="text-sm text-textDim">Frontend Moderno</p>
                    </div>

                    {/* C# & .NET (2x1) */}
                    <div className={`${cardStyle} col-span-2`}>
                        <div className="flex gap-4">
                            <TbBrandCSharp className={iconStyle} />
                        </div>
                        <h3 className={titleStyle}>C# & .NET</h3>
                    </div>

                    {/* Tailwind CSS (2x1) */}
                    <div className={`${cardStyle} col-span-2`}>
                        <SiTailwindcss className={iconStyle} />
                        <h3 className={titleStyle}>Tailwind CSS</h3>
                    </div>

                    {/* SQL Server & MySQL (2x1) */}
                    <div className={`${cardStyle} col-span-2`}>
                        <div className="flex gap-3">
                            <FaDatabase className={iconStyle} />
                        </div>
                        <h3 className={titleStyle}>SQL Server & MySQL</h3>
                    </div>

                    {/* IA (2x2) - Baja hasta la fila 3 */}
                    <div className={`${cardStyle} col-span-2 md:col-span-2 lg:col-span-2 row-span-2`}>
                        <HiSparkles className={`${iconStyle} text-6xl mb-4`} />
                        <h3 className="text-textMain font-semibold text-lg tracking-wide group-hover:text-accent transition-colors duration-500 text-center">Prompt Engineering</h3>
                        <p className="text-xs text-textDim text-center px-4">Desarrollo con IA</p>
                    </div>

                    {/* --- FILA 3 (Cajas pequeñas 1x1) --- */}
                    <div className={cardStyle}>
                        <FaNodeJs className={`${iconStyle} text-4xl`} />
                        <h3 className="text-textMain font-semibold text-sm group-hover:text-accent transition-colors duration-500">Node.js</h3>
                    </div>

                    <div className={cardStyle}>
                        <MdApi className={`${iconStyle} text-4xl`} />
                        <h3 className="text-textMain font-semibold text-sm group-hover:text-accent transition-colors duration-500">APIs REST</h3>
                    </div>

                    <div className={cardStyle}>
                        <SiVite className={`${iconStyle} text-4xl`} />
                        <h3 className="text-textMain font-semibold text-sm group-hover:text-accent transition-colors duration-500">Vite</h3>
                    </div>

                    <div className={cardStyle}>
                        <MdOutlineRateReview className={`${iconStyle} text-4xl`} />
                        <h3 className="text-textMain font-semibold text-sm group-hover:text-accent transition-colors duration-500 text-center">Code Review</h3>
                    </div>

                    {/* --- FILA 4 --- */}
                    <div className={`${cardStyle} col-span-2`}>
                        <MdDesignServices className={iconStyle} />
                        <h3 className={titleStyle}>Diseño de Interfaces (UI)</h3>
                    </div>

                    <div className={cardStyle}>
                        <MdDevices className={`${iconStyle} text-4xl`} />
                        <h3 className="text-textMain font-semibold text-sm group-hover:text-accent transition-colors duration-500">Responsive</h3>
                    </div>

                    <div className={cardStyle}>
                        <FaGitAlt className={`${iconStyle} text-4xl`} />
                        <h3 className="text-textMain font-semibold text-sm group-hover:text-accent transition-colors duration-500">Git</h3>
                    </div>

                    <div className={cardStyle}>
                        <FaGithub className={`${iconStyle} text-4xl`} />
                        <h3 className="text-textMain font-semibold text-sm group-hover:text-accent transition-colors duration-500">GitHub</h3>
                    </div>

                    <div className={cardStyle}>
                        <SiScrumalliance className={`${iconStyle} text-4xl`} />
                        <h3 className="text-textMain font-semibold text-sm group-hover:text-accent transition-colors duration-500">Scrum</h3>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Skills;