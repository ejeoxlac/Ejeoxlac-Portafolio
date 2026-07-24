import styles from '@/styles/portfolio.module.css'
import Section from './Section'

const iconProps = {
  className: styles.contactIconSvg,
  viewBox: '0 0 24 24',
  fill: 'currentColor',
  'aria-hidden': true as const,
}

function LinkedInIcon() {
  return (
    <svg {...iconProps}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg {...iconProps}>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg {...iconProps}>
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg {...iconProps}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  )
}

function BeaconsIcon() {
  return (
    <svg {...iconProps}>
      <path d="M12 2a7 7 0 0 1 7 7c0 2.5-1.3 4.7-3.3 5.9L17 22h-2.2l-1.3-4.2h-3L9.2 22H7l1.3-7.1A6.97 6.97 0 0 1 5 9a7 7 0 0 1 7-7zm0 2a5 5 0 1 0 .001 10.001A5 5 0 0 0 12 4z" />
    </svg>
  )
}

const CONTACT_LINKS = [
  {
    href: 'https://www.linkedin.com/in/ejeoxlac/',
    label: 'LinkedIn',
    ariaLabel: 'LinkedIn de Bill Anthony',
    Icon: LinkedInIcon,
  },
  {
    href: 'https://github.com/ejeoxlac',
    label: 'GitHub',
    ariaLabel: 'GitHub de Bill Anthony',
    Icon: GitHubIcon,
  },
  {
    href: 'https://x.com/ejeoxlac',
    label: 'X',
    ariaLabel: 'X de Bill Anthony',
    Icon: XIcon,
  },
  {
    href: 'https://www.instagram.com/ejeoxlac/',
    label: 'Instagram',
    ariaLabel: 'Instagram de Bill Anthony',
    Icon: InstagramIcon,
  },
  {
    href: 'https://beacons.ai/ejeoxlac',
    label: 'Beacons',
    ariaLabel: 'Beacons de Bill Anthony — todos mis links',
    Icon: BeaconsIcon,
  },
] as const

export default function Contact() {
  return (
    <Section id="contacto">
      <div className="container">
        <p className={styles.sectionLabel}>// 06</p>
        <h2 className={styles.sectionTitle}>Contacto</h2>
        <div className={styles.contactGrid}>
          <p className={styles.contactText}>
            ¿Tienes un proyecto o propuesta? Me encantaría escucharte.
          </p>
          <div className={styles.contactLinks}>
            {CONTACT_LINKS.map(({ href, label, ariaLabel, Icon }) => (
              <a
                key={href}
                href={href}
                className={styles.contactItem}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={ariaLabel}
              >
                <span className={styles.contactIcon}>
                  <Icon />
                </span>
                <span>{label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
