import { ReactNode, ElementType } from "react";
import styles from "./Container.module.scss";

interface ContainerProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
}

export default function Container({
  children,
  as: Tag = "div",
  className,
}: ContainerProps) {
  return (
    <Tag className={`${styles.container} ${className ?? ""}`}>
      {children}
    </Tag>
  );
}
