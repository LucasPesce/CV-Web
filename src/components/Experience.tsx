const Experience = () => {
    const experiences = [
        {
            title: "Logística y Toma de Decisiones",
            period: "2021 — Presente",
            skill: "Optimización de Procesos",
            description: "Gestión operativa basada en la toma de decisiones ante escenarios imprevistos. Resolución de problemas en tiempo real y coordinación de flujos de trabajo dinámicos, priorizando la eficiencia técnica y operativa."
        },
        {
            title: "Soporte Técnico IT (ISP)",
            period: "Redes y Conectividad",
            skill: "Troubleshooting de Sistemas",
            description: "Diagnóstico y resolución de fallas en dispositivos y servicios de conectividad para proveedores de internet (ISP). Configuración de hardware y soporte técnico enfocado en garantizar la estabilidad de la red."
        },
        {
            title: "Hardware y Mantenimiento",
            period: "Infraestructura Física",
            skill: "Diagnóstico Técnico",
            description: "Reparación, ensamblado y mantenimiento preventivo de equipos de computación. Detección de fallas a nivel de componentes y optimización de rendimiento en sistemas operativos."
        },
        {
            title: "Diseño Visual y Estética UI",
            period: "Competencia Complementaria",
            skill: "Diseño de Interfaces",
            description: "Aplicación de criterios estéticos y de composición en el desarrollo de presentaciones de productos. Mi trayectoria en diseño gráfico complementa el desarrollo Frontend, asegurando interfaces funcionales, prolijas y visualmente equilibradas."
        }
    ];

    return (
        <section id="experience" className="py-20 px-8 md:px-20 lg:px-32">

            <div className="mb-16 flex flex-col md:flex-row items-center justify-center md:justify-start gap-2 md:gap-4">
                <span className="hidden md:block w-10 h-1.5 bg-accent rounded-full shadow-[0_0_10px_var(--accent)]"></span>
                <h2 className="text-3xl md:text-4xl font-bold text-textMain text-center md:text-left uppercase tracking-tight">
                    Experiencia Profesional Complementaria
                </h2>
                <span className="md:hidden w-16 h-1.5 bg-accent rounded-full shadow-[0_0_10px_var(--accent)] mt-1"></span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl">
                {experiences.map((exp, index) => (
                    <div
                        key={index}
                        className="group relative p-8 rounded-2xl transition-all duration-300
                                   /* Modo Claro: Gris Slate-200 sólido para que se note el bloque */
                                   bg-slate-200/70 border border-slate-300 shadow-sm
                                   /* Modo Oscuro: Transparencia elegante */
                                   dark:bg-white/5 dark:border-white/10 dark:shadow-none
                                   /* Hover */
                                   hover:border-accent/50 hover:shadow-md dark:hover:border-accent/50"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="text-xl font-bold text-textMain group-hover:text-accent transition-colors">
                                    {exp.title}
                                </h3>
                                <p className="text-accent text-sm font-medium">
                                    {exp.skill}
                                </p>
                            </div>
                            <span className="text-textDim text-[10px] font-mono uppercase 
                                           bg-slate-300 dark:bg-white/10 px-2 py-1 rounded 
                                           text-slate-700 dark:text-textDim">
                                {exp.period}
                            </span>
                        </div>

                        <p className="text-textDim text-sm md:text-base leading-relaxed text-justify">
                            {exp.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;