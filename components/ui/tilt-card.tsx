"use client"

import { useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface TiltCardProps {
  children: React.ReactNode
  className?: string
  glareEnabled?: boolean
  tiltMaxAngle?: number
  perspective?: number
  scale?: number
}

export function TiltCard({
  children,
  className,
  glareEnabled = true,
  tiltMaxAngle = 15,
  perspective = 1000,
  scale = 1.02
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [transform, setTransform] = useState("")
  const [glareStyle, setGlareStyle] = useState<React.CSSProperties>({})

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = ((y - centerY) / centerY) * -tiltMaxAngle
    const rotateY = ((x - centerX) / centerX) * tiltMaxAngle

    setTransform(
      `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`
    )

    if (glareEnabled) {
      const glareX = (x / rect.width) * 100
      const glareY = (y / rect.height) * 100
      setGlareStyle({
        background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.15) 0%, transparent 60%)`,
        opacity: 1
      })
    }
  }

  const handleMouseLeave = () => {
    setTransform("")
    setGlareStyle({ opacity: 0 })
  }

  return (
    <div
      ref={cardRef}
      className={cn(
        "relative transition-transform duration-200 ease-out",
        className
      )}
      style={{ transform, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {glareEnabled && (
        <div
          className="absolute inset-0 pointer-events-none rounded-lg transition-opacity duration-300"
          style={glareStyle}
        />
      )}
    </div>
  )
}
