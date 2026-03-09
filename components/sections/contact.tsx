import { Button } from "@/components/ui/button"
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react"

const contacts = [
  {
    name: "Email",
    value: "contato@richardvictor.dev",
    href: "mailto:contato@richardvictor.dev",
    icon: Mail
  },
  {
    name: "GitHub",
    value: "github.com/richardvictor",
    href: "https://github.com/richardvictor",
    icon: Github
  },
  {
    name: "LinkedIn",
    value: "linkedin.com/in/richardvictor",
    href: "https://linkedin.com/in/richardvictor",
    icon: Linkedin
  }
]

export function Contact() {
  return (
    <section id="contato" className="py-24 px-6 lg:px-12 bg-secondary/20">
      <div className="max-w-4xl">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px flex-1 max-w-12 bg-primary" />
          <h2 className="text-sm font-medium uppercase tracking-widest text-primary">
            Contato
          </h2>
        </div>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Vamos trabalhar juntos?
            </h3>
            <p className="text-lg text-muted-foreground max-w-xl">
              Estou sempre aberto a novas oportunidades e projetos interessantes. 
              Entre em contato!
            </p>
          </div>
          
          <div className="grid sm:grid-cols-3 gap-4">
            {contacts.map((contact) => (
              <a
                key={contact.name}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-lg bg-secondary text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <contact.icon className="h-5 w-5" />
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <h4 className="font-semibold text-foreground mb-1">{contact.name}</h4>
                <p className="text-sm text-muted-foreground truncate">{contact.value}</p>
              </a>
            ))}
          </div>
          
          <div className="pt-4">
            <Button size="lg" asChild>
              <a href="mailto:contato@richardvictor.dev">
                <Mail className="mr-2 h-4 w-4" />
                Enviar Email
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
