import type { Metadata } from "next";

import { CtaBand } from "@/components/cta-band";
import { Section, SectionHeading } from "@/components/section";
import { values } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "VibeConsulting helps small and mid-size businesses use AI in practical ways.",
};

export default function AboutPage() {
  return (
    <>
      <Section className="pb-8 pt-16 sm:pt-20">
        <SectionHeading
          eyebrow="About"
          title="We help teams put AI to work."
          description="Built for businesses stuck between the hype and the real day-to-day. We find what is worth doing, build it, and leave your team ready to run it."
        />
      </Section>

      <Section className="pt-0">
        <div className="grid gap-8 lg:grid-cols-2">
          <article className="rounded-2xl border border-ink-border bg-ink-elevated p-6 sm:p-8">
            <h2 className="font-heading text-xl font-semibold text-fog">
              How we think
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-fog-muted sm:text-base">
              Most small and mid-size businesses do not need a research lab.
              They need someone who will sit with messy processes, pick a few
              high-value workflows, and build something that fits how the
              business already runs.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-fog-muted sm:text-base">
              We keep the language plain and the scope honest. The goal is work
              that sticks after we leave.
            </p>
          </article>

          <article className="rounded-2xl border border-ink-border bg-ink-elevated p-6 sm:p-8">
            <h2 className="font-heading text-xl font-semibold text-fog">
              Working with us
            </h2>
            <ul className="mt-4 space-y-4 text-sm leading-relaxed text-fog-muted sm:text-base">
              <li className="border-l-2 border-white/20 pl-4">
                You always know what is next. No mystery phases.
              </li>
              <li className="border-l-2 border-white/15 pl-4">
                We use your existing tools when we can.
              </li>
              <li className="border-l-2 border-white/10 pl-4">
                We write things down so ownership stays with your team.
              </li>
            </ul>
          </article>
        </div>
      </Section>

      <Section className="border-y border-ink-border bg-ink-elevated/30">
        <SectionHeading
          eyebrow="Values"
          title="What we hold to"
          description="From the first call to the last handoff."
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {values.map((value) => (
            <article
              key={value.title}
              className="card-glow rounded-2xl border border-ink-border bg-ink p-6"
            >
              <h3 className="font-heading text-lg font-semibold text-fog">
                {value.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-fog-muted">
                {value.body}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <CtaBand
        title="Want to see if we are a fit?"
        description="A short call is usually enough to know whether an audit, plan, or build makes sense."
      />
    </>
  );
}
