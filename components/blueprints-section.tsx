"use client"

import { useState } from "react"
import { Building2, Home, Wifi, Shield, Server, Lock } from "lucide-react"

const projects = [
  {
    id: "residential",
    title: "Reference Architecture",
    subtitle: "2,500 sq. ft. Multi-Story Smart Residential Grid",
    icon: Home,
    description:
      "A comprehensive deployment showcasing how structural dead zones were eliminated using strategically placed localized PoE access points. The architecture demonstrates seamless handoff between floors while maintaining strict network segmentation.",
    highlights: [
      {
        icon: Wifi,
        label: "Dead Zone Elimination",
        detail: "Localized PoE access points with optimized channel planning",
      },
      {
        icon: Shield,
        label: "5-VLAN Segmentation",
        detail: "Complete isolation between IoT, trusted, and guest networks",
      },
      {
        icon: Server,
        label: "Local NVR Integration",
        detail: "On-premise security footage with redundant storage",
      },
    ],
  },
  {
    id: "business",
    title: "Case Study",
    subtitle: "High-Security Remote-Work & Self-Hosted Infrastructure",
    icon: Building2,
    description:
      "An advanced deployment highlighting local network protection for sensitive business operations. Features reverse proxy safety boundaries, comprehensive data storage privacy measures, and enterprise-grade firewall configurations.",
    highlights: [
      {
        icon: Lock,
        label: "Reverse Proxy Boundaries",
        detail: "Secure external access without exposing internal services",
      },
      {
        icon: Shield,
        label: "Data Storage Privacy",
        detail: "Local-first architecture with encrypted backup solutions",
      },
      {
        icon: Server,
        label: "Self-Hosted Services",
        detail: "Complete independence from third-party cloud dependencies",
      },
    ],
  },
]

export function BlueprintsSection() {
  const [activeProject, setActiveProject] = useState(projects[0].id)
  const currentProject = projects.find((p) => p.id === activeProject)!

  return (
    <section id="blueprints" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">
            Reference Blueprints
          </h2>
          <p className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl text-balance">
            Engineering Excellence
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            Real-world deployments demonstrating technical competence and attention to detail.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="mt-12 flex justify-center">
          <div className="inline-flex rounded-lg border border-border/50 bg-card/50 p-1">
            {projects.map((project) => (
              <button
                key={project.id}
                onClick={() => setActiveProject(project.id)}
                className={`flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-all ${
                  activeProject === project.id
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <project.icon className="h-4 w-4" />
                <span className="hidden sm:inline">{project.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Project Content */}
        <div className="mt-12 mx-auto max-w-4xl">
          <div className="rounded-xl border border-border/50 bg-card/50 p-8 lg:p-12">
            <div className="flex items-start gap-4">
              <div className="hidden sm:flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <currentProject.icon className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-medium text-accent">{currentProject.title}</p>
                <h3 className="mt-1 text-xl font-semibold text-foreground lg:text-2xl">
                  {currentProject.subtitle}
                </h3>
              </div>
            </div>

            <p className="mt-6 text-muted-foreground leading-relaxed">
              {currentProject.description}
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {currentProject.highlights.map((highlight) => (
                <div
                  key={highlight.label}
                  className="rounded-lg border border-border/30 bg-background/50 p-4"
                >
                  <div className="flex items-center gap-3">
                    <highlight.icon className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium text-foreground">
                      {highlight.label}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{highlight.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
