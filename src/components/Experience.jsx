const JOBS = [
  {
    co: 'PracticeTek', badge: 'Current', role: 'React Developer',
    period: 'Jan 2024 – Present', main: true,
    bullets: [
      'Built and maintained scalable web apps with React.js, Bootstrap & JavaScript serving thousands of daily users',
      'Converted Figma designs into pixel-perfect, fully responsive React components',
      'Improved performance via lazy loading, memoization & code splitting',
      'Conducted code reviews & enforced team-wide best practices',
    ],
  },
  {
    co: 'Mysr', badge: '', role: 'React Developer',
    period: 'Mar 2023 – Jan 2024', main: false,
    bullets: [
      'Integrated RESTful APIs with Axios & Fetch API for complex async workflows',
      'Built dynamic, reusable components for real-time data rendering',
      'Managed global state with Redux Toolkit across multiple feature modules',
    ],
  },
  {
    co: 'Jit-Tek', badge: '', role: 'Associate SWE',
    period: 'Jul 2022 – Dec 2022', main: false,
    bullets: [
      'Developed responsive UI components with React.js and Material UI',
      'Implemented basic Node.js API endpoints to support frontend requirements',
      'Participated in testing, debugging, and peer code reviews',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="exp-sec" aria-labelledby="exp-h">
      <div className="wrap">
        <div className="exp-hd">
          <div>
            <span className="stag inv">Career</span>
            <h2 id="exp-h" className="stitle inv">Work <span className="gt">Experience</span></h2>
          </div>
          <p className="exp-hd-r rev-r d1">
            4+ years across healthcare SaaS, startups, and service companies —
            shipping production-grade React frontends end-to-end.
          </p>
        </div>

        <div className="exp-grid">
          {JOBS.map((j, i) => (
            <div
              key={j.co}
              className={`exp-card rev d${i + 1} ${j.main ? 'exp-card-main' : ''}`}
            >
              {j.badge && (
                <div className="exp-badge">
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--pink)', display: 'inline-block', animation: 'pulse 2s infinite' }} aria-hidden="true" />
                  {j.badge}
                </div>
              )}
              <div className="exp-co">{j.co}</div>
              <div className="exp-role">{j.role}</div>
              <div className="exp-period">{j.period}</div>
              <ul className="exp-bs" aria-label="Responsibilities">
                {j.bullets.map((b) => <li key={b} className="exp-b">{b}</li>)}
              </ul>
            </div>
          ))}
        </div>

        <div className="edu-strip">
          <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
            <span className="stag inv" style={{ marginBottom: 0 }}>Education</span>
            <h2 className="stitle inv" style={{ marginBottom: 0 }}>Academic <span className="gt">Background</span></h2>
          </div>
          <div style={{ marginTop: 24 }}>
            <div className="edu-card rev d1">
              <div className="edu-ico" aria-hidden="true">🎓</div>
              <div>
                <div className="edu-deg">Bachelor of Technology — Information Technology</div>
                <div className="edu-col">Government Engineering College Barton Hill, Thiruvananthapuram</div>
                <div className="edu-yr">Graduated 2022 · Idukki, Kerala</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
