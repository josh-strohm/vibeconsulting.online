import { cn } from "@/lib/utils";

export function Section({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={cn("px-4 py-16 sm:px-6 sm:py-20", className)}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={cn(
        "mb-10 max-w-2xl",
        align === "center" && "mx-auto text-center"
      )}
    >
      {eyebrow ? (
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-fog-muted">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-heading text-3xl font-semibold tracking-tight text-fog sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-fog-muted sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
