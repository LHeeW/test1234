"use client";

import styles from "./add-epigram.module.css";

const options = [
  { id: "custom", label: "직접 입력" },
  { id: "unknown", label: "알 수 없음" },
  { id: "self", label: "본인" },
];

export default function AddEpigram() {
  return (
    <form className={styles.container} noValidate>
      <div className={styles.content_container}>
        <label className={styles.content_label} htmlFor="content">
          내용 <span className={styles.content_label_star}>*</span>
        </label>
        <textarea
          className={styles.content}
          name="content"
          id="content"
          maxLength={500}
          placeholder="500자 이내로 입력해주세요."
        />
      </div>
      <div className={styles.author_container}>
        <label className={styles.author_label} htmlFor="author">
          저자 <span className={styles.author_label_star}>*</span>
        </label>
        <div className={styles.radio_btn_list_container}>
          {options.map((option) => (
            <div className={styles.radio_btn_container} key={`${option.id}`}>
              {/** input에 checked,onchange속성 확인하기 */}
              <input
                className={styles.radio_btn_input}
                type="radio"
                name={"authorType"}
                id={option.id}
              />
              <label className={styles.radio_btn_label} htmlFor={option.id}>
                {option.label}
              </label>
            </div>
          ))}
        </div>
        <input
          className={styles.author_input}
          type="text"
          id="author"
          name="author"
          placeholder="저자 이름 입력"
        />
      </div>
      <div className={styles.reference_container}>
        <label className={styles.reference_label} htmlFor="referenceTitle">
          출처
        </label>
        <input
          className={styles.reference_title_input}
          type="text"
          name="referenceTitle"
          id="referenceTitle"
          placeholder="출처 제목 입력"
        />
        <input
          className={styles.reference_url_input}
          type="text"
          name="referenceUrl"
          id="referenceUrl"
          placeholder="URL (ex. https://www.website.com)"
        />
      </div>
      <div className={styles.tag_container}>
        <label className={styles.tag_label} htmlFor="tag">
          태그
        </label>
        <input
          className={styles.tag_input}
          type="text"
          id="tag"
          name="tag"
          placeholder="입력하여 태그 작성(최대 10자)"
        />
      </div>
      <button className={styles.submit_btn} type="submit">
        작성 완료
      </button>
    </form>
  );
}
