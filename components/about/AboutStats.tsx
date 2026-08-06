import Container from "@/components/ui/Container";
import StatsGrid from "@/components/ui/StatsGrid";
import styles from "./AboutStats.module.scss";

export default function AboutStats() {
  return (
    <section className={styles.section} aria-label="Estadísticas">
      <Container>
        <StatsGrid />
      </Container>
    </section>
  );
}
