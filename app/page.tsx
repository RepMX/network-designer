import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { PhilosophySection } from "@/components/philosophy-section"
import { ServicesSection } from "@/components/services-section"
import { BlueprintsSection } from "@/components/blueprints-section"
import { ProtocolSection } from "@/components/protocol-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <PhilosophySection />
      <ServicesSection />
      <BlueprintsSection />
      <ProtocolSection />
      <Footer />
    </main>
  )
}
