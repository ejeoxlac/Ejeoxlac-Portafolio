'use client'

import { useEffect, useState } from 'react'
import { NAV_LINKS } from '@/lib/portfolio'
import styles from '@/styles/portfolio.module.css'

export default function Nav() {
  const [activeNav, setActiveNav] = useState('inicio')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveNav(e.target.id)
        })
      },
      { threshold: 0.5 },
    )
    NAV_LINKS.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
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
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
