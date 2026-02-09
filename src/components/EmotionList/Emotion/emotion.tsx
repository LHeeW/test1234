import styles from "./emotion.module.css";

interface EmotionProps {
  children: React.ReactNode;
  emotion: string;
}

export default function Emotion({ children, emotion }: EmotionProps) {
  return (
    <button className={styles.container} type="button">
      <div className={styles.emotion_icon}>{children}</div>
      <span className={styles.emotion_title}>{emotion}</span>
    </button>
  );
}
