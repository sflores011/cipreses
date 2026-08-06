import Image from "next/image";
import Container from "@/components/ui/Container";
import DecorativeUnderline from "@/components/ui/DecorativeUnderline";
import { MEDIA } from "@/data/media";
import styles from "./AboutHero.module.scss";

export default function AboutHero() {
  return (
    <section className={styles.hero} aria-label="Nosotros">
      <Image
        src={MEDIA.about.heroImage}
        alt="Equipo operando infraestructura vial"
        fill
        priority
        sizes="100vw"
        className={styles.image}
      />
      <div className={styles.overlay} aria-hidden="true" />

      <Container className={styles.content}>
        <span className={styles.eyebrow}>Nosotros</span>
        <h1 className={styles.title}>
          Nosotros somos la razón
          <br />
          por la que tu infraestructura
          <br />
          <span className={styles.highlight}>
            no se detiene.
            <DecorativeUnderline className={styles.underline} />
          </span>
        </h1>
      </Container>
    </section>
  );
}
