'use client'

import { NAV_ITEMS } from '@/lib/portfolio'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import styles from '@/styles/portfolio.module.css'

const NAV_HEIGHT = 80

function scrollToSection(id: string) {
  const el = document.getElementById(id)
  if (!el) return
  const top = el.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT
  window.scrollTo({ top, behavior: 'smooth' })
}

export default function Nav() {
  const [activeNav, setActiveNav] = useState('inicio')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(
      Boolean,
    ) as HTMLElement[]

    let ticking = false

    const updateActive = () => {
      const offset = window.scrollY + NAV_HEIGHT + window.innerHeight * 0.35

      let current = sections[0]?.id ?? 'inicio'
      for (const section of sections) {
        if (section.offsetTop <= offset) {
          current = section.id
        }
      }

      setActiveNav((prev) => (prev === current ? prev : current))
      ticking = false
    }

    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(updateActive)
    }

    updateActive()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const handleNavClick = (id: string) => {
    setMenuOpen(false)
    scrollToSection(id)
  }

  return (
    <nav className={styles.nav} aria-label="Principal">
      <div className={styles.navInner}>
        <button
          type="button"
          className={styles.navLogoBtn}
          onClick={() => handleNavClick('inicio')}
        >
          Ejeoxlac<span className={styles.navDot}>.</span>
        </button>

        <div className={styles.navLinks}>
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`${styles.navLink} ${
                activeNav === item.id ? styles.navLinkActive : ''
              }`}
              onClick={(e) => {
                e.preventDefault()
                handleNavClick(item.id)
              }}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className={styles.navActions}>
          <span
            className={`${styles.navResume} ${styles.navResumeSoon}`}
            aria-label="Currículum — Próximamente"
          >
            Currículum
          </span>
          <button
            type="button"
            className={styles.navMenuBtn}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div
        className={`${styles.navMobilePanel} ${menuOpen ? styles.navMobilePanelOpen : ''}`}
        aria-hidden={!menuOpen}
      >
        <div className={styles.navMobileLinks}>
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`${styles.navMobileLink} ${
                activeNav === item.id ? styles.navMobileLinkActive : ''
              }`}
              onClick={(e) => {
                e.preventDefault()
                handleNavClick(item.id)
              }}
            >
              {item.label}
            </a>
          ))}
          <span
            className={`${styles.navMobileResume} ${styles.navResumeSoon}`}
            aria-label="Currículum — Próximamente"
          >
            Currículum
          </span>
        </div>
      </div>
    </nav>
  )
}
