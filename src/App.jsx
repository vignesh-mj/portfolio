import './App.css';
import { useRef, useEffect } from 'react';
import { useScrollAnimation } from './hooks/useScrollAnimation';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Services from './components/Services';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  useScrollAnimation();

  const glowRef = useRef(null);
  useEffect(() => {
    const move = (e) => {
      if (glowRef.current) {
        glowRef.current.style.left = e.clientX + 'px';
        glowRef.current.style.top  = e.clientY + 'px';
      }
    };
    window.addEventListener('mousemove', move, { passive: true });
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <>
      <div ref={glowRef} className="cursor-glow" aria-hidden="true" />
      <Navbar />
      <main id="main" tabIndex="-1">
        <Hero />
        <Services />
        <div className="section-sep" aria-hidden="true" />
        <About />
        <div className="section-sep" aria-hidden="true" />
        <Experience />
        <div className="section-sep" aria-hidden="true" />
        <Projects />
        {/* <div className="section-sep" aria-hidden="true" />
        <Testimonials /> */}
        {/* <div className="section-sep" aria-hidden="true" /> */}
        {/* <Process /> */}
        <div className="section-sep" aria-hidden="true" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
