"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, GraduationCap, Rocket, Lightbulb, Target } from "lucide-react"

const timelineItems = [
  {
    year: "2023",
    title: "Inicio da Jornada",
    description: "Comecei a estudar programacao de forma autodidata, descobrindo a paixao por tecnologia e desenvolvimento.",
    icon: Lightbulb,
    color: "bg-yellow-500"
  },
  {
    year: "2024",
    title: "Primeiro Projeto",
    description: "Desenvolvi meu primeiro projeto real: um sistema simples de gerenciamento, colocando em pratica o que aprendi.",
    icon: Code,
    color: "bg-primary"
  },
  {
    year: "2024",
    title: "Faculdade ADS",
    description: "Ingressei no curso de Analise e Desenvolvimento de Sistemas, aprofundando conhecimentos teoricos e praticos.",
    icon: GraduationCap,
    color: "bg-blue-500"
  },
  {
    year: "2025",
    title: "Foco em Backend",
    description: "Decidi me especializar em desenvolvimento backend com Python, estudando FastAPI, Django e arquitetura de APIs.",
    icon: Target,
    color: "bg-green-500"
  },
  {
    year: "Futuro",
    title: "Engenharia de IA",
    description: "Objetivo de me tornar engenheiro de inteligencia artificial, unindo backend com machine learning.",
    icon: Rocket,
    color: "bg-primary"
  }
]

export function Timeline() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = itemRefs.current.indexOf(entry.target as HTMLDivElement)
          if (entry.isIntersecting && index !== -1) {
            setVisibleItems((prev) => 
              prev.includes(index) ? prev : [...prev, index]
            )
          }
        })
      },
      { threshold: 0.3 }
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="jornada" className="py-24 px-6 lg:px-12">
      <div className="max-w-4xl">
        <div className="flex items-center gap-3 mb-12">
          <div className="h-px flex-1 max-w-12 bg-primary" />
          <h2 className="text-sm font-medium uppercase tracking-widest text-primary">
            Minha Jornada
          </h2>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          <div className="space-y-12">
            {timelineItems.map((item, index) => (
              <div
                key={index}
                ref={(el) => { itemRefs.current[index] = el }}
                className={`relative flex flex-col md:flex-row gap-6 md:gap-12 transition-all duration-700 ${
                  visibleItems.includes(index)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                } ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-background border-2 border-primary -translate-x-1/2 mt-6 z-10" />

                {/* Year Badge - Mobile & Desktop */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"}`}>
                  <Badge variant="outline" className="ml-8 md:ml-0">
                    {item.year}
                  </Badge>
                </div>

                {/* Content Card */}
                <div className={`md:w-1/2 ml-8 md:ml-0 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12"}`}>
                  <Card className="group hover:border-primary/50 transition-all duration-300">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className={`p-2 rounded-lg ${item.color} text-background shrink-0`}>
                          <item.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg text-foreground mb-2">
                            {item.title}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
