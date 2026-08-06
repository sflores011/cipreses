import { StatItemData } from "@/data/stats";
import styles from "./StatItem.module.scss";

export default function StatItem({ value, label }: StatItemData) {
  return (
    <div className={styles.stat}>
      <span className={styles.value}>{value}</span>
      <span className={styles.label}>{label}</span>
    </div>
  );
}
