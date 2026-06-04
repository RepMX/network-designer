import { DollarSign, Server, Shield } from "lucide-react"

const advantages = [
  {
    icon: DollarSign,
    title: "Zero Hardware Markup",
    description:
      "You buy your enterprise gear directly at retail cost for total transparent procurement and direct manufacturer warranties.",
  },
  {
    icon: Server,
    title: "Local-First Architecture",
    description:
      "Systems engineered to run entirely within your walls. If the public cloud goes down, your switches, local storage, and security loops keep running flawlessly.",
  },
  {
    icon: Shield,
    title: "Rigid Isolation",
    description:
      "Strict VLAN segmentation built into every deployment to wall off vulnerable IoT devices from your private data and transactions.",
  },
]

export function PhilosophySection() {
  return (
    <section id="philosophy" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">
            Philosophy
          </h2>
          <p className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl text-balance">
            The Independent Advantage
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            A fundamentally different approach to network architecture and smart home integration.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-8 lg:grid-cols-3">
          {advantages.map((advantage) => (
            <div
              key={advantage.title}
              className="group relative rounded-xl border border-border/50 bg-card/50 p-8 transition-all duration-300 hover:border-primary/50 hover:bg-card"
            >
              {/* Subtle glow on hover */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              
              <div className="relative">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <advantage.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-foreground">
                  {advantage.title}
                </h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
