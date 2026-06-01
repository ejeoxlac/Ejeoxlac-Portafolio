'use client'

import { ProjectShowcase } from '@/components/project-showcase'
import { PROJECTS } from '@/lib/portfolio'
import styles from '@/styles/portfolio.module.css'
import Section from './Section'

const showcaseProjects = PROJECTS.map((project) => ({
  title: project.name,
  description: project.desc,
  year: project.year,
  image: project.image,
}))

export default function Projects() {
  return (
    <Section id="proyectos">
      <div className={`container ${styles.projectsContainer}`}>
        <p className={styles.sectionLabel}>// 03</p>
        <h2 className={styles.sectionTitle}>Proyectos</h2>

        <ProjectShowcase
          projects={showcaseProjects}
          label="Trabajos seleccionados"
          className={styles.projectShowcaseComponent}
        />
      </div>
    </Section>
  )
}
