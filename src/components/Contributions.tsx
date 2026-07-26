import { CONTRIBUTIONS } from '@/lib/portfolio'
import { ArrowUpRight } from 'lucide-react'
import styles from '@/styles/portfolio.module.css'
import Section from './Section'

export default function Contributions() {
  return (
    <Section id="contribuciones">
      <div className="container">
        <p className={styles.sectionLabel}>// 04</p>
        <h2 className={styles.sectionTitle}>Contribuciones Open Source</h2>
        <p className={styles.contributionsIntro}>
          Colaboraciones en proyectos de terceros — distintas de los proyectos propios.
        </p>

        <div className={styles.contributionsList}>
          {CONTRIBUTIONS.map((item) => (
            <article key={item.repoUrl} className={styles.contributionCardV4}>
              <div className={styles.contributionCardHeader}>
                <a
                  href={item.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contributionCardTitle}
                >
                  {item.project}
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
                <span className={styles.contributionBadge}>Contribución</span>
              </div>
              <p className={styles.contributionAuthor}>{item.author}</p>
              <p className={styles.contributionDesc}>{item.description}</p>
              <div className={styles.contributionDetail}>
                <p className={styles.contributionDetailLabel}>Mi aporte</p>
                <p className={styles.contributionText}>{item.contribution}</p>
              </div>
              {item.tech && item.tech.length > 0 && (
                <div className={styles.contributionTech}>
                  {item.tech.map((tech) => (
                    <span key={tech} className={styles.projectTechTag}>
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </Section>
  )
}
