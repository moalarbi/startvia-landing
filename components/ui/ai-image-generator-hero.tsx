"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface ImageCard {
  id: string
  src: string
  alt: string
  rotation: number
}

interface ImageCarouselHeroProps {
  title: string
  subtitle: string
  description: string
  ctaText: string
  onCtaClick?: () => void
  images: ImageCard[]
  features?: Array<{
    title: string
    description: string
  }>
}

export function ImageCarouselHero({
  title,
  subtitle,
  description,
  ctaText,
  onCtaClick,
  images,
  features,
}: ImageCarouselHeroProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [rotatingCards, setRotatingCards] = useState<number[]>([])

  // Continuous rotation animation
  useEffect(() => {
    const interval = setInterval(() => {
      setRotatingCards((prev) => prev.map((val) => (val + 0.3) % 360))
    }, 50)

    return () => clearInterval(interval)
  }, [])

  // Initialize rotating cards
  useEffect(() => {
    setRotatingCards(images.map((_, i) => i * (360 / images.length)))
  }, [images.length])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    })
  }

  return (
    <div className="relative w-full min-h-screen bg-canvas-dark overflow-hidden pt-20">
      {/* Animated background gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-primary/5 to-transparent rounded-full blur-[120px] animate-pulse" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        {/* Carousel Container */}
        <div
          className="relative w-full max-w-4xl h-[300px] sm:h-[400px] mb-8 sm:mb-12"
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Rotating Image Cards */}
          <div className="absolute inset-0 flex items-center justify-center" style={{ perspective: '1200px' }}>
            {images.map((image, index) => {
              const angle = (rotatingCards[index] || 0) * (Math.PI / 180)
              const radius = typeof window !== 'undefined' && window.innerWidth < 640 ? 120 : 220
              const x = Math.cos(angle) * radius
              const z = Math.sin(angle) * radius
              
              // 3D perspective effect based on mouse position
              const perspectiveX = (mousePosition.x - 0.5) * 15
              const perspectiveY = (mousePosition.y - 0.5) * 15

              return (
                <div
                  key={image.id}
                  className="absolute w-28 h-36 sm:w-44 sm:h-56 transition-all duration-300"
                  style={{
                    transform: `
                      translate3d(${x}px, 0, ${z}px)
                      rotateX(${perspectiveY}deg)
                      rotateY(${perspectiveX}deg)
                      rotateZ(${image.rotation}deg)
                    `,
                    transformStyle: "preserve-3d",
                    opacity: z < 0 ? 0.4 : 1,
                    zIndex: Math.round(z + 500)
                  }}
                >
                  <div
                    className={cn(
                      "relative w-full h-full rounded-xl overflow-hidden border border-hairline-dark bg-surface-card shadow-2xl",
                      "transition-all duration-500 hover:scale-110 hover:border-primary/50",
                      "cursor-pointer group",
                    )}
                    style={{
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      priority={index < 4}
                    />
                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Content Section */}
        <div className="relative z-20 text-center max-w-3xl mx-auto mb-12">
          <div className="mb-4 inline-flex items-center gap-xs rounded-full border border-hairline-dark bg-surface-card/30 px-sm py-1 text-[10px] font-bold tracking-widest text-primary uppercase backdrop-blur-sm">
            {subtitle}
          </div>
          
          <h1 className="text-display-md sm:text-hero font-bold text-white mb-6 text-balance leading-[1.1]">
            {title}
          </h1>

          <p className="text-body-md sm:text-title-sm text-muted mb-10 text-balance max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>

          {/* CTA Button */}
          <button
            onClick={onCtaClick}
            className={cn(
              "inline-flex items-center gap-2 px-10 py-4 rounded-full",
              "bg-primary text-ink font-bold text-sm",
              "hover:shadow-[0_0_20px_rgba(252,213,53,0.3)] hover:scale-105 transition-all duration-300",
              "active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-canvas-dark",
              "group shadow-lg"
            )}
          >
            {ctaText}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Features Section */}
        {features && (
          <div className="relative z-20 w-full max-w-5xl grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={cn(
                  "text-center p-6 rounded-2xl",
                  "bg-surface-card/30 backdrop-blur-md border border-hairline-dark",
                  "hover:bg-surface-card/50 hover:border-primary/20 transition-all duration-500",
                  "group"
                )}
              >
                <h3 className="text-title-sm font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-xs text-muted leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
