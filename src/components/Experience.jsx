import { achievementCards, experienceData } from '../data/experience'

export default function Experience() {
  return (
    <section id="experience" className="section reveal">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Experience</p>
          <h2>Building momentum through hands-on learning and collaboration.</h2>
        </div>

        <div className="timeline">
          {experienceData.map((item) => (
            <div key={item.title} className="timeline-item">
              <div className="timeline-dot" aria-hidden="true" />
              <div className="timeline-card glass-panel">
                <div className="timeline-head">
                  <span className="timeline-year">{item.year}</span>
                  <span className="timeline-type">{item.type}</span>
                </div>
                <h3>{item.title}</h3>
                {item.organization && <p className="timeline-organization">{item.organization}</p>}
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
