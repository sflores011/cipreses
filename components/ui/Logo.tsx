import Image from "next/image";
import {
  SITE_MEDIA,
  LOGO_FULL_ASPECT_RATIO,
  LOGO_MARK_ASPECT_RATIO,
} from "@/data/site-media";
import styles from "./Logo.module.scss";

interface LogoProps {
  height?: number;
  variant?: "mark" | "full";
  inverted?: boolean;
  className?: string;
  priority?: boolean;
}

export default function Logo({
  height = 48,
  variant = "mark",
  inverted = true,
  className,
  priority = false,
}: LogoProps) {
  const isMark = variant === "mark";
  const aspectRatio = isMark ? LOGO_MARK_ASPECT_RATIO : LOGO_FULL_ASPECT_RATIO;

  return (
    <span
      className={`${styles.wrap} ${inverted ? styles.inverted : ""} ${
        className ?? ""
      }`}
      style={{ height, aspectRatio }}
    >
      <Image
        src={SITE_MEDIA.logo}
        alt="Cipreses y Pinos"
        fill
        className={styles.image}
        style={{ objectPosition: isMark ? "top" : "center" }}
        sizes="200px"
        priority={priority}
      />
    </span>
  );
}
