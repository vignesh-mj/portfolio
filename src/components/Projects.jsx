import { useRef, useCallback } from 'react';

/* ── CSS UI MOCKUP THUMBNAILS ── */

function HealthDashboard() {
  return (
    <div className="prj-vis pv-health">
      <div className="pm-chrome">
        <div className="pm-dot pm-dot-r" /><div className="pm-dot pm-dot-y" /><div className="pm-dot pm-dot-g" />
        <div className="pm-addr" />
      </div>
      <div className="pm-app">
        <div className="pm-sb">
          <div className="pm-sb-ico act" />
          {[1,2,3,4].map(i => <div key={i} className="pm-sb-ico" />)}
        </div>
        <div className="pm-main">
          <div className="pm-stats">
            {[
              { bg:'rgba(109,40,217,.25)', color:'#A78BFA' },
              { bg:'rgba(59,130,246,.2)', color:'#60A5FA' },
              { bg:'rgba(16,185,129,.2)', color:'#34D399' },
            ].map((s, i) => (
              <div key={i} className="pm-stat-box" style={{ background: s.bg }}>
                <div className="pm-sb-num" style={{ color: s.color }}>
                  {['142','38','94'][i]}
                </div>
                <div className="pm-sb-bar" style={{ background: `${s.color}40` }} />
              </div>
            ))}
          </div>
          <div className="pm-chart">
            {[55,75,45,88,62,78,90,65,82,70].map((h, i) => (
              <div key={i} className="pm-bar"
                style={{ height:`${h}%`, background:`rgba(109,40,217,${0.3 + i*0.03})`,
                  animationDelay:`${i*0.15}s` }} />
            ))}
          </div>
          <div className="pm-rows">
            {[
              { dot:'#A78BFA' }, { dot:'#60A5FA' }, { dot:'#34D399' },
            ].map((r, i) => (
              <div key={i} className="pm-row">
                <div className="pm-row-dot" style={{ background: r.dot }} />
                <div className="pm-row-bar" />
                <div className="pm-row-tag" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ShopDashboard() {
  return (
    <div className="prj-vis prj-vis-sm pv-shop">
      <div className="pm-chrome">
        <div className="pm-dot pm-dot-r" /><div className="pm-dot pm-dot-y" /><div className="pm-dot pm-dot-g" />
        <div className="pm-addr" />
      </div>
      <div className="pm-app">
        <div className="pm-sb">
          {[1,2,3].map(i => <div key={i} className="pm-sb-ico" style={i===1?{background:'var(--p)'}:{}} />)}
        </div>
        <div className="pm-main">
          <div className="pm-stats">
            {['rgba(16,185,129,.2)','rgba(251,191,36,.2)'].map((bg,i) => (
              <div key={i} className="pm-stat-box" style={{ background: bg }}>
                <div className="pm-sb-bar" />
              </div>
            ))}
          </div>
          <div style={{ display:'flex', gap:4, flex:1 }}>
            <div className="pm-chart" style={{ flex:2 }}>
              {[50,80,60,90,70].map((h,i) => (
                <div key={i} className="pm-bar" style={{ height:`${h}%`,
                  background:`rgba(16,185,129,${0.3+i*0.05})`, animationDelay:`${i*.2}s` }} />
              ))}
            </div>
            <div style={{ flex:1, display:'flex', flexDirection:'column', gap:4 }}>
              {[1,2,3].map(i => (
                <div key={i} style={{ flex:1, borderRadius:6,
                  background:'rgba(255,255,255,.06)', border:'1px solid rgba(255,255,255,.06)' }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PropMap() {
  const PINS = [
    { top:'30%', left:'35%', color:'#A78BFA' },
    { top:'55%', left:'60%', color:'#34D399' },
    { top:'45%', left:'20%', color:'#60A5FA' },
    { top:'70%', left:'45%', color:'#F472B6' },
  ];
  return (
    <div className="prj-vis prj-vis-sm pv-prop">
      <div className="pm-chrome">
        <div className="pm-dot pm-dot-r" /><div className="pm-dot pm-dot-y" /><div className="pm-dot pm-dot-g" />
        <div className="pm-addr" />
      </div>
      <div className="pm-app">
        <div className="pm-main" style={{ padding:8 }}>
          <div className="pm-map" style={{ flex:1 }}>
            <div className="pm-map-grid" />
            {PINS.map((p, i) => (
              <div key={i} className="pm-pin" style={{ top:p.top, left:p.left,
                background:`${p.color}30`, borderColor: p.color }} />
            ))}
          </div>
          <div className="pm-rows" style={{ marginTop:6 }}>
            {[1,2].map(i => <div key={i} className="pm-row" style={{ height:16 }}>
              <div className="pm-row-dot" style={{ background:'var(--pL)' }} />
              <div className="pm-row-bar" />
              <div className="pm-row-tag" />
            </div>)}
          </div>
        </div>
      </div>
    </div>
  );
}

function KanbanBoard() {
  const COLS = [
    { hd:'#A78BFA', tickets:[{ bdr:'#6D28D9' },{ bdr:'#6D28D9' }] },
    { hd:'#60A5FA', tickets:[{ bdr:'#2563EB' }] },
    { hd:'#34D399', tickets:[{ bdr:'#059669' },{ bdr:'#059669' }] },
  ];
  return (
    <div className="prj-vis prj-vis-sm pv-task">
      <div className="pm-chrome">
        <div className="pm-dot pm-dot-r" /><div className="pm-dot pm-dot-y" /><div className="pm-dot pm-dot-g" />
        <div className="pm-addr" />
      </div>
      <div className="pm-app">
        <div className="pm-main">
          <div className="pm-kanban">
            {COLS.map((col, ci) => (
              <div key={ci} className="pm-col">
                <div className="pm-col-hd" style={{ background: `${col.hd}40` }} />
                {col.tickets.map((t, ti) => (
                  <div key={ti} className="pm-ticket" style={{ borderLeftColor: t.bdr }}>
                    <div className="pm-tick-bar" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── DATA ── */
const FEATURED = {
  tag: 'Featured · Healthcare SaaS',
  title: 'MedBook Pro',
  desc: 'Patient scheduling & clinic management platform serving 500+ daily active users. Handles real-time appointments, billing, doctor management, and notification workflows — built from scratch.',
  stack: ['React.js', 'Redux Toolkit', 'Bootstrap', 'REST API', 'Node.js', 'Axios'],
};

const PROJECTS = [
  {
    num: '02', title: 'ShopFlow Dashboard',
    desc: 'Real-time e-commerce analytics with inventory management, order tracking, and revenue visualization.',
    stack: ['React.js', 'TypeScript', 'Material UI', 'Recharts'],
    Thumb: ShopDashboard,
  },
  {
    num: '03', title: 'PropFind',
    desc: 'Real estate listing platform with map integration and advanced property search filters.',
    stack: ['Next.js', 'MongoDB', 'Tailwind CSS', 'Mapbox'],
    Thumb: PropMap,
  },
  {
    num: '04', title: 'TaskHive',
    desc: 'Kanban project management SaaS with drag-and-drop boards and real-time activity feeds.',
    stack: ['React.js', 'Redux', 'Socket.io', 'Node.js'],
    Thumb: KanbanBoard,
  },
];

function TiltCard({ children, className }) {
  const ref = useRef(null);
  const onMove = useCallback((e) => {
    const r = ref.current; if (!r) return;
    const b = r.getBoundingClientRect();
    const x = ((e.clientX - b.left) / b.width - 0.5) * 8;
    const y = ((e.clientY - b.top) / b.height - 0.5) * -8;
    r.style.transform = `perspective(900px) rotateY(${x}deg) rotateX(${y}deg) translateZ(8px)`;
  }, []);
  const onLeave = useCallback(() => { if (ref.current) ref.current.style.transform = ''; }, []);
  return (
    <article ref={ref} className={className}
      onMouseMove={onMove} onMouseLeave={onLeave}
      style={{ transition:'transform .2s ease,box-shadow .3s ease,border-color .3s ease' }}>
      {children}
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="prj-sec" aria-labelledby="prj-h">
      <div className="wrap">
        <div className="prj-hd">
          <div>
            <span className="stag">Portfolio</span>
            <h2 id="prj-h" className="stitle">Featured <span className="gt">Projects</span></h2>
          </div>
          <p className="prj-hd-r rev-r d1">
            Production-ready applications — from healthcare platforms to e-commerce dashboards,
            built with modern React patterns and shipped to real users.
          </p>
        </div>

        {/* ── FEATURED ── */}
        <TiltCard className="prj-featured rev d1">
          {/* CSS UI mockup */}
          <HealthDashboard />
          <div className="prj-feat-body">
            <div className="prj-feat-tag">{FEATURED.tag}</div>
            <h3 className="prj-feat-title">{FEATURED.title}</h3>
            <p className="prj-feat-desc">{FEATURED.desc}</p>
            <div className="prj-feat-stack">
              {FEATURED.stack.map((t) => <span key={t} className="stk">{t}</span>)}
            </div>
            <div className="prj-feat-links">
              <a href="#" className="btn btn-fill" style={{ padding:'10px 22px', fontSize:13 }}>↗ Live Demo</a>
              <a href="#" className="btn btn-ghost" style={{ padding:'10px 22px', fontSize:13 }}>gh Source</a>
            </div>
          </div>
        </TiltCard>

        {/* ── GRID OF 3 ── */}
        <div className="prj-grid">
          {PROJECTS.map((p, i) => (
            <TiltCard key={p.num} className={`prj-card rev d${i + 1}`}>
              <p.Thumb />
              <div className="prj-body">
                <div className="prj-meta">
                  <span className="prj-num">{p.num}</span>
                  <div className="prj-lnks">
                    <a href="#" className="prj-lnk">gh Code</a>
                    <a href="#" className="prj-lnk">↗ Live</a>
                  </div>
                </div>
                <h3 className="prj-title">{p.title}</h3>
                <p className="prj-desc">{p.desc}</p>
                <div className="prj-stack">
                  {p.stack.map((t) => <span key={t} className="stk">{t}</span>)}
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
