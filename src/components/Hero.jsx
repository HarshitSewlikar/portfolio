import { socials } from '../data/socials.js'

const stackChips = ['Python', 'Django', 'React', 'SQL']

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="relative flex items-center min-h-screen pt-28 pb-20 container-px"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-14 items-center w-full">

        {/* Left: identity + value */}
        <div className="lg:col-span-7">
          <p className="eyebrow eyebrow-dot mb-5">
            hi, i'm harshit · a computer engineer from pune
          </p>

          <h1 className="text-[2.8rem] sm:text-6xl lg:text-[4.8rem] leading-[1.02] mb-6">
            i build{' '}
            <span className="gradient-text hand-underline">
              software
            </span>
            <br className="hidden sm:block" />
            that actually <span className="gradient-text-cream">helps people.</span>
          </h1>

          <p className="text-base-ink-soft text-lg leading-relaxed mb-9 max-w-2xl">
            full-stack dev who likes the whole journey — from the SQL schema at
            the back to the tiny hover state at the front. i turn ideas into
            working apps with django, react, and a lot of debugging.
          </p>

          {/* Stack chips */}
          <div className="flex flex-wrap items-center gap-2.5 mb-10">
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-base-ink-mute mr-1">
              my stack
            </span>
            {stackChips.map((s, i) => (
              <span
                key={s}
                className={
                  i % 2 === 0
                    ? 'chip-primary sticker'
                    : 'chip-warm sticker'
                }
              >
                {s}
              </span>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4 mb-10">
            <button
              type="button"
              onClick={() => scrollTo('projects')}
              className="btn-primary"
            >
              see my projects
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.8"
                aria-hidden="true"
              >
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </button>

            <a
              href={socials.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              view resume
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                aria-hidden="true"
              >
                <path d="M12 3v14M5 12l7 7 7-7M5 21h14" />
              </svg>
            </a>

            <button
              type="button"
              onClick={() => scrollTo('contact')}
              className="btn-warm"
            >
              say hi
            </button>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-base-ink-mute mr-1">
              find me on
            </span>

            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Harshit Sewlikar on GitHub"
              className="h-11 w-11 rounded-full border-2 border-base-ink bg-accent-yellow text-base-ink flex items-center justify-center shadow-pop hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[8px_8px_0_0_#1A2238] hover:rotate-[-6deg] transition-all duration-200"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 .5C5.73.5.98 5.24.98 11.52c0 5.02 3.26 9.28 7.78 10.78.57.1.78-.25.78-.55 0-.27-.01-1.16-.02-2.1-3.17.69-3.84-1.35-3.84-1.35-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.72-1.53-2.53-.29-5.19-1.27-5.19-5.63 0-1.24.44-2.26 1.17-3.06-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.14 1.17a10.9 10.9 0 0 1 5.72 0c2.18-1.48 3.13-1.17 3.13-1.17.63 1.58.24 2.75.12 3.04.73.8 1.17 1.82 1.17 3.06 0 4.37-2.67 5.34-5.21 5.62.41.36.77 1.06.77 2.14 0 1.55-.01 2.79-.01 3.17 0 .3.2.66.79.55A11.03 11.03 0 0 0 23.02 11.5C23.02 5.24 18.27.5 12 .5Z" />
              </svg>
            </a>

            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Harshit Sewlikar on LinkedIn"
              className="h-11 w-11 rounded-full border-2 border-base-ink bg-accent-blue text-white flex items-center justify-center shadow-pop hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[8px_8px_0_0_#1A2238] hover:rotate-[6deg] transition-all duration-200"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
              </svg>
            </a>

            <a
              href={`mailto:${socials.email}`}
              aria-label="Email Harshit Sewlikar"
              className="h-11 w-11 rounded-full border-2 border-base-ink bg-accent-pink text-base-ink flex items-center justify-center shadow-pop hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[8px_8px_0_0_#1A2238] hover:rotate-[-6deg] transition-all duration-200"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                aria-hidden="true"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 6-10 7L2 6" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right: profile card with stickers */}
        <div className="lg:col-span-5">
          <div className="relative mx-auto max-w-md">
            {/* Sparkle stickers around the card */}
            <span
              aria-hidden="true"
              className="absolute -top-6 -left-6 text-3xl twinkle"
            >
              ✦
            </span>
            <span
              aria-hidden="true"
              className="absolute -bottom-4 -right-4 text-4xl twinkle"
              style={{ animationDelay: '0.6s' }}
            >
              ✧
            </span>
            <span
              aria-hidden="true"
              className="absolute top-1/2 -right-8 text-2xl twinkle"
              style={{ animationDelay: '1.1s' }}
            >
              ★
            </span>

            <div className="card-elevated p-6 shadow-pop border-base-ink">
              {/* Card header */}
              <div className="flex items-center gap-4 pb-5 border-b-2 border-dashed border-base-border">
                <div
                  aria-hidden="true"
                  className="h-16 w-16 rounded-2xl bg-gradient-to-br from-accent-blue via-accent-blue-soft to-accent-yellow flex items-center justify-center text-white font-display font-extrabold text-xl border-2 border-base-ink shadow-pop animate-wobble"
                >
                  HS
                </div>
                <div className="min-w-0">
                  <p className="text-base-ink font-display font-extrabold text-lg leading-tight truncate">
                    Harshit Sewlikar
                  </p>
                  <p className="text-base-ink-soft text-sm">
                    Computer Engineer · Pune, India
                  </p>
                </div>
              </div>

              {/* Bio lines */}
              <div className="py-5 space-y-3">
                <p className="text-base-ink-soft text-sm leading-relaxed">
                  full-stack dev with a backend-first heart. i design the data,
                  the API, and the experience — end to end.
                </p>
                <div className="flex flex-wrap gap-2">
                  {stackChips.map((s, i) => (
                    <span
                      key={s}
                      className={i % 2 === 0 ? 'chip-primary sticker' : 'chip-warm sticker'}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-2 pt-5 border-t-2 border-dashed border-base-border">
                <Stat label="projects" value="3" />
                <Stat label="degree" value="B.E. CE" />
                <Stat label="cgpa" value="8.46" />
              </div>

              {/* Mini workspace graphic */}
              <div
                aria-hidden="true"
                className="mt-5 relative h-28 rounded-2xl overflow-hidden border-2 border-base-ink bg-gradient-to-br from-accent-blue-tint via-accent-yellow-tint to-accent-pink-tint"
              >
                <div className="absolute inset-0 opacity-50 page-grain" />
                <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-accent-pink" />
                  <span className="h-2.5 w-2.5 rounded-full bg-accent-yellow" />
                  <span className="h-2.5 w-2.5 rounded-full bg-accent-blue" />
                </div>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-base-ink">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-blue animate-pulse-soft" />
                  shipping
                </div>
                {/* Decorative bars */}
                <div className="absolute bottom-3 left-4 right-4 flex items-end gap-1">
                  <span className="block w-2 h-3 rounded-sm bg-accent-blue/70" />
                  <span className="block w-2 h-5 rounded-sm bg-accent-blue" />
                  <span className="block w-2 h-8 rounded-sm bg-accent-yellow" />
                  <span className="block w-2 h-4 rounded-sm bg-accent-blue/60" />
                  <span className="block w-2 h-6 rounded-sm bg-accent-pink" />
                  <span className="block w-2 h-3 rounded-sm bg-accent-blue/50" />
                  <span className="block w-2 h-7 rounded-sm bg-accent-yellow" />
                  <span className="block w-2 h-4 rounded-sm bg-accent-blue/70" />
                </div>
              </div>
            </div>

            {/* "open to work" sticker badge */}
            <div
              aria-hidden="true"
              className="hidden sm:flex absolute -top-5 -right-3 z-10 items-center gap-2 rounded-full bg-accent-yellow border-2 border-base-ink px-3 py-1.5 shadow-pop rotate-[8deg] hover:rotate-[12deg] transition-transform"
            >
              <span className="h-2 w-2 rounded-full bg-accent-pink animate-pulse-soft" />
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-base-ink font-bold">
                open to work
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

function Stat({ label, value }) {
  return (
    <div className="text-center">
      <p className="font-display font-extrabold text-base-ink text-lg leading-none">
        {value}
      </p>
      <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-base-ink-mute mt-1.5">
        {label}
      </p>
    </div>
  )
}
