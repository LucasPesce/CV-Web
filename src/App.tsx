import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import About from './components/About';
import Footer from './components/Footer';
import Education from './components/Education';
import Experience from './components/Experience';
// import Projects from './components/Projects';

function App() {
  return (
    <main className="bg-primary min-h-screen">
      {/* NAVEGADOR /> */}
      <Navbar />
      <div className="pt-20">
        <div id="home">
          <Hero />
        </div>

        <div id="skills">
          <Skills />
        </div>

        <div id="about">
          <About />
        </div>

        <div id="education">
          <Education />
        </div>

        <div id="experience">
          <Experience />
        </div>
       


        <div id="Footer">
          <Footer />
        </div>
      </div>
    </main>
  );
}

export default App;

/*
        <div id="projects">
          <Projects/>
        </div>
*/