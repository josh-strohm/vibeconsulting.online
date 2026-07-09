import { Section, SectionHeading } from "@/components/section";

export function ProofPlaceholder() {
  return (
    <Section className="bg-ink-elevated/30">
      <SectionHeading
        eyebrow="Clients"
        title="Stories coming soon"
        description="We are not inventing logos or numbers. When we have real client stories to share, they will go here."
      />
      <div className="rounded-2xl border border-dashed border-ink-border bg-ink/60 p-8 text-center sm:p-12">
        <p className="font-mono text-xs uppercase tracking-widest text-fog-muted">
          Coming soon
        </p>
        <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-fog-muted sm:text-base">
          Prefer real results over marketing fluff. Same standard applies to the
          work itself.
        </p>
      </div>
    </Section>
  );
}
