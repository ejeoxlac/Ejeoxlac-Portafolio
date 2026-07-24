import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { CONTRIBUTIONS } from '@/lib/portfolio'
import styles from '@/styles/portfolio.module.css'
import { ArrowUpRight } from 'lucide-react'
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
            <Card
              key={item.repoUrl}
              size="sm"
              className={`ring-0 shadow-none ${styles.contributionCard}`}
            >
              <CardHeader className={styles.contributionHeader}>
                <div className={styles.contributionTitleRow}>
                  <CardTitle className={styles.contributionName}>
                    <a
                      href={item.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.contributionLink}
                    >
                      {item.project}
                      <ArrowUpRight className={styles.contributionLinkIcon} aria-hidden />
                    </a>
                  </CardTitle>
                  <Badge
                    variant="outline"
                    className="text-[10px] uppercase tracking-wide"
                  >
                    Contribución
                  </Badge>
                </div>
                <CardDescription className={styles.contributionAuthor}>
                  {item.author}
                </CardDescription>
              </CardHeader>

              <CardContent className={styles.contributionBody}>
                <p className={styles.contributionDesc}>{item.description}</p>
                <div className={styles.contributionDetail}>
                  <p className={styles.contributionDetailLabel}>Mi aporte</p>
                  <p className={styles.contributionText}>{item.contribution}</p>
                </div>
                {item.tech && item.tech.length > 0 && (
                  <div className={styles.contributionTech}>
                    {item.tech.map((t) => (
                      <Badge key={t} variant="secondary" className="text-[10px]">
                        {t}
                      </Badge>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  )
}
