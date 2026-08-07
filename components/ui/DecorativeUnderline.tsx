import styles from "./DecorativeUnderline.module.scss";

interface DecorativeUnderlineProps {
  className?: string;
}

export default function DecorativeUnderline({
  className,
}: DecorativeUnderlineProps) {
  return (
    <img
      src="/trazo.svg"
      alt=""
      aria-hidden="true"
      className={`${styles.underline} ${className ?? ""}`}
    />
  );
}
