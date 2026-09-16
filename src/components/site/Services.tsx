import { Bot, Compass, LifeBuoy, ArrowUpRight } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const SERVICES = [
  {
    icon: Bot,
    title: "AI Agents & Automation",
    body: "Custom agents that read your data, make decisions and act inside your tools — plus the workflow automation and integrations around them.",
    points: ["Custom agent builds", "Workflow automation", "CRM, ERP & inbox integrations"],
  },
  {
    icon: Compass,
    title: "AI Consulting & Strategy",
    body: "Where AI earns its keep in your business, in what order, and what it costs. Audits, roadmaps and implementation advisory for leadership.",
    points: ["Opportunity audits", "12-month roadmaps", "Board & exec advisory"],
  },
  {
    icon: LifeBuoy,
    title: "Managed AI Services",
    body: "Agents are software: they drift, break and need tuning. We monitor, evaluate and improve what we ship, so it keeps performing.",
    points: ["Monitoring & evals", "Model & prompt tuning", "Team training and handover"],
  },
];

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-5 py-24 md:px-8">
      <SectionHeading
        eyebrow="What we do"
        title="Three pillars, one accountable team"
        intro="Most shops sell you a tool. We take responsibility for the outcome — from the first strategy session to the agent running in production six months later."
      />

      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {SERVICES.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.1}>
            <article className="glass-panel group h-full rounded-2xl p-7 transition-colors hover:border-primary-glow/60">
              <s.icon className="size-6 text-accent" aria-hidden="true" />
              <h3 className="mt-5 text-xl font-semibold">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-2">
                    <span className="size-1 rounded-full bg-primary-glow" aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="font-display mt-7 inline-flex items-center gap-1.5 text-sm text-foreground transition-colors group-hover:text-primary-glow"
              >
                Learn more <ArrowUpRight className="size-4" />
              </a>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
