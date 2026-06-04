"use client"

import { useEffect, useRef } from "react"

export function NetworkTopology() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const dpr = window.devicePixelRatio || 1
    const rect = canvas.getBoundingClientRect()
    canvas.width = rect.width * dpr
    canvas.height = rect.height * dpr
    ctx.scale(dpr, dpr)

    // Node positions (relative to canvas size)
    const nodes = [
      { x: 0.5, y: 0.15, label: "Gateway", type: "router" },
      { x: 0.25, y: 0.35, label: "Switch A", type: "switch" },
      { x: 0.75, y: 0.35, label: "Switch B", type: "switch" },
      { x: 0.1, y: 0.55, label: "IoT VLAN", type: "vlan" },
      { x: 0.35, y: 0.55, label: "Trusted", type: "vlan" },
      { x: 0.65, y: 0.55, label: "Guest", type: "vlan" },
      { x: 0.9, y: 0.55, label: "Secure", type: "vlan" },
      { x: 0.2, y: 0.75, label: "AP-1", type: "ap" },
      { x: 0.5, y: 0.75, label: "NVR", type: "nvr" },
      { x: 0.8, y: 0.75, label: "AP-2", type: "ap" },
    ]

    // Connections
    const connections = [
      [0, 1], [0, 2], // Gateway to switches
      [1, 3], [1, 4], // Switch A to VLANs
      [2, 5], [2, 6], // Switch B to VLANs
      [3, 7], [4, 8], [5, 8], [6, 9], // VLANs to endpoints
    ]

    const animate = () => {
      ctx.clearRect(0, 0, rect.width, rect.height)

      // Draw connections
      const time = Date.now() / 1000
      connections.forEach(([from, to], i) => {
        const fromNode = nodes[from]
        const toNode = nodes[to]
        const x1 = fromNode.x * rect.width
        const y1 = fromNode.y * rect.height
        const x2 = toNode.x * rect.width
        const y2 = toNode.y * rect.height

        // Draw line
        ctx.beginPath()
        ctx.strokeStyle = "rgba(59, 130, 246, 0.3)"
        ctx.lineWidth = 1.5
        ctx.moveTo(x1, y1)
        ctx.lineTo(x2, y2)
        ctx.stroke()

        // Animated pulse along the line
        const progress = ((time * 0.5 + i * 0.2) % 1)
        const pulseX = x1 + (x2 - x1) * progress
        const pulseY = y1 + (y2 - y1) * progress

        const gradient = ctx.createRadialGradient(pulseX, pulseY, 0, pulseX, pulseY, 8)
        gradient.addColorStop(0, "rgba(59, 130, 246, 0.8)")
        gradient.addColorStop(1, "rgba(59, 130, 246, 0)")
        ctx.beginPath()
        ctx.fillStyle = gradient
        ctx.arc(pulseX, pulseY, 8, 0, Math.PI * 2)
        ctx.fill()
      })

      // Draw nodes
      nodes.forEach((node) => {
        const x = node.x * rect.width
        const y = node.y * rect.height
        const radius = node.type === "router" ? 24 : node.type === "switch" ? 20 : 16

        // Glow effect
        const glowGradient = ctx.createRadialGradient(x, y, radius * 0.5, x, y, radius * 2)
        if (node.type === "router") {
          glowGradient.addColorStop(0, "rgba(249, 115, 22, 0.4)")
          glowGradient.addColorStop(1, "rgba(249, 115, 22, 0)")
        } else {
          glowGradient.addColorStop(0, "rgba(59, 130, 246, 0.3)")
          glowGradient.addColorStop(1, "rgba(59, 130, 246, 0)")
        }
        ctx.beginPath()
        ctx.fillStyle = glowGradient
        ctx.arc(x, y, radius * 2, 0, Math.PI * 2)
        ctx.fill()

        // Node circle
        ctx.beginPath()
        ctx.fillStyle = node.type === "router" ? "#f97316" : "#3b82f6"
        ctx.strokeStyle = node.type === "router" ? "#fb923c" : "#60a5fa"
        ctx.lineWidth = 2
        ctx.arc(x, y, radius, 0, Math.PI * 2)
        ctx.fill()
        ctx.stroke()

        // Inner highlight
        ctx.beginPath()
        ctx.fillStyle = node.type === "router" ? "rgba(255,255,255,0.3)" : "rgba(255,255,255,0.2)"
        ctx.arc(x, y - radius * 0.3, radius * 0.3, 0, Math.PI * 2)
        ctx.fill()

        // Label
        ctx.fillStyle = "#94a3b8"
        ctx.font = "11px Inter, sans-serif"
        ctx.textAlign = "center"
        ctx.fillText(node.label, x, y + radius + 16)
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      const newRect = canvas.getBoundingClientRect()
      canvas.width = newRect.width * dpr
      canvas.height = newRect.height * dpr
      ctx.scale(dpr, dpr)
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="relative aspect-square w-full max-w-lg mx-auto">
      {/* Outer glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 via-transparent to-accent/20 blur-3xl" />
      
      {/* Container */}
      <div className="relative h-full rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-4">
        <canvas
          ref={canvasRef}
          className="w-full h-full"
          style={{ width: "100%", height: "100%" }}
        />
        
        {/* Label */}
        <div className="absolute bottom-4 left-4 right-4 text-center">
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
            Logical Network Topology
          </span>
        </div>
      </div>
    </div>
  )
}
