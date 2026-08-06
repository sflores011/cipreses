"use client";

import { Plus, Minus } from "lucide-react";
import { useId } from "react";
import styles from "./AccordionItem.module.scss";

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

export default function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
}: AccordionItemProps) {
  const panelId = useId();

  return (
    <div className={`${styles.item} ${isOpen ? styles.open : ""}`}>
      <h3 className={styles.heading}>
        <button
          type="button"
          className={styles.trigger}
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
        >
          <span className={styles.icon}>
            {isOpen ? <Minus size={16} /> : <Plus size={16} />}
          </span>
          <span className={styles.question}>{question}</span>
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        className={styles.panel}
        style={{
          gridTemplateRows: isOpen ? "1fr" : "0fr",
        }}
      >
        <div className={styles.panelInner}>
          <p className={styles.answer}>{answer}</p>
        </div>
      </div>
    </div>
  );
}
