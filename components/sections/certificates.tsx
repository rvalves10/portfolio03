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
  // Formacoes (Principais)
  {
    id: "1",
    title: "Formacao: A partir do zero - Iniciante em Programacao",
    issuer: "Alura",
    date: "2025",
    credentialUrl: "https://github.com/rvalves10/certificados/blob/main/Richard%20Victor%20De%20Almeida%20Alves%20-%20Forma%C3%A7%C3%A3o%20A%20partir%20do%20zero_%20iniciante%20em%20programa%C3%A7%C3%A3o%20-%20Alura.png",
    skills: ["Logica", "JavaScript", "Fundamentos"],
    category: "programming"
  },
  {
    id: "2",
    title: "Formacao: Aprenda a programar em Python com OO",
    issuer: "Alura",
    date: "2025",
    credentialUrl: "https://github.com/rvalves10/certificados/blob/main/Richard%20Victor%20De%20Almeida%20Alves%20-%20Forma%C3%A7%C3%A3o%20Aprenda%20a%20programar%20em%20Python%20com%20Orienta%C3%A7%C3%A3o%20a%20Objetos%20-%20Alura.png",
    skills: ["Python", "POO", "Classes"],
    category: "programming"
  },
  {
    id: "3",
    title: "Formacao: Praticando Python",
    issuer: "Alura",
    date: "2025",
    credentialUrl: "https://github.com/rvalves10/certificados/blob/main/Richard%20Victor%20De%20Almeida%20Alves%20-%20Forma%C3%A7%C3%A3o%20Praticando%20Python%20-%20Alura.png",
    skills: ["Python", "Projetos", "Pratica"],
    category: "programming"
  },
  // Cursos Python
  {
    id: "4",
    title: "Python: Crie a sua primeira aplicacao",
    issuer: "Alura",
    date: "2025",
    credentialUrl: "https://github.com/rvalves10/certificados/blob/main/Richard%20Victor%20De%20Almeida%20Alves%20-%20Curso%20Python_%20crie%20a%20sua%20primeira%20aplica%C3%A7%C3%A3o%20-%20Alura.png",
    skills: ["Python", "Fundamentos", "Aplicacoes"],
    category: "programming"
  },
  {
    id: "5",
    title: "Python: Aplicando a Orientacao a Objetos",
    issuer: "Alura",
    date: "2025",
    credentialUrl: "https://github.com/rvalves10/certificados/blob/main/Richard%20Victor%20De%20Almeida%20Alves%20-%20Curso%20Python_%20aplicando%20a%20Orienta%C3%A7%C3%A3o%20a%20Objetos%20-%20Alura.png",
    skills: ["Python", "POO", "Classes"],
    category: "programming"
  },
  {
    id: "6",
    title: "Python: Avance na OO e consuma API",
    issuer: "Alura",
    date: "2025",
    credentialUrl: "https://github.com/rvalves10/certificados/blob/main/Richard%20Victor%20De%20Almeida%20Alves%20-%20Curso%20Python_%20avance%20na%20Orienta%C3%A7%C3%A3o%20a%20Objetos%20e%20consuma%20API%20-%20Alura.png",
    skills: ["Python", "API", "POO Avancado"],
    category: "programming"
  },
  {
    id: "7",
    title: "Python Collections parte 1: Listas e Tuplas",
    issuer: "Alura",
    date: "2025",
    credentialUrl: "https://github.com/rvalves10/certificados/blob/main/Richard%20Victor%20De%20Almeida%20Alves%20-%20Curso%20Python%20Collections%20parte%201_%20listas%20e%20tuplas%20-%20Alura.png",
    skills: ["Python", "Listas", "Tuplas"],
    category: "data"
  },
  {
    id: "8",
    title: "Python Collections parte 2: Conjuntos e Dicionarios",
    issuer: "Alura",
    date: "2025",
    credentialUrl: "https://github.com/rvalves10/certificados/blob/main/Richard%20Victor%20De%20Almeida%20Alves%20-%20Curso%20Python%20Collections%20parte%202_%20conjuntos%20e%20dicion%C3%A1rios%20-%20Alura.png",
    skills: ["Python", "Dicionarios", "Sets"],
    category: "data"
  },
  // Praticando Python
  {
    id: "9",
    title: "Praticando Python: Condicionais if, elif e else",
    issuer: "Alura",
    date: "2025",
    credentialUrl: "https://github.com/rvalves10/certificados/blob/main/Richard%20Victor%20De%20Almeida%20Alves%20-%20Curso%20Praticando%20Python_%20condicionais%20if,%20elif%20e%20else%20-%20Alura.png",
    skills: ["Python", "Condicionais", "Logica"],
    category: "programming"
  },
  {
    id: "10",
    title: "Praticando Python: Lacos for e while",
    issuer: "Alura",
    date: "2025",
    credentialUrl: "https://github.com/rvalves10/certificados/blob/main/Richard%20Victor%20De%20Almeida%20Alves%20-%20Curso%20Praticando%20Python_%20la%C3%A7os%20for%20e%20while%20-%20Alura.png",
    skills: ["Python", "Loops", "Iteracao"],
    category: "programming"
  },
  {
    id: "11",
    title: "Praticando Python: Funcoes",
    issuer: "Alura",
    date: "2025",
    credentialUrl: "https://github.com/rvalves10/certificados/blob/main/Richard%20Victor%20De%20Almeida%20Alves%20-%20Curso%20Praticando%20Python_%20fun%C3%A7%C3%B5es%20-%20Alura.png",
    skills: ["Python", "Funcoes", "Modularizacao"],
    category: "programming"
  },
  {
    id: "12",
    title: "Praticando Python: Listas e Tuplas",
    issuer: "Alura",
    date: "2025",
    credentialUrl: "https://github.com/rvalves10/certificados/blob/main/Richard%20Victor%20De%20Almeida%20Alves%20-%20Curso%20Praticando%20Python_%20listas%20e%20tuplas%20-%20Alura.png",
    skills: ["Python", "Listas", "Tuplas"],
    category: "data"
  },
  {
    id: "13",
    title: "Praticando Python: Conjuntos e Dicionarios",
    issuer: "Alura",
    date: "2025",
    credentialUrl: "https://github.com/rvalves10/certificados/blob/main/Richard%20Victor%20De%20Almeida%20Alves%20-%20Curso%20Praticando%20Python_%20conjuntos%20e%20dicion%C3%A1rios%20-%20Alura.png",
    skills: ["Python", "Dicionarios", "Sets"],
    category: "data"
  },
  {
    id: "14",
    title: "Praticando Python: Estruturas de Dados",
    issuer: "Alura",
    date: "2025",
    credentialUrl: "https://github.com/rvalves10/certificados/blob/main/Richard%20Victor%20De%20Almeida%20Alves%20-%20Curso%20Praticando%20Python_%20estruturas%20de%20dados%20-%20Alura.png",
    skills: ["Python", "Estruturas", "Dados"],
    category: "data"
  },
  {
    id: "15",
    title: "Praticando Python: Strings e Regex",
    issuer: "Alura",
    date: "2025",
    credentialUrl: "https://github.com/rvalves10/certificados/blob/main/Richard%20Victor%20De%20Almeida%20Alves%20-%20Curso%20Praticando%20Python_%20Strings%20e%20Regex%20-%20Alura.png",
    skills: ["Python", "Strings", "Regex"],
    category: "programming"
  },
  {
    id: "16",
    title: "Praticando Python: Programacao Assincrona",
    issuer: "Alura",
    date: "2025",
    credentialUrl: "https://github.com/rvalves10/certificados/blob/main/Richard%20Victor%20De%20Almeida%20Alves%20-%20Curso%20Praticando%20python_%20programa%C3%A7%C3%A3o%20ass%C3%ADncrona%20-%20Alura.png",
    skills: ["Python", "Async", "Concorrencia"],
    category: "programming"
  },
  {
    id: "17",
    title: "Praticando Python: Trabalhando com Projetos",
    issuer: "Alura",
    date: "2025",
    credentialUrl: "https://github.com/rvalves10/certificados/blob/main/Richard%20Victor%20De%20Almeida%20Alves%20-%20Curso%20Praticando%20Python_%20trabalhando%20com%20projetos%20-%20Alura.png",
    skills: ["Python", "Projetos", "Pratica"],
    category: "programming"
  },
  // Logica de Programacao
  {
    id: "18",
    title: "Logica de Programacao: Mergulhe com JavaScript",
    issuer: "Alura",
    date: "2025",
    credentialUrl: "https://github.com/rvalves10/certificados/blob/main/Richard%20Victor%20De%20Almeida%20Alves%20-%20Curso%20L%C3%B3gica%20de%20programa%C3%A7%C3%A3o_%20mergulhe%20em%20programa%C3%A7%C3%A3o%20com%20JavaScript%20-%20Alura.png",
    skills: ["JavaScript", "Logica", "Fundamentos"],
    category: "programming"
  },
  {
    id: "19",
    title: "Logica de Programacao: Explore Funcoes e Listas",
    issuer: "Alura",
    date: "2025",
    credentialUrl: "https://github.com/rvalves10/certificados/blob/main/Richard%20Victor%20De%20Almeida%20Alves%20-%20Curso%20L%C3%B3gica%20de%20programa%C3%A7%C3%A3o_%20explore%20fun%C3%A7%C3%B5es%20e%20listas%20-%20Alura.png",
    skills: ["JavaScript", "Funcoes", "Arrays"],
    category: "programming"
  },
  {
    id: "20",
    title: "Logica de Programacao: Praticando com Desafios",
    issuer: "Alura",
    date: "2025",
    credentialUrl: "https://github.com/rvalves10/certificados/blob/main/Richard%20Victor%20De%20Almeida%20Alves%20-%20Curso%20L%C3%B3gica%20de%20programa%C3%A7%C3%A3o_%20praticando%20com%20desafios%20-%20Alura.png",
    skills: ["JavaScript", "Desafios", "Pratica"],
    category: "programming"
  },
  // Outros
  {
    id: "21",
    title: "Comecando em Programacao: Carreira e Primeiros Passos",
    issuer: "Alura",
    date: "2025",
    credentialUrl: "https://github.com/rvalves10/certificados/blob/main/Richard%20Victor%20De%20Almeida%20Alves%20-%20Curso%20Come%C3%A7ando%20em%20Programa%C3%A7%C3%A3o_%20carreira%20e%20primeiros%20passos%20-%20Alura.png",
    skills: ["Carreira", "Introducao", "Fundamentos"],
    category: "soft-skills"
  },
  {
    id: "22",
    title: "Git e GitHub: Compartilhando e Colaborando em Projetos",
    issuer: "Alura",
    date: "2025",
    credentialUrl: "https://github.com/rvalves10/certificados/blob/main/Richard%20Victor%20De%20Almeida%20Alves%20-%20Curso%20Git%20e%20GitHub_%20compartilhando%20e%20colaborando%20em%20projetos%20-%20Alura.png",
    skills: ["Git", "GitHub", "Versionamento"],
    category: "programming"
  },
  // Certificados externos
  {
    id: "23",
    title: "Certificado de Inteligencia Artificial",
    issuer: "Externo",
    date: "2025",
    credentialUrl: "https://github.com/rvalves10/certificados/blob/main/Richard%20Victor%20De%20Almeida%20Alves.pdf%20IA.png",
    skills: ["IA", "Machine Learning", "Fundamentos"],
    category: "data"
  },
  {
    id: "24",
    title: "Certificado de Conclusao",
    issuer: "Externo",
    date: "2025",
    credentialUrl: "https://github.com/rvalves10/certificados/blob/main/Richard%20Victor%20De%20Almeida%20Alves.png",
    skills: ["Programacao", "Desenvolvimento"],
    category: "other"
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

        {/* GitHub Repository Link */}
        <div className="mt-12 p-6 rounded-lg border border-border bg-secondary/20">
          <p className="text-sm text-muted-foreground text-center">
            Todos os certificados estao disponiveis no{" "}
            <a 
              href="https://github.com/rvalves10/certificados" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              repositorio do GitHub
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
