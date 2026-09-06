'use client'

import {
  useEffect,
  useRef,
  useState,
  type ComponentProps,
  type SyntheticEvent,
} from 'react'
import { cn } from '@/lib/utils'
import styles from './smooth-image.module.css'

type SmoothImageProps = ComponentProps<'img'>

export function SmoothImage({
  className,
  onLoad,
  onError,
  src,
  ...props
}: SmoothImageProps) {
  const imageRef = useRef<HTMLImageElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(false)

    const image = imageRef.current
    if (image?.complete) {
      setIsLoaded(image.naturalWidth > 0)
    }
  }, [src])

  const handleLoad = (event: SyntheticEvent<HTMLImageElement>) => {
    setIsLoaded(true)
    onLoad?.(event)
  }

  const handleError = (event: SyntheticEvent<HTMLImageElement>) => {
    setIsLoaded(true)
    onError?.(event)
  }

  return (
    <img
      ref={imageRef}
      {...props}
      src={src}
      className={cn(styles.image, isLoaded && styles.imageLoaded, className)}
      onLoad={handleLoad}
      onError={handleError}
    />
  )
}
