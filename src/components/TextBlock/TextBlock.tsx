import styles from "./TextBlock.module.css";

export function TextBlock({ className }: { className: string }) {
  return <div className={styles["text-box"] + className}></div>;
}
