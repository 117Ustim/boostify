import styles from "./GuidingScalingCompFrame.module.scss";

export default function GuidingScalingCompFrame({ img, title, text }) {
  return (
    <div className={styles.guidingScalingCompFrame}>
      <div className={styles.guidingScalingCompFrame_image}>
        <img src={img} alt="icon" />
      </div>
      <div className={styles.guidingScalingCompFrame_title}>
        <p>{title}</p>
      </div>
      <div className={styles.guidingScalingCompFrame_text}>
        <p>{text}</p>
      </div>
    </div>
  );
}
