"use client"

import { cn } from "@/lib/utils"
import type { Technology } from "@/lib/portfolio"

type TechnologyMarqueeProps = {
  iconsRow1: Technology[]
  iconsRow2: Technology[]
  className?: string
}

function repeatedIcons(icons: Technology[], repeat = 2) {
  return Array.from({ length: repeat }).flatMap(() => icons)
}

function IconRow({
  icons,
  direction,
}: {
  icons: Technology[]
  direction: "left" | "right"
}) {
  const items = repeatedIcons(icons, 2)

  return (
    <div className="w-full overflow-hidden">
      <div
        className={cn(
          "flex w-max gap-4 py-2",
          direction === "left" ? "animate-scroll-left" : "animate-scroll-right",
        )}
      >
        {items.map((tech, index) => (
          <div
            key={`${tech.name}-${index}`}
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[var(--surface)] p-3 ring-1 ring-[var(--border)] md:h-16 md:w-16"
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
    <div className={cn("relative mx-auto w-full overflow-hidden", className)}>
      <IconRow icons={iconsRow1} direction="left" />
      <IconRow icons={iconsRow2} direction="right" />

      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[var(--bg)] to-transparent sm:w-20 md:w-28" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[var(--bg)] to-transparent sm:w-20 md:w-28" />
    </div>
  )
}
