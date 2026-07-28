'use client'

import { NAV_ITEMS } from '@/lib/portfolio'
import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { useEffect, useState } from 'react'
import styles from '@/styles/portfolio.module.css'

const NAV_HEIGHT = 80

const linkContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.08,
    },
  },
}

const linkVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.28, ease: [0.16, 1, 0.3, 1] as const },
  },
}

function scrollToSection(id: string) {
  const el = document.getElementById(id)
  if (!el) return
  const top = el.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT
  window.scrollTo({ top, behavior: 'smooth' })
}

export default function Nav() {
  const prefersReducedMotion = useReducedMotion()
  const [activeNav, setActiveNav] = useState('inicio')
  const [menuOpen, setMenuOpen] = useState(false)

  const panelTransition = prefersReducedMotion
    ? { duration: 0 }
    : { duration: 0.3, ease: [0.16, 1, 0.3, 1] as const }

  const iconTransition = prefersReducedMotion
    ? { duration: 0 }
    : { duration: 0.2, ease: [0.16, 1, 0.3, 1] as const }

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

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)')

    const closeOnDesktop = () => {
      if (mediaQuery.matches) setMenuOpen(false)
    }

    closeOnDesktop()
    mediaQuery.addEventListener('change', closeOnDesktop)
    return () => mediaQuery.removeEventListener('change', closeOnDesktop)
  }, [])

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
            <AnimatePresence mode="wait" initial={false}>
              {menuOpen ? (
                <motion.span
                  key="close"
                  className={styles.navMenuIcon}
                  initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
                  transition={iconTransition}
                >
                  <X size={22} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  className={styles.navMenuIcon}
                  initial={{ opacity: 0, rotate: 90, scale: 0.8 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: -90, scale: 0.8 }}
                  transition={iconTransition}
                >
                  <Menu size={22} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.button
              type="button"
              key="nav-mobile-backdrop"
              className={styles.navMobileBackdrop}
              aria-label="Cerrar menú"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={panelTransition}
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              key="nav-mobile-panel"
              className={styles.navMobilePanel}
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={panelTransition}
            >
              <motion.div
                className={styles.navMobileLinks}
                variants={linkContainerVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                {NAV_ITEMS.map((item) => (
                  <motion.a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`${styles.navMobileLink} ${
                      activeNav === item.id ? styles.navMobileLinkActive : ''
                    }`}
                    variants={linkVariants}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(item.id)
                    }}
                  >
                    {item.label}
                  </motion.a>
                ))}
                <motion.span
                  className={`${styles.navMobileResume} ${styles.navResumeSoon}`}
                  aria-label="Currículum — Próximamente"
                  variants={linkVariants}
                >
                  Currículum
                </motion.span>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  )
}
