'use client'

import { useEffect, useState } from 'react'
import { NAV_LINKS } from '@/lib/portfolio'
import styles from '@/styles/portfolio.module.css'

const NAV_HEIGHT = 56

function scrollToSection(id: string) {
  const el = document.getElementById(id)
  if (!el) return
  const top = el.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT
  window.scrollTo({ top, behavior: 'smooth' })
}

export default function Nav() {
  const [activeNav, setActiveNav] = useState('inicio')

  useEffect(() => {
    const sections = NAV_LINKS.map((id) => document.getElementById(id)).filter(
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

  return (
    <nav className={styles.nav}>
      <div className={styles.navInner}>
        <span className={styles.navLogo}>
          Ejeoxlac<span className={styles.navDot}>.</span>
        </span>
        <div className={styles.navLinks}>
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className={`${styles.navLink} ${activeNav === link ? styles.navLinkActive : ''}`}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection(link)
              }}
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
