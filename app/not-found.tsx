"use client"

import Link from "next/link"
import { Terminal, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <main className="relative min-h-screen bg-[#070a12] flex items-center justify-center overflow-hidden select-none px-6 font-sans antialiased">
      
      {/* Blueprint Technical Grid Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.08] mix-blend-overlay"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), 
                            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />

      {/* Radial Gradient Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-md w-full text-center border border-border/40 bg-card/20 backdrop-blur-md p-8 md:p-12 rounded-2xl shadow-2xl shadow-primary/5">
        
        {/* Technical Icon Wrapper */}
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 text-primary mb-6 animate-pulse">
          <Terminal className="h-6 w-6" />
        </div>

        {/* Error Status */}
        <span className="text-xs font-mono tracking-widest text-primary uppercase font-semibold">
          Error Code: 404
        </span>
        
        <h1 className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Route Not Found
        </h1>
        
        <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
          The requested infrastructure coordinates do not exist or have been permanently decommissioned.
        </p>

        {/* Navigation Action */}
        <div className="mt-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-all duration-200 group shadow-lg shadow-primary/10"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform duration-200" />
            Return to Core Node
          </Link>
        </div>
      </div>
    </main>
  )
}