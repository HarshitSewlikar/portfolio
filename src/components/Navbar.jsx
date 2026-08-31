import { useEffect, useState } from 'react'

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [active, setActive] = useState('home')
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = links.map((l) => document.getElementById(l.id)).filter(Boolean)
    if (!sections.length) return
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) setActive(visible[0].target.id)
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.1, 0.25, 0.5] }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  const scrollTo = (id) => {
    setOpen(false)
    const el = document.getElementById(id)
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-base-bg/90 backdrop-blur-lg border-b-2 border-base-border'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-px flex items-center justify-between h-16 max-w-7xl mx-auto">
        <button
          onClick={() => scrollTo('home')}
          className="group flex items-center gap-2 font-display font-extrabold text-base-ink text-lg tracking-tight"
          aria-label="Harshit Sewlikar — go to home"
        >
          <span
            aria-hidden="true"
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-accent-yellow text-accent-blue-deep text-base border-2 border-base-ink shadow-pop group-hover:rotate-[-6deg] group-hover:scale-110 transition-transform duration-300"
          >
            HS
          </span>
          <span>
            Harshit<span className="text-accent-blue">.</span>
          </span>
        </button>

        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.id}>
              <button
                onClick={() => scrollTo(l.id)}
                aria-current={active === l.id ? 'true' : undefined}
                className={`relative px-4 py-2 text-sm font-bold rounded-xl transition-all duration-200 ${
                  active === l.id
                    ? 'text-accent-blue-deep bg-accent-yellow-tint'
                    : 'text-base-ink-soft hover:text-base-ink hover:bg-base-ink/5'
                }`}
              >
                {l.label}
                {active === l.id && (
                  <span
                    aria-hidden="true"
                    className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-accent-pink animate-pulse-soft"
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => scrollTo('contact')}
          className="hidden md:inline-flex btn-primary !py-2.5 !px-5 text-sm"
        >
          Let's Chat
        </button>

        <button
          className="md:hidden h-10 w-10 rounded-xl border-2 border-base-ink text-base-ink flex items-center justify-center bg-accent-yellow shadow-pop"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? (
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          )}
        </button>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="md:hidden bg-base-bg/95 backdrop-blur-lg border-b-2 border-base-border"
        >
          <ul className="flex flex-col p-4 gap-2">
            {links.map((l) => (
              <li key={l.id}>
                <button
                  onClick={() => scrollTo(l.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-base font-bold transition-colors ${
                    active === l.id
                      ? 'text-accent-blue-deep bg-accent-yellow-tint'
                      : 'text-base-ink-soft hover:bg-base-ink/5 hover:text-base-ink'
                  }`}
                >
                  {l.label}
                </button>
              </li>
            ))}
            <li className="pt-2">
              <button
                onClick={() => scrollTo('contact')}
                className="btn-primary w-full"
              >
                Let's Chat
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
