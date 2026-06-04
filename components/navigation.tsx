"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleScroll = (e: React.MouseEvent, targetId: string) => {
    e.preventDefault()
    setMobileMenuOpen(false) // Automatically collapse mobile drawer on click

    if (targetId === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" })
      window.history.pushState(null, "", " ")
      return
    }

    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      window.history.pushState(null, "", `#${targetId}`)
    } else {
      window.location.hash = targetId
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="select-none mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo / Home Link */}
          <a 
            href="#" 
            onClick={(e) => handleScroll(e, "top")}
            className="text-xl font-semibold tracking-tight text-foreground cursor-pointer"
          >
            design<span className="text-primary">.jedy.cc</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-8">
            <a
              href="#philosophy"
              onClick={(e) => handleScroll(e, "philosophy")}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground cursor-pointer"
            >
              Philosophy
            </a>
            <a
              href="#services"
              onClick={(e) => handleScroll(e, "services")}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground cursor-pointer"
            >
              Pricing
            </a>
            <a
              href="#blueprints"
              onClick={(e) => handleScroll(e, "blueprints")}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground cursor-pointer"
            >
              Blueprints
            </a>
            <a
              href="#protocol"
              onClick={(e) => handleScroll(e, "protocol")}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground cursor-pointer"
            >
              Support
            </a>
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Button
              onClick={(e) => handleScroll(e, "contact")}
              className="bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 cursor-pointer"
            >
              Request a Quote
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden text-foreground cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown Container */}
        <div 
          className={`md:hidden grid transition-all duration-300 ease-in-out ${
            mobileMenuOpen 
              ? "grid-rows-[1fr] opacity-100" 
              : "grid-rows-[0fr] opacity-0 pointer-events-none"
          }`}
        >
          {/* The overflow-hidden wrapper is required for the grid row height interpolation */}
          <div className="overflow-hidden">
            <div className="border-t border-border/50 py-4 flex flex-col gap-4">
              <a
                href="#philosophy"
                onClick={(e) => handleScroll(e, "philosophy")}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground cursor-pointer"
              >
                Philosophy
              </a>
              <a
                href="#services"
                onClick={(e) => handleScroll(e, "services")}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground cursor-pointer"
              >
                Pricing
              </a>
              <a
                href="#blueprints"
                onClick={(e) => handleScroll(e, "blueprints")}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground cursor-pointer"
              >
                Blueprints
              </a>
              <a
                href="#protocol"
                onClick={(e) => handleScroll(e, "protocol")}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground cursor-pointer"
              >
                Support
              </a>
              <Button
                onClick={(e) => handleScroll(e, "contact")}
                className="w-fit bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 cursor-pointer"
              >
                Get a Quote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}