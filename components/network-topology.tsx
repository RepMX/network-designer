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

    // Node positions based on the user's topology:
    // Gateway --- Switch A
    // Switch A --- Trusted VLAN, Secure VLAN, AP-1, AP-2
    // Trusted VLAN --- NAS
    // AP-2 --- IoT Devices
    // AP-1 --- Main WiFi, Guest WiFi
    // AP-2 --- Guest WiFi
    // Gateway --- UniFi Protect
    // UniFi Protect --- PoE Cameras, Local NVR Storage

    const nodes = [
      { x: 0.5, y: 0.08, label: "Gateway", type: "router" },
      { x: 0.28, y: 0.22, label: "Switch A", type: "switch" },
      { x: 0.72, y: 0.22, label: "UniFi Protect", type: "protect" },
      { x: 0.12, y: 0.38, label: "Trusted VLAN", type: "vlan" },
      //{ x: 0.28, y: 0.38, label: "Secure VLAN", type: "vlan" },
      { x: 0.44, y: 0.38, label: "AP-1", type: "ap" },
      { x: 0.60, y: 0.38, label: "AP-2", type: "ap" },
      { x: 0.12, y: 0.54, label: "NAS", type: "storage" },
      { x: 0.35, y: 0.54, label: "Main WiFi", type: "wifi" },
      { x: 0.52, y: 0.54, label: "Guest WiFi", type: "wifi" },
      { x: 0.68, y: 0.54, label: "IoT Devices", type: "iot" },
      { x: 0.65, y: 0.38, label: "PoE Cameras", type: "camera" },
      { x: 0.82, y: 0.38, label: "Local NVR", type: "storage" },
    ]

    // Connections based on user's topology
    const connections = [
      [0, 1],   // Gateway --- Switch A
      [0, 2],   // Gateway --- UniFi Protect
      [1, 3],   // Switch A --- Trusted VLAN
      //[1, 4],   // Switch A --- Secure VLAN
      [1, 5],   // Switch A --- AP-1
      [1, 6],   // Switch A --- AP-2
      [3, 7],   // Trusted VLAN --- NAS
      [5, 8],   // AP-1 --- Main WiFi
      [5, 9],   // AP-1 --- Guest WiFi
      [6, 9],   // AP-2 --- Guest WiFi
      [6, 10],  // AP-2 --- IoT Devices
      [2, 11],  // UniFi Protect --- PoE Cameras
      [2, 12],  // UniFi Protect --- Local NVR Storage
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
        const progress = ((time * 0.4 + i * 0.15) % 1)
        const pulseX = x1 + (x2 - x1) * progress
        const pulseY = y1 + (y2 - y1) * progress

        const gradient = ctx.createRadialGradient(pulseX, pulseY, 0, pulseX, pulseY, 6)
        gradient.addColorStop(0, "rgba(59, 130, 246, 0.7)")
        gradient.addColorStop(1, "rgba(59, 130, 246, 0)")
        ctx.beginPath()
        ctx.fillStyle = gradient
        ctx.arc(pulseX, pulseY, 6, 0, Math.PI * 2)
        ctx.fill()
      })

      // Draw nodes
      nodes.forEach((node) => {
        const x = node.x * rect.width
        const y = node.y * rect.height
        let radius = 14
        let fillColor = "#3b82f6"
        let strokeColor = "#60a5fa"

        if (node.type === "router") {
          radius = 20
          fillColor = "#f97316"
          strokeColor = "#fb923c"
        } else if (node.type === "switch") {
          radius = 16
          fillColor = "#3b82f6"
          strokeColor = "#60a5fa"
        } else if (node.type === "protect") {
          radius = 16
          fillColor = "#8b5cf6"
          strokeColor = "#a78bfa"
        } else if (node.type === "vlan") {
          radius = 14
          fillColor = "#10b981"
          strokeColor = "#34d399"
        } else if (node.type === "ap") {
          radius = 14
          fillColor = "#06b6d4"
          strokeColor = "#22d3ee"
        } else if (node.type === "storage") {
          radius = 12
          fillColor = "#bec9d6"
          strokeColor = "#94a3b8"
        } else if (node.type === "wifi") {
          radius = 11
          fillColor = "#0ea5e9"
          strokeColor = "#38bdf8"
        } else if (node.type === "iot") {
          radius = 11
          fillColor = "#eab308"
          strokeColor = "#facc15"
        } else if (node.type === "camera") {
          radius = 12
          fillColor = "#ec4899"
          strokeColor = "#f472b6"
        }

        // Glow effect
        const glowGradient = ctx.createRadialGradient(x, y, radius * 0.5, x, y, radius * 2)
        glowGradient.addColorStop(0, `${fillColor}40`)
        glowGradient.addColorStop(1, `${fillColor}00`)
        ctx.beginPath()
        ctx.fillStyle = glowGradient
        ctx.arc(x, y, radius * 2, 0, Math.PI * 2)
        ctx.fill()

        // Node circle
        ctx.beginPath()
        ctx.fillStyle = fillColor
        ctx.strokeStyle = strokeColor
        ctx.lineWidth = 2
        ctx.arc(x, y, radius, 0, Math.PI * 2)
        ctx.fill()
        ctx.stroke()

        // Inner highlight
        ctx.beginPath()
        ctx.fillStyle = "rgba(255,255,255,0.25)"
        ctx.arc(x, y - radius * 0.3, radius * 0.25, 0, Math.PI * 2)
        ctx.fill()

        // Label
        ctx.fillStyle = "#94a3b8"
        ctx.font = "10px 'DM Sans', Verdana, sans-serif"
        ctx.textAlign = "center"
        ctx.fillText(node.label, x, y + radius + 14)
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
    <div className="relative aspect-[4/3] w-full max-w-lg mx-auto">
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
