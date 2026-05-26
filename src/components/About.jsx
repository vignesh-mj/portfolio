import { useState } from 'react';

const STATS = [
  { n: '4+',  label: 'Years Experience' },
  { n: '15+', label: 'Projects Shipped' },
  { n: '18+', label: 'Happy Clients'    },
  { n: '98',  label: 'Lighthouse Score' },
];

const CATS = [
  {
    icon: '🖥️',
    name: 'Frontend Core',
    accent: '#7461ef',
    desc: 'Building fast, pixel-perfect interfaces with React & Next.js — from SPAs to SSR apps shipped to real users.',
    img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=85',
    skills: ['React.js', 'Next.js', 'JavaScript ES6+', 'TypeScript', 'HTML5', 'CSS3'],
  },
  {
    icon: '🗄️',
    name: 'State Management',
    accent: '#00d4ff',
    desc: 'Managing complex, async app state with Redux Toolkit and React Query for scalable, predictable data flows.',
    img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=85',
    skills: ['Redux Toolkit', 'Redux', 'Context API', 'React Query'],
  },
  {
    icon: '🎨',
    name: 'UI & Styling',
    accent: '#f97316',
    desc: 'Crafting beautiful, responsive interfaces using Material UI, Tailwind, and Styled Components — pixel-perfect every time.',
    img: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=900&q=85',
    skills: ['Material UI', 'Tailwind CSS', 'Bootstrap', 'Styled Components'],
  },
  {
    icon: '⚙️',
    name: 'Backend & APIs',
    accent: '#10b981',
    desc: 'Building and consuming RESTful APIs with Node.js, Express, and MongoDB — full-stack ready when the project demands it.',
    img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=85',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'Axios', 'MongoDB'],
  },
  {
    icon: '🛠️',
    name: 'Tools & Workflow',
    accent: '#f59e0b',
    desc: 'Efficient, collaborative development with Git, Figma, Postman, and VS Code as daily essentials.',
    img: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=900&q=85',
    skills: ['Git', 'GitHub', 'Figma', 'VS Code', 'Postman'],
  },
  {
    icon: '🚀',
    name: 'Performance',
    accent: '#ec4899',
    desc: 'Delivering 98+ Lighthouse scores with code splitting, lazy loading, memoization, and Vite-powered build pipelines.',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=85',
    skills: ['Lazy Loading', 'Memoization', 'Code Splitting', 'Vite', 'ESLint'],
  },
];

export default function About() {
  const [active, setActive] = useState(0);
  const cat = CATS[active];

  return (
    <section id="skills" className="sk-sec" aria-labelledby="sk-h">
      <div className="sk-bg-glow" aria-hidden="true" />
      <div className="sk-bg-grid" aria-hidden="true" />

      <div className="wrap">

        {/* ── Section header ── */}
        <div className="sk-intro rev">
          <div>
            <span className="stag">
              <span className="stag-dot" /> Tech Stack
            </span>
            <h2 id="sk-h" className="stitle">
              Skills &amp; <span className="gt">Expertise</span>
            </h2>
          </div>
          <p className="sk-intro-p rev-r d1">
            Every tool carefully chosen. I stay current with the React ecosystem
            to ship fast, accessible, and maintainable web applications.
          </p>
        </div>

        {/* ── Stats strip ── */}
        <div className="sk-stats rev d1">
          {STATS.map((s, idx) => (
            <div key={s.n} className="sk-stat" style={{ '--idx': idx }}>
              <span className="sk-stat-n">{s.n}</span>
              <span className="sk-stat-lbl">{s.label}</span>
            </div>
          ))}
        </div>

        {/* ── Category tabs ── */}
        <div className="sk-tabs rev d2" role="tablist" aria-label="Skill categories">
          {CATS.map((c, i) => (
            <button
              key={c.name}
              role="tab"
              aria-selected={active === i}
              aria-controls="sk-panel"
              className={`sk-tab-btn${active === i ? ' active' : ''}`}
              style={{ '--ska': c.accent }}
              onClick={() => setActive(i)}
            >
              <span className="sk-tab-ico" aria-hidden="true">{c.icon}</span>
              <span className="sk-tab-label">{c.name}</span>
            </button>
          ))}
        </div>

        {/* ── Content panel ── */}
        <div
          id="sk-panel"
          role="tabpanel"
          className="sk-panel"
          style={{ '--ska': cat.accent }}
        >
          {/* Left — image */}
          <div className="sk-panel-img">
            <img src={cat.img} alt={cat.name} loading="lazy" />
            <div className="sk-panel-overlay" aria-hidden="true" />
            <div className="sk-panel-badge" aria-hidden="true">
              <span className="sk-panel-badge-ico">{cat.icon}</span>
            </div>
          </div>

          {/* Right — content */}
          <div className="sk-panel-body">
            <div className="sk-panel-hd">
              <div className="sk-panel-ico">{cat.icon}</div>
              <div className="sk-panel-meta">
                <h3 className="sk-panel-name">{cat.name}</h3>
                <span className="sk-panel-count">{cat.skills.length} skills</span>
              </div>
            </div>

            <p className="sk-panel-desc">{cat.desc}</p>

            <div className="sk-panel-tags" role="list">
              {cat.skills.map(s => (
                <span key={s} className="sk-panel-tag" role="listitem">{s}</span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
