import { ArrowRight, ExternalLink } from 'lucide-react'
import {
  BeaconsIcon,
  GithubIcon,
  GlobeIcon,
  LinkedinIcon,
} from '@/components/icons/brand-icons'
import { SITE_URL } from '@/lib/portfolio'
import styles from '@/styles/portfolio.module.css'
import Section from './Section'

const CONTACT_PRIMARY = {
  href: 'https://beacons.ai/ejeoxlac',
  label: 'Beacons',
  description: 'Todos mis links y contacto',
}

const CONTACT_LINKS = [
  {
    href: SITE_URL,
    label: 'Web',
    ariaLabel: 'Sitio web principal ejeoxlac.com',
    Icon: GlobeIcon,
  },
  {
    href: 'https://www.linkedin.com/in/ejeoxlac/',
    label: 'LinkedIn',
    ariaLabel: 'LinkedIn de Bill Anthony',
    Icon: LinkedinIcon,
  },
  {
    href: 'https://github.com/ejeoxlac',
    label: 'GitHub',
    ariaLabel: 'GitHub de Bill Anthony',
    Icon: GithubIcon,
  },
] as const

export default function Contact() {
  return (
    <Section id="contacto">
      <div className="container">
        <p className={styles.sectionLabel}>// 06</p>
        <h2 className={styles.sectionTitle}>Contacto</h2>

        <div className={styles.contactGrid}>
          <div className={styles.contactIntro}>
            <p className={styles.contactHeadline}>
              ¿Tienes un proyecto o propuesta?
            </p>
            <p className={styles.contactSubtext}>
              Me encantaría escucharte y ver cómo podemos colaborar para llevar
              tus ideas al siguiente nivel técnico.
            </p>
          </div>

          <div className={styles.contactCards}>
            {CONTACT_LINKS.map(({ href, label, ariaLabel, Icon }) => (
              <a
                key={href}
                href={href}
                className={styles.contactCard}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={ariaLabel}
              >
                <div className={styles.contactCardLeft}>
                  <Icon className={styles.contactCardIcon} size={22} />
                  <span className={styles.contactCardLabel}>{label}</span>
                </div>
                <ExternalLink
                  className={styles.contactCardExternal}
                  size={20}
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </a>
            ))}

            <a
              href={CONTACT_PRIMARY.href}
              className={styles.contactCardPrimary}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Beacons de Bill Anthony — todos mis links"
            >
              <div className={styles.contactCardLeft}>
                <BeaconsIcon
                  className={styles.contactCardIconPrimary}
                  size={22}
                />
                <span className={styles.contactCardLabelPrimary}>
                  {CONTACT_PRIMARY.label}
                </span>
              </div>
              <ArrowRight
                className={styles.contactCardArrowPrimary}
                size={20}
                strokeWidth={1.5}
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </div>
    </Section>
  )
}
