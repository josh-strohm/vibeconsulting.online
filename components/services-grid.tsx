import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Section, SectionHeading } from "@/components/section";
import { buttonVariants } from "@/components/ui/button";
import { offers } from "@/lib/content";
import { cn } from "@/lib/utils";

export function ServicesGrid({
  showCta = true,
  compact = false,
}: {
  showCta?: boolean;
  compact?: boolean;
}) {
  return (
    <Section id="services">
      <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeading
          eyebrow="Services"
          title="Four ways to work with us"
          description="Start where you are. Audit, plan, build, or train."
        />
        {showCta ? (
          <Link
            href="/services"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "shrink-0 border-ink-border bg-transparent text-fog hover:bg-ink-elevated"
            )}
          >
            Full details
            <ArrowUpRight className="size-4" data-icon="inline-end" />
          </Link>
        ) : null}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {offers.map((offer) => (
          <article
            key={offer.id}
            className="card-glow group flex flex-col rounded-2xl border border-ink-border bg-ink-elevated p-6"
          >
            <p className="font-mono text-xs uppercase tracking-widest text-fog-muted">
              {offer.eyebrow}
            </p>
            <h3 className="mt-3 font-heading text-xl font-semibold text-fog">
              {offer.title}
            </h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-fog-muted">
              {offer.summary}
            </p>
            {!compact ? (
              <p className="mt-4 text-sm text-fog/90">
                <span className="text-fog-muted">Best for: </span>
                {offer.bestFor}
              </p>
            ) : null}
            <Link
              href={`/services#${offer.id}`}
              className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-fog transition-colors hover:text-white"
            >
              Learn more
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </article>
        ))}
      </div>
    </Section>
  );
}
