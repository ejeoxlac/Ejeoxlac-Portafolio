'use client'

import { PROFILE_IMAGE } from '@/lib/portfolio'
import styles from '@/styles/portfolio.module.css'
import { useEffect, useRef, useState } from 'react'

export default function AboutPhoto() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -40px 0px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`${styles.aboutPhotoWrap} ${visible ? styles.aboutPhotoVisible : ''}`}
    >
      <span className={styles.aboutPhotoFrame} aria-hidden="true" />
      <div className={styles.aboutPhotoInner}>
        <img
          src={PROFILE_IMAGE}
          alt="Bill Anthony Niño Riera"
          className={styles.aboutPhoto}
          width={480}
          height={640}
          decoding="async"
        />
        <div className={styles.aboutPhotoFade} aria-hidden="true" />
      </div>
    </div>
  )
}
