"use client"

import { useState } from "react"
import { MapPin, ShieldCheck, Zap } from "lucide-react"

// Define viewport configurations for the smooth flight animations
const regions = [
  {
    id: "la",
    name: "Los Angeles County",
    areas: "Metro LA, Westside, South Bay, San Fernando Valley, San Gabriel Valley",
    // Map adjustment: translate x, translate y, zoom scale
    mapView: "transform translate-x-[40px] translate-y-[30px] scale-[1.35]",
    beaconPos: "top-[45%] left-[45%]",
    coverageRadius: "h-72 w-72",
  },
  {
    id: "oc",
    name: "Orange County",
    areas: "North OC, Central OC, Irvine, Newport, Huntington, Laguna Beach",
    mapView: "transform translate-x-[-30px] translate-y-[-40px] scale-[1.5]",
    beaconPos: "top-[62%] left-[60%]",
    coverageRadius: "h-64 w-64",
  },
  {
    id: "ie",
    name: "Inland Empire",
    areas: "Western corridors, Ontario, Rancho Cucamonga, Corona",
    mapView: "transform translate-x-[-80px] translate-y-[10px] scale-[1.4]",
    beaconPos: "top-[48%] left-[72%]",
    coverageRadius: "h-80 w-80",
  },
]

export function ServiceArea() {
  // Default view is zoomed out to show full regional coverage
  const [activeRegion, setActiveRegion] = useState<string | null>(null)

  // Determine current map layout modifications based on interaction state
  const currentView = activeRegion 
    ? regions.find(r => r.id === activeRegion)?.mapView 
    : "transform translate-x-0 translate-y-0 scale-100" // Fully zoomed out macro view

  const activeBeacon = activeRegion ? regions.find(r => r.id === activeRegion) : null

  return (
    <section id="coverage" className="select-none py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          
          {/* Left Column: Interactive Region Cards */}
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

            {/* Region Selectors */}
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
                    {/* Hover/Active Glow layer */}
                    <div 
                      className={`absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent transition-opacity duration-300 ${
                        isSelected ? "opacity-100" : "opacity-0 group-hover:opacity-100"
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

              {/* Reset to Wide View Button */}
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

          {/* Right Column: Dynamic Flight Map Viewport */}
          <div className="relative aspect-square w-full max-w-xl mx-auto rounded-xl border border-border/50 bg-[#080d1a] overflow-hidden shadow-2xl shadow-primary/5 group">
            
            {/* Smooth Motion-Controlled Map Graphic Canvas Container */}
            <div className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out ${currentView}`}>
              
              {/* Technical Grid Overlay Background matching image_328e34.png */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:32px_32px]" />
              
              {/* Simplified Minimalist Vector Path of SoCal Coastline for context */}
              <svg 
                className="absolute inset-0 h-full w-full stroke-muted-foreground/15 fill-none"
                viewBox="0 0 400 400"
              >
                {/* Coastal Line (Abstract representation of Ventura down to Orange County) */}
                <path 
                  d="M 40,80 Q 120,160 180,220 T 280,300 T 360,340" 
                  strokeWidth="1.5" 
                  strokeDasharray="4 4"
                />
                {/* Major Interstate Highway Corridors */}
                <path d="M 180,0 Q 180,150 280,300" strokeWidth="0.5" className="stroke-muted-foreground/5" />
                <path d="M 40,160 Q 200,200 400,240" strokeWidth="0.5" className="stroke-muted-foreground/5" />
              </svg>

              {/* DYNAMIC SERVICE BEACON & COVERAGE RADIUS MATRIX */}
              {/* When a region is active, the rings scale down and focus directly on the target node */}
              <div className={`absolute transition-all duration-700 ease-in-out flex items-center justify-center ${
                activeBeacon ? activeBeacon.beaconPos : "top-[52%] left-[54%]"
              }`}>
                {/* Concentric Range Rings modeled exactly after image_328e34.png */}
                <div className={`absolute rounded-full border border-primary/20 bg-primary/[0.02] animate-pulse transition-all duration-700 ${
                  activeBeacon ? activeBeacon.coverageRadius : "h-96 w-96"
                }`} />
                <div className={`absolute rounded-full border border-primary/10 bg-transparent transition-all duration-700 ${
                  activeBeacon ? "h-48 w-48" : "h-64 w-64"
                }`} />
                <div className={`absolute rounded-full border border-foreground/[0.03] bg-transparent transition-all duration-700 ${
                  activeBeacon ? "h-24 w-24" : "h-36 w-36"
                }`} />

                {/* Core Glowing Node */}
                <div className="relative flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-primary shadow-lg shadow-primary"></span>
                </div>
              </div>

              {/* Textual Structural Node Indicators on Map Layer */}
              <div className="absolute top-[38%] left-[32%] text-[10px] tracking-widest font-mono text-muted-foreground/40 uppercase">LA Core</div>
              <div className="absolute top-[64%] left-[58%] text-[10px] tracking-widest font-mono text-muted-foreground/40 uppercase">OC South</div>
              <div className="absolute top-[44%] left-[74%] text-[10px] tracking-widest font-mono text-muted-foreground/40 uppercase">IE Gate</div>
            </div>
            
            {/* Static HUD Panel Overlay (Stays fixed to edges while map underneath flies) */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-lg border border-border/50 bg-background/90 backdrop-blur-md px-4 py-2.5 text-xs text-foreground font-medium shadow-md pointer-events-none select-none z-20">
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                {activeRegion ? `${regions.find(r => r.id === activeRegion)?.name} Isolated View` : "Macro Scope: Full Coverage"}
              </span>
              <span className="text-muted-foreground font-mono">HQ: Los Angeles, CA</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}