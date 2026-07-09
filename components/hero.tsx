import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-ink-border">
      <div className="pointer-events-none absolute inset-0 bg-mesh" aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-60" aria-hidden />
      <div
        className="mesh-orb pointer-events-none absolute left-1/2 top-0 size-[36rem] -translate-x-1/2 rounded-full bg-white/[0.06] blur-3xl"
        aria-hidden
      />
      <div
        className="mesh-orb pointer-events-none absolute -right-20 top-32 size-[20rem] rounded-full bg-white/[0.03] blur-3xl"
        aria-hidden
        style={{ animationDelay: "-4s" }}
      />

      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <p className="animate-fade-up font-mono text-xs uppercase tracking-[0.22em] text-fog-muted">
            AI consulting for SMBs
          </p>
          <h1 className="animate-fade-up delay-100 mt-4 font-heading text-4xl font-semibold leading-[1.08] tracking-tight text-fog sm:text-5xl lg:text-6xl">
            AI that helps your business{" "}
            <span className="text-gradient">get work done</span>.
          </h1>
          <p className="animate-fade-up delay-200 mt-6 max-w-xl text-lg leading-relaxed text-fog-muted">
            We help small and mid-size teams figure out where AI is worth it,
            then build it into the tools you already use.
          </p>
          <div className="animate-fade-up delay-300 mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/calendar"
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-11 px-5 text-sm sm:text-base"
              )}
            >
              Book a call
              <ArrowRight className="size-4" data-icon="inline-end" />
            </Link>
            <Link
              href="/services"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-11 border-ink-border bg-ink-elevated/40 px-5 text-sm text-fog hover:bg-ink-elevated sm:text-base"
              )}
            >
              See services
            </Link>
          </div>
        </div>

        <div className="animate-fade-in delay-400 relative">
          <div className="rounded-2xl border border-ink-border bg-ink-elevated/90 p-6 shadow-[0_24px_80px_-32px_rgba(0,0,0,0.85)] backdrop-blur">
            <p className="font-mono text-xs uppercase tracking-widest text-fog-muted">
              How we work
            </p>
            <ul className="mt-5 space-y-4">
              {[
                ["Audit", "Where AI helps, and where it does not"],
                ["Plan", "A 90-day list with owners"],
                ["Build", "Agents, workflows, connections"],
                ["Train", "So the team can run it"],
              ].map(([label, detail], i) => (
                <li
                  key={label}
                  className="flex items-start gap-3 border-t border-ink-border/80 pt-4 first:border-0 first:pt-0"
                >
                  <span className="mt-0.5 font-mono text-xs text-fog-muted">
                    0{i + 1}
                  </span>
                  <div>
                    <p className="font-heading text-base font-semibold text-fog">
                      {label}
                    </p>
                    <p className="text-sm text-fog-muted">{detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
