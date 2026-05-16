import { useRef, useCallback } from 'react';
import { useTypewriter } from '../hooks/useTypewriter';
import heroImg from '../assets/Images/HomeHeroImage.png';

const ROLES = ['React.js Developer', 'Next.js Developer', 'Frontend Engineer', 'JavaScript Developer'];
const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

const CHIPS = [
  { text: 'const [state, set] = useState()', cls: 'chip-ind',  s: { top: '17%', left:  '1.5%' }, delay: '0s'   },
  { text: 'import React from "react"',        cls: 'chip-cyan', s: { top: '12%', right: '2.5%' }, delay: '1.2s' },
];

const COMETS = [
  { w: 180, top: '5%',  cls: 'cm-ind', dur: '5.5s', del: '0s'   },
  { w: 110, top: '14%', cls: 'cm-cyn', dur: '4.5s', del: '4s'   },
  { w: 230, top: '2%',  cls: 'cm-ind', dur: '7s',   del: '8.5s' },
];

export default function Hero() {
  const role     = useTypewriter(ROLES, 78, 2400);
  const secRef   = useRef(null);
  const gridRef  = useRef(null);
  const floatRef = useRef(null);
  const photoRef = useRef(null);

  const onMove = useCallback((e) => {
    const sec = secRef.current;
    if (!sec) return;
    const { left, top, width, height } = sec.getBoundingClientRect();
    const x = (e.clientX - left) / width  - 0.5;
    const y = (e.clientY - top)  / height - 0.5;

    if (gridRef.current)
      gridRef.current.style.transform = `translate(${x * 14}px, ${y * 9}px)`;
    if (floatRef.current)
      floatRef.current.style.transform = `translate(${x * -22}px, ${y * -14}px)`;
    if (photoRef.current)
      photoRef.current.style.transform =
        `translateX(calc(-50% + ${x * 10}px)) translateY(${y * 6}px)`;
  }, []);

  return (
    <section id="home" className="hero-sec" ref={secRef} onMouseMove={onMove}
      aria-label="Introduction">

      {/* ── BG layer 0: floating gradient orbs ── */}
      <div className="h-bg-orbs" aria-hidden="true">
        <div className="h-orb h-orb-1" />
        <div className="h-orb h-orb-2" />
        <div className="h-orb h-orb-3" />
      </div>

      {/* ── BG layer 1: shooting comets / stars ── */}
      <div className="h-comet-layer" aria-hidden="true">
        {COMETS.map((c, i) => (
          <div key={i} className={`h-comet ${c.cls}`}
            style={{ width: c.w, top: c.top, animationDuration: c.dur, animationDelay: c.del }} />
        ))}
      </div>

      {/* ── BG layer 2: animated dot grid (slow parallax) ── */}
      <div className="h-bg-grid" ref={gridRef} aria-hidden="true" />

      {/* ── BG layer 2: floating code chips (counter-parallax) ── */}
      <div className="h-chip-layer" ref={floatRef} aria-hidden="true">
        {CHIPS.map((c, i) => (
          <div key={i} className={`h-chip ${c.cls}`}
            style={{ ...c.s, animationDelay: c.delay }}>
            <span className="h-chip-dot" />
            {c.text}
          </div>
        ))}
      </div>

      {/* ── Hello badge ── */}
      <div className="h-badge">
        Hello! <span className="h-badge-star" aria-hidden="true">✦</span>
      </div>

      {/* ── Heading ── */}
      <div className="h-head">
        <h1 className="h-h1">
          I&apos;m <span className="h-name">Vignesh M,</span>
        </h1>
        <p className="h-role-line" aria-live="polite">
          {role}<span className="h-cur" aria-hidden="true" />
        </p>
      </div>

      {/* ── Main 3-col row ── */}
      <div className="h-main">

        {/* Left stats */}
        <div className="h-sl">
          <div className="h-avail-pill">
            <span className="h-sp-dot" aria-hidden="true" />
            Available for Work
          </div>
          <span className="h-qmark" aria-hidden="true">&ldquo;</span>
          <p className="h-qtxt">
            4+ years building pixel-perfect, performant React &amp; Next.js
            web apps. Highly recommended!
          </p>
          <div className="h-snum">15+</div>
          <div className="h-slbl">Projects Shipped</div>
        </div>

        {/* Center: circle + photo + buttons */}
        <div className="h-photo-area">
          <div className="h-circle-glow" aria-hidden="true" />
          <div className="h-photo-wrap"  ref={photoRef}>
            <img src={heroImg}
              alt="Vignesh M — React & Next.js Developer"
              className="h-photo"
              draggable="false" loading="eager" />
          </div>
          <div className="h-btns">
            <button className="h-btn-p" onClick={() => go('projects')}>Portfolio ↗</button>
            <button className="h-btn-h" onClick={() => go('contact')}>Hire Me</button>
          </div>
        </div>

        {/* Right stats */}
        <div className="h-sr">
          <div className="h-stars" aria-label="5 star rating">★★★★★</div>
          <div className="h-expn">4+</div>
          <div className="h-expl">Years<br />Experience</div>
          <div className="h-techs">
            {['React', 'Next.js', 'TypeScript', 'Redux'].map(t => (
              <span key={t} className="h-tech">{t}</span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
