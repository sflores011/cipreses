import type { Metadata } from "next";
import ProjectsHero from "@/components/projects/ProjectsHero";
import ProjectsGrid from "@/components/projects/ProjectsGrid";
import FaqSection from "@/components/home/FaqSection";
import { PROJECTS_FAQS_LEFT, PROJECTS_FAQS_RIGHT } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Proyectos | Cipreses y Pinos",
  description:
    "Operamos infraestructura vial crítica para el país. Esto es lo que hacemos funcionar.",
};

export default function ProyectosPage() {
  return (
    <main>
      <ProjectsHero />
      <ProjectsGrid />
      <FaqSection
        faqsLeft={PROJECTS_FAQS_LEFT}
        faqsRight={PROJECTS_FAQS_RIGHT}
      />
    </main>
  );
}
