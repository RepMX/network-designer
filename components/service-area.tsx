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

          {/* Right Column: Centered Macro Blueprint Map Viewport */}
          <div className="relative aspect-square w-full max-w-xl mx-auto rounded-xl border border-border/50 bg-[#070a12] overflow-hidden shadow-2xl shadow-primary/5">
            <div className="absolute inset-0 w-full h-full">
              
              <svg 
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 400 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Blueprint Grid Lines */}
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
                  d="M 0,150 Q 60,170 125,215 Q 160,255 185,265 Q 240,300 285,350 T 340,400 L 0,400 Z" 
                  className="fill-background/60 stroke-border/60"
                  strokeWidth="1.5"
                />

                {/* Main Transportation Infrastructure Matrix */}
                {/* US-101 / I-5 Axis (Thousand Oaks -> SF Valley -> DTLA -> Anaheim -> Irvine) */}
                <path d="M 0,110 Q 60,125 110,140 Q 160,165 190,195 Q 245,250 285,300 T 370,400" className="stroke-muted-foreground/35" strokeWidth="1.25" />
                
                {/* I-10 Corridor (Santa Monica -> DTLA -> Inland Empire Corridor) */}
                <path d="M 125,215 L 190,195 L 300,195 L 400,195" className="stroke-muted-foreground/35" strokeWidth="1.25" />
                
                {/* I-405 Coastal Pipeline */}
                <path d="M 110,140 Q 120,210 145,245 Q 185,265 245,250 T 285,300" className="stroke-primary/40" strokeWidth="1" strokeDasharray="2 2" />

                {/* SR-91 Cross-Basin Connector (South Bay -> Anaheim -> Corona) */}
                <path d="M 155,255 L 245,250 Q 295,245 330,240" className="stroke-muted-foreground/25" strokeWidth="1" />

                {/* I-210 Foothills Pipeline (Pasadena -> Rancho Cucamonga) */}
                <path d="M 110,140 L 195,140 L 305,140 L 400,140" className="stroke-muted-foreground/25" strokeWidth="1" />

                {/* STATIC CONCENTRIC BROADCAST FIELDS (Centered exactly on the DTLA infrastructure hub) */}
                <circle cx="190" cy="195" r="155" className="stroke-primary/25 fill-primary/[0.01] animate-pulse" strokeWidth="1" />
                <circle cx="190" cy="195" r="105" className="stroke-primary/10 fill-transparent" strokeWidth="1" />
                <circle cx="190" cy="195" r="55" className="stroke-foreground/[0.03] fill-transparent" strokeWidth="1" />

                {/* Blueprint Sector Technical Indicators */}
                <g className="font-sans text-[8px] fill-muted-foreground/30 font-semibold tracking-widest uppercase">
                  <text x="135" y="165">LA CORE</text>
                  <text x="240" y="280">OC SOUTH</text>
                  <text x="260" y="175">IE GATE</text>
                </g>

                {/* Regional City Node Placement Markers */}
                <g className="font-sans text-[9px] fill-muted-foreground font-medium tracking-wider uppercase">
                  <text x="20" y="125" className="fill-foreground/90 font-semibold">Thousand Oaks</text>
                  <text x="85" y="70" className="fill-muted-foreground/40">Santa Clarita</text>
                  <text x="45" y="190" className="fill-muted-foreground/40">Malibu</text>
                  <text x="75" y="222">Santa Monica</text>
                  <text x="195" y="140">Pasadena</text>
                  <text x="195" y="202" className="fill-foreground font-bold">DTLA</text>
                  <text x="140" y="282" className="fill-foreground font-semibold">Long Beach</text>
                  <text x="245" y="242">Anaheim</text>
                  <text x="295" y="305" className="fill-foreground/90">Irvine</text>
                  <text x="235" y="345" className="fill-muted-foreground/50">Newport</text>
                  <text x="300" y="190">Ontario</text>
                  <text x="265" y="115" className="fill-muted-foreground/50">Rancho Cucamonga</text>
                  <text x="310" y="250">Corona</text>
                </g>

                {/* Core Unified Infrastructure Node */}
                <circle cx="190" cy="195" r="7" className="fill-primary/20 animate-ping" />
                <circle cx="190" cy="195" r="3.5" className="fill-primary" filter="drop-shadow(0 0 6px #3b82f6)" />
              </svg>

            </div>
            
            {/* Heads-Up Display Panel Overlay */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-lg border border-border/50 bg-background/90 backdrop-blur-md px-4 py-2.5 text-xs text-foreground font-medium shadow-md pointer-events-none select-none z-20 font-sans">
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Macro Scope: Full Operational Footprint
              </span>
              <span className="text-muted-foreground">HQ: Los Angeles, CA</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}