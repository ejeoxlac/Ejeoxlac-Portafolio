import styles from '@/styles/background-motion.module.css'

export default function BackgroundMotion() {
  return (
    <div className={styles.wrapper} aria-hidden="true">
      <div className={styles.grid} />
      <div className={`${styles.orb} ${styles.orbAccent} ${styles.orb1}`} />
      <div className={`${styles.orb} ${styles.orbAccent} ${styles.orb2}`} />
      <div className={`${styles.orb} ${styles.orbMuted} ${styles.orb3}`} />
      <div className={styles.vignette} />
    </div>
  )
}
