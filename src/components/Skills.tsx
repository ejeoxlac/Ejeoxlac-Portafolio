import { SKILLS, TECH_STACK_GROUPS } from '@/lib/portfolio'
import styles from '@/styles/portfolio.module.css'
import Section from './Section'
import SkillBar from './SkillBar'

export default function Skills() {
  return (
    <Section id="skills">
      <div className="container">
        <p className={styles.sectionLabel}>// 05</p>
        <h2 className={styles.sectionTitle}>Competencias</h2>

        <div className={styles.skillsGrid}>
          {SKILLS.map((skill, index) => (
            <SkillBar key={skill.name} {...skill} index={index} />
          ))}
        </div>

        <div className={styles.techCategories}>
          {TECH_STACK_GROUPS.map((group) => (
            <div key={group.title} className={styles.techCategory}>
              <p className={styles.techCategoryLabel}>{group.title}</p>
              <div className={styles.techCategoryTags}>
                {group.items.map((tech) => (
                  <span key={tech.name} className={styles.techCategoryTag}>
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
