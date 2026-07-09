import { Section, SectionHeading } from "@/components/section";
import { processSteps } from "@/lib/content";

export function ProcessSteps() {
  return (
    <Section className="border-y border-ink-border bg-ink">
      <SectionHeading
        eyebrow="Process"
        title="Discover, design, build, train"
        description="Simple steps. Something concrete at the end of each one."
      />
      <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {processSteps.map((step) => (
          <li
            key={step.step}
            className="card-glow relative rounded-2xl border border-ink-border bg-ink-elevated p-6"
          >
            <span className="font-mono text-sm text-fog-muted">{step.step}</span>
            <h3 className="mt-3 font-heading text-lg font-semibold text-fog">
              {step.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-fog-muted">
              {step.body}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
