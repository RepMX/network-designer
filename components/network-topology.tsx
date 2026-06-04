"use client"

import { useEffect, useRef } from "react"

export function NetworkTopology() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const dpr = window.devicePixelRatio || 1

    // Perfectly balanced architectural distribution layers
    // Layer 0: Gateway (Top Center)
    // Layer 1: Core Controllers (Switch, Protect)
    // Layer 2: Distribution/Access Layers (VLAN, Access Points, Cameras, Storage)
    // Layer 3: Physical Endpoints (Devices, Clients, NAS)
    const nodes = [
      { x: 0.50, y: 0.16, label: "Gateway", type: "router" },
      { x: 0.32, y: 0.34, label: "Managed Switch", type: "switch" },
      { x: 0.68, y: 0.34, label: "UniFi Protect", type: "protect" },
      { x: 0.14, y: 0.52, label: "Trusted VLAN", type: "vlan" },
      { x: 0.32, y: 0.52, label: "AP-1", type: "ap" },
      { x: 0.50, y: 0.52, label: "AP-2", type: "ap" },
      { x: 0.08, y: 0.70, label: "NAS", type: "storage" },
      { x: 0.22, y: 0.70, label: "Main WiFi", type: "wifi" },
      { x: 0.36, y: 0.70, label: "Guest WiFi", type: "wifi" },
      { x: 0.50, y: 0.70, label: "IoT Devices", type: "iot" },
      { x: 0.68, y: 0.52, label: "PoE Cameras", type: "camera" },
      { x: 0.84, y: 0.52, label: "Local NVR", type: "storage" },
    ]

    const connections = [
      [0, 1], [0, 2], // Gateway Backbone Links
      [1, 3], [1, 4], [1, 5], // Switch Distribution Plane
      [3, 6], // Core Wired Storage
      [4, 7], [4, 8], // AP-1 Wireless Sectors
      [5, 8], [5, 9], // AP-2 Wireless Sectors
      [2, 10], [2, 11], // Surveillance Matrix Core Links
    ]

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      ctx.resetTransform() // Reset previous frames scaling profiles
      ctx.scale(dpr, dpr)
    }

    resizeCanvas()

    let animationFrameId: number

    const animate = () => {
      // Pull dynamic container parameters right from the hardware boundary on every frame
      const currentWidth = canvas.width / dpr
      const currentHeight = canvas.height / dpr

      ctx.clearRect(0, 0, currentWidth, currentHeight)

      // Dynamic scaling factor to compress components seamlessly on mobile screens
      const scaleFactor = Math.max(0.75, Math.min(1, currentWidth / 480))
      const time = Date.now() / 1000

      // 1. Draw Connection Trunks
      connections.forEach(([from, to], i) => {
        const fromNode = nodes[from]
        const toNode = nodes[to]
        const x1 = fromNode.x * currentWidth
        const y1 = fromNode.y * currentHeight
        const x2 = toNode.x * currentWidth
        const y2 = toNode.y * currentHeight

        ctx.beginPath()
        ctx.strokeStyle = "rgba(59, 130, 246, 0.25)"
        ctx.lineWidth = 1.5 * scaleFactor
        ctx.moveTo(x1, y1)
        ctx.lineTo(x2, y2)
        ctx.stroke()

        // Active telemetry packet pulses along the bus
        const progress = (time * 0.35 + i * 0.12) % 1
        const pulseX = x1 + (x2 - x1) * progress
        const pulseY = y1 + (y2 - y1) * progress

        const gradient = ctx.createRadialGradient(pulseX, pulseY, 0, pulseX, pulseY, 6 * scaleFactor)
        gradient.addColorStop(0, "rgba(96, 165, 250, 0.8)")
        gradient.addColorStop(1, "rgba(96, 165, 250, 0)")
        ctx.beginPath()
        ctx.fillStyle = gradient
        ctx.arc(pulseX, pulseY, 6 * scaleFactor, 0, Math.PI * 2)
        ctx.fill()
      })

      // 2. Draw Node Matrices
      nodes.forEach((node) => {
        const x = node.x * currentWidth
        const y = node.y * currentHeight
        
        let baseRadius = 14
        let fillColor = "#3b82f6"
        let strokeColor = "#60a5fa"

        switch (node.type) {
          case "router":
            baseRadius = 18; fillColor = "#f97316"; strokeColor = "#fb923c"
            break
          case "switch":
            baseRadius = 15; fillColor = "#ef4444"; strokeColor = "#f87171"
            break
          case "protect":
            baseRadius = 15; fillColor = "#8b5cf6"; strokeColor = "#a78bfa"
            break
          case "vlan":
            baseRadius = 13; fillColor = "#10b981"; strokeColor = "#34d399"
            break
          case "ap":
            baseRadius = 13; fillColor = "#06b6d4"; strokeColor = "#22d3ee"
            break
          case "storage":
            baseRadius = 11; fillColor = "#94a3b8"; strokeColor = "#cbd5e1"
            break
          case "wifi":
            baseRadius = 11; fillColor = "#0ea5e9"; strokeColor = "#38bdf8"
            break
          case "iot":
            baseRadius = 11; fillColor = "#eab308"; strokeColor = "#facc15"
            break
          case "camera":
            baseRadius = 11; fillColor = "#ec4899"; strokeColor = "#f472b6"
            break
        }

        const radius = baseRadius * scaleFactor

        // Deep localized glow array
        const glowGradient = ctx.createRadialGradient(x, y, radius * 0.4, x, y, radius * 2.2)
        glowGradient.addColorStop(0, `${fillColor}3d`)
        glowGradient.addColorStop(1, `${fillColor}00`)
        ctx.beginPath()
        ctx.fillStyle = glowGradient
        ctx.arc(x, y, radius * 2.2, 0, Math.PI * 2)
        ctx.fill()

        // Solid hardware core housing
        ctx.beginPath()
        ctx.fillStyle = fillColor
        ctx.strokeStyle = strokeColor
        ctx.lineWidth = 2 * scaleFactor
        ctx.arc(x, y, radius, 0, Math.PI * 2)
        ctx.fill()
        ctx.stroke()

        // Volumetric glare pathing
        ctx.beginPath()
        ctx.fillStyle = "rgba(255,255,255,0.2)"
        ctx.arc(x, y - radius * 0.3, radius * 0.25, 0, Math.PI * 2)
        ctx.fill()

        // Responsive text labels
        ctx.fillStyle = "#94a3b8"
        ctx.font = `${Math.floor(10 * scaleFactor)}px 'DM Sans', system-ui, sans-serif`
        ctx.textAlign = "center"
        ctx.fillText(node.label, x, y + radius + (13 * scaleFactor))
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    window.addEventListener("resize", resizeCanvas)
    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div className="relative aspect-[4/3] w-full max-w-[520px] mx-auto">
      {/* Structural layout glow backplate */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 via-transparent to-accent/10 blur-2xl pointer-events-none" />
      
      {/* Physical Housing Shield */}
      <div className="relative h-full w-full rounded-2xl border border-border/40 bg-card/40 backdrop-blur-[4px] p-4 flex flex-col justify-between">
        <div className="flex-1 w-full min-h-0 relative">
          <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />
        </div>
        
        {/* Isolated Section Label Anchor */}
        <div className="w-full text-center pt-2 border-t border-border/10">
          <span className="text-[10px] sm:text-xs font-semibold text-muted-foreground/80 uppercase tracking-[0.15em] select-none">
            Logical Network Topology
          </span>
        </div>
      </div>
    </div>
  )
}