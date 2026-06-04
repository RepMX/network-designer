"use client"

import { MapPin, ShieldCheck, Zap, Globe } from "lucide-react"

const regions = [
  {
    name: "Los Angeles County",
    areas: "Metro LA, Westside, South Bay, San Fernando Valley, San Gabriel Valley",
  },
  {
    name: "Orange County",
    areas: "North OC, Coastal OC, South County, Irvine Core",
  },
  {
    name: "Surrounding Metros",
    areas: "Inland Empire (West) and Select Ventura County corridors",
  },
]

export function ServiceArea() {
  return (
    <section id="coverage" className="select-none py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          
          {/* Left Column: Copy & Regions */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">
              Coverage Zone
            </h2>
            <p className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl text-balance">
              Serving the Greater Los Angeles Area
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Based locally to engineer elite, low-latency residential and commercial environments. We provide comprehensive on-site diagnostic audits, precision physical hardware placement, and clean infrastructure integration across Southern California.
            </p>

            <div className="mt-10 space-y-6">
              {regions.map((region) => (
                <div 
                  key={region.name} 
                  className="flex gap-4 p-4 rounded-xl border border-border/40 bg-card/30"
                >
                  <MapPin className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
                  <div>
                    <h4 className="text-sm font-medium text-foreground">{region.name}</h4>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                      {region.areas}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-6 text-xs text-muted-foreground border-t border-border/40 pt-6">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-primary" /> On-Site Engineering
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-primary" /> Rapid Local Deployment
              </div>
            </div>
          </div>

          {/* Right Column: Styled Map Container */}
          <div className="relative aspect-square w-full max-w-xl mx-auto rounded-xl border border-border/50 bg-muted/20 overflow-hidden shadow-2xl shadow-primary/5 group">
            {/* 
              PRO TIP: If using Mapbox/Google Maps, insert your canvas or themed iFrame here. 
              Below is a sleek custom-engineered placeholder that blends into your theme.
            */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
            
            {/* Visual Abstract Map Radar / Indicator */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute h-48 w-48 rounded-full border border-primary/20 bg-primary/5 animate-pulse" />
              <div className="absolute h-80 w-80 rounded-full border border-primary/10 bg-primary/[0.02]" />
              
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </div>
            </div>
            
            {/* Corner UI Details */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-lg border border-border/50 bg-background/80 backdrop-blur-md px-4 py-2.5 text-xs text-foreground font-medium">
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                On-Site Audits Available
              </span>
              <span className="text-muted-foreground">HQ: Los Angeles, CA</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}