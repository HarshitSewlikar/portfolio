import { useEffect, useRef, useState } from 'react'

export default function ProjectCard({ project, align = 'left', onOpen }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  const [imageFailed, setImageFailed] = useState(false)

  useEffect(() => {
    if (!ref.current) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12 }
    )
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`relative flex ${
        align === 'right' ? 'lg:justify-end' : 'lg:justify-start'
      } justify-center`}
    >
      {/* Milestone dot on the timeline (desktop) */}
      <span
        aria-hidden="true"
        className="hidden lg:flex absolute left-1/2 top-10 -translate-x-1/2 h-6 w-6 rounded-full bg-accent-yellow border-2 border-base-ink shadow-pop items-center justify-center z-10 animate-wobble"
      >
        <span className="h-2 w-2 rounded-full bg-accent-blue" />
      </span>

      {/* Mobile dot */}
      <span
        aria-hidden="true"
        className="lg:hidden absolute left-6 top-10 -translate-x-1/2 h-5 w-5 rounded-full bg-accent-yellow border-2 border-base-ink shadow-pop"
      />

      <button
        type="button"
        onClick={() => onOpen(project)}
        aria-label={`Open details for ${project.title}`}
        className={`group card-elevated w-full lg:w-[46%] text-left p-5 sm:p-6
          border-base-ink shadow-pop
          transition-all duration-500
          hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[14px_14px_0_0_#1A2238]
          hover:rotate-[-1deg]
          ${
            visible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-6'
          }
        `}
        style={{
          transitionProperty:
            'opacity, transform, box-shadow',
        }}
      >
        {/* Top row: number + open icon */}
        <div className="flex items-center justify-between mb-4">
          <span className="font-mono text-[11px] text-accent-blue-deep font-extrabold tracking-[0.18em] uppercase">
            project {project.number}
          </span>
          <span
            aria-hidden="true"
            className="h-9 w-9 rounded-full border-2 border-base-ink bg-accent-blue text-white
              flex items-center justify-center shadow-pop
              group-hover:rotate-[45deg] group-hover:bg-accent-pink group-hover:text-base-ink
              transition-all duration-300"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.8"
              aria-hidden="true"
            >
              <path d="M7 17 17 7M7 7h10v10" />
            </svg>
          </span>
        </div>

        {/* Project visual */}
        <div className="relative rounded-2xl overflow-hidden mb-5 border-2 border-base-ink aspect-[16/9] bg-accent-yellow-tint">
          {!imageFailed ? (
            <img
              src={project.image}
              alt={`${project.title} preview`}
              loading="lazy"
              onError={() => setImageFailed(true)}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05] group-hover:rotate-[1deg]"
            />
          ) : (
            <ProjectFallback project={project} />
          )}
          {/* Project number sticker overlay */}
          <div className="absolute top-3 right-3 h-10 w-10 rounded-full bg-accent-yellow border-2 border-base-ink flex items-center justify-center font-display font-extrabold text-base-ink shadow-pop rotate-[8deg]">
            {project.number}
          </div>
        </div>

        {/* Title + description */}
        <h3 className="text-xl sm:text-2xl font-display font-extrabold text-base-ink mb-2">
          {project.title}
        </h3>
        <p className="text-base-ink-soft text-sm leading-relaxed mb-4">
          {project.oneLiner}
        </p>

        {/* Tech chips */}
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 5).map((t, i) => (
            <span
              key={t}
              className={
                i % 3 === 0
                  ? 'chip-primary sticker'
                  : i % 3 === 1
                  ? 'chip-warm sticker'
                  : 'chip-pink sticker'
              }
            >
              {t}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="chip">+{project.technologies.length - 5}</span>
          )}
        </div>

        {/* Explore affordance */}
        <div className="mt-5 flex items-center gap-2 text-accent-blue-deep font-extrabold text-sm group-hover:text-accent-pink-deep">
          <span>explore project</span>
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.8"
            aria-hidden="true"
            className="transition-transform group-hover:translate-x-1 group-hover:rotate-[-8deg]"
          >
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </div>
      </button>
    </div>
  )
}

function ProjectFallback({ project }) {
  const initials = project.title
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
      style={{
        background:
          'linear-gradient(135deg, #FFD93D 0%, #FFB4C8 60%, #7AA0FF 100%)',
      }}
    >
      <span className="font-display font-extrabold text-4xl text-base-ink mb-1">
        {initials}
      </span>
      <span className="text-base-ink text-xs font-mono uppercase tracking-[0.18em] font-bold">
        {project.title}
      </span>
    </div>
  )
}
