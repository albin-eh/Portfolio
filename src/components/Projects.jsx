import { useEffect, useState } from 'react'
import { projects } from '../data/projects'

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setSelectedProject(null)
      }
    }

    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [])

  return (
    <section id="projects" className="section reveal">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Selected Work</p>
          <h2>Projects where I turn problems into prototypes.</h2>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <article key={project.id} className="project-card glass-panel">
              <div className="project-topline">
                <span className="project-number">{project.projectNumber}</span>
                <span className="project-badge">{project.badge}</span>
              </div>

              <div className="project-content">
                <div className="project-visual" aria-hidden="true">
                  <div className="visual-flow">
                    {project.workflow.map((step, index) => (
                      <span key={step} className={index === 0 ? 'flow-step active' : 'flow-step'}>
                        {step}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="project-text">
                  <h3>{project.title}</h3>
                  <p>{project.shortDescription}</p>

                  <div className="project-meta">
                    <span className="meta-label">Problem</span>
                    <span className="meta-label">Solution</span>
                  </div>

                  <div className="tag-list">
                    {project.tech.map((item) => (
                      <span key={item} className="tag">
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="project-footer">
                    <span className="status-pill">{project.status}</span>
                    <button type="button" className="inline-link" onClick={() => setSelectedProject(project)}>
                      View Case Study
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="modal-backdrop" onClick={() => setSelectedProject(null)}>
          <div className="project-modal glass-panel" role="dialog" aria-modal="true" aria-labelledby="project-modal-title" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="modal-close" aria-label="Close project details" onClick={() => setSelectedProject(null)}>
              Close
            </button>
            <p className="eyebrow modal-eyebrow">{selectedProject.badge}</p>
            <h3 id="project-modal-title">{selectedProject.title}</h3>

            <div className="modal-grid">
              <div>
                <h4>Overview</h4>
                <p>{selectedProject.shortDescription}</p>
              </div>
              <div>
                <h4>The Problem</h4>
                <p>{selectedProject.problem}</p>
              </div>
              <div>
                <h4>The Solution</h4>
                <p>{selectedProject.solution}</p>
              </div>
              <div>
                <h4>Technical Approach</h4>
                <p>{selectedProject.approach}</p>
              </div>
              <div className="modal-full">
                <h4>Workflow</h4>
                <div className="modal-workflow">
                  {selectedProject.workflow.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
              <div>
                <h4>Technology Stack</h4>
                <div className="tag-list">
                  {selectedProject.techStack.map((item) => (
                    <span key={item} className="tag">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4>Current Status</h4>
                <p>{selectedProject.status}</p>
              </div>
              <div>
                <h4>What I Learned</h4>
                <p>{selectedProject.learning}</p>
              </div>
              <div>
                <h4>Future Scope</h4>
                <p>{selectedProject.future}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
