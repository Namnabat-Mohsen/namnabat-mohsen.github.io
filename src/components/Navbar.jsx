import { useEffect, useState } from 'react'
import { navSections, profile } from '../data/content'
import { Menu, Close, Sun, Moon, Download } from './icons'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')
  const [theme, setTheme] = useState(
    () => document.documentElement.getAttribute('data-theme') || 'dark'
  )

  // Sticky background on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Scroll spy: highlight the section currently in view
  useEffect(() => {
    const sections = navSections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean)
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    )
    sections.forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [])

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    document.documentElement.setAttribute('data-theme', next)
  }

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <a href="#home" className="nav__brand" onClick={() => setOpen(false)}>
          <span className="dot" />
          {profile.name}
        </a>

        <ul className={`nav__links ${open ? 'open' : ''}`}>
          {navSections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className={`nav__link ${active === s.id ? 'active' : ''}`}
                onClick={() => setOpen(false)}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav__actions">
          {profile.resumeUrl && (
            <a href={profile.resumeUrl} className="btn btn-ghost" target="_blank" rel="noreferrer">
              <Download width={16} height={16} /> CV
            </a>
          )}
          <button className="icon-btn" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'dark' ? <Sun /> : <Moon />}
          </button>
          <button
            className="icon-btn nav__toggle"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <Close /> : <Menu />}
          </button>
        </div>
      </div>
    </nav>
  )
}
