const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

const NAV = [
  { id: 'home',       label: 'Home' },
  { id: 'about',      label: 'Services' },
  { id: 'skills',     label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects',   label: 'Projects' },
  { id: 'contact',    label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-line" aria-hidden="true" />
      <div className="wrap">
        <div className="foot-in">

          <button className="foot-logo-wrap" onClick={() => go('home')} aria-label="Back to top">
            <span className="foot-logo-txt">VIGNESH M</span>
          </button>

          <p className="foot-copy">
            © {new Date().getFullYear()} Vignesh M &middot; React &amp; Next.js Developer &middot; Kerala, India
          </p>

          <nav className="foot-nav" aria-label="Footer navigation">
            {NAV.map(({ id, label }) => (
              <button key={id} className="foot-btn" onClick={() => go(id)}>
                {label}
              </button>
            ))}
          </nav>

        </div>
      </div>
    </footer>
  );
}
