import logoImg from '../assets/Images/Logo.png';

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

      {/* Gradient top accent */}
      <div className="footer-line" aria-hidden="true" />

      <div className="wrap">
        <div className="foot-in">

          {/* Logo */}
          <button
            className="foot-logo-wrap"
            onClick={() => go('home')}
            aria-label="Back to top"
          >
            <img src={logoImg} alt="Vignesh M" className="foot-logo-img" />
          </button>

          {/* Tagline */}
          <p className="foot-tagline">
            React &amp; Next.js Developer &middot; Kerala, India
          </p>

          {/* Navigation pills */}
          <nav className="foot-nav" aria-label="Footer navigation">
            {NAV.map(({ id, label }) => (
              <button key={id} className="foot-btn" onClick={() => go(id)}>
                {label}
              </button>
            ))}
          </nav>

        </div>
      </div>

      {/* Bottom copyright bar */}
      <div className="foot-bar">
        <div className="wrap">
          <div className="foot-bar-in">
            <p className="foot-copy">
              © {new Date().getFullYear()} Vignesh M &middot; All rights reserved
            </p>
            <p className="foot-made">Built with React &amp; Next.js ✦</p>
          </div>
        </div>
      </div>

    </footer>
  );
}
