"use client"

import { useState, useRef, useEffect } from "react"
import { Card } from "@/components/ui/card"

interface TerminalLine {
  type: "input" | "output" | "error"
  content: string
}

const commands: Record<string, string | string[]> = {
  help: [
    "Comandos disponiveis:",
    "  sobre      - Sobre mim",
    "  skills     - Minhas habilidades",
    "  projetos   - Meus projetos",
    "  contato    - Informacoes de contato",
    "  clear      - Limpar terminal",
    "  github     - Abrir meu GitHub",
    "  linkedin   - Abrir meu LinkedIn",
    "  secret     - ???"
  ],
  sobre: [
    "╔══════════════════════════════════════════════╗",
    "║  Richard Victor - Backend Developer          ║",
    "╠══════════════════════════════════════════════╣",
    "║  Localizacao: Sorocaba, SP - Brasil         ║",
    "║  Formacao: Analise e Dev. de Sistemas       ║",
    "║  Foco: Python, APIs, Inteligencia Artificial║",
    "╚══════════════════════════════════════════════╝"
  ],
  skills: [
    ">> Tech Stack:",
    "   [████████████] Python",
    "   [█████████░░░] FastAPI",
    "   [████████░░░░] PostgreSQL",
    "   [███████░░░░░] Docker",
    "   [██████░░░░░░] Git",
    "   [█████░░░░░░░] Machine Learning"
  ],
  projetos: [
    ">> Projetos em Desenvolvimento:",
    "",
    "1. QuebraDica Sorocaba",
    "   Portal colaborativo para moradores de Sorocaba",
    "   Status: [▓▓▓▓▓▓░░░░] 60%",
    "",
    "2. Sistema EcoFood",
    "   Plataforma contra desperdicio de alimentos",
    "   Status: [▓▓▓▓░░░░░░] 40%",
    "",
    "3. Chatbot Educacao Financeira",
    "   IA para ensinar educacao financeira",
    "   Status: [▓▓░░░░░░░░] 20%"
  ],
  contato: [
    ">> Formas de Contato:",
    "",
    "   Email    : richardvictor.dev@gmail.com",
    "   GitHub   : github.com/richardvictor-dev",
    "   LinkedIn : linkedin.com/in/richardvictor-dev",
    "",
    "   Digite 'github' ou 'linkedin' para abrir"
  ],
  secret: [
    "",
    "   ██████╗  ██╗   ██╗",
    "   ██╔══██╗ ╚██╗ ██╔╝",
    "   ██████╔╝  ╚████╔╝ ",
    "   ██╔═══╝    ╚██╔╝  ",
    "   ██║         ██║   ",
    "   ╚═╝         ╚═╝   ",
    "",
    "   Python e o caminho!",
    "   Easter egg encontrado! Voce e curioso!",
    ""
  ]
}

export function InteractiveTerminal() {
  const [lines, setLines] = useState<TerminalLine[]>([
    { type: "output", content: "Bem-vindo ao RichardVictor.dev Terminal v1.0" },
    { type: "output", content: "Digite 'help' para ver os comandos disponiveis." },
    { type: "output", content: "" }
  ])
  const [currentInput, setCurrentInput] = useState("")
  const [commandHistory, setCommandHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [lines])

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase()
    
    const newLines: TerminalLine[] = [
      ...lines,
      { type: "input", content: `$ ${cmd}` }
    ]

    if (trimmedCmd === "") {
      setLines(newLines)
      return
    }

    setCommandHistory(prev => [...prev, trimmedCmd])
    setHistoryIndex(-1)

    if (trimmedCmd === "clear") {
      setLines([
        { type: "output", content: "Terminal limpo." },
        { type: "output", content: "" }
      ])
      return
    }

    if (trimmedCmd === "github") {
      window.open("https://github.com/richardvictor-dev", "_blank")
      newLines.push({ type: "output", content: "Abrindo GitHub..." })
      setLines(newLines)
      return
    }

    if (trimmedCmd === "linkedin") {
      window.open("https://linkedin.com/in/richardvictor-dev", "_blank")
      newLines.push({ type: "output", content: "Abrindo LinkedIn..." })
      setLines(newLines)
      return
    }

    const response = commands[trimmedCmd]
    
    if (response) {
      if (Array.isArray(response)) {
        response.forEach(line => {
          newLines.push({ type: "output", content: line })
        })
      } else {
        newLines.push({ type: "output", content: response })
      }
    } else {
      newLines.push({ 
        type: "error", 
        content: `Comando nao encontrado: ${trimmedCmd}. Digite 'help' para ajuda.` 
      })
    }

    newLines.push({ type: "output", content: "" })
    setLines(newLines)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleCommand(currentInput)
      setCurrentInput("")
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      if (commandHistory.length > 0) {
        const newIndex = historyIndex < commandHistory.length - 1 ? historyIndex + 1 : historyIndex
        setHistoryIndex(newIndex)
        setCurrentInput(commandHistory[commandHistory.length - 1 - newIndex] || "")
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault()
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1
        setHistoryIndex(newIndex)
        setCurrentInput(commandHistory[commandHistory.length - 1 - newIndex] || "")
      } else if (historyIndex === 0) {
        setHistoryIndex(-1)
        setCurrentInput("")
      }
    }
  }

  return (
    <section id="terminal" className="py-24 px-6 lg:px-12">
      <div className="max-w-4xl">
        <div className="flex items-center gap-3 mb-12">
          <div className="h-px flex-1 max-w-12 bg-primary" />
          <h2 className="text-sm font-medium uppercase tracking-widest text-primary">
            Terminal
          </h2>
        </div>

        <Card className="bg-[#0d1117] border-border overflow-hidden">
          {/* Terminal Header */}
          <div className="flex items-center gap-2 px-4 py-3 bg-[#161b22] border-b border-border">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
            </div>
            <span className="text-xs text-muted-foreground ml-2 font-mono">
              richard@portfolio ~ bash
            </span>
          </div>

          {/* Terminal Body */}
          <div 
            ref={terminalRef}
            className="p-4 h-80 overflow-y-auto font-mono text-sm cursor-text"
            onClick={() => inputRef.current?.focus()}
          >
            {lines.map((line, i) => (
              <div 
                key={i} 
                className={`whitespace-pre-wrap ${
                  line.type === "input" 
                    ? "text-primary" 
                    : line.type === "error"
                    ? "text-red-400"
                    : "text-foreground/80"
                }`}
              >
                {line.content}
              </div>
            ))}
            
            {/* Input Line */}
            <div className="flex items-center text-primary">
              <span className="mr-2">$</span>
              <input
                ref={inputRef}
                type="text"
                value={currentInput}
                onChange={(e) => setCurrentInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent outline-none text-foreground caret-primary"
                autoFocus
                spellCheck={false}
              />
            </div>
          </div>
        </Card>

        <p className="text-sm text-muted-foreground mt-4 text-center">
          Dica: experimente digitar comandos como help, sobre, skills, projetos...
        </p>
      </div>
    </section>
  )
}
