import Image from "next/image";
import Container from "@/components/ui/Container";
import PrimaryButton from "@/components/ui/PrimaryButton";
import DecorativeUnderline from "@/components/ui/DecorativeUnderline";
import { PROJECTS_CONTENT } from "@/data/projects";
import { MEDIA } from "@/data/media";
import styles from "./ProjectsSection.module.scss";

export default function ProjectsSection() {
  const [top1, top2, top3, top4, top5, sideLeft, sideRight] =
    MEDIA.home.projectImages;

  return (
    <section className={styles.section} id="proyectos" aria-label="Proyectos">
      <Container>
        <div className={styles.topRow}>
          {[top1, top2, top3, top4, top5].map((src, index) => (
            <div key={src} className={styles.topImage} data-offset={index % 2}>
              <Image
                src={src}
                alt="Proyecto operado por Cipreses y Pinos"
                fill
                className={styles.image}
                sizes="18vw"
              />
            </div>
          ))}
        </div>

        <div className={styles.middleRow}>
          <div className={styles.sideImage}>
            <Image
              src={sideLeft}
              alt="Estructura de infraestructura operada por Cipreses y Pinos"
              fill
              className={styles.image}
              sizes="(max-width: 768px) 45vw, 18vw"
            />
          </div>

          <div className={styles.centerBlock}>
            <h2 className={styles.title}>
              <span className={styles.titleLine}>
                {PROJECTS_CONTENT.titleLine1}
              </span>
              <span className={styles.titleLineStrong}>
                {PROJECTS_CONTENT.titleLine2}
                <DecorativeUnderline className={styles.underline} />
              </span>
            </h2>

            <p className={styles.paragraph}>{PROJECTS_CONTENT.paragraph}</p>

            <PrimaryButton href="#proyectos">
              {PROJECTS_CONTENT.cta}
            </PrimaryButton>
          </div>

          <div className={styles.sideImage}>
            <Image
              src={sideRight}
              alt="Infraestructura interior operada por Cipreses y Pinos"
              fill
              className={styles.image}
              sizes="(max-width: 768px) 45vw, 18vw"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
