const footerLinks = [
  { label: 'GitHub', href: 'https://github.com' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/albin-rajesh-44682739b/' },
  { label: 'Email', href: 'mailto:ALBINEDITS1@GMAIL.COM' },
]

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-shell">
        <div>
          <h3>ALBIN RAJESH</h3>
          <p>AI &amp; Data Science Student</p>
        </div>

        <p className="footer-tagline">Building. Learning. Experimenting.</p>

        <div className="footer-links" aria-label="Footer social links">
          {footerLinks.map((link) => (
            <a key={link.label} href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel={link.href.startsWith('http') ? 'noreferrer' : undefined}>
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© 2026 Albin Rajesh. Built with curiosity.</span>
      </div>
    </footer>
  )
}
