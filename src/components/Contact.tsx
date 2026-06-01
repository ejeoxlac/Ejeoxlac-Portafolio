import styles from '@/styles/portfolio.module.css'
import Section from './Section'

export default function Contact() {
  return (
    <Section id="contacto">
      <div className="container">
        <p className={styles.sectionLabel}>// 05</p>
        <h2 className={styles.sectionTitle}>Contacto</h2>
        <div className={styles.contactGrid}>
          <p className={styles.contactText}>
            ¿Tienes un proyecto o propuesta? Me encantaría escucharte.
          </p>
          <div className={styles.contactLinks}>
            <a href="xxx" className={styles.contactItem}>
              <span className={styles.contactIcon}>@</span>
              <span>xxx</span>
            </a>
            <a href="xxx" className={styles.contactItem}>
              <span className={styles.contactIcon}>#</span>
              <span>xxx</span>
            </a>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>◎</span>
              <span>xxx</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
