import Image from "next/image";
import Container from "@/components/ui/Container";
import DecorativeUnderline from "@/components/ui/DecorativeUnderline";
import { MEDIA } from "@/data/media";
import styles from "./AudienceSection.module.scss";

export default function AudienceSection() {
  return (
    <section className={styles.section} aria-label="A quién servimos">
      <Container>
        <div className={styles.card}>
          <Image
            src={MEDIA.about.audienceImage}
            alt="Equipo de desarrolladores y operadores de infraestructura"
            fill
            sizes="(max-width: 767px) 100vw, 1200px"
            className={styles.image}
          />
          <div className={styles.overlay} aria-hidden="true" />

          <div className={styles.content}>
            <div className={styles.left}>
              <span className={styles.eyebrow}>
                <span className={styles.eyebrowLine} aria-hidden="true" />
                A quién servimos
              </span>
              <h2 className={styles.title}>
                Trabajamos con desarrolladores
                <br />
                de{" "}
                <span className={styles.highlight}>
                  infraestructura
                  <DecorativeUnderline className={styles.underline} />
                </span>
              </h2>
            </div>

            <div className={styles.right}>
              <p className={styles.paragraph}>
                Y contratos de asociación privada o público-privada; proyectos
                donde cada decisión de operación tiene impacto directo en el
                retorno de la inversión. Por eso les damos algo más que
                mantenimiento, les damos <strong>visibilidad</strong>.{" "}
                <strong>
                  Reportería clara, indicadores medibles
                </strong>{" "}
                y una operación confiable que protege lo que construyeron,{" "}
                <strong>hoy y en los años que vienen.</strong>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
