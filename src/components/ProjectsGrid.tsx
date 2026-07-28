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
import { useEffect, useRef, useState, type MouseEvent } from 'react'
import { createPortal } from 'react-dom'
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
const PREVIEW_WIDTH = 280
const PREVIEW_HEIGHT = 180
const PREVIEW_GAP = 16
const PREVIEW_LERP = 0.13

function getCursorPreviewPosition(clientX: number, clientY: number) {
  const vw = window.innerWidth
  const vh = window.innerHeight

  let x = clientX + PREVIEW_GAP
  let y = clientY + PREVIEW_GAP

  if (x + PREVIEW_WIDTH > vw - PREVIEW_GAP) {
    x = clientX - PREVIEW_WIDTH - PREVIEW_GAP
  }

  if (y + PREVIEW_HEIGHT > vh - PREVIEW_GAP) {
    y = clientY - PREVIEW_HEIGHT - PREVIEW_GAP
  }

  x = Math.max(PREVIEW_GAP, Math.min(x, vw - PREVIEW_WIDTH - PREVIEW_GAP))
  y = Math.max(PREVIEW_GAP, Math.min(y, vh - PREVIEW_HEIGHT - PREVIEW_GAP))

  return { x, y }
}

function ProjectCard({
  project,
  isExpanded,
  onToggleExpand,
}: {
  project: Project
  isExpanded: boolean
  onToggleExpand: () => void
}) {
  const Icon = PROJECT_ICONS[project.name] ?? Boxes
  const isFeatured = project.id === FEATURED_PROJECT_ID
  const isPublic = project.repoStatus === 'public' && project.repoUrl
  const isPrivate = project.repoStatus === 'private'

  const [smoothPosition, setSmoothPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [canHover, setCanHover] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const targetPositionRef = useRef({ x: 0, y: 0 })
  const animationRef = useRef<number | null>(null)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)')
    const updateCanHover = () => setCanHover(mediaQuery.matches)

    updateCanHover()
    mediaQuery.addEventListener('change', updateCanHover)
    return () => mediaQuery.removeEventListener('change', updateCanHover)
  }, [])

  useEffect(() => {
    if (!canHover || !isHovering || isExpanded) return

    const lerp = (start: number, end: number, factor: number) =>
      start + (end - start) * factor

    const animate = () => {
      setSmoothPosition((prev) => ({
        x: lerp(prev.x, targetPositionRef.current.x, PREVIEW_LERP),
        y: lerp(prev.y, targetPositionRef.current.y, PREVIEW_LERP),
      }))
      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [canHover, isHovering, isExpanded])

  const updatePreviewPosition = (clientX: number, clientY: number) => {
    targetPositionRef.current = getCursorPreviewPosition(clientX, clientY)
  }

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    if (!canHover || isExpanded) return
    updatePreviewPosition(e.clientX, e.clientY)
  }

  const handleMouseEnter = (e: MouseEvent<HTMLElement>) => {
    if (!canHover || isExpanded) return
    const position = getCursorPreviewPosition(e.clientX, e.clientY)
    targetPositionRef.current = position
    setSmoothPosition(position)
    setIsHovering(true)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
  }

  const showCursorPreview = isMounted && canHover && isHovering && !isExpanded

  const cursorPreview = showCursorPreview ? (
    <div
      className={styles.projectCursorPreview}
      style={{
        left: smoothPosition.x,
        top: smoothPosition.y,
      }}
      aria-hidden="true"
    >
      <img src={project.image} alt="" />
      <div className={styles.projectCursorPreviewOverlay} />
    </div>
  ) : null

  return (
    <article
      className={`${styles.projectCardV4} ${
        isFeatured ? styles.projectCardFeatured : ''
      } ${isExpanded ? styles.projectCardExpanded : ''}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {cursorPreview && createPortal(cursorPreview, document.body)}

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
              <div className={styles.projectCardDetailImage}>
                <img
                  src={project.image}
                  alt={`Vista previa de ${project.name}`}
                />
                <div className={styles.projectCardDetailImageOverlay} />
              </div>
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

        {isFeatured && !isExpanded && (
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
            onClick={onToggleExpand}
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
}

export default function ProjectsGrid({ projects }: { projects: Project[] }) {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  return (
    <div className={styles.projectsGrid}>
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          isExpanded={expandedId === project.id}
          onToggleExpand={() =>
            setExpandedId((current) =>
              current === project.id ? null : project.id,
            )
          }
        />
      ))}
    </div>
  )
}
