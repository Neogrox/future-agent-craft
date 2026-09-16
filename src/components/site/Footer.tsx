import { useState } from "react";
import { toast } from "sonner";
import { Linkedin, Github, Twitter } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const NAV = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#work", label: "Work" },
  { href: "#packages", label: "Packages" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [busy, setBusy] = useState(false);

  async function subscribe(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.trim()) return;
    setBusy(true);
    const { error } = await supabase.from("leads").insert({
      name: "Newsletter subscriber",
      email: email.trim(),
      message: "Newsletter signup from the website footer.",
    });
    setBusy(false);
    if (error) {
      toast.error("Couldn't sign you up. Please try again.");
      return;
    }
    setEmail("");
    toast.success("You're on the list.");
  }

  return (
    <footer className="border-t border-border bg-surface/50">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1.2fr]">
          <div>
            <a href="#top" className="font-display text-lg font-semibold">
              Neogrox<span className="text-primary-glow">.</span>
            </a>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              AI agents, workflow automation and AI strategy for businesses that need results, not
              pilots.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="https://www.linkedin.com"
                aria-label="Neogrox on LinkedIn"
                className="rounded-lg border border-border p-2 text-muted-foreground transition-colors hover:border-primary-glow hover:text-foreground"
              >
                <Linkedin className="size-4" />
              </a>
              <a
                href="https://x.com"
                aria-label="Neogrox on X"
                className="rounded-lg border border-border p-2 text-muted-foreground transition-colors hover:border-primary-glow hover:text-foreground"
              >
                <Twitter className="size-4" />
              </a>
              <a
                href="https://github.com"
                aria-label="Neogrox on GitHub"
                className="rounded-lg border border-border p-2 text-muted-foreground transition-colors hover:border-primary-glow hover:text-foreground"
              >
                <Github className="size-4" />
              </a>
            </div>
          </div>

          <nav aria-label="Footer">
            <p className="eyebrow">Explore</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {NAV.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-muted-foreground hover:text-foreground">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="eyebrow">Field notes</p>
            <p className="mt-4 text-sm text-muted-foreground">
              One email a month on what we shipped and what actually worked.
            </p>
            <form onSubmit={subscribe} className="mt-4 flex gap-2">
              <label htmlFor="newsletter" className="sr-only">
                Email address
              </label>
              <Input
                id="newsletter"
                type="email"
                required
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button type="submit" variant="hero" disabled={busy}>
                Join
              </Button>
            </form>
            <p className="mt-4 text-sm text-muted-foreground">
              <a href="mailto:hello@neogrox.com" className="hover:text-foreground">
                hello@neogrox.com
              </a>
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Neogrox. All rights reserved.</p>
          <p>Built for businesses putting AI to work.</p>
        </div>
      </div>
    </footer>
  );
}
