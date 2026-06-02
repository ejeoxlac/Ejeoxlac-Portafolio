import { Badge } from '@/components/ui/badge'
import { APTITUDES, TECH_STACK_GROUPS } from '@/lib/portfolio'
import styles from '@/styles/portfolio.module.css'
import AboutPhoto from './AboutPhoto'
import Section from './Section'

export default function About() {
  return (
    <Section id="sobre-mi">
      <div className="container">
        <p className={styles.sectionLabel}>// 01</p>
        <h2 className={styles.sectionTitle}>Sobre mí</h2>
        <div className={styles.aboutGrid}>
          <div className={styles.aboutMain}>
            <AboutPhoto />
            <div className={styles.aboutText}>
            <p>
              Soy una persona proactiva, excelente compañero de equipo y me gusta el orden.
              Tengo experiencia en el testeo de aplicaciones y tecnologías como Python, C#, SQL, Git y Docker.
            </p>
            <p>
              Disfruto mucho aprender cosas nuevas referentes a la tecnología y me gusta compartir
              mis experiencias y conocimientos. También me encanta el open-source, por lo que sé usar Linux.
            </p>
            </div>
          </div>
          <div className={styles.aboutSide}>
            <div className={styles.aptitudes}>
              <p className={styles.aptitudesLabel}>Aptitudes</p>
              {APTITUDES.map((a, i) => (
                <Badge
                  key={a}
                  variant="outline"
                  className={styles.aptitud}
                  style={{ animationDelay: `${i * 0.07}s` }}
                >
                  {a}
                </Badge>
              ))}
            </div>
            <div className={styles.techStack}>
              <p className={styles.aptitudesLabel}>Stack tecnológico</p>
              {TECH_STACK_GROUPS.map((group) => (
                <div key={group.title} className={styles.techStackGroup}>
                  <p className={styles.techStackGroupLabel}>{group.title}</p>
                  <div className={styles.techStackList}>
                    {group.items.map((tech, i) => (
                      <Badge
                        key={tech.name}
                        variant="outline"
                        className={styles.techTag}
                        style={{ animationDelay: `${i * 0.05}s` }}
                      >
                        {tech.name}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
