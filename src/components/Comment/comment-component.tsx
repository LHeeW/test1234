import Image from "next/image";
import SampleImage from "@/../public/images/space1.webp";
import styles from "./comment-component.module.css";

export default function CommentComponent() {
  return (
    <>
      <hr className={styles.hr} />
      <div className={styles.container}>
        <Image className={styles.image} src={SampleImage} alt="이미지" />
        <div className={styles.content_container}>
          <div className={styles.title_container}>
            <div className={styles.name_container}>
              <div className={styles.name}>지킬과 하이드</div>
              <div className={styles.time}>1시간 전</div>
            </div>
            <div className={styles.btn_container}>
              <button className={styles.update_btn} type="button">
                수정
              </button>
              <button className={styles.delete_btn} type="button">
                삭제
              </button>
            </div>
          </div>
          <div className={styles.content}>
            오늘 하루 우울했었는데 덕분에 많은 힘 얻고 갑니다. 연금술사 책 다시
            사서 오랜만에 읽어 봐야겠어요!
          </div>
        </div>
      </div>
    </>
  );
}
