import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-8 px-6 lg:px-12 border-t border-border">
      <div className="max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © 2026 Richard Victor
        </p>
        <p className="text-sm text-muted-foreground flex items-center gap-1">
          Desenvolvido com{" "}
          <Heart className="h-4 w-4 text-primary fill-primary" />{" "}
          por tecnologia.
        </p>
      </div>
    </footer>
  )
}
