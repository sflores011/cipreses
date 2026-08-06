import Hero from "@/components/home/Hero";
import IntroStats from "@/components/home/IntroStats";
import OperationsSection from "@/components/home/OperationsSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import InnovationSection from "@/components/home/InnovationSection";
import SustainabilitySection from "@/components/home/SustainabilitySection";
import FaqSection from "@/components/home/FaqSection";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <IntroStats />
        <OperationsSection />
        <ProjectsSection />
        <InnovationSection />
        <SustainabilitySection />
        <FaqSection />
      </main>
      <Footer />
    </>
  );
}
