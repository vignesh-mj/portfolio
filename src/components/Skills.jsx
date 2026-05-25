export default function Skills() {
  return (
    <section id="skills" className="sk-sec" aria-label="Tech Stack and Skills">
      <div className="wrap sk-wrap">

        {/* Giant "Portfolio'" equivalent — background heading */}
        <div className="sk-bg-hd" aria-hidden="true">
          Tech<br />Stack<span className="sk-bg-ap">'</span>
        </div>

        <div className="sk-bento">

          {/* ── PRO: tall profile card (col 1, all 3 rows) */}
          <div className="skb skp">
            <div className="skp-tag">
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
                <circle cx="5.5" cy="5.5" r="4.5" stroke="currentColor" strokeWidth="1.2"/>
                <line x1="5.5" y1="2" x2="5.5" y2="9" stroke="currentColor" strokeWidth="1.2"/>
                <line x1="2" y1="5.5" x2="9" y2="5.5" stroke="currentColor" strokeWidth="1.2"/>
              </svg>
              About Me
            </div>

            <div className="skp-circle-wrap" aria-hidden="true">
              <div className="skp-circle-bg" />
              <div className="skp-avatar">VM</div>
            </div>

            <div className="skp-name">
              <span className="skp-im">Im,</span>
              <span className="skp-nm">Vignesh</span>
              <span className="skp-nm">M,</span>
            </div>

            <div className="skp-foot">
              <div className="skp-email">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
                  <rect x="1" y="2" width="10" height="8" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.1"/>
                  <path d="M1 3.5L6 7l5-3.5" stroke="currentColor" strokeWidth="1.1" fill="none"/>
                </svg>
                vigneshm5142@gmail.com
              </div>
              <div className="skp-badge" aria-hidden="true">
                <svg viewBox="0 0 72 72" className="skp-bsvg">
                  <path id="skcp" d="M36,36 m-26,0 a26,26 0 1,1 52,0 a26,26 0 1,1 -52,0" fill="none"/>
                  <text fontSize="5.8" fill="rgba(255,255,255,.6)" letterSpacing="2.2">
                    <textPath href="#skcp" startOffset="0%">2024 · MY PORTFOLIO · </textPath>
                  </text>
                </svg>
                <div className="skp-badge-dot" />
              </div>
            </div>
          </div>

          {/* ── IMG: main visual card (cols 2–3, rows 1–2) */}
          <div className="skb ski">
            <img
              src="https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&w=900&q=85"
              alt="JavaScript code"
              className="ski-img"
            />
            <div className="ski-ov" aria-hidden="true" />
            <button className="ski-play" aria-label="View projects">▶</button>
          </div>

          {/* ── ST1: teal stat (col 4, row 1) */}
          <div className="skb sks sks-1">
            <div className="sks-corner" aria-hidden="true" />
            <div className="sks-n">15<sup>+</sup></div>
            <p>Projects</p>
          </div>

          {/* ── ST2: purple stat (col 4, row 2) */}
          <div className="skb sks sks-2">
            <div className="sks-corner" aria-hidden="true" />
            <div className="sks-n">18<sup>+</sup></div>
            <p>Awards</p>
          </div>

          {/* ── CL: React icon card (col 2, row 3) */}
          <div className="skb skc">
            <div className="skc-corner" aria-hidden="true" />
            <div className="skc-icon" aria-hidden="true">⚛</div>
            <p>Clients</p>
          </div>

          {/* ── SPH: gradient orb (col 3, row 3) */}
          <div className="skb sko">
            <div className="sko-orb" aria-hidden="true" />
          </div>

          {/* ── BIG: amber award stat (col 4, row 3) */}
          <div className="skb skbig">
            <div className="sks-corner" aria-hidden="true" />
            <div className="sks-n">4<sup>+</sup></div>
            <p>Global Design<br />Awards.</p>
          </div>

        </div>
      </div>
    </section>
  );
}
