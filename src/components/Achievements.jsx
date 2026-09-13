import { achievementCards } from '../data/experience'

export default function Achievements() {
  return (
    <section id="achievements" className="section reveal">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Achievements &amp; Activities</p>
          <h2>Learning, building, and participating in the ecosystem around me.</h2>
        </div>

        <div className="achievement-grid">
          {achievementCards.map((card) => (
            <div key={card.label} className="achievement-card glass-panel">
              <span className="achievement-label">{card.label}</span>
              <small>{card.meta}</small>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
