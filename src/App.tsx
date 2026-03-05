import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <main className="bg-primary min-h-screen">
      {/* NAVEGADOR /> */}
      <Navbar />
      <div className="pt-20">

        {/* HOME /> */}
        <div id="home">
          <Hero />
        </div>

        {/* SKILLS /> */}
        <div id="skills">
          <Skills />
        </div>

        <div id="about">
          <About />
        </div>
        {/* <Projects id="projects" /> */}
        <div id="Footer">
          <Footer />
        </div>
      </div>
    </main>
  );
}

export default App;
