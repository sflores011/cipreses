"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import AccordionItem from "@/components/ui/AccordionItem";
import { FAQS_LEFT, FAQS_RIGHT, FaqItemData } from "@/data/faqs";
import styles from "./FaqSection.module.scss";

interface FaqSectionProps {
  faqsLeft?: FaqItemData[];
  faqsRight?: FaqItemData[];
}

export default function FaqSection({
  faqsLeft = FAQS_LEFT,
  faqsRight = FAQS_RIGHT,
}: FaqSectionProps) {
  const [openQuestion, setOpenQuestion] = useState<string | null>(
    faqsLeft[0]?.question ?? null,
  );

  const toggle = (question: string) => {
    setOpenQuestion((current) => (current === question ? null : question));
  };

  return (
    <section className={styles.section} aria-label="Preguntas frecuentes">
      <Container>
        <h2 className={styles.title}>Frequently Ask Questions</h2>

        <div className={styles.grid}>
          <div className={styles.column}>
            {faqsLeft.map((faq) => (
              <AccordionItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
                isOpen={openQuestion === faq.question}
                onToggle={() => toggle(faq.question)}
              />
            ))}
          </div>

          <div className={styles.column}>
            {faqsRight.map((faq) => (
              <AccordionItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
                isOpen={openQuestion === faq.question}
                onToggle={() => toggle(faq.question)}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
