import { useRef, useCallback } from 'react';

function TiltCard({ children, className }) {
  const ref = useRef(null);
  const onMove = useCallback((e) => {
    const r = ref.current; if (!r) return;
    const b = r.getBoundingClientRect();
    const x = ((e.clientX - b.left) / b.width  - 0.5) * 10;
    const y = ((e.clientY - b.top)  / b.height - 0.5) * -10;
    r.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${y}deg) scale(1.022)`;
  }, []);
  const onLeave = useCallback(() => {
    if (ref.current) ref.current.style.transform = '';
  }, []);
  return (
    <article ref={ref} className={className}
      onMouseMove={onMove} onMouseLeave={onLeave}
      style={{ transition: 'transform .22s cubic-bezier(.4,0,.2,1), box-shadow .25s ease' }}>
      {children}
    </article>
  );
}

const CARDS = [
  {
    id: 'a',
    cat: 'HEALTHCARE SAAS',
    title: 'MedBook Pro',
    img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 'b',
    cat: 'E-COMMERCE',
    title: 'ShopFlow Dashboard',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=700&q=85',
  },
  {
    id: 'c',
    cat: 'REAL ESTATE',
    title: 'PropFind',
    img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=700&q=85',
  },
  {
    id: 'd',
    cat: 'PRODUCTIVITY',
    title: 'TaskHive',
    img: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=700&q=85',
  },
  {
    id: 'e',
    cat: 'DESIGN SYSTEM',
    title: 'React UI Toolkit',
    img: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=700&q=85',
  },
  {
    id: 'f',
    cat: 'NEXT.JS',
    title: 'Building Minimal Web Experiences',
    img: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=900&q=85',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="prj-sec" aria-labelledby="prj-h">
      <div className="wrap">

        {/* Section header */}
        <div className="prj-mag-hd rev">
          <span className="stag">Selected Work</span>
          <h2 id="prj-h" className="prj-mag-title">
            Featured Projects<span className="prj-period">.</span>
          </h2>
          <p className="prj-mag-sub">
            Production-ready applications — from healthcare platforms to e-commerce
            dashboards, built with modern React patterns and shipped to real users.
          </p>
        </div>

        {/* Magazine grid: "a a b c" / "d e f f" */}
        <div className="prj-magazine">
          {CARDS.map((card, i) => (
            <TiltCard key={card.id} className={`prj-card prc-${card.id} rev d${Math.min(i+1,4)}`}>
              <img
                src={card.img}
                alt={card.title}
                className="prc-img"
                loading="lazy"
              />
              <div className="prc-ov" />
              <div className="prc-body">
                <span className="prc-cat">{card.cat}</span>
                <h3 className="prc-title">{card.title}</h3>
                <a href="#" className="prc-btn">View Project ↗</a>
              </div>
            </TiltCard>
          ))}
        </div>

      </div>
    </section>
  );
}
