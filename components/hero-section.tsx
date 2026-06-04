"use client"

import { ArrowRight, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { NetworkTopology } from "@/components/network-topology"

export function HeroSection() {
  const handleScroll = (targetId: string) => {
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      window.history.pushState(null, "", `#${targetId}`)
    } else {
      window.location.hash = targetId
    }
  }

  return (
    <section className="relative pt-16 overflow-hidden select-none">
      {/* Subtle grid background - Pushed back and clicks disabled */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-40 pointer-events-none z-0" />
      
      {/* Content wrapper elevated to z-10 to ensure clear stacking context */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left content */}
          <div className="max-w-2xl">
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
              Enterprise Network Architecture.{" "}
              <span className="text-primary">Engineered for Premium Spaces.</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground lg:text-xl">
              Modern network blueprint design, internet security hardening, and local-first surveillance and automation. Zero hardware markup. Zero monthly subscription fees.
            </p>
            
            {/* Added items-start to prevent buttons from stretching vertically in flex columns */}
            <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Button
                size="lg"
                onClick={() => handleScroll("contact")}
                className="bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 gap-2.5 group whitespace-nowrap cursor-pointer relative z-20"
              >
                Request an Audit
                <ArrowRight className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                onClick={() => handleScroll("blueprints")}
                className="border-border text-foreground hover:bg-secondary hover:border-muted-foreground/30 gap-2.5 group whitespace-nowrap cursor-pointer relative z-20"
              >
                <FileText className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:scale-110" />
                View Blueprints
              </Button>
            </div>
          </div>

          {/* Right content - Network topology visualization */}
          <div className="relative z-10 w-full flex items-center justify-center lg:justify-end mt-4 sm:mt-8 lg:mt-0">
            <NetworkTopology />
          </div>
        </div>
      </div>

      {/* Bottom gradient fade - Clicks disabled to prevent button tracking dead-zones */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none z-0" />
    </section>
  )
}