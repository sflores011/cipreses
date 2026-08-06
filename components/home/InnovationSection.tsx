import Image from "next/image";
import Container from "@/components/ui/Container";
import PrimaryButton from "@/components/ui/PrimaryButton";
import DecorativeUnderline from "@/components/ui/DecorativeUnderline";
import { MEDIA } from "@/data/media";
import styles from "./InnovationSection.module.scss";

export default function InnovationSection() {
  return (
    <section
      className={styles.section}
      id="innovacion"
      aria-label="Innovación"
    >
      <Container>
        <div className={styles.card}>
          <Image
            src={MEDIA.home.innovationImage}
            alt="Sistema de pago automático e infraestructura tecnológica"
            fill
            className={styles.image}
            sizes="100vw"
          />
          <div className={styles.overlay} aria-hidden="true" />

          <div className={styles.content}>
            <div className={styles.left}>
              <span className={styles.eyebrow}>Innovación</span>
              <h2 className={styles.title}>
                Aplicamos tecnología a la operación, no como moda sino como{" "}
                <span className={styles.highlight}>
                  eficiencia medible
                  <DecorativeUnderline className={styles.underline} />
                </span>
              </h2>
            </div>

            <div className={styles.right}>
              <p className={styles.paragraph}>
                Sistemas que monitorean, predicen y ajustan cada proceso sin
                importar el tipo de infraestructura detrás. Así convertimos
                datos en decisiones que mejoran la operación a mediano y largo
                plazo. Siempre buscando que la innovación aporte rentabilidad
                a los proyectos y desarrollos.
              </p>
              <PrimaryButton href="#innovacion" className={styles.cta}>
                Conoce nuestra innovación
              </PrimaryButton>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
