import { EDUCATION } from '@/lib/portfolio'
import styles from '@/styles/portfolio.module.css'
import Section from './Section'

export default function Experience() {
  return (
    <Section id="experiencia">
      <div className="container">
        <p className={styles.sectionLabel}>// 02</p>
        <h2 className={styles.sectionTitle}>Formación & Experiencia</h2>
        <div className={styles.timeline}>
          <div className={styles.timelineCol}>
            <p className={styles.timelineHeader}>Educación</p>
            {EDUCATION.map((e, i) => (
              <div key={i} className={styles.timelineItem}>
                <span className={styles.timelinePeriod}>{e.period}</span>
                <span className={styles.timelineTitle}>{e.title}</span>
                <span className={styles.timelineOrg}>{e.org}</span>
              </div>
            ))}
          </div>

          <div className={styles.timelineCol}>
            <p className={styles.timelineHeader}>Experiencia</p>
            <div className={styles.timelineItem}>
              <span className={styles.timelinePeriod}>Jul. 2023 – Actualidad</span>
              <span className={styles.timelineTitle}>
                Operador técnico y asistente informático
              </span>
              <span className={styles.timelineOrg}>Alcaldía de Cabimas, Zulia</span>
              <ul className={styles.timelineDesc}>
                <li>Asistencia, reparación y mantenimiento técnico de equipos de cómputo.</li>
                <li>Creación de oficios, papeleo y control de órdenes de trabajo.</li>
                <li>Colaboración con el sistema administrativo.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
