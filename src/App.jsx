// App.jsx
import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <NavBar />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <section id="about" className="py-20">
          <About />
        </section>
        <section id="projects" className="py-20 bg-gray-800">
          <Projects />
        </section>
        <section id="skills" className="py-20">
          <Skills />
        </section>
        <section id="contact" className="py-20 bg-gray-800">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;