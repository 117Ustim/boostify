
import styles from'./blockInfoComp.module.scss'


export default function blockInfoComp ({title,text,img}) {
return (
 <div className={styles.blockInfoComp}>
 <div className={styles.image}>
<img src={img} alt='icon'/>
</div>
<div className={styles.title_block}>
<div className={styles.title_block_title}>
<p>{title}</p>
</div>
<div className={styles.title_block_text}>
<p>{text}</p>
</div>
</div>
</div>
);
}