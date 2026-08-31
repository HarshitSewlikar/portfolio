import { socials } from '../data/socials.js'

export default function Contact() {
  return (
    <section id="contact" className="container-px py-24 sm:py-28">
      <div className="max-w-5xl mx-auto">
        <div className="card-elevated p-8 sm:p-14 text-center relative overflow-hidden border-base-ink shadow-pop">
          {/* Soft ambient accents */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full bg-accent-blue/15 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-accent-yellow/30 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 h-64 w-64 rounded-full bg-accent-pink/15 blur-3xl"
          />

          {/* Floating sparkles */}
          <span aria-hidden="true" className="absolute top-8 left-8 text-3xl twinkle">✦</span>
          <span aria-hidden="true" className="absolute top-12 right-12 text-4xl twinkle" style={{ animationDelay: '0.5s' }}>✧</span>
          <span aria-hidden="true" className="absolute bottom-12 left-16 text-2xl twinkle" style={{ animationDelay: '1s' }}>★</span>

          <div className="relative">
            <p className="eyebrow eyebrow-dot mb-4 justify-center inline-flex">
              contact
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-base-ink mb-4">
              let's build something{' '}
              <span className="gradient-text hand-underline">useful.</span>
            </h2>
            <p className="text-base-ink-soft text-lg mb-10 max-w-xl mx-auto">
              if you're looking for a developer who enjoys turning ideas into
              working software, i'd love to connect.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <ContactCard
                href={`mailto:${socials.email}`}
                label="email"
                value={socials.email}
                icon={
                  <path d="M2 4h20v16H2z M22 4 12 13 2 4" />
                }
                tone="primary"
              />
              <ContactCard
                href={socials.linkedin}
                external
                label="linkedin"
                value="in/harshitsewlikar"
                icon={
                  <path d="M4 4h16v16H4zM8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 13v4" />
                }
                tone="warm"
              />
              <ContactCard
                href={socials.github}
                external
                label="github"
                value="@HarshitSewlikar"
                icon={
                  <path d="M9 19c-4 1.5-4-2-6-2m12 4v-3.5c0-1 .1-1.4-.5-2 3-.3 6-1.5 6-7a5.4 5.4 0 0 0-1.5-3.7 5 5 0 0 0-.1-3.7s-1.2-.4-3.9 1.4a13.4 13.4 0 0 0-7 0C5.3 1.6 4.1 2 4.1 2a5 5 0 0 0-.1 3.7A5.4 5.4 0 0 0 2.5 9.4c0 5.5 3 6.7 6 7-.6.6-.6 1.2-.5 2V21" />
                }
                tone="pink"
              />
              <ContactCard
                href={socials.resume}
                external
                label="resume"
                value="view pdf"
                icon={
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6 M9 13h6 M9 17h4" />
                }
                tone="warm"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactCard({ href, external, label, value, icon, tone }) {
  const toneClasses =
    tone === 'primary'
      ? 'border-accent-blue bg-accent-blue-tint text-accent-blue-deep'
      : tone === 'warm'
      ? 'border-accent-yellow-deep bg-accent-yellow-tint text-base-ink'
      : 'border-accent-pink-deep bg-accent-pink-tint text-accent-pink-deep'

  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="group card-elevated p-5 flex flex-col items-center gap-3 transition-all hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[10px_10px_0_0_#1A2238] hover:rotate-[-1.5deg] border-base-ink shadow-pop"
    >
      <span
        className={`h-12 w-12 rounded-xl border-2 flex items-center justify-center transition-transform group-hover:rotate-[8deg] group-hover:scale-110 ${toneClasses}`}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          {icon}
        </svg>
      </span>

      <div className="min-w-0 text-center">
        <p className="text-base-ink font-display font-extrabold text-sm">{label}</p>
        <p className="text-base-ink-soft text-xs mt-0.5 break-all">{value}</p>
      </div>
    </a>
  )
}
