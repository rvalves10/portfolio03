"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TiltCard } from "@/components/ui/tilt-card"
import { Award, ExternalLink, Calendar, Building2, ChevronDown, ChevronUp } from "lucide-react"

interface Certificate {
  id: string
  title: string
  issuer: string
  date: string
  credentialUrl?: string
  skills: string[]
  category: "programming" | "data" | "soft-skills" | "other"
}

const certificates: Certificate[] = [
  {
    id: "1",
    title: "Python Fundamentos",
    issuer: "Curso em Video",
    date: "2024",
    skills: ["Python", "Logica", "Algoritmos"],
    category: "programming"
  },
  {
    id: "2",
    title: "Git e GitHub",
    issuer: "DIO",
    date: "2024",
    skills: ["Git", "GitHub", "Versionamento"],
    category: "programming"
  },
  {
    id: "3",
    title: "SQL Basico ao Avancado",
    issuer: "Udemy",
    date: "2024",
    skills: ["SQL", "PostgreSQL", "Banco de Dados"],
    category: "data"
  },
  {
    id: "4",
    title: "Introducao a Inteligencia Artificial",
    issuer: "Microsoft Learn",
    date: "2025",
    skills: ["IA", "Machine Learning", "Conceitos"],
    category: "data"
  }
]

const categoryLabels: Record<string, string> = {
  programming: "Programacao",
  data: "Dados & IA",
  "soft-skills": "Soft Skills",
  other: "Outros"
}

const categoryColors: Record<string, string> = {
  programming: "bg-primary/20 text-primary",
  data: "bg-blue-500/20 text-blue-400",
  "soft-skills": "bg-green-500/20 text-green-400",
  other: "bg-yellow-500/20 text-yellow-400"
}

export function Certificates() {
  const [showAll, setShowAll] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const filteredCertificates = selectedCategory
    ? certificates.filter((c) => c.category === selectedCategory)
    : certificates

  const displayedCertificates = showAll
    ? filteredCertificates
    : filteredCertificates.slice(0, 4)

  const categories = [...new Set(certificates.map((c) => c.category))]

  return (
    <section id="certificados" className="py-24 px-6 lg:px-12">
      <div className="max-w-4xl">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px flex-1 max-w-12 bg-primary" />
          <h2 className="text-sm font-medium uppercase tracking-widest text-primary">
            Certificados
          </h2>
        </div>

        <p className="text-muted-foreground mb-8 max-w-2xl">
          Certificacoes e cursos que completei durante minha jornada de aprendizado 
          em desenvolvimento e tecnologia.
        </p>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          <Button
            variant={selectedCategory === null ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory(null)}
          >
            Todos ({certificates.length})
          </Button>
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
            >
              {categoryLabels[category]} (
              {certificates.filter((c) => c.category === category).length})
            </Button>
          ))}
        </div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {displayedCertificates.map((cert) => (
            <TiltCard key={cert.id} tiltMaxAngle={10} scale={1.02}>
              <Card className="h-full group hover:border-primary/50 transition-all duration-300">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-4">
                    <div className="p-2 rounded-lg bg-primary/20 text-primary">
                      <Award className="h-5 w-5" />
                    </div>
                    <Badge className={categoryColors[cert.category]}>
                      {categoryLabels[cert.category]}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg text-foreground mt-3">
                    {cert.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Building2 className="h-4 w-4" />
                      <span>{cert.issuer}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{cert.date}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  {cert.credentialUrl && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full mt-2 group-hover:text-primary"
                      asChild
                    >
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Ver Credencial
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            </TiltCard>
          ))}
        </div>

        {/* Show More Button */}
        {filteredCertificates.length > 4 && (
          <div className="mt-8 text-center">
            <Button
              variant="outline"
              onClick={() => setShowAll(!showAll)}
              className="group"
            >
              {showAll ? (
                <>
                  Ver Menos
                  <ChevronUp className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-1" />
                </>
              ) : (
                <>
                  Ver Todos ({filteredCertificates.length - 4} mais)
                  <ChevronDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
                </>
              )}
            </Button>
          </div>
        )}

        {/* Empty State */}
        {displayedCertificates.length === 0 && (
          <div className="text-center py-12">
            <Award className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">
              Nenhum certificado encontrado nesta categoria.
            </p>
          </div>
        )}

        {/* Add Certificate Note */}
        <div className="mt-12 p-6 rounded-lg border border-dashed border-border bg-secondary/20">
          <p className="text-sm text-muted-foreground text-center">
            Voce pode editar o arquivo{" "}
            <code className="px-2 py-1 bg-secondary rounded text-primary font-mono text-xs">
              components/sections/certificates.tsx
            </code>{" "}
            para adicionar seus proprios certificados.
          </p>
        </div>
      </div>
    </section>
  )
}
