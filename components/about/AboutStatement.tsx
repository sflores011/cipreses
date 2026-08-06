import Container from "@/components/ui/Container";
import DecorativeUnderline from "@/components/ui/DecorativeUnderline";
import styles from "./AboutStatement.module.scss";

export default function AboutStatement() {
  return (
    <section className={styles.section} aria-label="Declaración institucional">
      <Container className={styles.inner}>
        <svg
          className={styles.mark}
          viewBox="0 0 40 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M28 3C18 10 10 20 10 32C10 40 15 46 22 48"
            stroke="#233180"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>

        <h2 className={styles.title}>
          <span className={styles.muted}>
            Somos un operador guatemalteco de infraestructura
          </span>{" "}
          <span className={styles.strong}>
            de alto nivel que pone en movimiento tu
            <span className={styles.highlight}>
              {" "}
              activo.
              <DecorativeUnderline className={styles.underline} />
            </span>
          </span>
        </h2>

        <p className={styles.paragraph}>
          Cipreses y Pinos nació con un propósito claro: garantizar que las
          infraestructuras que trazan un hito en el desarrollo de un país
          funcionen bien, todos los días, durante toda su vida útil.
          Trabajamos donde termina la construcción y empieza lo que realmente
          sostiene un proyecto a largo plazo: operación, mantenimiento y
          tecnología aplicada. Hoy operamos infraestructura crítica para el
          país, con los estándares que exige un activo del que dependen miles
          de personas cada día.
        </p>
      </Container>
    </section>
  );
}
