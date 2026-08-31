import { skillCategories } from '../data/skills.js'

const toneByCategory = {
  Programming: 'primary',
  Frontend: 'warm',
  Backend: 'primary',
  'Database / Data': 'warm',
  Tools: 'pink',
  Foundations: 'primary',
}

export default function Skills() {
  return (
    <section id="skills" className="container-px py-24 sm:py-28">
      <div className="max-w-7xl mx-auto">
        <p className="eyebrow eyebrow-dot mb-4">what i work with</p>
        <h2 className="section-heading max-w-3xl">
          my{' '}
          <span className="gradient-text hand-underline">toolbelt</span>
        </h2>
        <p className="text-base-ink-soft mb-12 max-w-2xl text-lg">
          technologies and fundamentals i've applied across coursework,
          projects, and my internship. these are the tools i reach for — not a
          leaderboard.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => {
            const tone = toneByCategory[cat.category] || 'primary'
            return (
              <div
                key={cat.category}
                className={`bouncy card-elevated p-6 border-base-ink shadow-pop hover:shadow-[10px_10px_0_0_#1A2238] hover:-translate-y-1 hover:-translate-x-1 ${
                  idx % 2 === 0
                    ? 'rotate-[-1deg]'
                    : idx % 3 === 0
                    ? 'rotate-[1.2deg]'
                    : 'rotate-[-0.5deg]'
                }`}
              >
                <div className="flex items-center justify-between mb-5">
                  <h3 className="text-base-ink font-display font-extrabold text-lg">
                    {cat.category}
                  </h3>
                  <span
                    aria-hidden="true"
                    className={
                      tone === 'primary'
                        ? 'h-9 w-9 rounded-xl border-2 border-accent-blue bg-accent-blue-tint text-accent-blue-deep flex items-center justify-center'
                        : tone === 'warm'
                        ? 'h-9 w-9 rounded-xl border-2 border-accent-yellow-deep bg-accent-yellow-tint text-base-ink flex items-center justify-center'
                        : 'h-9 w-9 rounded-xl border-2 border-accent-pink-deep bg-accent-pink-tint text-accent-pink-deep flex items-center justify-center'
                    }
                  >
                    <CategoryIcon category={cat.category} />
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((s) => (
                    <span
                      key={s}
                      className={
                        tone === 'primary'
                          ? 'chip-primary sticker'
                          : tone === 'warm'
                          ? 'chip-warm sticker'
                          : 'chip-pink sticker'
                      }
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function CategoryIcon({ category }) {
  const props = {
    width: 16,
    height: 16,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2.2,
    'aria-hidden': true,
  }
  switch (category) {
    case 'Programming':
      return (
        <svg {...props}>
          <path d="m8 6-6 6 6 6M16 6l6 6-6 6M14 4l-4 16" />
        </svg>
      )
    case 'Frontend':
      return (
        <svg {...props}>
          <path d="m4 7 8-4 8 4-8 4-8-4Z" />
          <path d="m4 12 8 4 8-4M4 17l8 4 8-4" />
        </svg>
      )
    case 'Backend':
      return (
        <svg {...props}>
          <rect x="3" y="4" width="18" height="6" rx="2" />
          <rect x="3" y="14" width="18" height="6" rx="2" />
          <path d="M7 7h.01M7 17h.01" />
        </svg>
      )
    case 'Database / Data':
      return (
        <svg {...props}>
          <ellipse cx="12" cy="6" rx="8" ry="3" />
          <path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
        </svg>
      )
    case 'Tools':
      return (
        <svg {...props}>
          <path d="M14.7 6.3a4 4 0 1 0 5 5l-5-5ZM9 11 4 16l4 4 5-5M14 10 10 14" />
        </svg>
      )
    case 'Foundations':
      return (
        <svg {...props}>
          <path d="M12 2 4 6v6c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V6l-8-4Z" />
        </svg>
      )
    default:
      return null
  }
}
