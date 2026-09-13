import { LiquidButton } from './ui/liquid-glass-button'

export default function Contact() {
  return (
    <section id="contact" className="section reveal contact-section">
      <div className="container contact-shell glass-panel">
        <div className="contact-copy">
          <p className="eyebrow">Let&apos;s connect</p>
          <h2>Let&apos;s build something.</h2>
          <p>
            Have an idea, project, collaboration, or simply want to talk about technology?
            I&apos;d love to connect.
          </p>
        </div>

        <div className="contact-actions">
          <LiquidButton asChild size="lg" className="portfolio-liquid-button">
            <a href="https://www.linkedin.com/in/albin-rajesh-44682739b/" target="_blank" rel="noreferrer">
            LINKEDIN
            </a>
          </LiquidButton>
          <LiquidButton asChild variant="secondary" size="lg" className="portfolio-liquid-button">
            <a href="https://github.com" target="_blank" rel="noreferrer">
            GITHUB
            </a>
          </LiquidButton>
          <LiquidButton asChild variant="secondary" size="lg" className="portfolio-liquid-button">
            <a href="mailto:albinedits!@gmail.com">
            EMAIL ME
            </a>
          </LiquidButton>
        </div>
      </div>
    </section>
  )
}
