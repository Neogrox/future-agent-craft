import { useEffect, useState } from "react";

const LINES = [
  "agent.observe(crm, inbox, calendar)",
  "agent.plan(goal='qualify + route lead')",
  "agent.act(update_crm, draft_reply)",
  "handoff -> human review  ✓ 41s saved",
];

function Terminal() {
  const [lineIndex, setLineIndex] = useState(0);
  const [chars, setChars] = useState(0);

  useEffect(() => {
    const current = LINES[lineIndex] ?? "";
    if (chars < current.length) {
      const t = setTimeout(() => setChars((c) => c + 1), 26);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setLineIndex((i) => (i + 1) % LINES.length);
      setChars(0);
    }, 1400);
    return () => clearTimeout(t);
  }, [chars, lineIndex]);

  const visible = LINES.slice(0, lineIndex);

  return (
    <div className="glass-panel rounded-2xl p-4 font-mono text-[0.7rem] leading-relaxed sm:text-xs">
      <div className="flex items-center gap-1.5 pb-3">
        <span className="size-2 rounded-full bg-primary" />
        <span className="size-2 rounded-full bg-accent/70" />
        <span className="size-2 rounded-full bg-muted-foreground/40" />
        <span className="eyebrow ml-2 text-[0.6rem]">agent · runtime</span>
      </div>
      <div className="space-y-1.5">
        {visible.map((line) => (
          <p key={line} className="text-muted-foreground">
            <span className="text-accent">›</span> {line}
          </p>
        ))}
        <p className="text-foreground">
          <span className="text-accent">›</span> {LINES[lineIndex]?.slice(0, chars)}
          <span className="animate-caret ml-0.5 inline-block h-3 w-1.5 bg-primary-glow align-middle" />
        </p>
      </div>
    </div>
  );
}

const NODES = [
  { id: "inbox", label: "Inbox", x: 26, y: 40 },
  { id: "crm", label: "CRM", x: 26, y: 130 },
  { id: "docs", label: "Docs", x: 26, y: 220 },
  { id: "agent", label: "Agent", x: 175, y: 130 },
  { id: "route", label: "Routing", x: 320, y: 62 },
  { id: "report", label: "Reporting", x: 320, y: 130 },
  { id: "human", label: "Human", x: 320, y: 198 },
];

const EDGES: Array<[string, string]> = [
  ["inbox", "agent"],
  ["crm", "agent"],
  ["docs", "agent"],
  ["agent", "route"],
  ["agent", "report"],
  ["agent", "human"],
];

function node(id: string) {
  return NODES.find((n) => n.id === id)!;
}

export function AgentGraph() {
  return (
    <div className="space-y-4">
      <div className="glass-panel animate-float-slow rounded-3xl p-4 sm:p-6">
        <svg
          viewBox="0 0 400 265"
          role="img"
          aria-label="Diagram of an AI agent reading a company's inbox, CRM and documents, then routing work, reporting and handing off to a human"
          className="w-full"
        >
          {EDGES.map(([from, to], i) => {
            const a = node(from);
            const b = node(to);
            const mid = (a.x + b.x) / 2;
            const d = `M ${a.x + 32} ${a.y} C ${mid} ${a.y}, ${mid} ${b.y}, ${b.x - 32} ${b.y}`;
            return (
              <g key={`${from}-${to}`}>
                <path d={d} fill="none" stroke="var(--border)" strokeWidth="1.2" />
                <path
                  d={d}
                  fill="none"
                  stroke={i % 2 === 0 ? "var(--primary-glow)" : "var(--accent)"}
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeDasharray="6 234"
                  style={{
                    animation: `dash-flow 3.4s linear ${i * 0.45}s infinite`,
                  }}
                />
              </g>
            );
          })}
          {NODES.map((n, i) => {
            const isAgent = n.id === "agent";
            return (
              <g key={n.id}>
                {isAgent ? (
                  <circle cx={n.x} cy={n.y} r="34" fill="var(--primary)" opacity="0.14" />
                ) : null}
                <circle
                  cx={n.x}
                  cy={n.y}
                  r={isAgent ? 22 : 16}
                  fill="var(--surface)"
                  stroke={isAgent ? "var(--primary-glow)" : "var(--border)"}
                  strokeWidth={isAgent ? 1.6 : 1}
                />
                <circle
                  cx={n.x}
                  cy={n.y}
                  r="4"
                  fill={isAgent ? "var(--primary-glow)" : "var(--accent)"}
                  style={{ animation: `pulse-node 2.8s ease-in-out ${i * 0.3}s infinite` }}
                />
                <text
                  x={n.x}
                  y={n.y + (isAgent ? 40 : 32)}
                  textAnchor="middle"
                  fill="var(--muted-foreground)"
                  fontSize="10"
                  fontFamily="var(--font-display)"
                  letterSpacing="0.12em"
                >
                  {n.label.toUpperCase()}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
      <Terminal />
    </div>
  );
}
