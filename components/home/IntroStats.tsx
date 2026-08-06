import Container from "@/components/ui/Container";
import PrimaryButton from "@/components/ui/PrimaryButton";
import StatsGrid from "@/components/ui/StatsGrid";
import styles from "./IntroStats.module.scss";

export default function IntroStats() {
  return (
    <section className={styles.section} id="nosotros" aria-label="Nosotros">
      <Container>
        <div className={styles.intro}>
          <h2 className={styles.title}>
            Somos un operador de
            <br />
            infraestructura de alto nivel
          </h2>

          <div className={styles.copy}>
            <p className={styles.paragraph}>
              Gestionamos activos, planificamos con datos y{" "}
              <strong>garantizamos continuidad operativa</strong>, para que la
              infraestructura del país siga rindiendo mucho después de
              construida.
            </p>
            <PrimaryButton href="#servicios" className={styles.cta}>
              ¿Conoce cómo operamos?
            </PrimaryButton>
          </div>
        </div>

        <div className={styles.statsWrap}>
          <StatsGrid />
        </div>
      </Container>
    </section>
  );
}
