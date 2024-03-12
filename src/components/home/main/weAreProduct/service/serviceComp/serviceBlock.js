
import styles from'./serviceBlock.module.scss'


export default function serviceBlock ({title,text,img}) {
return (
 <div className={styles.serviceBlock}>
 <div className={styles.image}>
<img src={img} alt='icon'/>
</div>
 <div className={styles.title_block}>
<div className={styles.title}>
<p>{title}</p>
</div>
<div className={styles.text}>
<p>{text}</p>
</div>
</div>

</div>
);
}