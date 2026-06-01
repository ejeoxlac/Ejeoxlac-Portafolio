'use client'

import { useEffect, useRef, useState } from 'react'
import styles from '@/styles/portfolio.module.css'

export default function Section({
  children,
  id,
}: {
  children: React.ReactNode
  id: string
}) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.05 },
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      id={id}
      className={`${styles.section} ${visible ? styles.sectionVisible : ''}`}
    >
      {children}
    </section>
  )
}
