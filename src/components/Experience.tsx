import { EDUCATION } from '@/lib/portfolio'
import { Terminal } from 'lucide-react'
import styles from '@/styles/portfolio.module.css'
import Section from './Section'

const EXPERIENCE_BULLETS = [
  'Asistencia, reparación y mantenimiento técnico de equipos de cómputo.',
  'Creación de oficios, papeleo y control de órdenes de trabajo.',
  'Colaboración con el sistema administrativo.',
]

export default function Experience() {
  return (
    <Section id="experiencia">
      <div className="container">
        <p className={styles.sectionLabel}>// 02</p>
        <h2 className={styles.sectionTitle}>Formación & Experiencia</h2>

        <div className={styles.experienceGrid}>
          <div className={styles.experienceCol}>
            <h3 className={styles.timelineHeader}>Educación</h3>
            <div className={styles.timelineLine}>
              {EDUCATION.map((entry, index) => (
                <div key={entry.period} className={styles.timelineLineItem}>
                  <span
                    className={
                      index === 0 ? styles.timelineDotActive : styles.timelineDot
                    }
                    aria-hidden="true"
                  />
                  <p
                    className={
                      index === 0
                        ? styles.timelineLinePeriodActive
                        : styles.timelineLinePeriod
                    }
                  >
                    {entry.period}
                  </p>
                  <p className={styles.timelineTitle}>{entry.title}</p>
                  <p className={styles.timelineOrg}>{entry.org}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.experienceCol}>
            <h3 className={styles.timelineHeader}>Experiencia</h3>
            <div className={styles.glassPanel}>
              <div className={styles.experienceJobHeader}>
                <p className={styles.timelineLinePeriodActive}>
                  Jul. 2023 – Actualidad
                </p>
                <p className={styles.timelineTitle}>
                  Operador técnico y asistente informático
                </p>
                <p className={styles.timelineOrg}>
                  Alcaldía de Cabimas, Zulia
                </p>
              </div>
              <ul className={styles.experienceList}>
                {EXPERIENCE_BULLETS.map((item) => (
                  <li key={item} className={styles.experienceListItem}>
                    <Terminal
                      className={styles.experienceListIcon}
                      size={18}
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
