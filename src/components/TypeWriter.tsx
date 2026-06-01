'use client'

import { useEffect, useState } from 'react'
import styles from '@/styles/portfolio.module.css'

export default function TypeWriter({
  text,
  delay = 0,
}: {
  text: string
  delay?: number
}) {
  const [displayed, setDisplayed] = useState('')
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), delay)
    return () => clearTimeout(t)
  }, [delay])

  useEffect(() => {
    if (!started) return
    let i = 0
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1))
        i++
      } else {
        clearInterval(interval)
      }
    }, 40)
    return () => clearInterval(interval)
  }, [started, text])

  return (
    <span>
      {displayed}
      {displayed.length < text.length && (
        <span className={styles.cursor}>|</span>
      )}
    </span>
  )
}
