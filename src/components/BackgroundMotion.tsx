'use client'

import { motion } from 'motion/react'
import styles from '@/styles/background-motion.module.css'

const ORBS = [
  {
    className: styles.orbAccent,
    width: 520,
    height: 520,
    left: '68%',
    top: '8%',
    animate: {
      x: [0, 40, -25, 0],
      y: [0, -50, 30, 0],
      scale: [1, 1.12, 0.92, 1],
    },
    duration: 22,
    delay: 0,
  },
  {
    className: styles.orbAccent,
    width: 380,
    height: 380,
    left: '-8%',
    top: '55%',
    animate: {
      x: [0, -35, 45, 0],
      y: [0, 35, -40, 0],
      scale: [1, 0.9, 1.1, 1],
    },
    duration: 26,
    delay: 1.5,
  },
  {
    className: styles.orbMuted,
    width: 440,
    height: 440,
    left: '35%',
    top: '72%',
    animate: {
      x: [0, 30, -30, 0],
      y: [0, -25, 20, 0],
      scale: [1, 1.05, 0.95, 1],
    },
    duration: 30,
    delay: 3,
  },
] 

export default function BackgroundMotion() {
  return (
    <div className={styles.wrapper} aria-hidden="true">
      <motion.div
        className={styles.grid}
        animate={{
          x: [0, -32, 0],
          y: [0, -32, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      {ORBS.map((orb, i) => (
        <motion.div
          key={i}
          className={`${styles.orb} ${orb.className}`}
          style={{
            width: orb.width,
            height: orb.height,
            left: orb.left,
            top: orb.top,
          }}
          animate={orb.animate}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: orb.delay,
          }}
        />
      ))}
      <div className={styles.vignette} />
    </div>
  )
}
