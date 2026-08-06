import styles from "./DecorativeUnderline.module.scss";

interface DecorativeUnderlineProps {
  className?: string;
  color?: string;
}

export default function DecorativeUnderline({
  className,
  color = "#233180",
}: DecorativeUnderlineProps) {
  return (
    <svg
      className={`${styles.underline} ${className ?? ""}`}
      viewBox="0 0 220 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M3 17.5C40 6 90 3 130 8C160 12 190 18 217 10"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}
