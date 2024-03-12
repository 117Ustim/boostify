 import { guidingScaling,button } from "../../../../data";
import styles from "./guidingScaling.module.scss";
import GuidingScalingComp from './guidingScalingComp/GuidingScalingComp'
import Button from '../../button/Button'
export default function GuidingScaling() {



  return (
    <div className={styles.guidingScaling}>
      <div className={styles.title_blue}>
        <p>{guidingScaling[0].title_blue}</p>
      </div>
      <div className={styles.title}>
        <p>{guidingScaling[0].title}</p>
      </div>
      <div className={styles.text}>
        <p>{guidingScaling[0].text}</p>
      </div>
   <GuidingScalingComp/>
    <div className={styles.button}>
   <Button text={button[0].text}/>
   </div>
    </div>
  );
}
