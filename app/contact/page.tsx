import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MapPin, Clock } from "lucide-react";

import { ContactForm } from "@/components/contact-form";
import { Section, SectionHeading } from "@/components/section";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/lib/content";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact",
  description: "Send a message or find business details for VibeConsulting.",
};

export default function ContactPage() {
  return (
    <>
      <Section className="pb-8 pt-16 sm:pt-20">
        <SectionHeading
          eyebrow="Contact"
          title="Get in touch."
          description="Send a message and we will get back to you. To book time on the calendar, use the booking page."
        />
      </Section>

      <Section className="pt-0 pb-20">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <ContactForm source="/contact" />

          <aside className="flex flex-col gap-8">
            <div className="rounded-2xl border border-ink-border bg-ink-elevated p-8 sm:p-10 lg:p-12">
              <h2 className="font-heading text-xl font-semibold text-fog sm:text-2xl">
                Business details
              </h2>
              <ul className="mt-8 space-y-8">
                <li className="flex gap-4">
                  <span className="mt-0.5 flex size-11 shrink-0 items-center justify-center rounded-xl border border-ink-border bg-ink text-fog-muted">
                    <Mail className="size-4" />
                  </span>
                  <div className="min-w-0 pt-0.5">
                    <p className="text-sm font-medium text-fog">Email</p>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="mt-2 block text-sm leading-relaxed text-fog-muted hover:text-fog sm:text-base"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="mt-0.5 flex size-11 shrink-0 items-center justify-center rounded-xl border border-ink-border bg-ink text-fog-muted">
                    <MapPin className="size-4" />
                  </span>
                  <div className="min-w-0 pt-0.5">
                    <p className="text-sm font-medium text-fog">Location</p>
                    <p className="mt-2 text-sm leading-relaxed text-fog-muted sm:text-base">
                      Remote-first. Serving small and mid-size businesses online.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="mt-0.5 flex size-11 shrink-0 items-center justify-center rounded-xl border border-ink-border bg-ink text-fog-muted">
                    <Clock className="size-4" />
                  </span>
                  <div className="min-w-0 pt-0.5">
                    <p className="text-sm font-medium text-fog">Response time</p>
                    <p className="mt-2 text-sm leading-relaxed text-fog-muted sm:text-base">
                      Usually within one business day.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-ink-border bg-ink p-8 sm:p-10">
              <h2 className="font-heading text-lg font-semibold text-fog sm:text-xl">
                Prefer a live call?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-fog-muted sm:text-base">
                Book a time on our calendar.
              </p>
              <Link
                href="/calendar"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "mt-7 h-12 w-full justify-center sm:w-auto sm:px-8"
                )}
              >
                Book a call
              </Link>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
