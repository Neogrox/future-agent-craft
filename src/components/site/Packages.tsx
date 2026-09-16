import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal, SectionHeading } from "./Reveal";

const PACKAGES = [
  {
    name: "AI Audit",
    price: "From £6k",
    length: "2–3 weeks",
    body: "A ranked map of where AI pays back in your business, with costs, risks and a sequenced plan.",
    features: ["Workflow & systems review", "Opportunity scoring", "12-month roadmap", "Exec readout"],
    featured: false,
  },
  {
    name: "Agent Build",
    price: "Custom",
    length: "4–10 weeks",
    body: "One or more production agents built into your stack, evaluated on real cases and rolled out to your team.",
    features: [
      "Scoping & guardrail design",
      "Integrations to your tools",
      "Evaluation suite",
      "Team training & handover",
    ],
    featured: true,
  },
  {
    name: "Managed AI",
    price: "Monthly retainer",
    length: "Ongoing",
    body: "We run, monitor and improve what's live — plus a standing advisory line for your leadership.",
    features: ["Monitoring & alerting", "Continuous tuning", "New use cases each quarter", "Advisory hours"],
    featured: false,
  },
];

export function Packages() {
  return (
    <section id="packages" className="border-y border-border bg-surface/30">
      <div className="mx-auto max-w-6xl px-5 py-24 md:px-8">
        <SectionHeading
          eyebrow="Packages"
          title="Start where you are"
          intro="Scope drives price, so we quote after the first call. These are the shapes engagements usually take."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {PACKAGES.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.1}>
              <article
                className={`glass-panel flex h-full flex-col rounded-2xl p-7 ${
                  p.featured ? "border-primary-glow/60 shadow-glow" : ""
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-xl font-semibold">{p.name}</h3>
                  {p.featured ? (
                    <span className="font-display rounded-full bg-primary/20 px-3 py-1 text-[0.65rem] tracking-widest text-primary-glow uppercase">
                      Most asked
                    </span>
                  ) : null}
                </div>
                <p className="font-display mt-4 text-2xl font-semibold">{p.price}</p>
                <p className="mt-1 text-xs text-muted-foreground">{p.length}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                <ul className="mt-6 space-y-2.5 text-sm">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-muted-foreground">
                      <Check className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  variant={p.featured ? "hero" : "outlineGlow"}
                  size="lg"
                  className="mt-8 w-full"
                >
                  <a href="#contact">Book a call</a>
                </Button>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
