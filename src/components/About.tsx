import meImg from '../assets/me.png';

const About = () => {
    return (
        <section id="about" className="relative py-20 px-8 md:px-20 lg:px-32">

            {/* Título de la sección */}
                <div className="mb-16 flex flex-col md:flex-row items-center justify-center md:justify-start gap-2 md:gap-4">
                    {/* Raya lateral: Visible solo en PC (Escritorio) */}
                    <span className="hidden md:block w-10 h-1.5 bg-accent rounded-full shadow-[0_0_10px_var(--accent)]"></span>
                    <h2 className="text-3xl md:text-4xl font-bold text-textMain text-center md:text-left">
                        Sobre Mí
                    </h2>
                    {/* Raya inferior: Visible solo en Móvil (Celular) */}
                    <span className="md:hidden w-16 h-1.5 bg-accent rounded-full shadow-[0_0_10px_var(--accent)] mt-1"></span>
                </div>

            <div className="flex flex-col md:flex-row items-start gap-16">

                {/* Columna Imagen */}
                <div className="w-full md:w-auto flex justify-center md:justify-start shrink-0">
                    <div className="relative group">
                        <img
                            src={meImg}
                            alt="Luc - Analista en Sistemas"
                            className="relative w-64 md:w-80 h-auto rounded-2xl object-cover grayscale transition-all duration-700 group-hover:grayscale-0 border border-black/10 dark:border-white/10 shadow-2xl"
                        />
                    </div>
                </div>

                {/* Columna Texto con División y Justificado */}
                <div className="w-full flex-1">
                    {/* Bajamos el espacio a 4 para que la línea esté más cerca de los párrafos */}
                    <div className="space-y-6 text-textDim leading-relaxed text-lg md:text-xl font-light">

                        {/* Bloque Profesional - Justificado */}
                        <p className="text-justify">
                            Próximo a graduarme como Analista en Sistemas, mi formación me brindó el marco teórico sobre desarrollo y bases de datos, encontrando mi vocación en el Frontend. Me adapto a las nuevas tecnologías y los cambios que con ellas traen, por lo que suelo utilizar la asistencia de la Inteligencia Artificial como aliado para optimizar el trabajo y dedicarle tiempo a la lógica, el diseño y una buena implementación, siempre buscando usar la tecnología adecuada para cada proyecto.
                        </p>

                        {/* Línea divisoria minimalista */}
                        <div className="border-t border-black/10 dark:border-white/5 w-full"></div>

                        {/* Bloque Personal - Justificado */}
                        <p className="text-justify">
                            Más allá del código, busco un equilibrio en mi día a día a través del entrenamiento diario, con disciplina y dedicación para mantenerme enfocado. En mi tiempo libre disfruto del anime y los videojuegos, especialmente RPGs y Sandbox, los cuales alimentan mi curiosidad por cómo se desarrollan mundos tan fantásticos e historias memorables. Soy además un lector aficionado a temas como la filosofía, la política y la psicología, buscando siempre entender mejor el mundo que me rodea para lograr una visión más integral y amplia de los problemas que resolvemos con el software.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;