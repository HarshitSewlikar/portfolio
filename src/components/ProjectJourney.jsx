import { useState } from 'react'
import { projects } from '../data/projects.js'
import ProjectCard from './ProjectCard.jsx'
import ProjectModal from './ProjectModal.jsx'

export default function ProjectJourney() {
  const [active, setActive] = useState(null)

  return (
    <section id="projects" className="container-px py-24 sm:py-28">
      <div className="max-w-5xl mx-auto">
        <p className="eyebrow eyebrow-dot mb-4 text-center">project journey</p>
        <h2 className="section-heading text-center">
          where i've{' '}
          <span className="gradient-text hand-underline">started</span>
        </h2>
        <p className="text-base-ink-soft mb-16 max-w-xl mx-auto text-center text-lg">
          three real projects that shaped my hands-on experience — each one a
          milestone in learning to build practical software.
        </p>

        <div className="relative">
          {/* Desktop connecting line — dashed gradient (blue → yellow → pink) */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-1 rounded-full"
            style={{
              background:
                'linear-gradient(to bottom, rgba(47,107,255,0.7) 0%, rgba(255,217,61,0.7) 50%, rgba(255,123,160,0.0) 100%)',
            }}
          />
          <svg
            aria-hidden="true"
            className="hidden lg:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 h-full w-px overflow-visible"
          >
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="100%"
              stroke="rgba(47,107,255,0.6)"
              strokeWidth="2"
              strokeDasharray="4 8"
              className="dash-flow"
            />
          </svg>

          {/* Mobile connecting line */}
          <div
            aria-hidden="true"
            className="lg:hidden absolute left-6 top-0 bottom-0 w-1 rounded-full bg-gradient-to-b from-accent-blue via-accent-yellow to-accent-pink/0"
          />

          <div className="space-y-14 lg:space-y-20">
            {projects.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                align={i % 2 === 0 ? 'left' : 'right'}
                onOpen={setActive}
              />
            ))}
          </div>
        </div>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  )
}
