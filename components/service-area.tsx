"use client"

import { MapPin, ShieldCheck, Zap } from "lucide-react"

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

            {/* Region Selection Matrix with Philosophy Card Hover Effects */}
            <div className="mt-10 space-y-6">
              {regions.map((region) => (
                <div 
                  key={region.name} 
                  className="group relative overflow-hidden flex gap-4 p-4 rounded-xl border border-border/40 bg-card/30 transition-all duration-300 hover:border-primary/50 hover:bg-card"
                >
                  {/* Subtle glow on hover - exact duplicate from Philosophy Section */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  
                  {/* Relative container to stack properly above the glow asset */}
                  <div className="relative flex gap-4 w-full">
                    <MapPin className="h-5 w-5 flex-shrink-0 text-primary mt-0.5 transition-transform duration-300 group-hover:scale-110" />
                    <div>
                      <h4 className="text-sm font-medium text-foreground transition-colors duration-300 group-hover:text-primary">
                        {region.name}
                      </h4>
                      <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                        {region.areas}
                      </p>
                    </div>
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

          {/* Right Column: High-Visibility Vector Blueprint Map Container */}
          <div className="relative aspect-square w-full max-w-xl mx-auto rounded-xl border border-border/50 bg-muted/10 overflow-hidden shadow-2xl shadow-primary/5 group">
            
            {/* Highly Visible Southern California Topo-Network Vector Array */}
            <svg 
              className="absolute inset-0 h-full w-full stroke-muted-foreground/20 [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_70%,transparent_100%)]" 
              aria-hidden="true"
            >
              <defs>
                <pattern id="map-grid" width="32" height="32" patternUnits="userSpaceOnUse">
                  <path d="M 32 0 L 0 0 0 32" fill="none" strokeWidth="0.5" className="stroke-foreground/[0.04]" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#map-grid)" />
              
              {/* Stylized Abstract Coastal Geography / Network Topology lines */}
              <path 
                d="M-50,120 Q100,200 220,280 T480,420 T700,480" 
                fill="none" 
                strokeWidth="1.5" 
                className="stroke-muted-foreground/30 dash-array-2" 
              />
              <path 
                d="M-20,160 Q140,240 260,320 T520,460 T750,520" 
                fill="none" 
                strokeWidth="1" 
                className="stroke-primary/20" 
              />
              
              {/* Interconnected Service Link Matrices */}
              <line x1="260" y1="220" x2="340" y2="300" strokeWidth="1" className="stroke-primary/30 stroke-dasharray-[2_4]" />
              <line x1="340" y1="300" x2="420" y2="260" strokeWidth="1" className="stroke-primary/20" />
              <line x1="340" y1="300" x2="220" y2="360" strokeWidth="1" className="stroke-muted-foreground/20" />
            </svg>
            
            {/* Visual Active Radar Map Center Node */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute h-40 w-40 rounded-full border border-primary/30 bg-primary/5 animate-pulse" />
              <div className="absolute h-72 w-72 rounded-full border border-primary/10 bg-primary/[0.01]" />
              <div className="absolute h-96 w-96 rounded-full border border-border/40" />
              
              {/* Core Active Beacon */}
              <div className="relative flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-primary shadow-lg shadow-primary"></span>
              </div>
            </div>
            
            {/* Corner UI Details */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-lg border border-border/50 bg-background/90 backdrop-blur-md px-4 py-2.5 text-xs text-foreground font-medium shadow-sm">
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
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