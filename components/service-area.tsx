"use client"

import { MapPin, ShieldCheck, Zap } from "lucide-react"

const regions = [
  {
    id: "la",
    name: "Los Angeles County",
    areas: "Metro LA, Westside, South Bay, San Fernando Valley, San Gabriel Valley",
  },
  {
    id: "oc",
    name: "Orange County",
    areas: "North OC, Central OC, Irvine, Newport, Huntington, Laguna Beach",
  },
  {
    id: "ie",
    name: "Inland Empire",
    areas: "Western corridors, Ontario, Rancho Cucamonga, Corona",
  },
]

export function ServiceArea() {
  return (
    <section id="coverage" className="select-none py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          
          {/* Left Column: Region Informational Cards (Pure CSS Hover Highlighting) */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">
              Coverage Zone
            </h2>
            <p className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl text-balance">
              Serving the Greater Los Angeles Area
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Our active engineering footprint spans across Southern California to deploy elite, low-latency infrastructure environments.
            </p>

            <div className="mt-10 space-y-4">
              {regions.map((region) => (
                <div
                  key={region.id}
                  className="group w-full text-left relative overflow-hidden flex gap-4 p-5 rounded-xl border border-border/40 bg-card/30 hover:border-primary hover:bg-card transition-all duration-300"
                >
                  {/* Subtle hover gradient glow layer */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative flex gap-4 w-full z-10">
                    <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5 text-muted-foreground group-hover:text-primary group-hover:scale-110 transition-all duration-300" />
                    <div>
                      <h4 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
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
                <ShieldCheck className="h-4 w-4 text-primary" /> On-Site Diagnostic Audits
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-primary" /> Multi-County Deployment
              </div>
            </div>
          </div>

          {/* Right Column: High-Contrast Zoomed Out Macro Blueprint Map */}
          <div className="relative aspect-square w-full max-w-xl mx-auto rounded-xl border border-border/50 bg-[#070a12] overflow-hidden shadow-2xl shadow-primary/5">
            <div className="absolute inset-0 w-full h-full">
              
              <svg 
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 400 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Blueprint Grid Gridlines */}
                <defs>
                  <pattern id="static-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeOpacity="0.03" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#static-grid)" />

                {/* Topographic Mountain Accents (San Gabriel / Mountain Ranges) */}
                <path d="M 40,50 Q 130,30 220,45 T 400,35" className="stroke-border/20" strokeWidth="1" strokeDasharray="4 4" />
                <path d="M 80,65 Q 180,50 280,60 T 400,55" className="stroke-border/10" strokeWidth="0.75" />

                {/* Regional Ocean Shape (Zoomed out further West to fit Thousand Oaks/Ventura lines) */}
                <path 
                  d="M 0,110 L 25,110 Q 55,145 70,175 Q 110,230 145,245 Q 160,270 175,270 Q 190,275 205,290 T 275,355 T 340,400 L 0,400 Z" 
                  className="fill-background/60 stroke-border/60"
                  strokeWidth="1.5"
                />

                {/* Main Transportation Infrastructure Matrix */}
                {/* US-101 / I-5 Axis (Thousand Oaks -> SF Valley -> DTLA -> Anaheim -> Irvine) */}
                <path d="M 15,105 Q 75,125 110,145 Q 155,185 175,205 Q 235,255 265,280 T 340,375" className="stroke-muted-foreground/35" strokeWidth="1.25" />
                
                {/* I-10 Corridor (Santa Monica -> DTLA -> Inland Empire Corridor) */}
                <path d="M 110,220 L 175,205 L 295,205 L 400,205" className="stroke-muted-foreground/35" strokeWidth="1.25" />
                
                {/* I-405 Coastal Pipeline */}
                <path d="M 112,148 Q 120,210 140,242 Q 180,268 210,290 T 290,350" className="stroke-primary/40" strokeWidth="1" strokeDasharray="2 2" />

                {/* SR-91 Cross-Basin Connector (South Bay -> Anaheim -> Corona) */}
                <path d="M 148,252 Q 205,260 238,260 L 325,260" className="stroke-muted-foreground/25" strokeWidth="1" />

                {/* I-210 Foothills Pipeline (Pasadena -> Rancho Cucamonga) */}
                <path d="M 135,125 L 200,125 L 305,125 L 400,125" className="stroke-muted-foreground/25" strokeWidth="1" />

                {/* Regional City Node Placement Markers */}
                <g className="font-sans text-[9px] fill-muted-foreground font-medium tracking-wider uppercase">
                  <text x="12" y="95" className="fill-foreground/80 font-semibold">Thousand Oaks</text>
                  <text x="45" y="190" className="fill-muted-foreground/50">Malibu</text>
                  <text x="80" y="242">Santa Monica</text>
                  <text x="150" y="115">Pasadena</text>
                  <text x="182" y="200" className="fill-foreground font-semibold">DTLA</text>
                  <text x="165" y="300" className="fill-foreground font-semibold">Long Beach</text>
                  <text x="225" y="252">Anaheim</text>
                  <text x="275" y="315" className="fill-foreground/90">Irvine</text>
                  <text x="220" y="340" className="fill-muted-foreground/50">Newport</text>
                  <text x="295" y="200">Ontario</text>
                  <text x="270" y="115" className="fill-muted-foreground/50">Rancho Cucamonga</text>
                  <text x="320" y="275">Corona</text>
                </g>
              </svg>

              {/* STATIC REGIONAL COVERAGE BEACON */}
              {/* Perfectly centered to cleanly project the radial lines without crossing bounding box edges */}
              <div className="absolute top-[50%] left-[52%] transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none">
                {/* Fixed Macro Coverage Fields */}
                <div className="absolute rounded-full border border-primary/25 bg-primary/[0.015] animate-pulse h-[350px] w-[350px]" />
                <div className="absolute rounded-full border border-primary/10 bg-transparent h-[230px] w-[230px]" />
                <div className="absolute rounded-full border border-foreground/[0.03] bg-transparent h-[120px] w-[120px]" />

                {/* Core Network Beacon Light */}
                <div className="relative flex h-3.5 w-3.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-primary shadow-[0_0_14px_rgba(59,130,246,0.8)]"></span>
                </div>
              </div>

            </div>
            
            {/* Heads-Up Display Panel Overlay */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-lg border border-border/50 bg-background/90 backdrop-blur-md px-4 py-2.5 text-xs text-foreground font-medium shadow-md pointer-events-none select-none z-20 font-sans">
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Active Operations Matrix
              </span>
              <span className="text-muted-foreground">HQ: Los Angeles, CA</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}