import { CtaBand } from "@/components/cta-band";
import { Differentiator } from "@/components/differentiator";
import { Faq } from "@/components/faq";
import { Hero } from "@/components/hero";
import { Outcomes } from "@/components/outcomes";
import { ProblemSection } from "@/components/problem-section";
import { ProcessSteps } from "@/components/process-steps";
import { ProofPlaceholder } from "@/components/proof-placeholder";
import { ServicesGrid } from "@/components/services-grid";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <Outcomes />
      <ServicesGrid />
      <ProcessSteps />
      <Differentiator />
      <ProofPlaceholder />
      <Faq />
      <CtaBand />
    </>
  );
}
