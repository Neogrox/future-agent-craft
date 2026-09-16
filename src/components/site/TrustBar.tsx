import { Reveal } from "./Reveal";

const STATS = [
  { value: "40+", label: "Businesses advised" },
  { value: "120+", label: "Agents deployed" },
  { value: "38k", label: "Hours given back" },
  { value: "9", label: "Industries served" },
];

const CLIENTS = [
  "Vantia Group",
  "Northline Legal",
  "Kestrel Health",
  "Orbit Logistics",
  "Fairmark Capital",
  "Bluerock Retail",
];

export function TrustBar() {
  return (
    <section aria-label="Client results" className="border-y border-border bg-surface/40">
      <div className="mx-auto max-w-6xl px-5 py-12 md:px-8">
        <Reveal>
          <dl className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <span className="font-display block text-3xl font-semibold md:text-4xl">
                    {s.value}
                  </span>
                  <span className="mt-1 block text-sm text-muted-foreground">{s.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <div className="relative mt-12 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
          <div className="animate-marquee flex w-max gap-14">
            {[...CLIENTS, ...CLIENTS].map((c, i) => (
              <span
                key={`${c}-${i}`}
                className="font-display text-sm tracking-[0.18em] whitespace-nowrap text-muted-foreground/70 uppercase"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
