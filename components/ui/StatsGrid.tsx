import StatItem from "@/components/ui/StatItem";
import { STATS } from "@/data/stats";
import styles from "./StatsGrid.module.scss";

interface StatsGridProps {
  className?: string;
}

export default function StatsGrid({ className }: StatsGridProps) {
  return (
    <div className={`${styles.grid} ${className ?? ""}`}>
      {STATS.map((stat) => (
        <StatItem key={stat.label} {...stat} />
      ))}
    </div>
  );
}
