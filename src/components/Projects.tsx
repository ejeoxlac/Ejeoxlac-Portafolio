'use client'

import { ProjectShowcase } from '@/components/project-showcase'
import { PROJECTS } from '@/lib/portfolio'
import styles from '@/styles/portfolio.module.css'
import Section from './Section'

const showcaseProjects = PROJECTS.map((project) => ({
  title: project.name,
  full: project.full,
  description: project.desc,
  role: project.role,
  tech: project.tech,
  tag: project.tag,
  year: project.year,
  image: project.image,
  repoStatus: project.repoStatus,
  repoUrl: project.repoUrl,
  link: project.repoStatus === 'public' ? project.repoUrl : undefined,
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
