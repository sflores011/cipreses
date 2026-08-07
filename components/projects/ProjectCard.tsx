import Image from "next/image";
import PrimaryButton from "@/components/ui/PrimaryButton";
import styles from "./ProjectCard.module.scss";

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  href: string;
}

export default function ProjectCard({
  image,
  title,
  description,
  href,
}: ProjectCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
          className={styles.image}
        />
        <PrimaryButton href={href} className={styles.button}>
          Ver proyecto
        </PrimaryButton>
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </article>
  );
}
