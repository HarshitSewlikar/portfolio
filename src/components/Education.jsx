import { education } from '../data/experience.js'

export default function Education() {
  return (
    <section id="education" className="container-px py-24 sm:py-28">
      <div className="max-w-4xl mx-auto">
        <p className="eyebrow eyebrow-dot mb-4">education</p>
        <h2 className="section-heading">
          my academic{' '}
          <span className="gradient-text-cream hand-underline-pink">journey</span>
        </h2>

        <div className="mt-10 card-elevated p-6 sm:p-8 border-base-ink shadow-pop hover:shadow-[10px_10px_0_0_#1A2238] hover:-translate-y-1 hover:-translate-x-1 transition-all duration-300">
          <div className="flex flex-col sm:flex-row gap-6 sm:items-start">
            <div
              aria-hidden="true"
              className="h-16 w-16 shrink-0 rounded-2xl bg-gradient-to-br from-accent-blue to-accent-yellow flex items-center justify-center text-white border-2 border-base-ink shadow-pop animate-wobble"
            >
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 10 12 5 2 10l10 5 10-5Z" />
                <path d="M6 12v5c0 1.5 3 3 6 3s6-1.5 6-3v-5" />
              </svg>
            </div>

            <div className="flex-1 min-w-0">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent-blue-deep mb-1.5">
                {education.duration}
              </p>
              <h3 className="text-lg sm:text-xl font-display font-extrabold text-base-ink">
                {education.degree}
              </h3>
              <p className="text-base-ink-soft text-sm mt-1">
                {education.institution}
              </p>
              <p className="text-base-ink-mute text-sm mt-0.5">
                {education.affiliation}
              </p>

              <div className="flex flex-wrap gap-2 mt-5">
                <span className="chip-primary sticker">{education.cgpa}</span>
                <span className="chip-warm sticker">{education.highlight}</span>
                {education.certifications.map((c) => (
                  <span key={c} className="chip-pink sticker">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
