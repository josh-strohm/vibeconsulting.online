import { Section, SectionHeading } from "@/components/section";

const points = [
  {
    title: "Lots of tools, no plan",
    body: "People try ChatGPT on their own. Nobody owns the process or the next step.",
  },
  {
    title: "Pilots that stall",
    body: "It looks good in a meeting, then nothing changes. Work still runs on spreadsheets.",
  },
  {
    title: "Hard to pick a path",
    body: "You do not want to waste budget on hype. You need a short list, not a lecture.",
  },
];

export function ProblemSection() {
  return (
    <Section>
      <SectionHeading
        eyebrow="The problem"
        title="Trying AI without a plan gets expensive."
        description="You do not need more model names. You need to know what to automate, what to skip, and what to put in front of your team."
      />
      <div className="grid gap-4 md:grid-cols-3">
        {points.map((point) => (
          <article
            key={point.title}
            className="card-glow rounded-2xl border border-ink-border bg-ink-elevated p-6"
          >
            <h3 className="font-heading text-lg font-semibold text-fog">
              {point.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-fog-muted">
              {point.body}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
