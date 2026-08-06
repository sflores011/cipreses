import Image from "next/image";
import Container from "@/components/ui/Container";
import PrimaryButton from "@/components/ui/PrimaryButton";
import Logo from "@/components/ui/Logo";
import { OPERATIONS } from "@/data/operations";
import { MEDIA } from "@/data/media";
import styles from "./OperationsSection.module.scss";

export default function OperationsSection() {
  return (
    <section className={styles.section} id="servicios" aria-label="Servicios">
      <Container className={styles.grid}>
        <div className={styles.photoCard}>
          <Image
            src={MEDIA.home.operationsImage}
            alt="Equipo de Cipreses y Pinos trabajando en conjunto"
            fill
            className={styles.photo}
            sizes="(max-width: 768px) 100vw, 47vw"
          />
          <div className={styles.photoOverlay} aria-hidden="true" />

          <span className={styles.photoLogo} aria-hidden="true">
            <Logo height={34} />
          </span>

          <div className={styles.photoContent}>
            <p className={styles.photoText}>
              Gestionamos activos, planificamos con datos y garantizamos
              continuidad operativa
            </p>
            <PrimaryButton href="#servicios" className={styles.photoCta}>
              Ver todos nuestros servicios
            </PrimaryButton>
          </div>
        </div>

        <div className={styles.content}>
          <h2 className={styles.title}>
            Descubre como operamos
            <br />
            nuestra empresa
          </h2>
          <p className={styles.paragraph}>
            Gestionamos activos, planificamos con datos y{" "}
            <strong>garantizamos continuidad operativa</strong>, para que la
            infraestructura del país siga rindiendo mucho después de
            construida.
          </p>

          <div className={styles.panels}>
            {OPERATIONS.map((panel) => (
              <article
                key={panel.id}
                className={`${styles.panel} ${
                  panel.variant === "highlighted" ? styles.highlighted : ""
                }`}
              >
                <h3 className={styles.panelTitle}>{panel.title}</h3>
                <p className={styles.panelDescription}>{panel.description}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
