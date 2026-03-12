"use client"

import { Button } from "@/components/ui/button"
import { Typewriter } from "@/components/ui/typewriter"
import { ArrowDown, Mail, Terminal } from "lucide-react"

const roles = [
  "Desenvolvedor Backend",
  "Especialista Python",
  "Futuro Eng. de IA",
  "Criador de APIs"
]

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center relative px-6 lg:px-12">
      <div className="max-w-4xl relative z-10">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border text-sm text-muted-foreground backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Disponivel para novos projetos
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance">
            Richard Victor
          </h1>
          
          <div className="flex items-center gap-3 text-xl md:text-2xl font-medium">
            <Terminal className="h-6 w-6 text-primary" />
            <Typewriter 
              words={roles} 
              className="text-primary"
              typingSpeed={80}
              deletingSpeed={40}
              delayBetweenWords={2500}
            />
          </div>
          
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Estudante de tecnologia apaixonado por programacao, desenvolvimento backend 
            e inteligencia artificial. Transformando ideias em codigo limpo e eficiente.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <Button 
              size="lg" 
              className="group"
              onClick={() => document.getElementById('projetos')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ver Projetos
              <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="mr-2 h-4 w-4" />
              Contato
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground animate-bounce z-10">
        <span className="text-sm">Scroll</span>
        <ArrowDown className="h-4 w-4" />
      </div>
    </section>
  )
}
