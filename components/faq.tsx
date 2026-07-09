import { Section, SectionHeading } from "@/components/section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/content";

export function Faq({
  items = faqs,
}: {
  items?: readonly { q: string; a: string }[];
}) {
  return (
    <Section>
      <SectionHeading
        eyebrow="FAQ"
        title="Common questions"
        description="Quick answers before you book a call."
      />
      <Accordion className="rounded-2xl border border-ink-border bg-ink-elevated px-2 sm:px-4">
        {items.map((item, index) => (
          <AccordionItem key={item.q} value={`item-${index}`}>
            <AccordionTrigger className="text-left font-heading text-base text-fog hover:no-underline">
              {item.q}
            </AccordionTrigger>
            <AccordionContent className="text-fog-muted leading-relaxed">
              {item.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  );
}
