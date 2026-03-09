import { MapPin, GraduationCap, Target } from "lucide-react"

export function About() {
  return (
    <section id="sobre" className="py-24 px-6 lg:px-12">
      <div className="max-w-4xl">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px flex-1 max-w-12 bg-primary" />
          <h2 className="text-sm font-medium uppercase tracking-widest text-primary">
            Sobre mim
          </h2>
        </div>
        
        <div className="space-y-8">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            <span className="text-foreground font-semibold">Richard Victor</span> é estudante de{" "}
            <span className="text-foreground">Análise e Desenvolvimento de Sistemas</span> e 
            apaixonado por tecnologia. Atualmente está focado em aprender desenvolvimento 
            backend, APIs e inteligência artificial, enquanto constrói projetos que buscam 
            gerar <span className="text-primary">impacto real na sociedade</span>.
          </p>
          
          <div className="grid sm:grid-cols-3 gap-6 pt-4">
            <div className="group p-6 rounded-xl bg-secondary/30 border border-border hover:border-primary/50 transition-all duration-300">
              <MapPin className="h-6 w-6 text-primary mb-4" />
              <h3 className="font-semibold mb-1 text-foreground">Localização</h3>
              <p className="text-sm text-muted-foreground">Sorocaba, Brasil</p>
            </div>
            
            <div className="group p-6 rounded-xl bg-secondary/30 border border-border hover:border-primary/50 transition-all duration-300">
              <GraduationCap className="h-6 w-6 text-primary mb-4" />
              <h3 className="font-semibold mb-1 text-foreground">Formação</h3>
              <p className="text-sm text-muted-foreground">Análise e Desenvolvimento de Sistemas</p>
            </div>
            
            <div className="group p-6 rounded-xl bg-secondary/30 border border-border hover:border-primary/50 transition-all duration-300">
              <Target className="h-6 w-6 text-primary mb-4" />
              <h3 className="font-semibold mb-1 text-foreground">Objetivo</h3>
              <p className="text-sm text-muted-foreground">Engenheiro de IA</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
