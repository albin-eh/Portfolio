import profileImage from '../assets/profile.jpg'
import { LiquidButton } from './ui/liquid-glass-button'

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/albin-rajesh-44682739b/' },
  { label: 'Email', href: 'mailto:ALBINEDITS1@GMAIL.COM' },
]

export default function Hero() {
  return (
    <section id="home" className="section hero-section reveal">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">AI & DATA SCIENCE STUDENT</p>
          <h1>
            Hi, I&apos;m Albin.
            <span>Building AI-powered solutions for real-world problems.</span>
          </h1>
          <p className="lead">
            I&apos;m a second-year Artificial Intelligence &amp; Data Science student exploring
            the intersection of AI, cybersecurity, frontend development, and creative
            technology.
          </p>

          <div className="hero-actions">
            <LiquidButton asChild size="lg" className="portfolio-liquid-button">
              <a href="https://www.linkedin.com/in/albin-rajesh-44682739b/" target="_blank" rel="noreferrer">
              CONNECT WITH ME
              </a>
            </LiquidButton>
            <LiquidButton asChild variant="secondary" size="lg" className="portfolio-liquid-button">
              <a href="#projects">
              VIEW MY WORK
              </a>
            </LiquidButton>
          </div>

          <ul className="social-row" aria-label="Social links">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel={link.href.startsWith('http') ? 'noreferrer' : undefined}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero-visual" aria-label="Albin working on a creative technology project">
          <div className="portrait-card">
            <img src={profileImage} alt="Albin working at a desk with a laptop" />
            <div className="floating-tag tag-one">BUILD • LEARN • CREATE</div>
            <div className="floating-tag tag-two">AI / CYBER / WEB</div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator" aria-hidden="true">
        <span />
      </div>
    </section>
  )
}
