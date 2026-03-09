import { Navbar } from "@/components/sections/navbar"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Timeline } from "@/components/sections/timeline"
import { Skills } from "@/components/sections/skills"
import { Projects } from "@/components/sections/projects"
import { InteractiveTerminal } from "@/components/sections/terminal"
import { Certificates } from "@/components/sections/certificates"
import { Contact } from "@/components/sections/contact"
import { Footer } from "@/components/sections/footer"
import { Particles } from "@/components/ui/particles"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground relative">
      <Particles />
      <Navbar />
      <div className="max-w-6xl mx-auto relative z-10">
        <Hero />
        <About />
        <Timeline />
        <Skills />
        <Projects />
        <InteractiveTerminal />
        <Certificates />
        <Contact />
      </div>
      <Footer />
    </main>
  )
}
