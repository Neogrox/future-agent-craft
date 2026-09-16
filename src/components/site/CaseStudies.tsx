import { Reveal, SectionHeading } from "./Reveal";

const CASES = [
  {
    sector: "Logistics · 240 staff",
    title: "Quote desk that answers in minutes",
    problem: "Freight quotes took 2 days and passed through four inboxes.",
    solution:
      "A pricing agent that reads inbound requests, pulls rate cards and drafts the quote for a human to approve.",
    metrics: [
      { value: "94%", label: "Quotes auto-drafted" },
      { value: "2d → 11m", label: "Turnaround" },
    ],
  },
  {
    sector: "Professional services · 60 staff",
    title: "Intake and conflict checks, automated",
    problem: "Paralegals spent a third of each week on intake paperwork and checks.",
    solution:
      "Document-reading agents that extract matter details, run conflict checks and open the file in their practice system.",
    metrics: [
      { value: "1,900", label: "Hours saved per year" },
      { value: "0", label: "Missed conflict flags" },
    ],
  },
  {
    sector: "Healthcare group · 12 clinics",
    title: "An AI roadmap the board approved",
    problem: "Twelve competing AI pilots, no strategy, no measurable return.",
    solution:
      "A six-week audit, prioritised roadmap and governance model — then we built the top two use cases.",
    metrics: [
      { value: "£1.4m", label: "Modelled annual saving" },
      { value: "2 of 12", label: "Pilots kept" },
    ],
  },
];

export function CaseStudies() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-5 py-24 md:px-8">
      <SectionHeading
        eyebrow="Selected work"
        title="Problem, solution, outcome"
        intro="Illustrative engagements. Named references available on the call."
      />

      <div className="mt-14 grid gap-5 lg:grid-cols-3">
        {CASES.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.1}>
            <article className="glass-panel flex h-full flex-col rounded-2xl p-7">
              <p className="eyebrow text-[0.65rem]">{c.sector}</p>
              <h3 className="mt-4 text-xl font-semibold">{c.title}</h3>
              <dl className="mt-5 space-y-4 text-sm">
                <div>
                  <dt className="font-display text-xs tracking-widest text-accent uppercase">
                    Problem
                  </dt>
                  <dd className="mt-1 text-muted-foreground">{c.problem}</dd>
                </div>
                <div>
                  <dt className="font-display text-xs tracking-widest text-accent uppercase">
                    Solution
                  </dt>
                  <dd className="mt-1 text-muted-foreground">{c.solution}</dd>
                </div>
              </dl>
              <div className="mt-auto grid grid-cols-2 gap-4 border-t border-border pt-6">
                {c.metrics.map((m) => (
                  <div key={m.label}>
                    <span className="font-display block text-2xl font-semibold text-primary-glow">
                      {m.value}
                    </span>
                    <span className="mt-1 block text-xs text-muted-foreground">{m.label}</span>
                  </div>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
