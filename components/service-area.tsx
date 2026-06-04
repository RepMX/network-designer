"use client"

import { useState } from "react"
import { MapPin, ShieldCheck, Zap } from "lucide-react"

const regions = [
  {
    id: "la",
    name: "Los Angeles County",
    areas: "Metro LA, Westside, South Bay, San Fernando Valley, San Gabriel Valley",
    // Clean, centered placement values within the unscaled, static 400x400 map space
    beaconPos: "top-[46%] left-[45%]",
    coverageRadius: "h-64 w-64",
  },
  {
    id: "oc",
    name: "Orange County",
    areas: "North OC, Central OC, Irvine, Newport, Huntington, Laguna Beach",
    beaconPos: "top-[64%] left-[62%]",
    coverageRadius: "h-56 w-56",
  },
  {
    id: "ie",
    name: "Inland Empire",
    areas: "Western corridors, Ontario, Rancho Cucamonga, Corona",
    beaconPos: "top-[48%] left-[76%]",
    coverageRadius: "h-64 w-64",
  },
]

export function ServiceArea() {
  const [activeRegion, setActiveRegion] = useState<string | null>(null)
  const activeBeacon = activeRegion ? regions.find(r => r.id === activeRegion) : null

  return (
    <section id="coverage" className="select-none py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          
          {/* Left Column: Region Selector Lists (Triggered via Hover) */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">
              Coverage Zone
            </h2>
            <p className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl text-balance">
              Serving the Greater Los Angeles Area
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Based locally to engineer elite, low-latency infrastructure environments. Hover over a region to inspect our on-site service boundaries and active deployment ranges.
            </p>

            <div className="mt-10 space-y-4">
              {regions.map((region) => {
                const isSelected = activeRegion === region.id
                return (
                  <div
                    key={region.id}
                    onMouseEnter={() => setActiveRegion(region.id)}
                    onMouseLeave={() => setActiveRegion(null)}
                    className={`w-full text-left relative overflow-hidden flex gap-4 p-5 rounded-xl border transition-all duration-300 outline-none ${
                      isSelected
                        ? "border-primary bg-card shadow-lg shadow-primary/5"
                        : "border-border/40 bg-card/30"
                    }`}
                  >
                    {/* Background interactive gradient glow */}
                    <div 
                      className={`absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent transition-opacity duration-300 ${
                        isSelected ? "opacity-100" : "opacity-0"
                      }`} 
                    />
                    
                    <div className="relative flex gap-4 w-full z-10">
                      <MapPin className={`h-5 w-5 flex-shrink-0 mt-0.5 transition-colors duration-300 ${
                        isSelected ? "text-primary scale-110" : "text-muted-foreground"
                      }`} />
                      <div>
                        <h4 className={`text-sm font-semibold transition-colors duration-300 ${
                          isSelected ? "text-primary" : "text-foreground"
                        }`}>
                          {region.name}
                        </h4>
                        <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                          {region.areas}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
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

          {/* Right Column: Detailed High-Contrast Static Blueprint Map Viewport */}
          <div className="relative aspect-square w-full max-w-xl mx-auto rounded-xl border border-border/50 bg-[#070a12] overflow-hidden shadow-2xl shadow-primary/5">
            
            {/* Map Vector Base Canvas (Completely Static Framing) */}
            <div className="absolute inset-0 w-full h-full">
              
              <svg 
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 400 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Visual Technical Blueprint Grid Layout */}
                <defs>
                  <pattern id="grid-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeOpacity="0.03" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid-pattern)" />

                {/* Topographic Terrain Accents (San Gabriel / San Bernardino mountain baseline vectors) */}
                <path d="M 80,60 Q 140,40 220,55 T 380,45" className="stroke-border/25" strokeWidth="1" strokeDasharray="4 4" />
                <path d="M 100,75 Q 180,60 260,70 T 400,65" className="stroke-border/15" strokeWidth="0.75" />

                {/* High Contrast Ocean Boundaries / Coastal Geometry */}
                <path 
                  d="M 0,180 L 60,180 Q 115,190 135,225 Q 165,275 195,275 Q 225,285 245,305 T 310,365 T 360,400 L 0,400 Z" 
                  className="fill-background/60 stroke-border/60"
                  strokeWidth="1.5"
                />

                {/* Primary Core Freeway Infrastructure (Brightened for high-contrast visibility) */}
                {/* I-10 Corridor (Santa Monica -> DTLA -> San Gabriel Valley -> Ontario) */}
                <path d="M 134,223 L 195,220 L 315,220 L 400,220" className="stroke-muted-foreground/35" strokeWidth="1.25" />
                
                {/* I-5 Axis (San Fernando Valley -> DTLA -> Anaheim -> Irvine / South OC) */}
                <path d="M 120,100 Q 170,160 195,220 Q 255,275 285,300 T 360,400" className="stroke-muted-foreground/35" strokeWidth="1.25" />
                
                {/* I-405 Coastal Bypass Pipeline */}
                <path d="M 125,120 Q 130,200 155,240 Q 200,270 240,295 T 315,350" className="stroke-primary/40" strokeWidth="1" strokeDasharray="2 2" />

                {/* SR-91 Cross Connector (South Bay -> Anaheim / Fullerton -> Corona Corridor) */}
                <path d="M 155,240 Q 210,250 250,250 L 340,250" className="stroke-muted-foreground/25" strokeWidth="1" />

                {/* I-210 Foothills Pipeline (Pasadena -> Rancho Cucamonga -> San Bernardino Corridor) */}
                <path d="M 160,130 L 220,130 L 320,130 L 400,130" className="stroke-muted-foreground/25" strokeWidth="1" />

                {/* Geographically Aligned Architecture Node Labels (Clean Sans-Serif Project Font) */}
                <g className="font-sans text-[9px] fill-muted-foreground font-medium tracking-wider uppercase">
                  <text x="45" y="165" className="fill-muted-foreground/50">Malibu</text>
                  <text x="85" y="248">Santa Monica</text>
                  <text x="182" y="120">Pasadena</text>
                  <text x="195" y="210" className="fill-foreground font-semibold">DTLA</text>
                  <text x="145" y="295">Long Beach</text>
                  <text x="238" y="240">Anaheim</text>
                  <text x="292" y="325" className="fill-foreground/90">Irvine</text>
                  <text x="250" y="370" className="fill-muted-foreground/50">Newport</text>
                  <text x="310" y="212">Ontario</text>
                  <text x="285" y="115" className="fill-muted-foreground/50">Rancho Cucamonga</text>
                  <text x="338" y="270">Corona</text>
                </g>
              </svg>

              {/* DYNAMIC HOVER-DRIVEN BEACON MATRIX */}
              {/* Positions perfectly on top of vector assets without any zoom cutting or clipping edges */}
              <div className={`absolute transition-all duration-500 ease-in-out flex items-center justify-center ${
                activeBeacon ? activeBeacon.beaconPos : "top-[53%] left-[54%]"
              }`}>
                {/* Concentric Signal Coverage Fields */}
                <div className={`absolute rounded-full border border-primary/30 bg-primary/[0.02] animate-pulse transition-all duration-500 ${
                  activeBeacon ? activeBeacon.coverageRadius : "h-[280px] w-[280px]"
                }`} />
                <div className={`absolute rounded-full border border-primary/15 bg-transparent transition-all duration-500 ${
                  activeBeacon ? "h-32 w-32" : "h-48 w-48"
                }`} />
                <div className={`absolute rounded-full border border-foreground/[0.04] bg-transparent transition-all duration-500 ${
                  activeBeacon ? "h-16 w-16" : "h-24 w-24"
                }`} />

                {/* Core Network Pulse Node */}
                <div className="relative flex h-3.5 w-3.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-primary shadow-[0_0_14px_rgba(59,130,246,0.75)]"></span>
                </div>
              </div>

            </div>
            
            {/* Heads-Up Display Panel Overlay */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-lg border border-border/50 bg-background/90 backdrop-blur-md px-4 py-2.5 text-xs text-foreground font-medium shadow-md pointer-events-none select-none z-20 font-sans">
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                {activeRegion ? `${regions.find(r => r.id === activeRegion)?.name} Highlight` : "Macro Scope: Full Coverage"}
              </span>
              <span className="text-muted-foreground">HQ: Los Angeles, CA</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}