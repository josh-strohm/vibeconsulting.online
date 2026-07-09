import { Section } from "@/components/section";

export function Differentiator() {
  return (
    <Section>
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-fog-muted">
            Why us
          </p>
          <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-fog sm:text-4xl">
            Straight talk. Finished work.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-fog-muted sm:text-lg">
            We show up, figure out what is worth doing, build it, and leave your
            team able to run it. That is the whole idea.
          </p>
        </div>
        <div className="rounded-2xl border border-ink-border bg-gradient-to-b from-white/[0.06] to-transparent p-px">
          <div className="rounded-[calc(1rem-1px)] bg-ink-elevated p-6 sm:p-8">
            <ul className="space-y-5">
              {[
                [
                  "Things that run in production",
                  "Not a demo that dies after the call.",
                ],
                [
                  "Honest priorities",
                  "We will also tell you what not to build.",
                ],
                [
                  "People stay in control",
                  "Automation that fits how your team already works.",
                ],
              ].map(([title, body]) => (
                <li key={title} className="border-l-2 border-white/20 pl-4">
                  <p className="font-heading text-base font-semibold text-fog">
                    {title}
                  </p>
                  <p className="mt-1 text-sm text-fog-muted">{body}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
