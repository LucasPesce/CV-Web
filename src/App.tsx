import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {
  return (
    <main className="bg-primary min-h-screen">
      <Navbar />
      {/* Todo el contenido de la página irá aquí adentro, debajo del Navbar */}
      <div className="pt-20"> {/* Este padding-top evita que el Navbar tape el inicio del Hero */}
        <div id="home">
          <Hero />
        </div>
        {/* <About id="about" /> */}
        {/* <Skills id="skills" /> */}
        {/* <Projects id="projects" /> */}
      </div>
    </main>
  );
}

export default App;
