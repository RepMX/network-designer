"use client"

import { Mail, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ContactButton } from "@/components/contact-button"

export function Footer() {
  const handleScroll = (e: React.MouseEvent, targetId: string) => {
    e.preventDefault()

    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      window.history.pushState(null, "", `#${targetId}`)
    } else {
      window.location.hash = targetId
    }
  }

  return (
    <footer id="contact" className="select-none py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl text-balance">
            Ready to Optimize Your Network?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Let us audit your current infrastructure and future requirements to design the optimal solution for your home and business spaces.
          </p>
          <div className="mt-10">
            <ContactButton />
          </div>
        </div>

        {/* Footer bottom */}
        <div className="mt-24 border-t border-border/50 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">jedy</span> — Network & Smart Home Infrastructure Design
            </div>
            <div className="flex items-center gap-6">
              <a
                href="#philosophy"
                onClick={(e) => handleScroll(e, "philosophy")}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground cursor-pointer"
              >
                Philosophy
              </a>
              <a
                href="#services"
                onClick={(e) => handleScroll(e, "services")}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground cursor-pointer"
              >
                Pricing
              </a>
              <a
                href="#blueprints"
                onClick={(e) => handleScroll(e, "blueprints")}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground cursor-pointer"
              >
                Blueprints
              </a>
              <a
                href="#protocol"
                onClick={(e) => handleScroll(e, "protocol")}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground cursor-pointer"
              >
                Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}