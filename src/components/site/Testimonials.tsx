import { Reveal, SectionHeading } from "./Reveal";

const QUOTES = [
  {
    quote:
      "They spent the first fortnight learning how our depot actually runs. The agent they built reflects that — our planners trust it.",
    name: "Operations Director",
    org: "National logistics group",
  },
  {
    quote:
      "We had eleven AI pilots and nothing to show a board. Neogrox killed nine of them and made the other two work.",
    name: "Chief Executive",
    org: "Healthcare group",
  },
  {
    quote:
      "The difference is they stayed after launch. Six months in, the agent handles more than it did on day one.",
    name: "Managing Partner",
    org: "Commercial law firm",
  },
];

export function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24 md:px-8">
      <SectionHeading eyebrow="Testimonials" title="What clients say afterwards" />
      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {QUOTES.map((q, i) => (
          <Reveal key={q.quote} delay={i * 0.1}>
            <figure className="glass-panel flex h-full flex-col rounded-2xl p-7">
              <span
                className="font-display text-4xl leading-none text-primary-glow"
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <blockquote className="mt-3 text-sm leading-relaxed text-foreground/90">
                {q.quote}
              </blockquote>
              <figcaption className="mt-auto pt-6 text-xs text-muted-foreground">
                <span className="font-display block text-foreground">{q.name}</span>
                {q.org}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
