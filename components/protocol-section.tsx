"use client"

import { Clock, Sliders, Wrench, ShieldCheck, ArrowRight } from "lucide-react"

export function ProtocolSection() {
  return (
    <section id="protocol" className="py-24 lg:py-32 bg-muted/30 scroll-mt-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">
            Lifecycle & Support
          </h2>
          <p className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            The Post-Handover Protocol
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            A structured operational framework ensuring immediate system stability and predictable long-term maintenance.
          </p>
        </div>

        <div className="mx-auto max-w-5xl space-y-12">
          
          {/* Highlighted Phase 1: 30-Day Tuning */}
          <div className="relative overflow-hidden rounded-xl border border-primary/20 bg-gradient-to-br from-card to-primary/5 p-8 lg:p-12 shadow-md">
            {/* Corner Badge */}
            <div className="absolute top-0 right-0 rounded-bl-lg bg-primary px-4 py-1 text-xs font-semibold tracking-wider uppercase text-primary-foreground">
              Included
            </div>

            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Sliders className="h-7 w-7" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-primary">Phase 01 // Immediate</span>
                <h3 className="text-2xl font-semibold tracking-tight text-foreground mt-0.5">
                  30-Day Bespoke Systems Tuning & Optimization
                </h3>
              </div>
            </div>

            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-4xl">
              This is not a passive break-fix warranty. During the initial 30 days under production loads, we actively monitor local telemetry, perform RF environment channel audits to eliminate neighborhood interference, and refine firewall rules. We do not disappear after installation—we optimize for reality.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3 border-t border-border/40 pt-6">
              <div className="flex items-center gap-2 text-sm text-foreground/80">
                <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                RF Channel Optimization
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground/80">
                <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                VLAN Traffic Balancing
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground/80">
                <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                Firewall Rule Hardening
              </div>
            </div>
          </div>

          {/* Section Divider Hint */}
          <div className="flex items-center justify-center gap-4 text-muted-foreground/40 px-4">
            <div className="h-[1px] w-full bg-border/50" />
            <Clock className="h-5 w-5 shrink-0 text-muted-foreground/60" />
            <span className="text-xs font-medium tracking-widest uppercase shrink-0 text-muted-foreground/60">Day 31 & Beyond Support Matrix</span>
            <div className="h-[1px] w-full bg-border/50" />
          </div>

          {/* Highlighted Phase 2: The Two Support Options Side-by-Side */}
          <div className="grid gap-6 md:grid-cols-2">
            
            {/* Option A: Pay-As-You-Go */}
            <div className="flex flex-col justify-between rounded-xl border border-border/50 bg-card/60 p-8 hover:border-border/80 transition-all">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted text-foreground">
                  <Wrench className="h-5 w-5" />
                </div>
                <h4 className="mt-4 text-xl font-semibold text-foreground">
                  On-Demand Diagnostics
                </h4>
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mt-0.5">
                  Flat-Rate Pay-As-You-Go Model
                </p>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                  Best for stable, self-sufficient deployments. If an architectural modification or device integration is desired down the line, we offer a predictable, flat-rate service model. Any additional hardware may be purchased off-the-shelf with zero mark-up—we handle the installation and re-configuration. Zero recurring overhead, zero hidden fees.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-border/30 flex items-center justify-between text-xs font-semibold tracking-wider uppercase text-muted-foreground">
                <span>Predictable Tier</span>
                <span className="text-foreground">$0 Monthly Fees</span>
              </div>
            </div>

            {/* Option B: Retainer / Subscription */}
            <div className="flex flex-col justify-between rounded-xl border border-border/50 bg-card/60 p-8 hover:border-border/80 transition-all relative">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h4 className="mt-4 text-xl font-semibold text-foreground">
                  Continuous Coverage
                </h4>
                <p className="text-xs font-medium uppercase tracking-wider text-primary mt-0.5">
                  Remote Maintenance Subscription
                </p>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                  Best for mission-critical remote work loops, smart homes requiring remote oversight, and environments utilizing self-hosted infrastructure. Includes continuous remote dashboard health monitoring, coordinated off-hours firmware security patching, and high-priority emergency response. Clear upfront terms, zero hidden fees.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-border/30 flex items-center justify-between text-xs font-semibold tracking-wider uppercase text-primary">
                <span>Proactive Support</span>
                <span>24/7 Coverage</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}