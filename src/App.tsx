import React, { Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// ==========================================
// CARGA DIFERIDA (LAZY LOADING)
// Estos componentes solo se descargarán cuando el usuario haga scroll hacia ellos
// ==========================================
const Skills = React.lazy(() => import('./components/Skills'));
const About = React.lazy(() => import('./components/About'));
const Education = React.lazy(() => import('./components/Education'));
const Projects = React.lazy(() => import('./components/Projects'));
const Experience = React.lazy(() => import('./components/Experience'));
const Footer = React.lazy(() => import('./components/Footer'));

function App() {
  
  // Componente de respaldo mientras el bloque diferido se descarga
  const SectionLoader = () => (
    <div className="flex justify-center items-center py-20 text-accent/50 font-mono text-sm animate-pulse">
      Loading...
    </div>
  );

  return (
    <main className="bg-primary min-h-screen">
      {/* Componentes "Above the Fold" (Carga Inmediata) */}
      <Navbar />
      
      <div className="pt-20">
        <div id="home">
          <Hero />
        </div>

        {/* Zona de renderizado diferido */}
        <Suspense fallback={<SectionLoader />}>
          <div id="skills">
            <Skills />
          </div>

          <div id="about">
            <About />
          </div>

          <div id="education">
            <Education />
          </div>

          <div id="projects">
            <Projects />
          </div>

          <div id="experience">
            <Experience />
          </div>     

          <div id="Footer">
            <Footer />
          </div>
        </Suspense>
      </div>
    </main>
  );
}

export default App;