const SERVICES = [
  {
    num: '01',
    name: 'Figma to React',
    cat: 'Design & Code',
    desc: 'Converting Figma designs into pixel-perfect, fully responsive React components — reducing revision cycles through close designer collaboration.',
    tech: ['Figma', 'React.js', 'Responsive UI'],
    img: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=900&q=85',
  },
  {
    num: '02',
    name: 'Web Development',
    cat: 'Engineering',
    desc: 'Scalable React & Next.js apps with Redux Toolkit, TypeScript, and REST API integration — built for thousands of active users.',
    tech: ['React', 'Next.js', 'TypeScript', 'Redux Toolkit'],
    img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=85',
    featured: true,
  },
  {
    num: '03',
    name: 'Performance Audit',
    cat: 'Optimization',
    desc: 'Boosting Lighthouse scores to 98+ via lazy loading, memoization, code splitting, and cross-browser compatibility improvements.',
    tech: ['Lighthouse', 'Core Web Vitals', 'Vite'],
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=85',
  },
];

export default function Services() {
  return (
    <section id="about" className="svc-sec" aria-labelledby="svc-h">

      <div className="svc-blob sb1" aria-hidden="true" />
      <div className="svc-blob sb2" aria-hidden="true" />

      <div className="wrap">
        <div className="svc-hd">
          <div>
            <span className="stag inv">What I Do</span>
            <h2 id="svc-h" className="stitle inv">
              My <span className="gt">Services</span>
            </h2>
          </div>
          <p className="svc-hd-r rev-r d1">
            From idea to production — I handle the full frontend lifecycle,
            collaborating closely with designers and backend teams.
          </p>
        </div>

        <div className="svc-grid">
          {SERVICES.map((s, i) => (
            <article key={s.name}
              className={`svc-card rev d${i + 1}${s.featured ? ' svc-feat' : ''}`}>

              <div className="svc-body">
                <div className="svc-meta">
                  <span className="svc-num">{s.num}</span>
                  <span className="svc-cat">{s.cat}</span>
                </div>
                <h3 className="svc-name">{s.name}</h3>
                <p className="svc-desc">{s.desc}</p>
                <div className="svc-tech">
                  {s.tech.map(t => (
                    <span key={t} className="svc-tp">{t}</span>
                  ))}
                </div>
              </div>

              <div className="svc-img-wrap">
                <img src={s.img} alt={s.name} className="svc-img" loading="lazy" />
                <div className="svc-ov" />
              </div>

              <div className="svc-arrow" aria-hidden="true">↗</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
