import { Reveal, SectionHeading } from "./Reveal";

const STEPS = [
  {
    n: "01",
    title: "Discover",
    body: "Two weeks inside your operation: workflows, systems, data, and the tasks quietly eating your team's week.",
  },
  {
    n: "02",
    title: "Design",
    body: "We scope the agent, its guardrails, the integrations it needs and the metric it has to move — before anyone writes code.",
  },
  {
    n: "03",
    title: "Build",
    body: "Working agent in your stack within weeks, evaluated against real cases and reviewed with your team every sprint.",
  },
  {
    n: "04",
    title: "Deploy & support",
    body: "Rollout, training, monitoring and ongoing tuning. You own the system; we keep it sharp.",
  },
];

export function Process() {
  return (
    <section id="process" className="border-y border-border bg-surface/30">
      <div className="mx-auto max-w-6xl px-5 py-24 md:px-8">
        <SectionHeading
          eyebrow="How we work"
          title="A four-step path from idea to production"
          intro="No 40-page discovery deck. Every phase ends in something you can use."
        />

        <div className="relative mt-14">
          <div className="rule-glow absolute top-6 right-0 left-0 hidden lg:block" aria-hidden="true" />
          <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <li key={s.n}>
                <Reveal delay={i * 0.1}>
                  <div className="glass-panel h-full rounded-2xl p-6">
                    <span className="font-display flex size-12 items-center justify-center rounded-xl bg-primary/15 text-lg font-semibold text-primary-glow">
                      {s.n}
                    </span>
                    <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
