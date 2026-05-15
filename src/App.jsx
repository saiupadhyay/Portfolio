import React from "react";
import { Toaster } from 'sonner';
// import AnimatedBackground from './components/AnimatedBackground';
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Education from "./sections/Education";
import Certifications from "./sections/Certifications";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="relative min-h-screen text-white">
      <Toaster position="bottom-right" theme="dark" />
      {/* <AnimatedBackground /> */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Experience />
        <Certifications />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}

export default App;
