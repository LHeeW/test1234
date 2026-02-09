import styles from "./epigram.module.css";

export default function Epigram() {
  return (
    <div className={styles.container}>
      <div className={styles.epigram_container}>
        <h3 className={styles.content}>
          오랫동안 꿈을 그리는 사람은 마침내 그 꿈을 닮아간다.
        </h3>
        <span className={styles.author}>-앙드레 말로-</span>
      </div>
      <div className={styles.tag}>#나아가야할때 #꿈을이루고싶을때</div>
    </div>
  );
}
