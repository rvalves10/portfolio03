"use client"

import { Code2, Server, Globe, GitBranch, Database, Brain } from "lucide-react"

const skills = [
  {
    name: "Python",
    icon: Code2,
    description: "Linguagem principal para backend e IA"
  },
  {
    name: "Backend",
    icon: Server,
    description: "Desenvolvimento de sistemas robustos"
  },
  {
    name: "APIs REST",
    icon: Globe,
    description: "Criação e consumo de APIs"
  },
  {
    name: "Git e GitHub",
    icon: GitBranch,
    description: "Versionamento e colaboração"
  },
  {
    name: "Banco de Dados",
    icon: Database,
    description: "SQL e NoSQL"
  },
  {
    name: "Lógica de Programação",
    icon: Brain,
    description: "Resolução de problemas"
  }
]

export function Skills() {
  return (
    <section id="habilidades" className="py-24 px-6 lg:px-12 bg-secondary/20">
      <div className="max-w-4xl">
        <div className="flex items-center gap-3 mb-12">
          <div className="h-px flex-1 max-w-12 bg-primary" />
          <h2 className="text-sm font-medium uppercase tracking-widest text-primary">
            Habilidades
          </h2>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group relative p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <skill.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{skill.name}</h3>
                  <p className="text-sm text-muted-foreground">{skill.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
