import type { Metadata } from "next";
import Link from "next/link";

import { BookingEmbed } from "@/components/booking-embed";
import { Section, SectionHeading } from "@/components/section";

export const metadata: Metadata = {
  title: "Book a call",
  description: "Pick a time to talk with VibeConsulting.",
};

export default function CalendarPage() {
  return (
    <>
      <Section className="pb-8 pt-16 sm:pt-20">
        <SectionHeading
          eyebrow="Calendar"
          title="Book a call"
          description="Pick a time that works. Prefer email or a written note? Use the contact form instead."
        />
        <p className="text-sm text-fog-muted">
          <Link
            href="/contact"
            className="text-fog underline-offset-4 hover:text-white hover:underline"
          >
            Go to contact
          </Link>
        </p>
      </Section>

      <Section className="pt-0 pb-20">
        <BookingEmbed />
      </Section>
    </>
  );
}
