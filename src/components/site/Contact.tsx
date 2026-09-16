import { useState } from "react";
import { toast } from "sonner";
import { ArrowRight, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Reveal } from "./Reveal";

export function Contact() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const payload = {
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      company: String(data.get("company") ?? "").trim() || null,
      budget: String(data.get("budget") ?? "").trim() || null,
      message: String(data.get("message") ?? "").trim(),
    };

    if (!payload.name || !payload.email || !payload.message) {
      toast.error("Please add your name, email and a short message.");
      return;
    }

    setSending(true);
    const { error } = await supabase.from("leads").insert(payload);
    setSending(false);

    if (error) {
      toast.error("That didn't send. Please email hello@neogrox.com instead.");
      return;
    }

    form.reset();
    setSent(true);
    toast.success("Received — we'll reply within one working day.");
  }

  return (
    <section id="contact" className="hero-aura surface-grain relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-24 md:px-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <p className="eyebrow">Book a strategy call</p>
          <h2 className="mt-4 text-3xl leading-[1.1] font-semibold sm:text-4xl md:text-5xl">
            Tell us the task that shouldn&apos;t need a human.
          </h2>
          <p className="mt-5 text-muted-foreground">
            Thirty minutes, no deck. We&apos;ll map the highest-return automations in your business
            and tell you honestly which ones aren&apos;t worth building yet.
          </p>
          <dl className="mt-10 space-y-4 text-sm">
            <div>
              <dt className="eyebrow text-[0.65rem]">Email</dt>
              <dd className="mt-1">
                <a href="mailto:hello@neogrox.com" className="hover:text-primary-glow">
                  hello@neogrox.com
                </a>
              </dd>
            </div>
            <div>
              <dt className="eyebrow text-[0.65rem]">Response time</dt>
              <dd className="mt-1 text-muted-foreground">Within one working day</dd>
            </div>
          </dl>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="glass-panel rounded-3xl p-6 sm:p-8">
            {sent ? (
              <div className="py-10 text-center">
                <h3 className="text-2xl font-semibold">Thanks — that&apos;s with us.</h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  We&apos;ll be in touch within one working day to find a time.
                </p>
                <Button
                  variant="outlineGlow"
                  size="lg"
                  className="mt-6"
                  onClick={() => setSent(false)}
                >
                  Send another message
                </Button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" required autoComplete="name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Work email</Label>
                    <Input id="email" name="email" type="email" required autoComplete="email" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" name="company" autoComplete="organization" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="budget">Indicative budget</Label>
                    <Input id="budget" name="budget" placeholder="Not sure yet" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">What would you like an agent to handle?</Label>
                  <Textarea id="message" name="message" rows={5} required />
                </div>
                <Button type="submit" variant="hero" size="xl" className="w-full" disabled={sending}>
                  {sending ? (
                    <>
                      <Loader2 className="size-4 animate-spin" /> Sending
                    </>
                  ) : (
                    <>
                      Book a strategy call <ArrowRight className="size-4" />
                    </>
                  )}
                </Button>
                <p className="text-xs text-muted-foreground">
                  We use your details only to reply to this enquiry.
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
