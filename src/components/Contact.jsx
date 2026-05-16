import { useState } from 'react';

const INFO = [
  { icon: '📧', label: 'Email', value: 'vigneshm5142@gmail.com', href: 'mailto:vigneshm5142@gmail.com' },
  { icon: '📱', label: 'Phone', value: '+91 9207975142', href: 'tel:+919207975142' },
  { icon: '📍', label: 'Location', value: 'Idukki, Kerala, India', href: null },
];

export default function Contact() {
  const [f, setF] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const onChange = (e) => setF((p) => ({ ...p, [e.target.name]: e.target.value }));
  const onSubmit = (e) => {
    e.preventDefault();
    const url = `mailto:vigneshm5142@gmail.com?subject=${encodeURIComponent(f.subject || 'Portfolio Enquiry')}&body=${encodeURIComponent(`Name: ${f.name}\nEmail: ${f.email}\n\n${f.message}`)}`;
    window.location.href = url;
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="contact" className="ct-sec" aria-labelledby="ct-h">
      <div className="wrap">
        <div className="ct-grid">
          {/* Info */}
          <div>
            <p className="ct-pre">Get In Touch</p>
            <h2 id="ct-h" className="ct-title rev">
              Let&apos;s Build Something<br /><span>Amazing Together</span>
            </h2>
            <p className="ct-desc rev d1">
              Open to full-time roles, freelance projects, and collaborations.
              Currently based in Kerala, India and available for remote work worldwide.
            </p>

            <address className="ct-items rev d2" style={{ fontStyle: 'normal' }}>
              {INFO.map((item) => (
                <div key={item.label} className="ct-item">
                  <div className="ct-ico" aria-hidden="true">{item.icon}</div>
                  <div>
                    <div className="ct-lbl">{item.label}</div>
                    {item.href
                      ? <a href={item.href} className="ct-val">{item.value}</a>
                      : <span className="ct-val">{item.value}</span>}
                  </div>
                </div>
              ))}
            </address>

            <div className="ct-socs rev d3" aria-label="Social links">
              <a href="https://linkedin.com/in/vignesh-m" target="_blank" rel="noopener noreferrer"
                className="ct-soc" aria-label="LinkedIn">in</a>
              <a href="https://github.com/vignesh-m" target="_blank" rel="noopener noreferrer"
                className="ct-soc" aria-label="GitHub">gh</a>
              <a href="mailto:vigneshm5142@gmail.com" className="ct-soc" aria-label="Email">@</a>
            </div>
          </div>

          {/* Form */}
          <form className="ct-form rev-r d2" onSubmit={onSubmit} noValidate>
            <div className="ct-form-row">
              <div className="ct-grp">
                <label htmlFor="ct-name" className="ct-lbl2">Name</label>
                <input id="ct-name" name="name" type="text" required
                  placeholder="John Doe" className="ct-inp" value={f.name} onChange={onChange} />
              </div>
              <div className="ct-grp">
                <label htmlFor="ct-email" className="ct-lbl2">Email</label>
                <input id="ct-email" name="email" type="email" required
                  placeholder="john@company.com" className="ct-inp" value={f.email} onChange={onChange} />
              </div>
            </div>
            <div className="ct-grp">
              <label htmlFor="ct-subject" className="ct-lbl2">Subject</label>
              <input id="ct-subject" name="subject" type="text"
                placeholder="Frontend Role / Project Collab" className="ct-inp" value={f.subject} onChange={onChange} />
            </div>
            <div className="ct-grp">
              <label htmlFor="ct-msg" className="ct-lbl2">Message</label>
              <textarea id="ct-msg" name="message" required
                placeholder="Tell me about your project or opportunity..."
                className="ct-txt" value={f.message} onChange={onChange} />
            </div>
            <button type="submit" className="ct-sbtn">
              {sent ? '✓ Opening Email...' : 'Send Message →'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
