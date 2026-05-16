import { useRef, useEffect, useState } from 'react';
import { useCounter } from '../hooks/useCounter';

const STATS = [
  { value: 4, suffix: '+', label: 'Years Experience' },
  { value: 15, suffix: '+', label: 'Projects Shipped' },
  { value: 3, suffix: '', label: 'Companies' },
  { value: 100, suffix: '%', label: 'Commitment' },
];

const HIGHLIGHTS = [
  'Figma → pixel-perfect React components',
  'Redux Toolkit & Context API architecture',
  'Lazy loading, memoization & code splitting',
  'Agile / Scrum team collaboration',
  'Cross-browser & WCAG accessibility',
  'AI-assisted development workflow',
];

function Stat({ value, suffix, label, go }) {
  const n = useCounter(value, 1600, go);
  return (
    <div className="stat-card rev">
      <div className="stat-n">{n}{suffix}</div>
      <div className="stat-l">{label}</div>
    </div>
  );
}

export default function About() {
  const ref = useRef(null);
  const [go, setGo] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setGo(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" className="about-sec" aria-labelledby="about-h">
      <div className="wrap">
        <div className="about-grid">
          <div>
            <span className="stag">About Me</span>
            <h2 id="about-h" className="stitle">
              Crafting Interfaces That <span className="gt">Scale &amp; Delight</span>
            </h2>
            <p className="about-desc rev d1">
              I&apos;m Vignesh M, a Frontend Developer based in Idukki, Kerala with 4+ years of
              hands-on experience building production-grade React.js and Next.js applications
              across healthcare, SaaS, and service companies.
            </p>
            <p className="about-desc rev d2">
              I specialise in translating complex Figma designs into responsive, accessible, and
              high-performance UIs — owning the full frontend lifecycle from requirement gathering
              to deployment.
            </p>
            <ul className="about-his rev d3" aria-label="Key skills">
              {HIGHLIGHTS.map((h) => (
                <li key={h} className="about-hi">
                  <span className="hi-dot" aria-hidden="true" />{h}
                </li>
              ))}
            </ul>
          </div>

          <div ref={ref}>
            <div className="stats-grid">
              {STATS.map((s) => <Stat key={s.label} {...s} go={go} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
