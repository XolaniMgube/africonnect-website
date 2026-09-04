import Hero from "@/components/Hero";
import Services from "@/components/Services";
import FeaturedCaseStudy from "@/components/FeaturedCaseStudy";
import Capabilities from "@/components/Capabilities";
import AboutShowcase from "@/components/AboutShowcase";
import Work from "@/components/Work";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      {/* <FeaturedCaseStudy /> */}
      {/* <Capabilities /> */}
      <AboutShowcase />
      <Work />

      <CTA
        title="Have a business problem technology can solve?"
        text="Tell us where the work is getting stuck. We'll help you turn it into a clear, practical next step."
        buttonLabel="Discuss your project"
      />
    </main>
  );
}
