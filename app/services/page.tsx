import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { CtaBand } from "@/components/cta-band";
import { Section, SectionHeading } from "@/components/section";
import { buttonVariants } from "@/components/ui/button";
import { offers } from "@/lib/content";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Audit, roadmap, build, and training for small and mid-size businesses using AI.",
};

export default function ServicesPage() {
  return (
    <>
      <Section className="pb-8 pt-16 sm:pt-20">
        <SectionHeading
          eyebrow="Services"
          title="Clear offers. Start where you are."
          description="Many clients go audit, then plan, then build, then train. You can also start midstream if you already know what you need."
        />
      </Section>

      <Section className="pt-0">
        <div className="space-y-8">
          {offers.map((offer, index) => (
            <article
              key={offer.id}
              id={offer.id}
              className="scroll-mt-24 rounded-2xl border border-ink-border bg-ink-elevated p-6 sm:p-8"
            >
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-xs text-fog-muted">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-0.5 font-mono text-xs uppercase tracking-wider text-fog-muted">
                  {offer.eyebrow}
                </span>
              </div>
              <h2 className="mt-4 font-heading text-2xl font-semibold text-fog sm:text-3xl">
                {offer.title}
              </h2>
              <p className="mt-3 max-w-3xl text-base leading-relaxed text-fog-muted">
                {offer.summary}
              </p>
              <p className="mt-4 text-sm text-fog">
                <span className="text-fog-muted">Best for: </span>
                {offer.bestFor}
              </p>

              <div className="mt-6">
                <p className="font-mono text-xs uppercase tracking-widest text-fog-muted">
                  What you get
                </p>
                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {offer.deliverables.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2 text-sm text-fog-muted"
                    >
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-fog-muted" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/calendar"
                className={cn(
                  buttonVariants({ size: "default" }),
                  "mt-8 h-10 px-4"
                )}
              >
                Book a call
                <ArrowRight className="size-4" data-icon="inline-end" />
              </Link>
            </article>
          ))}
        </div>
      </Section>

      <Section className="border-t border-ink-border bg-ink-elevated/30">
        <SectionHeading
          eyebrow="Path"
          title="A simple sequence"
          description="Audit to get oriented. Plan to get aligned. Build to get it live. Train so it sticks. We will recommend the lightest start on the first call."
        />
        <ol className="grid gap-3 sm:grid-cols-4">
          {["Audit", "Plan", "Build", "Train"].map((label, i) => (
            <li
              key={label}
              className="rounded-xl border border-ink-border bg-ink px-4 py-5 text-center"
            >
              <p className="font-mono text-xs text-fog-muted">0{i + 1}</p>
              <p className="mt-2 font-heading font-semibold text-fog">{label}</p>
            </li>
          ))}
        </ol>
      </Section>

      <CtaBand
        title="Not sure which one fits?"
        description="That is what the call is for. Tell us where it hurts and we will map a path."
      />
    </>
  );
}
