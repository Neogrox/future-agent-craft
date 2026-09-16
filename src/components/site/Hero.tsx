import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AgentGraph } from "./AgentGraph";

export function Hero() {
  return (
    <section id="top" className="hero-aura surface-grain relative overflow-hidden pt-32 pb-20 md:pt-40">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 md:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow"
          >
            AI agents · automation · strategy
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 text-4xl leading-[1.02] font-semibold sm:text-5xl md:text-6xl lg:text-[4.25rem]"
          >
            We build AI agents that
            <span className="text-gradient"> do the work</span>, not demos.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg"
          >
            Neogrox designs custom AI agents, wires them into the systems your team already runs,
            and advises your leadership on where AI actually pays back. Strategy through deployment
            — one team.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.28 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Button asChild variant="hero" size="xl">
              <a href="#contact">
                Book a strategy call <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button asChild variant="outlineGlow" size="xl">
              <a href="#work">See results</a>
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-6 text-xs text-muted-foreground"
          >
            First call is a 30-minute working session — you leave with an opportunity map, not a pitch.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          <AgentGraph />
        </motion.div>
      </div>
    </section>
  );
}
