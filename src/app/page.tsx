'use client'

import About from '@/components/About'
import Contact from '@/components/Contact'
import Contributions from '@/components/Contributions'
import Experience from '@/components/Experience'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Footer from '@/components/Footer'
import styles from '@/styles/portfolio.module.css'

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contributions />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
