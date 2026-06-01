'use client'

import { useEffect, useRef, useState } from 'react'
import { Progress, ProgressLabel } from '@/components/ui/progress'
import { cn } from '@/lib/utils'
import styles from '@/styles/portfolio.module.css'

export default function SkillBar({
  name,
  level,
  pct,
  index,
}: {
  name: string
  level: string
  pct: number
  index: number
}) {
  const [animated, setAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setAnimated(true), index * 60)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [index])

  return (
    <div ref={ref} className={styles.skillRow}>
      <Progress
        value={animated ? pct : 0}
        getAriaValueText={(_, value) => `${value ?? 0}%`}
        className={cn(styles.skillProgress, 'w-full flex-col gap-2')}
      >
        <div className={styles.skillMeta}>
          <ProgressLabel
            className={cn(styles.skillName, 'p-0 font-normal text-inherit')}
          >
            {name}
          </ProgressLabel>
          <span className={styles.skillLevel}>{level}</span>
        </div>
      </Progress>
    </div>
  )
}
