// About.jsx
const STATS = [
  { n: '4+', label: 'Years Experience' },
  { n: '15+', label: 'Projects Shipped' },
  { n: '18+', label: 'Happy Clients' },
  { n: '98', label: 'Lighthouse Score' },
  
];

const CATS = [
  {
    icon: '🖥️',
    name: 'Frontend Core',
    accent: '#7461ef',
    skills: ['React.js', 'Next.js', 'JavaScript ES6+', 'TypeScript', 'HTML5', 'CSS3'],
  },
  {
    icon: '🗄️',
    name: 'State Management',
    accent: '#00d4ff',
    skills: ['Redux Toolkit', 'Redux', 'Context API', 'React Query'],
  },
  {
    icon: '🎨',
    name: 'UI & Styling',
    accent: '#f97316',
    skills: ['Material UI', 'Tailwind CSS', 'Bootstrap', 'Styled Components'],
  },
  {
    icon: '⚙️',
    name: 'Backend & APIs',
    accent: '#10b981',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'Axios', 'MongoDB'],
  },
  {
    icon: '🛠️',
    name: 'Tools & Workflow',
    accent: '#f59e0b',
    skills: ['Git', 'GitHub', 'Figma', 'VS Code', 'Postman'],
  },
  {
    icon: '🚀',
    name: 'Performance',
    accent: '#ec4899',
    skills: ['Lazy Loading', 'Memoization', 'Code Splitting', 'Vite', 'ESLint'],
  },
];

export default function About() {
  return (
    <section id="skills" className="sk-sec" aria-labelledby="sk-h">
      {/* Animated background elements */}
      <div className="sk-bg-glow" />
      <div className="sk-bg-grid" />

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

        {/* ── Futuristic Stats strip ── */}
        <div className="sk-stats rev d1">
          {STATS.map((s, idx) => (
            <div key={s.n} className="sk-stat" style={{ '--idx': idx }}>
              <div className="sk-stat-glow" />
              <span className="sk-stat-n">{s.n}</span>
              <span className="sk-stat-lbl">{s.label}</span>
            </div>
          ))}
        </div>

        {/* ── Cyberpunk skill cards ── */}
        <div className="sk-grid">
          {CATS.map((c, i) => (
            <div
              key={c.name}
              className={`sk-card rev d${(i % 3) + 1}`}
              style={{ '--ska': c.accent, '--idx': i }}
            >
              {/* Animated border gradient */}
              <div className="sk-card-border" />

              {/* Card header */}
              <div className="skc-hd">
                <div className="sk-ico-glow">
                  <div className="sk-ico">{c.icon}</div>
                </div>
                <div className="skc-meta">
                  <span className="sk-cat">{c.name}</span>
                  <span className="skc-count">{c.skills.length} skills</span>
                </div>
              </div>

              {/* Neon divider */}
              <div className="skc-line" />

              {/* Skill tags */}
              <div className="sk-tags" role="list">
                {c.skills.map(s => (
                  <span key={s} className="sk-tag" role="listitem">
                    <span className="sk-tag-dot" />
                    {s}
                  </span>
                ))}
              </div>

              {/* Hover scanline effect */}
              <div className="sk-card-scan" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}