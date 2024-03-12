import {numbers} from '../../../../data'
import NumberComp from './numberComp/NumberComp';
import styles from'./numbers.module.scss'


export default function Numbers () {
return (
 <div className={styles.numbers}>
<div className={styles.frame}>
        {numbers.map((way) => (
          <NumberComp key={way.text} {...way} />
        ))}
      </div>
</div>
);
}