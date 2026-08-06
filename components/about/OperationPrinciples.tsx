import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import DecorativeUnderline from "@/components/ui/DecorativeUnderline";
import { PRINCIPLES } from "@/data/principles";
import styles from "./OperationPrinciples.module.scss";

export default function OperationPrinciples() {
  return (
    <section className={styles.section} aria-label="Cómo pensamos la operación">
      <Container>
        <SectionHeading className={styles.heading}>
          Cómo pensamos la
          <span className={styles.highlight}>
            {" "}
            operación
            <DecorativeUnderline className={styles.underline} />
          </span>
        </SectionHeading>

        <div className={styles.grid}>
          {PRINCIPLES.map((principle) => (
            <article key={principle.number} className={styles.card}>
              <span className={styles.number}>{principle.number}</span>
              <h3 className={styles.title}>{principle.title}</h3>
              <p className={styles.description}>{principle.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
