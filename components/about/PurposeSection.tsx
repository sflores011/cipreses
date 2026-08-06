import Image from "next/image";
import Container from "@/components/ui/Container";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { MEDIA } from "@/data/media";
import styles from "./PurposeSection.module.scss";

export default function PurposeSection() {
  return (
    <section className={styles.section} aria-label="Nuestro propósito">
      <Container className={styles.grid}>
        <div className={styles.imageWrapper}>
          <Image
            src={MEDIA.about.purposeImage}
            alt="Infraestructura urbana operada por Cipreses y Pinos"
            fill
            sizes="(max-width: 767px) 100vw, 50vw"
            className={styles.image}
          />
        </div>

        <div className={styles.content}>
          <h2 className={styles.title}>Nuestro propósito</h2>
          <p className={styles.paragraph}>
            No existimos para inaugurar.{" "}
            <strong>Existimos para que lo inaugurado siga funcionando.</strong>{" "}
            Esa diferencia es la que separa a un operador de alto nivel de un
            simple servicio de mantenimiento.
          </p>
          <PrimaryButton href="/nosotros" className={styles.cta}>
            Conoce cómo operamos
          </PrimaryButton>
        </div>
      </Container>
    </section>
  );
}
