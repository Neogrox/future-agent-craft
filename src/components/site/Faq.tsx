import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading, Reveal } from "./Reveal";

export const FAQS = [
  {
    q: "What exactly is an AI agent, in business terms?",
    a: "Software that can take a goal, gather the information it needs from your systems, decide what to do and then do it — raise the invoice, draft the reply, update the record — with a human approving anything sensitive.",
  },
  {
    q: "How is this different from buying an off-the-shelf AI tool?",
    a: "Off-the-shelf tools solve the average company's problem. An agent we build follows your process, uses your data and handles your exceptions, which is usually where the time actually goes.",
  },
  {
    q: "How long before we see something working?",
    a: "A first working agent typically lands 4 to 6 weeks after kick-off. Audits produce a roadmap in 2 to 3 weeks.",
  },
  {
    q: "Is our data safe, and where does it go?",
    a: "Agents run in your infrastructure or a tenant you control, with least-privilege access to only the systems the task needs. We sign your DPA and can keep data inside your chosen region.",
  },
  {
    q: "What happens when an agent gets something wrong?",
    a: "Every build ships with guardrails, human approval steps for consequential actions, logging of every decision, and an evaluation suite we run before each change goes live.",
  },
  {
    q: "Do we need an in-house AI team first?",
    a: "No. Most clients start with none. We build, document and train your team to run it — and stay on retainer if you'd rather we did.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-3xl px-5 py-24 md:px-8">
      <SectionHeading eyebrow="FAQ" title="Questions we get on every first call" align="center" />
      <Reveal className="mt-12">
        <Accordion type="single" collapsible className="w-full">
          {FAQS.map((f, i) => (
            <AccordionItem key={f.q} value={`item-${i}`} className="border-border">
              <AccordionTrigger className="font-display text-left text-base hover:text-primary-glow">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </section>
  );
}
