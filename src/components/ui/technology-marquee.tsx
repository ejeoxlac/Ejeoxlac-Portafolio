"use client"

import { cn } from "@/lib/utils"
import type { Technology } from "@/lib/portfolio"

type TechnologyMarqueeProps = {
  iconsRow1: Technology[]
  iconsRow2: Technology[]
  className?: string
}

/** Repite iconos y duplica el set para el loop infinito (-50%). */
function buildMarqueeTrack(icons: Technology[], minPerHalf = 12): Technology[] {
  if (!icons.length) return []

  let set = [...icons]
  while (set.length < minPerHalf) {
    set = [...set, ...icons]
  }

  return [...set, ...set]
}

const MARQUEE_DURATION = "55s"

function IconRow({
  icons,
  direction,
}: {
  icons: Technology[]
  direction: "left" | "right"
}) {
  const items = buildMarqueeTrack(icons)

  return (
    <div className="w-full overflow-hidden">
      <div
        className={cn(
          "flex w-max gap-4 py-2 motion-reduce:animate-none",
          direction === "left" ? "animate-scroll-left" : "animate-scroll-right",
        )}
        style={{ animationDuration: MARQUEE_DURATION }}
      >
        {items.map((tech, index) => (
          <div
            key={`${tech.name}-${index}`}
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[var(--surface)]/80 p-3 ring-1 ring-[var(--border)] backdrop-blur-sm md:h-16 md:w-16"
            title={tech.name}
          >
            <img
              src={tech.icon}
              alt={tech.name}
              className="h-full w-full object-contain"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export function TechnologyMarquee({
  iconsRow1,
  iconsRow2,
  className,
}: TechnologyMarqueeProps) {
  return (
    <div
      className={cn(
        "relative mx-auto w-full overflow-hidden",
        className,
      )}
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
      }}
    >
      <IconRow icons={iconsRow1} direction="left" />
      <IconRow icons={iconsRow2} direction="right" />
    </div>
  )
}
