import Image from "next/image";
import LinkIcon from "@/../public/icons/external_link_icon.svg";
import KebabIcon from "@/../public/icons/kebab_menu_icon.svg";
import LikeIcon from "@/../public/icons/like_icon.svg";
import SampleImage from "@/../public/images/space1.webp";
import CommentComponent from "@/components/Comment/comment-component";
import styles from "./page.module.css";

interface EpigramsIdProps {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: EpigramsIdProps) {
  const { id } = await params;

  return (
    <div className={styles.container}>
      <div className={styles.epigram_container}>
        <div className={styles.epigram_content_container}>
          <div className={styles.tag_container}>
            <span className={styles.tag}>#꿈을이루고싶을때 #나아가야할때</span>
            <button className={styles.kebab_btn} type="button">
              <KebabIcon className={styles.kebab_icon} />
            </button>
          </div>

          <div className={styles.content}>
            오랫동안 꿈을 그리는 사람은 마침내 그 꿈을 닮아 간다.
          </div>
          <div className={styles.author}>- 앙드레 말로 -</div>
        </div>
        <div className={styles.btn_container}>
          <button className={styles.like_btn} type="button">
            <LikeIcon className={styles.like_icon} />
            {123}
          </button>
          <button className={styles.link_btn} type="button">
            {"왕도로 가는길"}
            <LinkIcon className={styles.link_icon} />
          </button>
        </div>
      </div>
      <div className={styles.comment_container}>
        <div className={styles.comment_wrap}>
          <h3 className={styles.comment_title}>댓글 ({3})</h3>
          <div className={styles.comment_image_input_container}>
            <Image
              className={styles.user_profile_image}
              src={SampleImage}
              alt="이미지"
            />
            <div className={styles.comment_input_container}>
              <textarea
                className={styles.comment_input}
                maxLength={100}
                placeholder="100자 이내로 입력해주세요."
              />
              <div className={styles.private_save_container}>
                <div className={styles.private_btn_container}>
                  <span className={styles.private_text}>공개</span>
                  <label className={styles.switch}>
                    <input type="checkbox" />
                    <span className={styles.slider}></span>
                  </label>
                </div>
                <button className={styles.save_btn} type="button">
                  저장
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.comments_list_container}>
          <CommentComponent />
          <CommentComponent />
          <CommentComponent />
        </div>
      </div>
    </div>
  );
}
