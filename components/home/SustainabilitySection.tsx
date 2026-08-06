import Image from "next/image";
import Container from "@/components/ui/Container";
import PrimaryButton from "@/components/ui/PrimaryButton";
import DecorativeUnderline from "@/components/ui/DecorativeUnderline";
import { MEDIA } from "@/data/media";
import styles from "./SustainabilitySection.module.scss";

export default function SustainabilitySection() {
  return (
    <section
      className={styles.section}
      id="impacto"
      aria-label="Impacto y sostenibilidad"
    >
      <Container>
        <div className={styles.card}>
          <Image
            src={MEDIA.home.sustainabilityImage}
            alt="Equipo de Cipreses y Pinos trabajando por el medio ambiente"
            fill
            className={styles.image}
            sizes="100vw"
          />
          <div className={styles.overlay} aria-hidden="true" />

          <div className={styles.content}>
            <div className={styles.left}>
              <span className={styles.eyebrow}>Cuidando el medio ambiente</span>
              <p className={styles.paragraph}>
                Donde se desarrolla cada proyecto, contribuimos a que el
                proyecto siga aportando al crecimiento de las comunidades
                cercanas y mejorando la calidad de vida de las personas que
                dependen de esa infraestructura cada día y de quienes viven a
                su alrededor.
              </p>
              <PrimaryButton href="#impacto" className={styles.cta}>
                Conoce nuestro compromiso
              </PrimaryButton>
            </div>

            <div className={styles.right}>
              <span className={styles.eyebrow}>Impacto y sostenibilidad</span>
              <h2 className={styles.title}>
                Operamos pensando
                <br />
                en el largo{" "}
                <span className={styles.highlight}>
                  plazo
                  <DecorativeUnderline className={styles.underline} />
                </span>
              </h2>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
