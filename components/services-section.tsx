"use client"

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const packages = [
  {
    name: "Secure Core",
    price: "$600",
    priceDetail: "Service Fee",
    hardware: "Optimized for UniFi Dream Router or Cloud Gateway compact architectures.",
    scope: [
      "Local-oriented core network management configuration",
      "Physical space environmental assessment and localized equipment placement planning",
      "Full deployment of up to 5 core isolated logical VLAN networks",
      "Perimeter gateway security hardening with active Threat Management (IDS/IPS)",
      "Secure WireGuard / VPN tunnel and smart home ready",
      "Sized perfectly for modern apartments, condominiums, and micro-businesses",
    ],
    popular: false,
  },
  {
    name: "Smart Home & Business",
    price: "$1,200",
    priceDetail: "Service Fee",
    hardware:
      "Engineered for UniFi Cloud Gateway Max controllers, supporting up to 1 managed distribution switch and up to 2 high-throughput Access Points.",
    scope: [
      "Deep structural network equipment planning with power budget calculation",
      "Physical space RF coverage analysis and signal path auditing",
      "Full architecture and remote deployment of up to 8 core isolated VLANs",
      "UniFi Protect AI security camera & localized NVR storage integration",
      "Infrastructure ready for AI smart home automation via Home Assistant*",
      "Optimized for prosumer and small business storefronts",
    ],
    popular: true,
  },
  {
    name: "Advanced Home & Business",
    price: "$2,400",
    priceDetail: "Service Fee",
    hardware:
      "Enterprise Dream Machine Routing Consoles, supporting up to 4 UniFi Pro Level 3 managed distribution switches, and up to 6 multi-zone Access Points.",
    scope: [
      "High-density equipment rack elevation layout & power budget mapping",
      "Structural floor-plan network deployment blueprint & AP heatmaps",
      "Advanced firewall rule matrix, inter-VLAN routing, and traffic shaping",
      "UniFi Protect AI security camera & multi-disk NVR storage array integration",
      "High-availability: Dual-WAN failover, UPS backup, and DANTE audio support",
      "Designed for luxury smart estates, media production, and large organizations",
    ],
    popular: false,
  },
]

export function ServicesSection() {
  const handleScrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    } else {
      window.location.hash = "contact"
    }
  }

  return (
    <section id="services" className="py-24 lg:py-32 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="pointer-events-none mx-auto max-w-2xl text-center">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">
            Services & Pricing
          </h2>
          <p className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl text-balance">
            Deployment Packages
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            Transparent, flat-rate service fees. You own your hardware outright.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="mx-auto mt-16 grid max-w-6xl gap-8 lg:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative flex flex-col rounded-xl border p-8 transition-all duration-300 ${
                pkg.popular
                  ? "border-primary bg-card shadow-lg shadow-primary/10"
                  : "border-border/50 bg-card/50 hover:border-border hover:bg-card"
              }`}
            >
              {pkg.popular && (
                <div className="pointer-events-none absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center">
                <h3 className="text-lg font-semibold text-foreground">{pkg.name}</h3>
                <div className="mt-4 flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold tracking-tight text-foreground">
                    {pkg.price}
                  </span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{pkg.priceDetail}</p>
              </div>

              <div className="mt-6 border-t border-border/50 pt-6">
                <p className="text-sm font-medium text-foreground">Hardware Stack</p>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {pkg.hardware}
                </p>
              </div>

              <div className="mt-6 flex-1">
                <p className="text-sm font-medium text-foreground">Scope</p>
                <ul className="mt-4 space-y-3">
                  {pkg.scope.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 flex-shrink-0 text-primary mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <Button
                  size="lg"
                  onClick={handleScrollToContact}
                  className={`w-full cursor-pointer transition-all duration-200 ${
                    pkg.popular
                      ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25"
                      : "bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground hover:shadow-lg hover:shadow-primary/25"
                  }`}
                >
                  Get Started
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 border-t border-border/40 pt-8 max-w-5xl mx-auto">
          <div className="grid gap-6 md:grid-cols-2 text-left">
            <div className="flex gap-3">
              <span className="pointer-events-none text-xs font-bold text-primary tracking-wider mt-0.5 select-none">[01]</span>
              <p className="text-xs text-muted-foreground leading-relaxed">
                <span className="pointer-events-none text-foreground font-medium">Home Assistant Deployment:</span> Server provisioning, localized container configuration, and individual smart device integrations are available as custom-tailored system add-ons.
              </p>
            </div>
            <div className="flex gap-3">
              <span className="pointer-events-none text-xs font-bold text-primary tracking-wider mt-0.5 select-none">[02]</span>
              <p className="text-xs text-muted-foreground leading-relaxed">
                <span className="pointer-events-none text-foreground font-medium">Infrastructure Labor:</span> All tiers assume high-voltage and Ethernet cabling is present on-site. Physical rack mounting, device patching, and logical system programming are included in the flat fee.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}