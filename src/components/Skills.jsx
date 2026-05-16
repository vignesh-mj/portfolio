import { useRef, useCallback } from 'react';

const CATS = [
  { icon: '🖥️', name: 'Frontend Core', skills: ['React.js', 'Next.js', 'JavaScript ES6+', 'TypeScript', 'HTML5', 'CSS3'] },
  { icon: '🗄️', name: 'State Management', skills: ['Redux Toolkit', 'Redux', 'Context API', 'React Query'] },
  { icon: '🎨', name: 'UI & Styling', skills: ['Material UI', 'Tailwind CSS', 'Bootstrap', 'Styled Components'] },
  { icon: '⚙️', name: 'Backend & APIs', skills: ['Node.js', 'Express.js', 'REST APIs', 'Axios', 'MongoDB'] },
  { icon: '🛠️', name: 'Tools & Workflow', skills: ['Git', 'GitHub', 'Figma', 'VS Code', 'Postman'] },
  { icon: '🚀', name: 'Performance', skills: ['Lazy Loading', 'Memoization', 'Code Splitting', 'Vite', 'ESLint'] },
];

function TiltCard({ children, delay }) {
  const ref = useRef(null);
  const onMove = useCallback((e) => {
    const r = ref.current; if (!r) return;
    const b = r.getBoundingClientRect();
    const x = ((e.clientX - b.left) / b.width - 0.5) * 12;
    const y = ((e.clientY - b.top) / b.height - 0.5) * -12;
    r.style.transform = `perspective(700px) rotateY(${x}deg) rotateX(${y}deg) scale(1.02)`;
  }, []);
  const onLeave = useCallback(() => { if (ref.current) ref.current.style.transform = ''; }, []);
  return (
    <div ref={ref} className={`sk-card rev d${delay}`}
      onMouseMove={onMove} onMouseLeave={onLeave}
      style={{ transition: 'transform .15s ease,box-shadow .3s ease,border-color .3s ease' }}>
      {children}
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="sk-sec" aria-labelledby="sk-h">
      <div className="wrap">
        <div className="sk-hd">
          <div>
            <span className="stag">Tech Stack</span>
            <h2 id="sk-h" className="stitle">Tools I <span className="gt">Build With</span></h2>
          </div>
          <p className="sk-hd-r rev-r d1">
            Every tool carefully chosen. I stay current with the React ecosystem and best
            practices to ship fast, maintainable, and accessible code.
          </p>
        </div>
        <div className="sk-grid">
          {CATS.map((c, i) => (
            <TiltCard key={c.name} delay={(i % 3) + 1}>
              <div className="sk-top">
                <div className="sk-ico" aria-hidden="true">{c.icon}</div>
                <span className="sk-cat">{c.name}</span>
              </div>
              <div className="sk-tags" role="list">
                {c.skills.map((s) => (
                  <span key={s} className="sk-tag" role="listitem">
                    <span className="td" aria-hidden="true" />{s}
                  </span>
                ))}
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
