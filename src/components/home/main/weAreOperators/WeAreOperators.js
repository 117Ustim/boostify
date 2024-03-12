import styles from "./weAreOperatops.module.scss";
import { imgLamp,button } from "../../../../data";
import Button from '../../button/Button'

export default function WeAreOperators() {
  return (
    <div className={styles.weAreOperatops}>
      <div className={styles.container}>
        <div className={styles.lamp}>
          <img src={imgLamp[0].lamp} alt="lamp" />
        </div>
        <div className={styles.weAreOperatops_block}>
          <div className={styles.weAreOperatops_block_title}>
            <p>We are operators, founders, dreamers and executors –</p>
          </div>
          <div className={styles.weAreOperatops_block_title2}>
            <div className={styles.weAreOperatops_block_title2_p1}>
              <p>fueled by passion</p>
            </div>

            <div className={styles.weAreOperatops_block_title2_p2}>
              <p>and expertise</p>
            </div>
          </div>
          <div className={styles.weAreOperatops_block_text}>
            <p>{imgLamp[1].text}</p>
          </div>
          <div className={styles.weAreOperatops_block_button}>
           <Button text={button[0].text}/>
          </div>
        </div>
      </div>
    </div>
  );
}
