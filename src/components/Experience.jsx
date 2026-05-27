const JOBS = [
  {
    co: 'PracticeTek', badge: 'Current', role: 'React Developer',
    period: 'Jan 2024 – Present', main: true,
    bullets: [
      'Built and maintained scalable web apps with React.js, Bootstrap & JavaScript serving thousands of active users',
      'Converted Figma designs into pixel-perfect, fully responsive React components — reducing UI revision cycles through direct designer collaboration',
      'Improved performance via lazy loading, memoization & code splitting, achieving 98+ Lighthouse scores',
      'Enhanced UI accessibility and cross-browser compatibility for a consistent experience across all devices',
      'Conducted regular code reviews, enforced best practices & maintained clean, scalable codebases',
    ],
  },
  {
    co: 'Mysr', badge: '', role: 'React Developer',
    period: 'Mar 2023 – Jan 2024', main: false,
    bullets: [
      'Integrated RESTful APIs with Axios & Fetch API, handling complex async workflows and error states',
      'Built dynamic, reusable React components for real-time data rendering and interactive user flows',
      'Managed global state with Redux Toolkit across multiple feature modules for scalable API-driven workflows',
      'Implemented robust error handling, loading state management & client-side validation to improve UX',
    ],
  },
  {
    co: 'Jit-Tek', badge: '', role: 'Associate Software Engineer',
    period: 'Jul 2022 – Dec 2022', main: false,
    bullets: [
      'Developed responsive, reusable UI components with React.js and Material UI following component-driven design',
      'Implemented basic Node.js API endpoints to support frontend data requirements',
      'Participated in testing, debugging & peer code reviews to maintain code quality standards',
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
            4 years across healthcare SaaS, product startups & service companies —
            owning the full frontend lifecycle from Figma handoff to production deployment.
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
                <div className="edu-yr">Graduated 2022 · Thiruvananthapuram, Kerala</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
