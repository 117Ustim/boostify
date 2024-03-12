
import styles from'./weAreProduct.module.scss'
import {weAre,button} from '../../../../data'
import Button from '../../button/Button';
import Service from './service/Service';



export default function WeAreProduct () {
return (
 <div className={styles.weAreProduct}>
     <div className={styles.container}>
     <div className={styles.weAreProduct_block}>
   
    <div className={styles.title}>
<p>{weAre[0].title}</p>
</div>
<div className={`${styles.title2} ${styles.cl}`}>
<p>{weAre[0].title2}</p>
</div>
<div className={styles.text}>
<p>{weAre[0].text}</p>
</div>

<div className={styles.button}>
<Button text={button[0].text}/>
</div>
 

    </div>
    <div className={styles.service}>
 <Service/>
</div>
    </div>
    
   
</div>
);
}