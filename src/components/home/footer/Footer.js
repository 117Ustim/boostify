import styles from "./footer.module.scss";
import { footer, button } from "../../../data";
import Button from "../button/Button";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.title}>{footer[0].title}</div>
      <div className={styles.input}>
        <input placeholder="Enter your email"></input>
        <div className={styles.button}>
          <div className={styles.icon}>
            <img src={button[2].icon} alt="icon" />
          </div>
          <button>
            <p>{button[2].text}</p>
          </button>
        </div>
      </div>
       <div className={styles.line}>
      
      </div>
      <div className={styles.logo}>
        <img src={footer[0].logo} alt="logo" />
      </div>
      <div className={styles.block_text}>
        <div className={styles.reserved}>{footer[0].text1}</div>
         <div className={styles.block_california}>
        <div className={styles.california}>{footer[0].text2_1}</div>
         <div className={styles.heart}>
         <img src={footer[0].img} alt="heart"/>
        </div>
       
        <div className={styles.california}>{footer[0].text2_2}</div>
        </div>
        
      </div>
    </div>
  );
}
