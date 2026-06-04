import { Mail, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ContactButton } from "@/components/contact-button"

export function Footer() {
  return (
    <footer id="contact" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl text-balance">
            Ready to Engineer Your Network?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Start with a diagnostic audit to understand your current infrastructure and future requirements.
          </p>

          <div className="mt-10">
            <ContactButton />
          </div>
        </div>

        {/* Footer bottom */}
        <div className="mt-24 border-t border-border/50 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">JEDY</span> — Independent Systems Engineering & Network Architecture Designer
            </div>
            <div className="flex items-center gap-6">
              <a
                href="#philosophy"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Philosophy
              </a>
              <a
                href="#services"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Services
              </a>
              <a
                href="#blueprints"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Blueprints
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
