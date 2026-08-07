import Image from "next/image";
import Container from "@/components/ui/Container";
import DecorativeUnderline from "@/components/ui/DecorativeUnderline";
import { MEDIA } from "@/data/media";
import styles from "./ProjectsHero.module.scss";

export default function ProjectsHero() {
  return (
    <section className={styles.hero} aria-label="Proyectos">
      <Image
        src={MEDIA.projects.heroImage}
        alt="Infraestructura urbana operada por Cipreses y Pinos"
        fill
        priority
        sizes="100vw"
        className={styles.image}
      />
      <div className={styles.overlay} aria-hidden="true" />
      <div className={styles.topFade} aria-hidden="true" />

      <Container className={styles.content}>
        <span className={styles.eyebrow}>Proyectos</span>
        <h1 className={styles.title}>
          Los proyectos que
          <br />
          operamos, todos los{" "}
          <span className={styles.highlight}>
            días.
            <DecorativeUnderline className={styles.underline} />
          </span>
        </h1>
        <p className={styles.paragraph}>
          Operamos infraestructura vial crítica para el país. Esto es lo que
          hacemos funcionar.
        </p>
      </Container>
    </section>
  );
}
