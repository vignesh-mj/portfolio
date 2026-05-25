const STEPS = [
  {
    num: '01',
    icon: '💬',
    title: 'Discovery',
    desc: 'We align on your goals, requirements, and timeline — building a shared vision before writing a single line of code.',
    color: 'rgba(116,97,239,.12)',
    border: 'rgba(116,97,239,.3)',
    dot: '#7461ef',
  },
  {
    num: '02',
    icon: '🎨',
    title: 'Design',
    desc: 'Wireframes and high-fidelity Figma mockups crafted iteratively until every interaction and pixel is exactly right.',
    color: 'rgba(0,212,255,.1)',
    border: 'rgba(0,212,255,.28)',
    dot: '#00d4ff',
  },
  {
    num: '03',
    icon: '⚡',
    title: 'Build',
    desc: 'Production-grade React & Next.js code — clean architecture, accessibility, and performance baked in from day one.',
    color: 'rgba(249,115,22,.1)',
    border: 'rgba(249,115,22,.28)',
    dot: '#f97316',
  },
  {
    num: '04',
    icon: '🚀',
    title: 'Launch',
    desc: 'Deployment, QA, and a thorough hand-off with documentation so your team is confident and fully set up for success.',
    color: 'rgba(16,185,129,.1)',
    border: 'rgba(16,185,129,.28)',
    dot: '#10b981',
  },
];

export default function Process() {
  return (
    <section className="proc-sec" aria-labelledby="proc-h">
      <div className="proc-bg-grid" aria-hidden="true" />
      <div className="wrap">
{/* 
        <div className="proc-hd rev">
          <span className="stag">How I Work</span>
          <h2 id="proc-h" className="stitle">
            My <span className="gt">Process</span>
          </h2>
          <p className="proc-hd-sub">
            A transparent, collaborative workflow — from first conversation to successful launch.
          </p>
        </div> */}

        <div className="proc-grid">
          {STEPS.map((s, i) => (
            <div key={s.num}
              className={`proc-card rev d${i + 1}`}
              style={{ '--pc': s.color, '--pb': s.border, '--pd': s.dot }}>
              <div className="proc-num-wrap">
                <span className="proc-num">{s.num}</span>
                <div className="proc-connector" aria-hidden="true" />
              </div>
              <div className="proc-icon-wrap">
                <span className="proc-icon" aria-hidden="true">{s.icon}</span>
              </div>
              <h3 className="proc-title">{s.title}</h3>
              <p className="proc-desc">{s.desc}</p>
              <div className="proc-dot-row" aria-hidden="true">
                <span className="proc-dot" />
                <span className="proc-dot" />
                <span className="proc-dot" />
              </div>
            </div>
          ))}
        </div>

        <div className="proc-cta rev d4">
          <p>Ready to build something exceptional?</p>
          <button className="proc-cta-btn" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Start a Project ↗
          </button>
        </div>

      </div>
    </section>
  );
}
