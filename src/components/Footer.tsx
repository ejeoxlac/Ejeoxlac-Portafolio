import styles from '@/styles/portfolio.module.css'

const FOOTER_SOCIAL = [
  { href: 'https://github.com/ejeoxlac', label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/ejeoxlac/', label: 'LinkedIn' },
  { href: 'https://x.com/ejeoxlac', label: 'X' },
] as const

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <span className={styles.footerBrand}>Ejeoxlac</span>
        <p className={styles.footerText}>
          © {new Date().getFullYear()} - Bill Anthony
          Niño Riera — Ing. Informática
        </p>
        <div className={styles.footerLinks}>
          {FOOTER_SOCIAL.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className={styles.footerLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
