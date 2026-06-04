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

    // Added safe headroom for Gateway (y: 0.15) to prevent canvas top clipping
    const nodes = [
      { x: 0.52, y: 0.15, label: "Gateway", type: "router" },
      
      // Core Distribution Systems
      { x: 0.28, y: 0.38, label: "Managed Switch", type: "switch" },
      { x: 0.76, y: 0.38, label: "UniFi Protect", type: "protect" },
      
      // Access Tiers
      { x: 0.14, y: 0.62, label: "Trusted VLAN", type: "vlan" },
      { x: 0.28, y: 0.62, label: "AP-1", type: "ap" },
      { x: 0.42, y: 0.62, label: "AP-2", type: "ap" },
      { x: 0.62, y: 0.62, label: "PoE Cameras", type: "camera" },
      { x: 0.90, y: 0.62, label: "Local NVR", type: "storage" },
      
      // Terminal Endpoints
      { x: 0.10, y: 0.86, label: "NAS", type: "storage" },
      { x: 0.22, y: 0.86, label: "Main WiFi", type: "wifi" },
      { x: 0.34, y: 0.86, label: "Guest WiFi", type: "wifi" },
      { x: 0.50, y: 0.86, label: "IoT Devices", type: "iot" },
    ]

    const connections = [
      [0, 1], [0, 2],
      [1, 3], [1, 4], [1, 5],
      [3, 8],
      [4, 9], [4, 10],
      [5, 10], [5, 11],
      [2, 6], [2, 7],
    ]

    const resizeCanvas = () => {
      const container = canvas.parentElement
      if (!container) return
      
      const width = container.clientWidth
      const height = container.clientHeight
      
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.resetTransform()
      ctx.scale(dpr, dpr)
    }

    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()

    let animationFrameId: number

    const animate = () => {
      if (!canvas.width || !canvas.height) {
        animationFrameId = requestAnimationFrame(animate)
        return
      }

      const currentWidth = canvas.width / dpr
      const currentHeight = canvas.height / dpr

      ctx.clearRect(0, 0, currentWidth, currentHeight)

      // CHANGED: Lowered scale minimum from 0.78 to 0.58 so nodes scale down elegantly on mobile
      const scaleFactor = Math.max(0.58, Math.min(1, currentWidth / 480))
      const time = Date.now() / 1000

      // 1. Telemetry Trunk Lines
      connections.forEach(([from, to], i) => {
        const fromNode = nodes[from]
        const toNode = nodes[to]
        if (!fromNode || !toNode) return

        const x1 = fromNode.x * currentWidth
        const y1 = fromNode.y * currentHeight
        const x2 = toNode.x * currentWidth
        const y2 = toNode.y * currentHeight

        ctx.beginPath()
        ctx.strokeStyle = "rgba(59, 130, 246, 0.2)"
        ctx.lineWidth = 1.5 * scaleFactor
        ctx.moveTo(x1, y1)
        ctx.lineTo(x2, y2)
        ctx.stroke()

        const progress = (time * 0.3 + i * 0.12) % 1
        const pulseX = x1 + (x2 - x1) * progress
        const pulseY = y1 + (y2 - y1) * progress

        const gradient = ctx.createRadialGradient(pulseX, pulseY, 0, pulseX, pulseY, 6 * scaleFactor)
        gradient.addColorStop(0, "rgba(96, 165, 250, 0.75)")
        gradient.addColorStop(1, "rgba(96, 165, 250, 0)")
        ctx.beginPath()
        ctx.fillStyle = gradient
        ctx.arc(pulseX, pulseY, 6 * scaleFactor, 0, Math.PI * 2)
        ctx.fill()
      })

      // 2. Compute Nodes Hardware Matrix
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

        const glowGradient = ctx.createRadialGradient(x, y, radius * 0.4, x, y, radius * 2.2)
        glowGradient.addColorStop(0, `${fillColor}3b`)
        glowGradient.addColorStop(1, `${fillColor}00`)
        ctx.beginPath()
        ctx.fillStyle = glowGradient
        ctx.arc(x, y, radius * 2.2, 0, Math.PI * 2)
        ctx.fill()

        ctx.beginPath()
        ctx.fillStyle = fillColor
        ctx.strokeStyle = strokeColor
        ctx.lineWidth = 2 * scaleFactor
        ctx.arc(x, y, radius, 0, Math.PI * 2)
        ctx.fill()
        ctx.stroke()

        ctx.beginPath()
        ctx.fillStyle = "rgba(255,255,255,0.2)"
        ctx.arc(x, y - radius * 0.3, radius * 0.25, 0, Math.PI * 2)
        ctx.fill()

        ctx.fillStyle = "#94a3b8"
        ctx.font = `${Math.floor(10 * scaleFactor)}px system-ui, -apple-system, sans-serif`
        ctx.textAlign = "center"
        ctx.fillText(node.label, x, y + radius + (13 * scaleFactor))
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div className="relative aspect-[4/3] w-full max-w-[520px] mx-auto">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 via-transparent to-accent/10 blur-2xl pointer-events-none" />
      <div className="relative h-full w-full rounded-2xl border border-border/40 bg-card/40 backdrop-blur-[4px] p-4 flex flex-col justify-between">
        <div className="flex-1 w-full min-h-0 relative">
          <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />
        </div>
        <div className="w-full text-center pt-2 border-t border-border/5">
          <span className="text-[10px] font-semibold text-muted-foreground/70 uppercase tracking-[0.2em] select-none">
            Logical Network Topology
          </span>
        </div>
      </div>
    </div>
  )
}