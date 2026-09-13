const stats = [
  { label: '02+', value: 'Years Learning' },
  { label: 'AI + Cyber', value: 'Focus Areas' },
  { label: 'Multiple', value: 'Projects' },
  { label: 'Hackathons &', value: 'Competitions' },
]

export default function About() {
  return (
    <section id="about" className="section reveal">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">About Me</p>
          <h2>Curious by nature. Building by choice.</h2>
        </div>

        <div className="about-layout">
          <div className="about-quote glass-panel">
            <p>
              Technology should be
              <span>powerful.</span>
              Useful.
              Secure.
            </p>
          </div>

          <div className="about-copy">
            <p>
              I&apos;m a second-year student pursuing Artificial Intelligence &amp; Data Science,
              driven by curiosity about how technology can be both powerful and secure.
            </p>
            <p>
              Right now, I&apos;m especially drawn to cybersecurity and frontend development —
              the balance of protecting systems while crafting experiences people actually
              enjoy using.
            </p>
            <p>
              I&apos;m also building skills in AI-driven analysis, SaaS concepts, and graphic
              design, which let me approach problems from both a technical and creative angle.
            </p>
            <p>
              I&apos;m always open to learning, collaborating, and taking on new challenges —
              especially in technology, security, AI, and design.
            </p>
          </div>
        </div>

        <div className="stats-grid" aria-label="Quick profile statistics">
          {stats.map((stat) => (
            <div className="stat-card glass-panel" key={stat.label + stat.value}>
              <span>{stat.label}</span>
              <strong>{stat.value}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
