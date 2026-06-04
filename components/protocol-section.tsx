import { Clock, HeadphonesIcon } from "lucide-react"

export function ProtocolSection() {
  return (
    <section className="py-24 lg:py-32 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-xl border border-border/50 bg-card p-8 lg:p-12">
            <div className="flex items-center gap-3 text-primary">
              <Clock className="h-6 w-6" />
              <h2 className="text-sm font-semibold uppercase tracking-wider">
                The Post-Handover Protocol
              </h2>
            </div>

            <p className="mt-6 text-xl font-semibold text-foreground lg:text-2xl text-balance">
              Every deployment includes a dedicated 30-day structural tuning and remote optimization period.
            </p>

            <p className="mt-4 text-muted-foreground leading-relaxed">
              This ensures absolute system stability before final handover. We don&apos;t just configure and disappear—we verify performance under real-world conditions.
            </p>

            <div className="mt-8 border-t border-border/50 pt-8">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <HeadphonesIcon className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium text-foreground">
                    Post-Warranty Support Options
                  </p>
                  <p className="mt-2 text-muted-foreground leading-relaxed">
                    Post-warranty diagnostic support is completely predictable: choose between flat-rate pay-as-you-go service alignment or proactive remote maintenance agreements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
