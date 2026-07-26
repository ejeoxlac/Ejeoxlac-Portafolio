import { PROJECTS } from '@/lib/portfolio'
import styles from '@/styles/portfolio.module.css'
import ProjectsGrid from './ProjectsGrid'
import Section from './Section'

export default function Projects() {
  return (
    <Section id="proyectos">
      <div className="container">
        <p className={styles.sectionLabel}>// 03</p>
        <h2 className={styles.sectionTitle}>Proyectos</h2>
        <ProjectsGrid projects={PROJECTS} />
      </div>
    </Section>
  )
}
