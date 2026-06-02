'use client'

import { Badge } from '@/components/ui/badge'
import { TechnologyMarquee } from '@/components/ui/technology-marquee'
import { buttonVariants } from '@/components/ui/button'
import { TECHNOLOGIES } from '@/lib/portfolio'
import { cn } from '@/lib/utils'
import styles from '@/styles/portfolio.module.css'
import TypeWriter from './TypeWriter'

export default function Hero() {
  return (
    <section id="inicio" className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={`container ${styles.heroGrid}`}>
          <Badge
            variant="outline"
            className={cn(
              styles.heroBadge,
              'animate-fade-up delay-1 rounded-sm font-mono uppercase tracking-widest',
            )}
          >
            <span className={styles.statusDot} />
            Disponible para trabajar
          </Badge>
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
        </div>

        <div className={`container ${styles.heroTechMarquee} animate-fade-up delay-7`}>
          <TechnologyMarquee
            iconsRow1={TECHNOLOGIES.row1}
            iconsRow2={TECHNOLOGIES.row2}
          />
        </div>

        <div className={`container ${styles.heroActions} animate-fade-up delay-8`}>
          <a
            href="#proyectos"
            className={cn(
              buttonVariants(),
              styles.btnPrimary,
              'h-auto rounded-none border-0 px-7 py-3 text-xs uppercase tracking-widest no-underline',
            )}
            onClick={(e) => {
              e.preventDefault()
              const el = document.getElementById('proyectos')
              if (!el) return
              const top = el.getBoundingClientRect().top + window.scrollY - 56
              window.scrollTo({ top, behavior: 'smooth' })
            }}
          >
            Ver proyectos
          </a>
        </div>

        <div className={`${styles.scrollHint} animate-fade-up delay-9`}>
          <span>scroll</span>
          <div className={styles.scrollBar} />
        </div>
      </div>

      <div className={styles.heroDecor}>
        <div className={styles.heroCircle} />
        <div className={styles.heroLine} />
      </div>
    </section>
  )
}
