const ITEMS = [
  'React.js', 'Next.js', 'TypeScript', 'Redux Toolkit', 'Node.js',
  'Figma → Code', 'REST APIs', 'Material UI', 'Tailwind CSS',
  'Performance Optimization', 'Pixel Perfect UI', 'MongoDB', 'Express.js',
];

export default function Marquee() {
  const doubled = [...ITEMS, ...ITEMS];
  return (
    <section className="mq-sec" aria-hidden="true">
      <div className="mq-wrap">
        <div className="mq-track">
          {doubled.map((item, i) => (
            <div key={i} className="mq-item">
              <span className="mq-star">✦</span>
              <span className="mq-txt">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
