"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { ArrowUpRight, Lock } from "lucide-react"
import { Badge } from "@/components/ui/badge"

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M12 2C6.477 2 2 6.586 2 12.253c0 4.53 2.865 8.37 6.839 9.723.5.094.682-.222.682-.482 0-.237-.009-.866-.014-1.7-2.782.615-3.369-1.37-3.369-1.37-.454-1.18-1.11-1.495-1.11-1.495-.908-.635.069-.622.069-.622 1.003.072 1.53 1.05 1.53 1.05.892 1.56 2.341 1.11 2.91.849.091-.66.35-1.11.636-1.365-2.22-.258-4.555-1.136-4.555-5.056 0-1.117.39-2.03 1.03-2.746-.103-.259-.447-1.3.098-2.71 0 0 .84-.274 2.75 1.048A9.35 9.35 0 0 1 12 6.844a9.35 9.35 0 0 1 2.504.344c1.909-1.322 2.747-1.048 2.747-1.048.547 1.41.203 2.451.1 2.71.64.717 1.028 1.629 1.028 2.746 0 3.93-2.339 4.795-4.566 5.048.359.316.679.94.679 1.896 0 1.368-.012 2.471-.012 2.807 0 .262.18.58.688.481C19.138 20.62 22 16.78 22 12.253 22 6.586 17.523 2 12 2Z" />
    </svg>
  )
}

export type ProjectShowcaseItem = {
  title: string
  full?: string
  description: string
  role?: string
  tech?: string[]
  tag?: string
  year: string
  image: string
  link?: string
  repoStatus?: "public" | "private"
  repoUrl?: string
}

type ProjectShowcaseProps = {
  projects: ProjectShowcaseItem[]
  label?: string
  className?: string
}

export function ProjectShowcase({
  projects,
  label = "Selected Work",
  className = "",
}: ProjectShowcaseProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [smoothPosition, setSmoothPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [canHover, setCanHover] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number | null>(null)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)")
    const updateCanHover = () => setCanHover(mediaQuery.matches)

    updateCanHover()
    mediaQuery.addEventListener("change", updateCanHover)
    return () => mediaQuery.removeEventListener("change", updateCanHover)
  }, [])

  useEffect(() => {
    if (!canHover) return

    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor
    }

    const animate = () => {
      setSmoothPosition((prev) => ({
        x: lerp(prev.x, mousePosition.x, 0.15),
        y: lerp(prev.y, mousePosition.y, 0.15),
      }))
      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [mousePosition, canHover])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }
  }

  const handleMouseEnter = (index: number) => {
    if (!canHover || expandedIndex !== null) return
    setHoveredIndex(index)
    setIsVisible(true)
  }

  const handleMouseLeave = () => {
    if (!canHover) return
    setHoveredIndex(null)
    setIsVisible(false)
  }

  const toggleExpanded = (index: number) => {
    setExpandedIndex((current) => {
      const next = current === index ? null : index
      if (next !== null) {
        setHoveredIndex(null)
        setIsVisible(false)
      }
      return next
    })
  }

  if (!projects.length) return null

  return (
    <section
      ref={containerRef}
      onMouseMove={canHover ? handleMouseMove : undefined}
      className={`relative w-full max-w-3xl ${className}`}
    >
      <h2 className="text-muted-foreground text-sm font-medium tracking-wide uppercase mb-8">
        {label}
      </h2>

      {canHover && (
        <div
          className="pointer-events-none fixed z-50 overflow-hidden rounded-xl shadow-2xl"
          style={{
            left: containerRef.current?.getBoundingClientRect().left ?? 0,
            top: containerRef.current?.getBoundingClientRect().top ?? 0,
            transform: `translate3d(${smoothPosition.x + 20}px, ${smoothPosition.y - 100}px, 0)`,
            opacity: isVisible && expandedIndex === null ? 1 : 0,
            scale: isVisible && expandedIndex === null ? 1 : 0.8,
            transition:
              "opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1), scale 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          <div className="relative w-[280px] h-[180px] bg-secondary rounded-xl overflow-hidden">
            {projects.map((project, index) => (
              <img
                key={`${project.title}-${index}`}
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-out"
                style={{
                  opacity: hoveredIndex === index ? 1 : 0,
                  scale: hoveredIndex === index ? 1 : 1.1,
                  filter: hoveredIndex === index ? "none" : "blur(10px)",
                }}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
          </div>
        </div>
      )}

      <div className="space-y-0">
        {projects.map((project, index) => {
          const isExpanded = expandedIndex === index
          const isPrivate = project.repoStatus === "private"
          const isPublic = project.repoStatus === "public" && Boolean(project.repoUrl)

          const rowContent = (
            <div className="relative py-5 border-t border-border transition-all duration-300 ease-out">
              <div
                className={`
                  absolute inset-0 -mx-4 px-4 bg-secondary/50 rounded-lg
                  transition-all duration-300 ease-out
                  ${hoveredIndex === index ? "opacity-100 scale-100" : "opacity-0 scale-95"}
                `}
              />

              <div className="relative flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="inline-flex flex-wrap items-center gap-2">
                    <h3 className="text-foreground font-medium text-lg tracking-tight">
                      <span className="relative">
                        {project.title}
                        <span
                          className={`
                            absolute left-0 -bottom-0.5 h-px bg-foreground
                            transition-all duration-300 ease-out
                            ${hoveredIndex === index ? "w-full" : "w-0"}
                          `}
                        />
                      </span>
                    </h3>

                    {isPublic && (
                      <ArrowUpRight
                        className={`
                          w-4 h-4 text-muted-foreground
                          transition-all duration-300 ease-out
                          ${
                            hoveredIndex === index
                              ? "opacity-100 translate-x-0 translate-y-0"
                              : "opacity-0 -translate-x-2 translate-y-2"
                          }
                        `}
                      />
                    )}

                    {isPrivate && (
                      <Badge variant="outline" className="gap-1 text-[10px] uppercase tracking-wide">
                        <Lock className="size-3!" />
                        Código privado
                      </Badge>
                    )}

                    {isPublic && (
                      <span
                        className="inline-flex items-center text-muted-foreground"
                        aria-hidden="true"
                      >
                        <GitHubIcon className="size-3.5" />
                      </span>
                    )}
                  </div>

                  <p
                    className={`
                      text-muted-foreground text-sm mt-1 leading-relaxed
                      transition-all duration-300 ease-out
                      ${hoveredIndex === index ? "text-foreground/70" : "text-muted-foreground"}
                    `}
                  >
                    {project.description}
                  </p>

                  {isPrivate && (
                    <button
                      type="button"
                      className="mt-2 text-xs font-medium text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
                      onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        toggleExpanded(index)
                      }}
                    >
                      {isExpanded ? "Ocultar detalles" : "Ver detalles"}
                    </button>
                  )}

                  {isExpanded && (
                    <div className="mt-3 space-y-2 text-sm">
                      {project.full && (
                        <p className="text-foreground/80">
                          <span className="text-muted-foreground">Proyecto: </span>
                          {project.full}
                        </p>
                      )}
                      {project.role && (
                        <p className="text-foreground/80">
                          <span className="text-muted-foreground">Rol: </span>
                          {project.role}
                        </p>
                      )}
                      {project.tag && (
                        <p className="text-foreground/80">
                          <span className="text-muted-foreground">Estado: </span>
                          {project.tag}
                        </p>
                      )}
                      {project.tech && project.tech.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {project.tech.map((item) => (
                            <Badge key={item} variant="secondary" className="text-[10px]">
                              {item}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>

                <span
                  className={`
                    text-xs font-mono text-muted-foreground tabular-nums
                    transition-all duration-300 ease-out
                    ${hoveredIndex === index ? "text-foreground/60" : ""}
                  `}
                >
                  {project.year}
                </span>
              </div>
            </div>
          )

          if (isPublic && project.repoUrl) {
            return (
              <a
                key={`${project.title}-${index}`}
                href={project.repoUrl}
                className="group block"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                target="_blank"
                rel="noopener noreferrer"
              >
                {rowContent}
              </a>
            )
          }

          return (
            <div
              key={`${project.title}-${index}`}
              className="group block cursor-default"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              {rowContent}
            </div>
          )
        })}

        <div className="border-t border-border" />
      </div>
    </section>
  )
}
