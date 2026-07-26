'use client'

import { TechnologyMarquee } from '@/components/ui/technology-marquee'
import { TECHNOLOGIES } from '@/lib/portfolio'
import styles from '@/styles/portfolio.module.css'
import TypeWriter from './TypeWriter'

export default function Hero() {
  return (
    <section id="inicio" className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={`container ${styles.heroInner}`}>
          <div className={`${styles.heroBadge} animate-fade-up delay-1`}>
            <span className={styles.statusDot} />
            Disponible para trabajar
          </div>

          <h1 className={`${styles.heroName} animate-fade-up delay-2`}>
            <TypeWriter text="Bill Anthony" delay={300} />
            <br />
            <TypeWriter text="Niño Riera" delay={800} />
          </h1>

          <p className={`${styles.heroTitle} animate-fade-up delay-5`}>
            Ingeniero en Informática
          </p>

          <p className={`${styles.heroSub} animate-fade-up delay-6`}>
            Cabimas, Zulia — Venezuela
          </p>

          <div className={`${styles.heroTechMarquee} animate-fade-up delay-7`}>
            <TechnologyMarquee
              iconsRow1={TECHNOLOGIES.row1}
              iconsRow2={TECHNOLOGIES.row2}
            />
          </div>

          <div className={`${styles.heroCta} animate-fade-up delay-8`}>
            <div className={styles.scrollGroup}>
              <span className={styles.scrollLabel}>SCROLL</span>
              <div className={styles.scrollBar}>
                <div className={styles.scrollBarInner} />
              </div>
            </div>

            <a
              href="#proyectos"
              className={styles.btnHero}
              onClick={(e) => {
                e.preventDefault()
                const el = document.getElementById('proyectos')
                if (!el) return
                const top =
                  el.getBoundingClientRect().top + window.scrollY - 80
                window.scrollTo({ top, behavior: 'smooth' })
              }}
            >
              VER PROYECTOS
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
