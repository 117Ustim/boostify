
import styles from'./service.module.scss'
import ServiceBlock from './serviceComp/serviceBlock'
import {dataFrame1 ,dataFrame2} from '../../../../../data'




export default function Service () {
return (
 <div className={styles.service}>
<div className={styles.frame1}>
          {dataFrame1.map((way) => (
             <ServiceBlock key={way.img} {...way} />
          ))}
        </div>
      
        <div className={styles.frame2}>
          {dataFrame2.map((way) => (
            <ServiceBlock key={way.img} {...way} />
          ))}
        </div>
      </div>
  
 
);
}