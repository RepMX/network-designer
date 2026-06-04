"use client"

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const packages = [
  {
    name: "Secure Core",
    price: "$600",
    priceDetail: "Service Fee",
    hardware: "Optimized for UniFi Dream Router architectures.",
    scope: [
      "Complete configuration of 5 isolated logical VLAN networks",
      "Guest Wi-Fi network",
      "Trusted Internal Data network",
      "Isolated IoT/Smart Devices network",
      "Secure Transaction/POS lines",
      "Encrypted Management Plane",
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
      "Comprehensive coverage analysis",
      "Physical enclosure layout design",
      "UniFi Protect security camera & NVR storage system",
      "Full deployment of up to 8 core isolated VLANs",
      "Ready for intelligent smart home automation via Home Assistant*",
      "Optimized for prosumer and micro-business footprints",
    ],
    popular: true,
  },
  {
    name: "Advanced Home & Business",
    price: "$2,400",
    priceDetail: "Service Fee",
    hardware:
      "Enterprise Dream Machine Routing Consoles, unlimited UniFi Pro Level 3 managed switching infrastructure, and unlimited multi-zone Access Points.",
    scope: [
      "Advanced physical rack elevation layouts",
      "Structural network deployment and access point coverage map ",
      "UniFi Protect NVR camera & storage array integration included",
      "Unlimited VLAN logic deployment with custom firewall and traffic routing",
      "Backup UPS battery and native DANTE audio support",
      "Designed for production houses and larger enterprises",
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
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">
            Services & Pricing
          </h2>
          <p className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl text-balance">
            Service Packages
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
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
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

        {/* Asterisk Disclaimer Note */}
        <div className="mt-12 text-center">
          <p className="text-xs text-muted-foreground max-w-2xl mx-auto leading-relaxed border-t border-border/20 pt-6">
            * Home Assistant server deployment and installation is available but not included. Contact us for a quote.
          </p>
        </div>
      </div>
    </section>
  )
}