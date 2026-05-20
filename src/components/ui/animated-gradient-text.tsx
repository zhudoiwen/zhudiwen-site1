"use client"

import { type ComponentPropsWithoutRef, useRef, useEffect } from "react"

import { cn } from "@/lib/utils"

export interface AnimatedGradientTextProps extends ComponentPropsWithoutRef<"div"> {
  speed?: number
  colorFrom?: string
  colorTo?: string
}

export function AnimatedGradientText({
  children,
  className,
  speed = 1,
  colorFrom = "#ffaa40",
  colorTo = "#9c40ff",
  ...props
}: AnimatedGradientTextProps) {
  const textRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (textRef.current) {
            if (entry.isIntersecting) {
              textRef.current.style.animationPlayState = "running"
            } else {
              textRef.current.style.animationPlayState = "paused"
            }
          }
        })
      },
      { threshold: 0.01 }
    )

    if (textRef.current) {
      observer.observe(textRef.current)
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current)
      }
    }
  }, [])

  return (
    <span
      ref={textRef}
      style={
        {
          "--speed": `${speed * 3}s`,
          "--bg-size": `${speed * 300}%`,
          "--color-from": colorFrom,
          "--color-to": colorTo,
          willChange: "background-position",
          contain: "content",
        } as React.CSSProperties
      }
      className={cn(
        `animate-gradient inline bg-gradient-to-r from-[var(--color-from)] via-[var(--color-to)] to-[var(--color-from)] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}
