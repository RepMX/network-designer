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
  const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN
  
  // Adjusted zoom from 8.29 down to 7.6 for a cleaner wide frame scope
  const iframeUrl = `https://api.mapbox.com/styles/v1/repmx/cmpzn85ag002401rf6euw2xun.html?title=false&access_token=${mapboxToken}&zoomwheel=false#7.6/33.887/-118.135`
  
  if (!mapboxToken) {
    console.error("Mapbox Access Token is missing. Check your .env file.")
  }

  return (
    <section id="coverage" className="select-none py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          
          {/* Left Column: Region Informational Cards */}
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

          {/* Right Column: Premium Map Viewport with Masked Attribution */}
          <div className="relative aspect-square w-full max-w-xl mx-auto rounded-xl border border-border/50 bg-[#070a12] overflow-hidden shadow-2xl shadow-primary/5 group">
            
            {/* LAYER 1: The Live Embedded Map */}
            {/* The 56px height expansion paired with a negative top offset masks the mapbox logos cleanly outside the viewport clip */}
            <iframe 
              src={iframeUrl}
              title="Southern California Service Footprint"
              className="absolute left-0 w-full top-[-28px] h-[calc(100%+56px)] border-none pointer-events-none opacity-90 transition-opacity duration-500 group-hover:opacity-100 scale-[1.01]"
              scrolling="no"
            />

            {/* LAYER 2: Blueprint Technical Grid Overlay */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-[0.12] mix-blend-overlay"
              style={{
                backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), 
                                  linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                backgroundSize: '32px 32px'
              }}
            />

            {/* LAYER 3: Minimalist Peripheral Boundary Ring */}
            <svg 
              className="absolute inset-0 h-full w-full pointer-events-none z-10"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle 
                cx="50" 
                cy="50" 
                r="38" 
                className="stroke-primary/30 fill-primary/[0.01]" 
                strokeWidth="0.5" 
                strokeDasharray="4 2"
              />
            </svg>

            {/* LAYER 4: The Original Core Pulsing Radar Beacon */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 duration-1000" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary shadow-sm shadow-primary/50" />
            </div>

            {/* LAYER 5: Heads-Up Display Panel Overlay */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-lg border border-border/50 bg-background/90 backdrop-blur-md px-4 py-2.5 text-xs text-foreground font-medium shadow-md pointer-events-none select-none z-20 font-sans">
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
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