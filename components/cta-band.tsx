import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function CtaBand({
  title = "Want to talk it through?",
  description = "Book a call or send a short note. We will suggest a simple next step.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-ink-border bg-gradient-to-b from-white/[0.08] to-transparent p-px">
        <div className="rounded-[calc(1.5rem-1px)] bg-ink-elevated px-6 py-12 text-center sm:px-12">
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-fog sm:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-fog-muted sm:text-lg">
            {description}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/calendar"
              className={cn(buttonVariants({ size: "lg" }), "h-11 px-6")}
            >
              Book a call
              <ArrowRight className="size-4" data-icon="inline-end" />
            </Link>
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-11 border-ink-border bg-ink-elevated/50 px-6 text-fog hover:bg-ink-elevated"
              )}
            >
              Send a message
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
