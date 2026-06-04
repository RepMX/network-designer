import { ArrowRight, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { NetworkTopology } from "@/components/network-topology"

export function HeroSection() {
  return (
    <section className="relative pt-16 overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-40" />
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="max-w-2xl">
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
              Enterprise Network Architecture.{" "}
              <span className="text-primary">Engineered for Premium Spaces.</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground lg:text-xl">
              Independent blueprint design, security hardening, and local-first automation. 
              Zero hardware markup. Zero monthly subscription fees.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 px-6 py-3"
              >
                <a href="#contact">
                  Request a Diagnostic Audit
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-border text-foreground hover:bg-secondary gap-2 px-6 py-3"
              >
                <a href="#blueprints">
                  <FileText className="h-4 w-4" />
                  View Reference Blueprints
                </a>
              </Button>
            </div>
          </div>

          {/* Right content - Network topology visualization */}
          <div className="relative">
            <NetworkTopology />
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
