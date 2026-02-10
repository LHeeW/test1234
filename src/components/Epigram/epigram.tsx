import styles from "./epigram.module.css";

type Epigram = {
  content?: string;
  author?: string;
  tag?: string;
};

export default function Epigram({
  content = "오랫동안 꿈을 그리는 사람은 마침내 그 꿈을 닮아간다.",
  author = "앙드레 말로",
  tag = "#나아가야할때 #꿈을이루고싶을때",
}: Epigram) {
  return (
    <div className={styles.container}>
      <div className={styles.epigram_container}>
        <h3 className={styles.content}>{content}</h3>
        <span className={styles.author}>-{author}-</span>
      </div>
      <div className={styles.tag}>{tag}</div>
    </div>
  );
}
