import Link from "next/link";
import PlusIcon from "@/../public/icons/plus_icon.svg";
import CommentComponent from "@/components/Comment/comment-component";
import EmotionList from "@/components/EmotionList/emotioin-list";
import Epigram from "@/components/Epigram/epigram";
import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.container}>
      <div className={styles.epigrams_container}>
        <div className={styles.epigram_today_container}>
          <h3 className={styles.epigram_today_title}>오늘의 에피그램</h3>
          <Epigram />
        </div>

        <div className={styles.emotion_container}>
          <h3 className={styles.emotion_title}>오늘의 감정은 어떤가요?</h3>
          <EmotionList />
        </div>

        <div className={styles.new_feed_epigrams_container}>
          <h3 className={styles.new_feed_epigrams_title}>최신 에피그램</h3>
          <div className={styles.new_feed_epigrams_list_container}>
            <Epigram />
            <Epigram />
            <Epigram />
          </div>
          <div>페이지네이션 버튼</div>
        </div>
      </div>

      <div className={styles.comments_container}>
        <h3 className={styles.comments_title}>최신 댓글</h3>
        <div className={styles.comments_list_container}>
          <CommentComponent />
          <CommentComponent />
          <CommentComponent />
          <CommentComponent />
        </div>
        <div>페이지네이션 버튼</div>
      </div>

      <Link href={"/add"} className={styles.create_epigram_btn}>
        <PlusIcon />
      </Link>
    </div>
  );
}
