"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="#" className="text-xl font-semibold tracking-tight text-foreground">
            JEDY<span className="text-primary">.CC</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-8">
            <a
              href="#philosophy"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Philosophy
            </a>
            <a
              href="#services"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Services & Pricing
            </a>
            <a
              href="#blueprints"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Reference Blueprints
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              asChild
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-5 py-2.5"
            >
              <a href="#contact">Contact</a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border/50 py-4">
            <div className="flex flex-col gap-4">
              <a
                href="#philosophy"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                Philosophy
              </a>
              <a
                href="#services"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services & Pricing
              </a>
              <a
                href="#blueprints"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                Reference Blueprints
              </a>
              <Button
                asChild
                className="w-fit bg-primary text-primary-foreground hover:bg-primary/90 px-5 py-2.5"
              >
                <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
                  Contact
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
