const FEATURED = {
  stars: 5,
  av: 'JR',
  col: 'linear-gradient(135deg,#7461ef,#00d4ff)',
  name: 'James R.',
  role: 'CTO',
  company: 'TechFlow Inc.',
  tag: 'Next.js Migration',
  text: 'Delivered a pixel-perfect Next.js app two weeks ahead of schedule. Zero production bugs. The TypeScript architecture is clean, scalable, and an absolute joy to maintain long-term.',
};

const SIDE = [
  {
    stars: 5,
    av: 'PS',
    col: 'linear-gradient(135deg,#f97316,#facc15)',
    name: 'Priya S.',
    role: 'Product Manager',
    text: 'Prompt, professional, and results that exceeded every expectation. Truly remarkable execution from start to finish.',
  },
  {
    stars: 5,
    av: 'DL',
    col: 'linear-gradient(135deg,#10b981,#00d4ff)',
    name: 'David L.',
    role: 'CEO, BrightLaunch',
    text: 'Turned our MVP wireframes into a polished production app in just three weeks. Absolutely incredible work.',
  },
];

const CLIENTS = [
  { av: 'JR', name: 'James R.',  col: 'linear-gradient(135deg,#7461ef,#00d4ff)' },
  { av: 'PS', name: 'Priya S.',  col: 'linear-gradient(135deg,#f97316,#facc15)' },
  { av: 'DL', name: 'David L.',  col: 'linear-gradient(135deg,#10b981,#00d4ff)' },
  { av: 'CW', name: 'Chen W.',   col: 'linear-gradient(135deg,#00d4ff,#7461ef)' },
  { av: 'EK', name: 'Elena K.',  col: 'linear-gradient(135deg,#ec4899,#7461ef)' },
  { av: 'LK', name: 'Liam K.',   col: 'linear-gradient(135deg,#f59e0b,#f97316)' },
];

export default function Testimonials() {
  return (
    <section className="tc-sec" id="testimonials" aria-labelledby="tc-h">
      <div className="tc-blob tb1" aria-hidden="true" />
      <div className="tc-blob tb2" aria-hidden="true" />

      <div className="wrap">

        <div className="tc-hd rev">
          <span className="stag inv">Kind Words</span>
          <h2 id="tc-h" className="stitle inv">
            Client <span className="gt">Testimonials</span>
          </h2>
          <p className="tc-hd-sub">Real feedback from real clients who trusted me with their products.</p>
        </div>

        <div className="tc-editorial">

          {/* Left: Hero quote */}
          <div className="tc-hero rev d1">
            <span className="tc-hero-tag">{FEATURED.tag}</span>
            <span className="tc-hero-qm" aria-hidden="true">"</span>
            <blockquote className="tc-hero-quote">{FEATURED.text}</blockquote>
            <div className="tc-hero-foot">
              <div className="tc-hero-stars" aria-label="5 stars">★★★★★</div>
              <div className="tc-hero-author">
                <div className="tc-av tc-av-lg" style={{ background: FEATURED.col }}>
                  {FEATURED.av}
                </div>
                <div>
                  <strong>{FEATURED.name}</strong>
                  <span>{FEATURED.role} · {FEATURED.company}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right panel */}
          <div className="tc-side">

            {/* Rating aggregate */}
            <div className="tc-agg rev d2">
              <div className="tc-agg-score">5.0</div>
              <div className="tc-agg-stars" aria-label="5 stars">★★★★★</div>
              <p className="tc-agg-sub">from 26+ satisfied clients</p>
              <div className="tc-agg-bars">
                {[[5, 100]].map(([star, pct]) => (
                  <div key={star} className="tc-agg-row">
                    <span>{star}★</span>
                    <div className="tc-agg-track">
                      <div className="tc-agg-fill" style={{ width: pct + '%' }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Compact reviews */}
            {SIDE.map((r, i) => (
              <div key={r.name} className={`tc-mini rev d${i + 3}`}>
                <div className="tc-mini-head">
                  <div className="tc-av" style={{ background: r.col }}>{r.av}</div>
                  <div>
                    <strong>{r.name}</strong>
                    <span>{r.role}</span>
                  </div>
                  <span className="tc-mini-stars" aria-label="5 stars">★★★★★</span>
                </div>
                <p className="tc-mini-txt">{r.text}</p>
              </div>
            ))}

          </div>
        </div>


      </div>
    </section>
  );
}
