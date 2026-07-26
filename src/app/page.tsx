'use client'

import About from '@/components/About'
import BackgroundMotion from '@/components/BackgroundMotion'
import Contact from '@/components/Contact'
import Contributions from '@/components/Contributions'
import Experience from '@/components/Experience'
import Hero from '@/components/Hero'
import Nav from '@/components/Nav'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import styles from '@/styles/portfolio.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <BackgroundMotion />
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contributions />
      <Skills />
      <Contact />

      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.footerInfo}>
            <span className={styles.footerText}>
              Bill Anthony Niño Riera © {new Date().getFullYear()}
            </span>
            <span className={styles.footerMono}>ing. informática</span>
          </div>
          <span className={styles.footerMono}>v1.0.0</span>
        </div>
      </footer>
    </main>
  )
}
