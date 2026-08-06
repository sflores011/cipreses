import { ReactNode } from "react";
import Link from "next/link";
import styles from "./PrimaryButton.module.scss";

interface PrimaryButtonProps {
  href?: string;
  children: ReactNode;
  variant?: "solid" | "inverse";
  icon?: ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function PrimaryButton({
  href,
  children,
  variant = "solid",
  icon,
  className,
  onClick,
}: PrimaryButtonProps) {
  const classes = `${styles.button} ${
    variant === "inverse" ? styles.inverse : ""
  } ${className ?? ""}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
        {icon && <span className={styles.icon}>{icon}</span>}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} onClick={onClick}>
      {children}
      {icon && <span className={styles.icon}>{icon}</span>}
    </button>
  );
}
