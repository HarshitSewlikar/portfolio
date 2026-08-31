import { experience } from '../data/experience.js'

const stepAccents = [
  { label: 'what i did', color: 'text-accent-blue-deep', dot: 'bg-accent-blue' },
  { label: 'how i did it', color: 'text-base-ink', dot: 'bg-accent-yellow' },
  { label: 'what i learned', color: 'text-accent-pink-deep', dot: 'bg-accent-pink' },
]

export default function Experience() {
  return (
    <section id="experience" className="container-px py-24 sm:py-28">
      <div className="max-w-4xl mx-auto">
        <p className="eyebrow eyebrow-dot mb-4">experience</p>
        <h2 className="section-heading">
          where i've{' '}
          <span className="gradient-text hand-underline">worked</span>
        </h2>
        <p className="text-base-ink-soft mt-4 max-w-2xl text-lg">
          real engineering work, real teams. here's where my hands-on
          experience came from.
        </p>

        <div className="mt-12 relative">
          {/* Timeline spine (desktop) */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute left-[7px] top-2 bottom-2 w-1 rounded-full bg-gradient-to-b from-accent-blue/60 via-accent-yellow/60 to-transparent"
          />

          <div className="space-y-8">
            {experience.map((exp) => (
              <article
                key={exp.company}
                className="relative pl-7 md:pl-10"
              >
                {/* Timeline dot */}
                <span
                  aria-hidden="true"
                  className="absolute left-[-2px] top-7 h-5 w-5 rounded-full bg-accent-yellow border-2 border-base-ink shadow-pop flex items-center justify-center"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-base-ink" />
                </span>

                <div className="card-elevated p-6 sm:p-8 border-base-ink shadow-pop hover:shadow-[10px_10px_0_0_#1A2238] hover:-translate-y-1 hover:-translate-x-1 transition-all duration-300">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-6">
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent-blue-deep mb-1.5">
                        {exp.duration}
                      </p>
                      <h3 className="text-xl sm:text-2xl font-display font-extrabold text-base-ink">
                        {exp.role}{' '}
                        <span className="text-base-ink-soft font-medium">·</span>{' '}
                        <span className="gradient-text-cream hand-underline-pink">
                          {exp.company}
                        </span>
                      </h3>
                      <p className="text-base-ink-mute text-sm flex items-center gap-1.5 mt-1.5">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          aria-hidden="true"
                        >
                          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1 1 16 0Z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                        {exp.location}
                      </p>
                    </div>
                  </div>

                  {/* Three-step breakdown */}
                  <div className="grid sm:grid-cols-3 gap-5 sm:gap-6">
                    {stepAccents.map((s, i) => {
                      const text =
                        i === 0
                          ? exp.whatIDid
                          : i === 1
                          ? exp.howIImplemented
                          : exp.whatILearned
                      return (
                        <div key={s.label}>
                          <div className="flex items-center gap-2 mb-2">
                            <span
                              aria-hidden="true"
                              className={`h-2 w-2 rounded-full ${s.dot}`}
                            />
                            <p
                              className={`font-mono text-[10px] uppercase tracking-[0.18em] font-extrabold ${s.color}`}
                            >
                              {s.label}
                            </p>
                          </div>
                          <p className="text-base-ink-soft text-sm leading-relaxed">
                            {text}
                          </p>
                        </div>
                      )
                    })}
                  </div>

                  {/* Tech chips */}
                  <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t-2 border-dashed border-base-border">
                    {exp.technologies.map((t, i) => (
                      <span
                        key={t}
                        className={
                          i % 2 === 0
                            ? 'chip-primary sticker'
                            : 'chip-warm sticker'
                        }
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
