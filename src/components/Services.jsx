const SERVICES = [
  {
    name: 'UI/UX Design',
    img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Web Development',
    img: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=80',
    featured: true,
  },
  {
    name: 'React & Next.js',
    img: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80',
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
            <div key={s.name}
              className={`svc-card rev d${i + 1}${s.featured ? ' svc-feat' : ''}`}>

              <span className="svc-label">{s.name}</span>

              <div className="svc-img-wrap">
                <img src={s.img} alt={s.name} className="svc-img" loading="lazy" />
              </div>

              <div className="svc-arrow" aria-hidden="true">↗</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
