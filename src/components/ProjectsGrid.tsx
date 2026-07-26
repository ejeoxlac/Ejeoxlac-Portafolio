'use client'

import type { Project } from '@/lib/portfolio'
import {
  ArrowRight,
  Boxes,
  ChevronDown,
  FileText,
  Lock,
  Map,
  Monitor,
  QrCode,
  Truck,
  Users,
  type LucideIcon,
} from 'lucide-react'
import { useState } from 'react'
import styles from '@/styles/portfolio.module.css'

const PROJECT_ICONS: Record<string, LucideIcon> = {
  'GRAU-UPTZ': Boxes,
  SIGUM: Truck,
  SCCSC: Users,
  PIRC: FileText,
  MIC: Map,
  SIEI: Monitor,
}

const FEATURED_PROJECT_ID = '02'

export default function ProjectsGrid({ projects }: { projects: Project[] }) {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  return (
    <div className={styles.projectsGrid}>
      {projects.map((project) => {
        const Icon = PROJECT_ICONS[project.name] ?? Boxes
        const isFeatured = project.id === FEATURED_PROJECT_ID
        const isPublic = project.repoStatus === 'public' && project.repoUrl
        const isPrivate = project.repoStatus === 'private'
        const isExpanded = expandedId === project.id

        return (
          <article
            key={project.id}
            className={`${styles.projectCardV4} ${
              isFeatured ? styles.projectCardFeatured : ''
            }`}
          >
            <div
              className={
                isFeatured ? styles.projectCardSplit : styles.projectCardStack
              }
            >
              <div className={styles.projectCardBody}>
                <div className={styles.projectCardTop}>
                  <Icon
                    className={styles.projectCardIcon}
                    size={40}
                    strokeWidth={1.25}
                    aria-hidden="true"
                  />
                  <div className={styles.projectCardMeta}>
                    <span className={styles.projectCardTag}>{project.tag}</span>
                    <span className={styles.projectCardYear}>{project.year}</span>
                  </div>
                </div>

                <h3 className={styles.projectCardName}>{project.name}</h3>
                <p className={styles.projectCardDesc}>
                  {isExpanded ? project.desc : project.desc.slice(0, 140)}
                  {!isExpanded && project.desc.length > 140 ? '…' : ''}
                </p>

                {isExpanded && (
                  <div className={styles.projectCardDetails}>
                    <p className={styles.projectCardFull}>{project.full}</p>
                    <p className={styles.projectCardRole}>
                      <span>Rol:</span> {project.role}
                    </p>
                  </div>
                )}

                <div className={styles.projectCardTech}>
                  {(isExpanded ? project.tech : project.tech.slice(0, 4)).map(
                    (tech) => (
                      <span key={tech} className={styles.projectTechTag}>
                        {tech}
                      </span>
                    ),
                  )}
                  {!isExpanded && project.tech.length > 4 && (
                    <span className={styles.projectTechMore}>
                      +{project.tech.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {isFeatured && (
                <div className={styles.projectCardPreview}>
                  <div className={styles.projectCardPreviewInner}>
                    <QrCode
                      className={styles.projectCardPreviewIcon}
                      size={72}
                      strokeWidth={1}
                      aria-hidden="true"
                    />
                  </div>
                </div>
              )}
            </div>

            <div className={styles.projectCardFooter}>
              {isPublic && (
                <a
                  href={project.repoUrl}
                  className={styles.projectCardLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver repositorio
                  <ArrowRight size={16} aria-hidden="true" />
                </a>
              )}

              {isPrivate && (
                <button
                  type="button"
                  className={styles.projectCardToggle}
                  onClick={() =>
                    setExpandedId((current) =>
                      current === project.id ? null : project.id,
                    )
                  }
                  aria-expanded={isExpanded}
                >
                  <Lock size={14} aria-hidden="true" />
                  {isExpanded ? 'Ocultar detalles' : 'Ver detalles'}
                  <ChevronDown
                    size={16}
                    className={
                      isExpanded ? styles.projectCardChevronOpen : undefined
                    }
                    aria-hidden="true"
                  />
                </button>
              )}
            </div>
          </article>
        )
      })}
    </div>
  )
}
