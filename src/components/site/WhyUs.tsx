import { Reveal, SectionHeading } from "./Reveal";

const REASONS = [
  {
    title: "Not a template shop",
    body: "Every agent is built for your workflow, your data and your edge cases. No recycled chatbot with your logo on it.",
  },
  {
    title: "Strategy through deployment",
    body: "The people advising your leadership are the ones who ship the system. Nothing gets lost in a handover.",
  },
  {
    title: "Industry-specific agents",
    body: "Logistics, legal, healthcare, finance, retail — we bring domain patterns, not a generic playbook.",
  },
  {
    title: "Integration-first",
    body: "Agents live inside your CRM, ERP, inbox and ticketing. Your team doesn't learn a new place to work.",
  },
  {
    title: "Measured, not vibes",
    body: "Every build ships with evaluations and a metric it must move. If it doesn't, we say so.",
  },
  {
    title: "You own everything",
    body: "Your code, your prompts, your data, your infrastructure. No lock-in, no black box.",
  },
];

export function WhyUs() {
  return (
    <section className="border-y border-border bg-surface/30">
      <div className="mx-auto max-w-6xl px-5 py-24 md:px-8">
        <SectionHeading
          eyebrow="Why Neogrox"
          title="Built like engineers, advised like operators"
        />
        <div className="mt-14 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((r, i) => (
            <Reveal key={r.title} delay={(i % 3) * 0.08}>
              <div>
                <div className="rule-glow w-16" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-semibold">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
