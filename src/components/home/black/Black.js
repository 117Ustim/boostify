import styles from "./black.module.scss";
import Numbers from "./numbers/Numbers";
import raket from "../../../img/black/rocket_Big.png";
import stars1_1 from "../../../img/black/star_1.1.svg";
import stars1 from "../../../img/black/star_1.svg";
import stars2 from "../../../img/black/stars_2.svg";
import Blog from "./blog/Blog";

export default function Black() {
  return (
    <div className={styles.black}>
      <div className={styles.stars1_1}>
        <img src={stars1_1}alt="star" />
      </div>
      <div className={styles.stars_block}>
        <div className={styles.stars1}>
          <img src={stars1}alt="star" />
        </div>
        <div className={styles.stars2}>
          <img src={stars2}alt="star" />
        </div>
      </div>

      <div className={styles.numbers}>
        <div className={styles.raket}>
          <img src={raket}alt="raket" />
        </div>

        <Numbers />
        <Blog/>
      </div>
    </div>
  );
}
