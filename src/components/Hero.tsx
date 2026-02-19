import { resumeData } from '../data/resume.ts';

const Hero = () => {
    const { header, summary } = resumeData;

    return (
        <section className="min-h-[80vh] flex flex-col justify-center items-start px-8 md:px-20 lg:px-40 bg-primary">
            <h1 className="text-5xl md:text-7xl font-bold text-textMain mb-4 tracking-tight">
                {header.name}.
            </h1>

            <h2 className="text-4xl md:text-6xl font-bold text-textDim mb-6 tracking-tight">
                {header.role}.
            </h2>

            <p className="text-textDim text-lg md:text-xl max-w-2xl mb-10 leading-relaxed text-justify"> 
                {summary}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
                <a
                    href={`mailto:${header.email}`}
                    className="px-8 py-3 border-2 border-accent text-accent font-semibold rounded hover:bg-accent hover:text-white transition-all duration-300 text-center"
                >
                    Email
                </a>
                <a
                    href={header.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="px-8 py-3 border-2 border-accent text-accent font-semibold rounded hover:bg-accent hover:text-white transition-all duration-300 text-center"
                >
                    WhatsApp
                </a>
                <a
                    href={`https://${header.github}`}
                    target="_blank"
                    rel="noreferrer"
                    className="px-8 py-3 border-2 border-accent text-accent font-semibold rounded hover:bg-accent hover:text-white transition-all duration-300 text-center"
                >
                    GitHub
                </a>
            </div>
        </section>
    );
};

export default Hero;