'use client'

import { useEffect } from 'react'
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from 'motion/react'
import styles from '@/styles/background-motion.module.css'

export default function BackgroundMotion() {
  const prefersReducedMotion = useReducedMotion()
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { stiffness: 80, damping: 24 }
  const parallaxX = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-24, 24]),
    springConfig,
  )
  const parallaxY = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [-16, 16]),
    springConfig,
  )
  const tiltY = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-4, 4]),
    springConfig,
  )
  const tiltX = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [3, -3]),
    springConfig,
  )

  useEffect(() => {
    if (prefersReducedMotion) return

    const onMouseMove = (event: MouseEvent) => {
      const x = (event.clientX - window.innerWidth / 2) / window.innerWidth
      const y = (event.clientY - window.innerHeight / 2) / window.innerHeight
      mouseX.set(x)
      mouseY.set(y)
    }

    window.addEventListener('mousemove', onMouseMove)
    return () => window.removeEventListener('mousemove', onMouseMove)
  }, [prefersReducedMotion, mouseX, mouseY])

  return (
    <div className={styles.wrapper} aria-hidden="true">
      <motion.div
        className={styles.scene}
        style={
          prefersReducedMotion
            ? undefined
            : { x: parallaxX, y: parallaxY, rotateX: tiltX, rotateY: tiltY }
        }
      >
        <div className={styles.perspective}>
          <div className={styles.gridPlane}>
            <motion.div
              className={styles.grid}
              animate={
                prefersReducedMotion
                  ? undefined
                  : {
                      backgroundPosition: [
                        '0px 0px',
                        '40px 20px',
                        '0px 40px',
                        '0px 0px',
                      ],
                    }
              }
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          </div>
        </div>

        <motion.div
          className={`${styles.orb} ${styles.orbAccent} ${styles.orb1}`}
          animate={
            prefersReducedMotion
              ? undefined
              : {
                  x: [0, 40, -25, 0],
                  y: [0, -50, 30, 0],
                  scale: [1, 1.12, 0.92, 1],
                }
          }
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className={`${styles.orb} ${styles.orbAccent} ${styles.orb2}`}
          animate={
            prefersReducedMotion
              ? undefined
              : {
                  x: [0, -35, 45, 0],
                  y: [0, 35, -40, 0],
                  scale: [1, 0.9, 1.1, 1],
                }
          }
          transition={{
            duration: 26,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1.5,
          }}
        />
        <motion.div
          className={`${styles.orb} ${styles.orbMuted} ${styles.orb3}`}
          animate={
            prefersReducedMotion
              ? undefined
              : {
                  x: [0, 30, -30, 0],
                  y: [0, -25, 20, 0],
                  scale: [1, 1.05, 0.95, 1],
                }
          }
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 3,
          }}
        />
      </motion.div>

      <div className={styles.vignette} />
    </div>
  )
}
