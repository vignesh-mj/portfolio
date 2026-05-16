import { useState, useEffect } from 'react';
import logoImg from '../assets/Images/Logo.png';

const LEFT_LINKS = [
  { id: 'home',   label: 'Home' },
  { id: 'about',  label: 'Services' },
  { id: 'skills', label: 'Skills' },
];

const RIGHT_LINKS = [
  { id: 'experience', label: 'Experience' },
  { id: 'projects',   label: 'Projects' },
  { id: 'contact',    label: 'Contact' },
];

const ALL_LINKS = [...LEFT_LINKS, ...RIGHT_LINKS];
const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

export default function Navbar() {
  const [open, setOpen]     = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      for (let i = ALL_LINKS.length - 1; i >= 0; i--) {
        const el = document.getElementById(ALL_LINKS[i].id);
        if (el && el.getBoundingClientRect().top <= 130) { setActive(ALL_LINKS[i].id); break; }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const nav = (id) => { go(id); setOpen(false); };

  return (
    <header className="navbar" role="banner">

      {/* Left links */}
      <nav className="nav-left" aria-label="Left navigation">
        {LEFT_LINKS.map((l) => (
          <button key={l.id} className={`nav-link${active === l.id ? ' act' : ''}`}
            onClick={() => nav(l.id)}>
            {l.label}
          </button>
        ))}
      </nav>

      {/* Center logo */}
      <button className="nav-logo-wrap" onClick={() => nav('home')} aria-label="Go to home">
        <img src={logoImg} alt="Vignesh M" className="nav-logo-img" draggable="false" />
      </button>

      {/* Right links */}
      <nav className="nav-right" aria-label="Right navigation">
        {RIGHT_LINKS.map((l) => (
          <button key={l.id} className={`nav-link${active === l.id ? ' act' : ''}`}
            onClick={() => nav(l.id)}>
            {l.label}
          </button>
        ))}
      </nav>

      {/* Mobile hamburger */}
      <button className={`hbg${open ? ' open' : ''}`} onClick={() => setOpen((o) => !o)}
        aria-label="Toggle menu" aria-expanded={open}>
        <span /><span /><span />
      </button>

      {/* Mobile dropdown */}
      <nav className={`nav-mobile${open ? ' open' : ''}`} aria-label="Mobile navigation">
        {ALL_LINKS.map((l) => (
          <button key={l.id} className={`nav-mob-link${active === l.id ? ' act' : ''}`}
            onClick={() => nav(l.id)}>
            {l.label}
          </button>
        ))}
      </nav>

    </header>
  );
}
