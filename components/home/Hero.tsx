import Container from "@/components/ui/Container";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { MEDIA } from "@/data/media";
import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <section className={styles.hero} aria-label="Presentación">
      <video
        className={styles.video}
        src={MEDIA.home.heroVideo}
        autoPlay
        muted
        loop
        playsInline
      />
      <div className={styles.overlay} aria-hidden="true" />
      <div className={styles.fade} aria-hidden="true" />

      <Container className={styles.content}>
        <h1 className={styles.title}>Tu operación en movimiento</h1>
        <p className={styles.subtitle}>
          Somos el operador que gestiona, mantiene y protege infraestructuras
          de alto nivel, para que lo que construiste siga funcionando hoy,
          mañana y en los años que vienen.
        </p>
        <PrimaryButton href="/nosotros" className={styles.cta}>
          Conoce cómo operamos
        </PrimaryButton>
      </Container>
    </section>
  );
}
