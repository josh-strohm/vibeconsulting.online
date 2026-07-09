import { Section, SectionHeading } from "@/components/section";
import { outcomes } from "@/lib/content";

export function Outcomes() {
  return (
    <Section className="bg-ink-elevated/40">
      <SectionHeading
        eyebrow="Results"
        title="What we aim for"
        description="Time back, cleaner ops, and a team that can keep things running."
      />
      <div className="grid gap-4 sm:grid-cols-2">
        {outcomes.map((item, i) => (
          <article
            key={item.title}
            className="card-glow rounded-2xl border border-ink-border bg-ink p-6"
          >
            <p className="font-mono text-xs text-fog-muted">
              {String(i + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-3 font-heading text-xl font-semibold text-fog">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-fog-muted">
              {item.body}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
