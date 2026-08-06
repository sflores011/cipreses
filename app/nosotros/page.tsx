import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import AboutStats from "@/components/about/AboutStats";
import AboutStatement from "@/components/about/AboutStatement";
import PurposeSection from "@/components/about/PurposeSection";
import OperationPrinciples from "@/components/about/OperationPrinciples";
import AudienceSection from "@/components/about/AudienceSection";
import FaqSection from "@/components/home/FaqSection";
import Footer from "@/components/home/Footer";
import { ABOUT_FAQS_LEFT, ABOUT_FAQS_RIGHT } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Nosotros | Cipreses y Pinos",
  description:
    "Somos un operador guatemalteco de infraestructura de alto nivel que pone en movimiento tu activo.",
};

export default function NosotrosPage() {
  return (
    <>
      <main>
        <AboutHero />
        <AboutStats />
        <AboutStatement />
        <PurposeSection />
        <OperationPrinciples />
        <AudienceSection />
        <FaqSection faqsLeft={ABOUT_FAQS_LEFT} faqsRight={ABOUT_FAQS_RIGHT} />
      </main>
      <Footer />
    </>
  );
}
