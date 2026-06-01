import { SKILLS } from '@/lib/portfolio'
import styles from '@/styles/portfolio.module.css'
import Section from './Section'
import SkillBar from './SkillBar'

export default function Skills() {
  return (
    <Section id="skills">
      <div className="container">
        <p className={styles.sectionLabel}>// 04</p>
        <h2 className={styles.sectionTitle}>Competencias</h2>
        <div className={styles.skillsGrid}>
          {SKILLS.map((s, i) => (
            <SkillBar key={s.name} {...s} index={i} />
          ))}
        </div>
      </div>
    </Section>
  )
}
