"use client";

import SearchIcon from "@/../public/icons/search_icon.svg";
import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.container}>
      <div className={styles.search_container}>
        <div className={styles.search_bar_container}>
          <input className={styles.search_bar} type="text" placeholder="검색" />
          <SearchIcon className={styles.search_icon} />
        </div>
        <div className={styles.recent_search_container}>
          <div className={styles.search_title_btn_container}>
            <h3 className={styles.recent_search_title}>최근 검색어</h3>
            <button className={styles.remove_search_btn} type="button">
              모두 지우기
            </button>
          </div>
          <div className={styles.recent_search_text_container}>
            <span className={styles.recent_search_text}>꿈</span>
            <span className={styles.recent_search_text}>#나아가야할때</span>
            <span className={styles.recent_search_text}>기분</span>
            <span className={styles.recent_search_text}>#꿈을이루고싶을때</span>
            <span className={styles.recent_search_text}>슬픔</span>
          </div>
        </div>
      </div>
      <div className={styles.result_container_wrap}>
        <div className={styles.result_container}>
          <div className={styles.content}>
            오랫동안 꿈을 그리는 사람은 마침내 그 꿈을 닮아 간다.
          </div>
          <span className={styles.author}>- 앙드레 말로 -</span>
          <div className={styles.tag}>#동기부여 #우울할때 #나아가야할때</div>
        </div>
        <div className={styles.result_container}>
          <div className={styles.content}>
            오랫동안 꿈을 그리는 사람은 마침내 그 꿈을 닮아 간다.
          </div>
          <span className={styles.author}>- 앙드레 말로 -</span>
          <div className={styles.tag}>#동기부여 #우울할때 #나아가야할때</div>
        </div>
        <div className={styles.result_container}>
          <div className={styles.content}>
            오랫동안 꿈을 그리는 사람은 마침내 그 꿈을 닮아 간다.
          </div>
          <span className={styles.author}>- 앙드레 말로 -</span>
          <div className={styles.tag}>#동기부여 #우울할때 #나아가야할때</div>
        </div>
      </div>
    </div>
  );
}
