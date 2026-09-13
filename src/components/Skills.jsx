import { skillGroups } from '../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="section reveal">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Tech Stack</p>
          <h2>Tools I use to turn ideas into working systems.</h2>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div key={group.title} className={`skill-group glass-panel ${group.emphasis}`}>
              <h3>{group.title}</h3>
              <div className="skill-pills">
                {group.skills.map((skill) => (
                  <span key={skill} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
