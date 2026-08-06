import { ReactNode } from "react";
import styles from "./SectionHeading.module.scss";

interface SectionHeadingProps {
  children: ReactNode;
  align?: "center" | "left";
  className?: string;
}

export default function SectionHeading({
  children,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <h2
      className={`${styles.heading} ${
        align === "left" ? styles.left : ""
      } ${className ?? ""}`}
    >
      {children}
    </h2>
  );
}
