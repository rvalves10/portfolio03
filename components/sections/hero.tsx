"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Mail } from "lucide-react"

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center relative px-6 lg:px-12">
      <div className="max-w-4xl">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border text-sm text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Disponível para novos projetos
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance">
            Richard Victor
          </h1>
          
          <p className="text-xl md:text-2xl text-primary font-medium">
            Desenvolvedor Backend | Python | Futuro Engenheiro de Inteligência Artificial
          </p>
          
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Estudante de tecnologia apaixonado por programação, desenvolvimento backend 
            e inteligência artificial.
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
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground animate-bounce">
        <span className="text-sm">Scroll</span>
        <ArrowDown className="h-4 w-4" />
      </div>
    </section>
  )
}
