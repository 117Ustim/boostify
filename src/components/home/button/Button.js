
import styles from'./butoon.module.scss'
import {button} from '../../../data'


export default function Button ({text}) {
return (
 <div className={styles.button}>
     <div className={styles.icon}>
    <img src={button[0].icon} alt='icon'/>
    </div>
<button><p>{text}</p></button>
</div>
);
}