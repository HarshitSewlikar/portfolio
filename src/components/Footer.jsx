import { socials } from '../data/socials.js'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t-2 border-base-border bg-base-surface/50 mt-12">
      <div className="container-px py-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="font-display font-extrabold text-base-ink text-lg flex items-center gap-2">
              <span
                aria-hidden="true"
                className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-accent-yellow text-accent-blue-deep text-sm font-extrabold border-2 border-base-ink shadow-pop"
              >
                HS
              </span>
              Harshit Sewlikar
            </p>
            <p className="text-base-ink-soft text-sm mt-2 max-w-md">
              computer engineering graduate · building practical software with
              python, django, react &amp; SQL — based in pune, india.
            </p>
          </div>

          <nav
            aria-label="Footer"
            className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-base-ink-soft"
          >
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent-blue font-bold transition-colors"
            >
              github
            </a>
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent-blue font-bold transition-colors"
            >
              linkedin
            </a>
            <a
              href={`mailto:${socials.email}`}
              className="hover:text-accent-blue font-bold transition-colors"
            >
              email
            </a>
            <a
              href={socials.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent-blue font-bold transition-colors"
            >
              resume
            </a>
          </nav>
        </div>

        <div className="max-w-7xl mx-auto mt-10 pt-6 border-t-2 border-dashed border-base-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-base-ink-mute">
          <p>© {year} Harshit Sewlikar. all rights reserved.</p>
          <p className="font-mono">
            built with curiosity, code, and a lot of debugging.
          </p>
        </div>
      </div>
    </footer>
  )
}
