"use client"

import { useState } from "react"
import { MapPin, ShieldCheck, Zap } from "lucide-react"

const regions = [
  {
    id: "la",
    name: "Los Angeles County",
    areas: "Metro LA, Westside, South Bay, San Fernando Valley, San Gabriel Valley",
    // Focuses map translation directly on the LA Basin / Westside core
    mapView: "transform translate-x-[20px] translate-y-[-10px] scale-[1.4]",
    beaconPos: "top-[48%] left-[42%]",
    coverageRadius: "h-64 w-64",
  },
  {
    id: "oc",
    name: "Orange County",
    areas: "North OC, Central OC, Irvine, Newport, Huntington, Laguna Beach",
    // Glides down the coast to lock onto Irvine / Newport corridor
    mapView: "transform translate-x-[-60px] translate-y-[-110px] scale-[1.6]",
    beaconPos: "top-[68%] left-[64%]",
    coverageRadius: "h-56 w-56",
  },
  {
    id: "ie",
    name: "Inland Empire",
    areas: "Western corridors, Ontario, Rancho Cucamonga, Corona",
    // Shifts eastward along the I-10 / I-60 pipeline
    mapView: "transform translate-x-[-110px] translate-y-[-40px] scale-[1.5]",
    beaconPos: "top-[46%] left-[78%]",
    coverageRadius: "h-72 w-72",
  },
]

export function ServiceArea() {
  const [activeRegion, setActiveRegion] = useState<string | null>(null)

  const currentView = activeRegion 
    ? regions.find(r => r.id === activeRegion)?.mapView 
    : "transform translate-x-0 translate-y-0 scale-100"

  const activeBeacon = activeRegion ? regions.find(r => r.id === activeRegion) : null

  return (
    <section id="coverage" className="select-none py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          
          {/* Left Column: Region Selectors */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">
              Coverage Zone
            </h2>
            <p className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl text-balance">
              Serving the Greater Los Angeles Area
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Based locally to engineer elite, low-latency infrastructure environments. Click a region to inspect our on-site service boundaries and active deployment ranges.
            </p>

            <div className="mt-10 space-y-4">
              {regions.map((region) => {
                const isSelected = activeRegion === region.id
                return (
                  <button
                    key={region.id}
                    onClick={() => setActiveRegion(isSelected ? null : region.id)}
                    className={`w-full text-left relative overflow-hidden flex gap-4 p-5 rounded-xl border transition-all duration-300 outline-none cursor-pointer ${
                      isSelected
                        ? "border-primary bg-card shadow-lg shadow-primary/5"
                        : "border-border/40 bg-card/30 hover:border-border hover:bg-card"
                    }`}
                  >
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
                  </button>
                )
              })}

              {activeRegion && (
                <button
                  onClick={() => setActiveRegion(null)}
                  className="text-xs font-semibold text-primary hover:text-primary/80 transition-colors px-2 cursor-pointer"
                >
                  ← Zoom out to view full coverage range
                </button>
              )}
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

          {/* Right Column: Geographically Accurate SoCal Map Viewport */}
          <div className="relative aspect-square w-full max-w-xl mx-auto rounded-xl border border-border/50 bg-[#070a12] overflow-hidden shadow-2xl shadow-primary/5">
            
            {/* Motion Canvas Container */}
            <div className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out ${currentView}`}>
              
              {/* Geographically Accurate High-Contrast Vector Map */}
              <svg 
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 400 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Visual Grid System */}
                <defs>
                  <pattern id="grid-pattern" width="24" height="24" patternUnits="userSpaceOnUse">
                    <path d="M 24 0 L 0 0 0 24" fill="none" stroke="white" strokeOpacity="0.02" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid-pattern)" />

                {/* Ocean Block (Shaded fill to immediately outline the landmass shape) */}
                {/* Path tracks real coastline contour: Malibu -> Santa Monica Bay -> Palos Verdes -> Long Beach -> Orange County */}
                <path 
                  d="M 0,180 L 60,180 Q 115,190 135,225 Q 165,275 195,275 Q 225,285 245,305 T 310,365 T 360,400 L 0,400 Z" 
                  className="fill-background/40 stroke-border/40"
                  strokeWidth="1"
                />

                {/* Major Freeway Architecture Lines (Drawn precisely along real paths) */}
                {/* Interstate 10: Santa Monica through DTLA directly to the Inland Empire */}
                <path d="M 134,223 L 195,220 L 400,220" className="stroke-muted-foreground/20" strokeWidth="1" />
                
                {/* Interstate 5: SF Valley down through DTLA, Anaheim, and South OC */}
                <path d="M 120,100 Q 170,160 195,220 Q 255,275 285,300 T 360,400" className="stroke-muted-foreground/20" strokeWidth="1" />
                
                {/* Interstate 405: Splits from I-5, hugs the coastline pass, curves through Long Beach & Orange County */}
                <path d="M 125,120 Q 130,200 155,240 Q 200,270 240,295 T 315,350" className="stroke-primary/20" strokeWidth="1" strokeDasharray="2 2" />

                {/* Geographic Text Markers (Using project's clean sans-serif styles) */}
                <g className="font-sans text-[9px] fill-muted-foreground/60 font-medium tracking-wider uppercase">
                  <text x="55" y="165">Malibu</text>
                  <text x="100" y="240">Santa Monica</text>
                  <text x="195" y="210" className="fill-foreground/70 font-semibold">DTLA</text>
                  <text x="160" y="295">Long Beach</text>
                  <text x="250" y="280">Anaheim</text>
                  <text x="285" y="325">Irvine</text>
                  <text x="330" y="205">Ontario</text>
                </g>
              </svg>

              {/* DYNAMIC SERVICE BEACON MATRIX */}
              <div className={`absolute transition-all duration-700 ease-in-out flex items-center justify-center ${
                activeBeacon ? activeBeacon.beaconPos : "top-[54%] left-[52%]"
              }`}>
                {/* Concentric Range Rings with crisp high contrast visibility */}
                <div className={`absolute rounded-full border border-primary/30 bg-primary/[0.03] animate-pulse transition-all duration-700 ${
                  activeBeacon ? activeBeacon.coverageRadius : "h-[340px] w-[340px]"
                }`} />
                <div className={`absolute rounded-full border border-primary/15 bg-transparent transition-all duration-700 ${
                  activeBeacon ? "h-32 w-32" : "h-56 w-56"
                }`} />
                <div className={`absolute rounded-full border border-foreground/[0.05] bg-transparent transition-all duration-700 ${
                  activeBeacon ? "h-16 w-16" : "h-28 w-28"
                }`} />

                {/* Core Glowing Node */}
                <div className="relative flex h-3.5 w-3.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-primary shadow-[0_0_12px_rgba(59,130,246,0.6)]"></span>
                </div>
              </div>

            </div>
            
            {/* Heads-Up Display Panel Overlay */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-lg border border-border/50 bg-background/90 backdrop-blur-md px-4 py-2.5 text-xs text-foreground font-medium shadow-md pointer-events-none select-none z-20 font-sans">
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                {activeRegion ? `${regions.find(r => r.id === activeRegion)?.name} Coverage` : "Full Service Area Scope"}
              </span>
              <span className="text-muted-foreground">HQ: Los Angeles, CA</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}