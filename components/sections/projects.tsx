"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TiltCard } from "@/components/ui/tilt-card"
import { ArrowUpRight, MapPin, Leaf, MessageCircle } from "lucide-react"

const projects = [
  {
    title: "QuebraDica Sorocaba",
    description: "Portal colaborativo criado para moradores de Sorocaba compartilharem dicas úteis da cidade, como serviços, oportunidades, lugares e informações importantes da comunidade.",
    status: "Online",
    featured: true,
    icon: MapPin,
    liveUrl: "https://rvalves10.github.io/Quebra-Dica-Sorocaba/",
    sourceUrl: "https://github.com/rvalves10/Quebra-Dica-Sorocaba"
  },
  {
    title: "Jessica Cilios - Portfólio",
    description: "Plataforma para apresentação de projetos e habilidades de Jessica Cilios, uma profissional de tecnologia. O portfólio destaca suas experiências, projetos e competências técnicas.",
    status: "Online",
    featured: true,
    icon: MapPin,
    liveUrl: "https://v0-site-jessica-sobrancelhas.vercel.app/",
    sourceUrl: "https://github.com/rvalves10/v0-site-jessica-sobrancelhas"
  },
  {
    title: "Chatbot de Educação Financeira",
    description: "Projeto de chatbot voltado para ensinar educação financeira para jovens e adultos.",
    status: "Em desenvolvimento",
    featured: false,
    icon: MessageCircle,
    //liveUrl: "https://example.com/chatbot-financas",
    //sourceUrl: "https://github.com/seu-usuario/chatbot-financeiro"
  }
]

export function Projects() {
  return (
    <section id="projetos" className="py-24 px-6 lg:px-12">
      <div className="max-w-4xl">
        <div className="flex items-center gap-3 mb-12">
          <div className="h-px flex-1 max-w-12 bg-primary" />
          <h2 className="text-sm font-medium uppercase tracking-widest text-primary">
            Projetos
          </h2>
        </div>
        
        <div className="space-y-6">
          {/* Featured Project */}
          {projects.filter(p => p.featured).map((project) => (
            <TiltCard key={project.title} tiltMaxAngle={8} scale={1.01}>
              <Card 
                className="group relative overflow-hidden border-primary/30 bg-gradient-to-br from-card to-primary/5 hover:border-primary/60 transition-all duration-300"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
                <CardHeader className="relative">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-lg bg-primary/20 text-primary">
                        <project.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <Badge variant="secondary" className="mb-2 bg-primary/20 text-primary border-0">
                          Projeto Principal
                        </Badge>
                        <CardTitle className="text-2xl text-foreground">{project.title}</CardTitle>
                      </div>
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </CardHeader>
                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed mb-4">
                    {project.description}
                  </CardDescription>
                  <Badge variant="outline" className="text-xs">
                    <span className="w-2 h-2 rounded-full bg-yellow-500 mr-2" />
                    {project.status}
                  </Badge>

                  <div className="mt-4 flex gap-2 flex-wrap">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-medium text-primary hover:underline"
                      >
                        Ver projeto
                      </a>
                    )}
                    {project.sourceUrl && (
                      <a
                        href={project.sourceUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-medium text-primary hover:underline"
                      >
                        Código fonte
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TiltCard>
          ))}
          
          {/* Other Projects */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects.filter(p => !p.featured).map((project) => (
              <TiltCard key={project.title} tiltMaxAngle={12} scale={1.03}>
                <Card 
                  className="group border-border hover:border-primary/50 transition-all duration-300 h-full"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="p-3 rounded-lg bg-secondary text-primary">
                        <project.icon className="h-5 w-5" />
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <CardTitle className="text-lg text-foreground">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm leading-relaxed mb-4">
                      {project.description}
                    </CardDescription>
                    <Badge variant="outline" className="text-xs">
                      <span className="w-2 h-2 rounded-full bg-yellow-500 mr-2" />
                      {project.status}
                    </Badge>

                    <div className="mt-3 flex gap-2 flex-wrap">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-xs font-medium text-primary hover:underline"
                        >
                          Ver projeto
                        </a>
                      )}
                      {project.sourceUrl && (
                        <a
                          href={project.sourceUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-xs font-medium text-primary hover:underline"
                        >
                          Código fonte
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </TiltCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
