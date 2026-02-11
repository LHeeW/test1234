import AddEpigram from "@/components/AddEpigram/add-epigram";
import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>에피그램 만들기</h3>
      <AddEpigram />
    </div>
  );
}
